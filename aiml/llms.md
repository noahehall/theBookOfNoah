# Large Language Models

- by Erick Galinkin on udacity
- bookmark Language Modeling Tasks

## links

- [male centric biases in data](https://link.springer.com/article/10.1007/s00146-022-01443-w)
- [fair ML book](https://fairmlbook.org/)
- [huggingface: bunch of AI resources, datasets, etc](https://huggingface.co/)
- [SQuAD: stanford question answer dataset](https://rajpurkar.github.io/SQuAD-explorer/)
- [hotpotqa qa dataset](https://hotpotqa.github.io/)
- [subjqa qa dataset](https://github.com/megagonlabs/SubjQA)

## tools

- scraping
  - generally should use something like selenium to getaround anti-scraping mechanisms on webpages
  - also check [scrapy](https://docs.scrapy.org/en/latest/intro/tutorial.html) for building web spiders for large scale scraping
  - [ToScrape books](http://books.toscrape.com/) explicitly allows scraping

## terms

- data toxicity: relying on the raw X-rated nature of humanity
- BERT: bidirectional encoder representations
- GPT: generative pre-trained transformer
- foundation models: e.g. BERT/GPT; form a foundation for models that are fine-tuned on downstream tasks

## basics

### Transformer Architecture

- developed in 2017 by Vasani @ Google Brain
- the attention mechanism was the biggest novelty over previous foundatinal models like BERT and GPT

### model types

#### Autoregressive (decoder only)

- the GPT family of models
- use cases
  - instruction based text generation
  - summarization of long passages
  - abstractive question answering

#### Autoenconding (encoder only)

- the BERT family of models
- use cases
  - classification
  - extractive question answering
  - clustering

#### Sequence to Sequence (encoder - decoder)

- the T5 family of models
- use cases
  - translation

#### tf-idf

- use cases
  - statistical tasks

## Data sets

- you train a LLM on a dataset concerning a specific set of tasks, like the best way to cook pancakes

### Domains: Open vs Narrow

- zero shot question answering: questions that the model was not trained specifically to answer
  - i.e. the model had 0 shots to learn the relevant information in its training
- emergent properties: concepts that lend themselves well to the models dataset, even though not explicitly existing within.
- open domains: general types of questions that can be sufficiently answered/emerge from a model, but not explicitly part of. e.g. common knowledge queries across wikipedia
- narrow domain: questions that require specialized knowledge, e.g. law/cybersecurity
  - these questions require training on specialized data

### pre trained models

### Custom Models

- general workflow
  - collect data
  - clean data
  - modelling tasks
  - build a dataset that can be used for training/fine-tuning a model

#### collecting data

- its all about identifying problem, finding and collecting relavent data sources, and formatting it to be uniform and structured
- identifying your problem
  - is it suited to machine learning?
- finding and collecting relevant data sources
  - what does the input look like? e.g structured data from some warehouse, or freeform data from a website
    - is it numerical input and output?
    - generaly LLMs deal with non numerical data and focuses on natural language
  - what doe sthe output look like? are we summarizing, answering questions, classifying the input data?
  - how do the data sources evolve over time? are they internal/external sources relative to the people using model?
    - external data sources (e.g. from the internet) are harder to manage
      - be careful of the legal/ethical considerations of scraping websites
        - licensing for using protected content
        - infrastructure costs passed on to the host of the content

#### cleaning data

- if you're working with structured, tabular data
  - focus on filling in missing fields and resolving inconsistent fields
- if you're working with unstructured, free flowing text
  - put it into a uniform and structured format
  - ensure the text is
    - syntactically and semantically appropriate for the task
      - syntax: the grammar & structure is correct
      - semantics: the text is useful and provides meaning, i.e. not a bunch of gibberish
    - relevant to the task: the text upon review by experts in the field, is appropriate
      - you must trust the source of the data, as this is almost impossible to automate
  - then follow steps in previous section

#### modelling tasks

- text generation: a question/instruction is provided to a model from which it generates an output
  - hello -> hi! how are you?
  - masked language modeling: tokens are replaced by a masked token, and the model has to predict the most likely token that fills in the blank.
  - causal language modeling: a sequence is started, and the model has to predict the most likely tokens that follow
    - Abstractive summarization: generate a summary that captures the main points/ideas of a source text but uses new expressions, phrases or sentences
    - question answering: its all about questions, answers and context
      - extractive: give a question and a context, and the goal is to identify and extract the span of text from the context that directly answers the questions
        - whenever precision matters, at it returns the indexes of the extracted text input
      - abstractive: does not exactly use the exact words from the context
- classification: applying labels to input text
- translation: from one language to another
- clustering: uses the encoder side of of a transformer to create an embedding within the input to look up similar spans of text; relies on vector databases for semantic text search problems

#### building the dataset
