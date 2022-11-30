# full text db search

## POSTGRES

- [intro](https://www.postgresql.org/docs/current/textsearch-intro.html)
- [pg_trgm extension](https://www.postgresql.org/docs/current/pgtrgm.html)
- [text search types](https://www.postgresql.org/docs/current/datatype-textsearch.html)
- [fns and operators](https://www.postgresql.org/docs/current/functions-textsearch.html)
- [basic text matching](https://www.postgresql.org/docs/current/textsearch-intro.html#TEXTSEARCH-MATCHING)
- [tsquery](https://www.postgresql.org/docs/current/datatype-textsearch.html#DATATYPE-TSQUERY)
- [default_text_search_config](https://www.postgresql.org/docs/current/runtime-config-client.html#GUC-DEFAULT-TEXT-SEARCH-CONFIG)
- [tables and indexes](https://www.postgresql.org/docs/current/textsearch-tables.html)
- [text search indexes](https://www.postgresql.org/docs/current/textsearch-indexes.html)
- [indexes on expressions](https://www.postgresql.org/docs/current/indexes-expressional.html)
- [preferred index types for full text search](https://www.postgresql.org/docs/current/textsearch-indexes.html)
- [GIN index types](https://www.postgresql.org/docs/current/gin.html)
- [GIST index types](https://www.postgresql.org/docs/current/gist.html)
- [resource consumption](https://www.postgresql.org/docs/current/runtime-config-resource.html#GUC-MAINTENANCE-WORK-MEM)
- [foreign data](https://www.postgresql.org/docs/current/ddl-foreign-data.html)
- [controlling text search](https://www.postgresql.org/docs/current/textsearch-controls.html)
  - likely you will need to reread this every
- [optimizing order by in a full text search query](https://dba.stackexchange.com/questions/16437/optimizing-order-by-in-a-full-text-search-query)
  - but ALSO read the last statement where she talks about using tgram (already setup) for whole words searches
- [another quickie for trgm](https://stackoverflow.com/questions/2513501/postgresql-full-text-search-how-to-search-partial-words)
- [fast search with trigram text indexes](https://about.gitlab.com/blog/2016/03/18/fast-search-using-postgresql-trigram-indexes/)
- [full text search in postgres](https://www.lateral.io/resources-blog/full-text-search-in-milliseconds-with-postgresql)

### gotchas

- use coalesc to prevent a single NULL attribute in a combination forcing the entire document to be nullified

### configuration

#### dictionary (text search) configuration

- when executing queries: set which dictionary to use
  - cluster wide: select a configuration and set `default_text_search_config` in the postgresql.conf t
  - database within a cluster: use ` ALTER DATABASE ... SET`
  - set `default__text_search_config` for a user sesion
  - per function: use `regconfig` optoin to dynamically set the text search config when executing a fn
- db object configuration
  - There are examples of add-on parsers and templates in the contrib/ area of the PostgreSQL distribution.
  - setup dictionary: convert tokens to normalized form and reject stop words. specifies a template and set of parameters for templates
  - setup text search templates: provide fns underlying the dictionary
  - setup parsing: break documents into tokens and classify each token (for example, as words or numbers). (e.g. ignore more than just white space)
  - setup text search configurations: select a parser and set of dictionaries to use to normalize the tokens produced by the parser
  - setup GIN indexes: @see the indexes section below
  - implement effective text searches: @see controlling text search section below

### terms

- full text indexing: a step beyond tokenization, enables preprocessing of documents to support ranking/ordering, similarity. linguistic support, and indexing
- dictionaries: allow management of token normalization; never index words, synonyms, mappings, variations,
- normalization: fk fck fkc u uuu and you
- document: unit of searching; in postgres === usually a single/concatenation of text column(s)
- lexems: a token, i.e. a document broken up in tokens, where each is called a lexems
- stop words: shit you want to ignore, e.g. `and, but, the, etc`; stop words arent indexed (and thus not matched)

### support

- lspell
- pgtyrgm
- snowball stemmer rules

### data types

#### tsvector

- tsvector: for storing preprocessed documents; each document MUST be reduced to the preprocessed tsvector format
- searching & ranking are performed ONLY on the tsvector column, not on the source columns; the source columns can then be retrieved after the search completes
- the elements of a tsvector are lexems, which MUST be normalized (see conversion fns)

### functions

#### tsquery

- tsquery: how you query tsvector documents
- contains search terms (MUST be already normalized lexems)
- combine multiple terms using

#### parsing fns

- parse text into tsquery processed lexems for quering tsvector documents

##### to_tsquery

##### plainto_tsquery

##### phraseto_tsquery

- constructs a tsquery that can match multi-word phrase when some words are stop words

```sql
-- returns  'cat' <-> 'ate' <-> 'rat'
SELECT phraseto_tsquery('cats ate rats');
-- returns  'cat' <-> 'ate' <2> 'rat'
SELECT phraseto_tsquery('the cats ate the rats');
```

##### to_tsvector

- parse and normalize a document string; converts a document into a tsvector data type
- parses a textual document in tokens, reduces the tokens to lexems, and returns a tsvector which lists the lexemes together with their positions in the document

```sql
SELECT to_tsvector('fat cats ate fat rats') @@ to_tsquery('fat & rat');


```

### operators

- precedence in inrcreasing order: | & <-> ! and use () for nesting
- MATCH: @@
- AND: `x & y` both arguments must appear somewhere in the document
- OR: `x | y` at least one argument must appear
- NOT: `!x` argument must not appear in document
- FOLLOWED BY: `<->` matches only if its arguments have matches that are adjacent and in in th given order: fyi `<->` is the same as `<1>`
- <0>: both patterns must match the same word
- !x <-> y: matches Y if its not immediatelly followed by X
- (x & y) <-> z: x and y to match at the same place, immediately before z

```sql
-- fat && (!rat)
fat & ! rat

-- matches: fatal immediately followed by order
SELECT to_tsvector('fatal error') @@ to_tsquery('fatal <-> error');
-- doesnt match, order isnt adjacent to fatal
SELECT to_tsvector('error is not fatal') @@ to_tsquery('fatal <-> error');
-- does match, because fatal is 2 lexems after error (you have to do N-1)
SELECT to_tsvector('error is not fatal') @@ to_tsquery('error <3> fatal');
```

#### @@ match operator

- returns true if a tsvector (document) matches a tsquery

```sql
-------- basic matching
-- select then @@ match: tsvector @@ tsquery
SELECT 'a fat cat sat on a mat and ate a fat rat'::tsvector @@ 'cat & rat'::tsquery;

-- @@ match then select: tsquery  @@ tsvector
SELECT 'fat & cow'::tsquery @@ 'a fat cat sat on a mat and ate a fat rat'::tsvector;

-- to_tsvector(x) @@ y
text @@ tsquery

-- to_tsvector(x) @@ plainto_tsquery(y)
text @@ text
```

### controlling text search

- you should reread the controlling text search link (see above) as it contains really good examples

#### indexes

- you must specify the text configuration when using expression indexes for full text search,
  - full text search indexes CANNOT be affected by changes to default_text_search_config
  - not required if using a generated column that stores the tsvector document

##### GIN indexes

- GIN: generalized inverted index-based index
  - store only tokens of tsvector values, and not their weight labels
- preferred over GIST indexes
- are inverted indexes: contain an index entry for each token (lexeme) wiht a compressed list of matching locations
  - multi-word searches find the first match, then use the index to remove rows that are lacking additional words
- performance
  - increase the `maintenance_work_mem` postgres config param to increase index build time
  - partitioning of big collections enable very fast searches with online update
    - partitioning should be done at db level using either:
      - table inheritance,
      - or by distributing documents over servers and collecting external search results via Foreign Data access

```sql
-- creates a GIN index using column (which MUST be of type tsvector)
-- see examples for a more
CREATE INDEX name ON table USING GIN (column);


```

##### GIST indexes

- dont use, @see GIN index section elseware
- GIST: Generalized Search Tree-based index
- are lossy indexes, i.e. the index might produce false matches,
  - it is necessary toto check the source table row to eleminate false matches
- benefits over GIN indexes
  - can be covering: i.e. using the INCLUDE clause, and columns can have data types without any GIST operator
- why not to use
  - lossy indexes cause performance degredation due to unnecessary fetches of table records

```sql
-- creates a GIST index, column must be either tsvector|tsquery
-- optinal integer paramater siglen determines signture length in bytes
CREATE INDEX name ON table USING GIST (column [ { DEFAULT | tsvector_ops } (siglen = number) ] )
```

##### index examples

```sql
-- notice the requirement of setting the configuration specifically, e.g. to english
-- and thus only query references that use the 2 argument `tsvector`syntax
-- will use the index
CREATE INDEX pgweb_idx ON pgweb USING GIN (to_tsvector('english', body));
-- uses the above index
WHERE to_tsvector('english', body) @@ 'a & b'
-- does not use the aforementioned index
WHERE to_tsvector(body) @@ 'a & b'

-- an expression index that retrieves the configuration name from column pgweb.config_name
-- enables mixed configurations in the same index
-- e.g. if a document uses several languages
CREATE INDEX pgweb_idx ON pgweb USING GIN (to_tsvector(config_name, body));


-- an expression index that combines two columns
CREATE INDEX pgweb_idx ON pgweb USING GIN (to_tsvector('english', title || ' ' || body));
```

#### stored procedures

- useful when you have a separate tsvector column to hold the processed output of `to_tsvectror`
  - the stored proceedure generates the tsvector column from the source column automatically
- benefits over expression indexdes
  - not required to use the 2 version syntax of tsvector
  - queries can utilize the default_text_search_config
  - queries will be faster, since its not necessary to redo the `to_tsvector` calls to verify index matches

`````sql
-- first create the tsvector column
-- then create a GIN index to speed up queries
ALTER TABLE pgweb ADD COLUMN textsearchable_index_col tsvector
  GENERATED ALWAYS AS (to_tsvector('english', coalesce(title, '') || ' ' || coalesce(body, ''))) STORED;
CREATE INDEX textsearch_idx ON pgweb USING GIN (textsearchable_index_col);

-- example query using the above tsvector column
SELECT title FROM pgweb WHERE textsearchable_index_col @@ to_tsquery('create & table')
ORDER BY last_mod_date DESC LIMIT 10;
---

### commands

#### \dF

- see all text search configurations

### more examples

- you generally want to always coaslesce NULL values unless you dont

````sql
-- get the title of each record that contains the word friend/friendly/friends/etc in the body field
SELECT title FROM pgweb WHERE to_tsvector('english', body) @@ to_tsquery('english', 'friend');
-- select the 10 most recent documents that contain create and table in the title or body
SELECT title FROM pgweb WHERE to_tsvector(title || ' ' || body) @@ to_tsquery('create & table')
ORDER BY last_mod_date DESC LIMIT 10;
`````
