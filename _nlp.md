# need to research
  - statistical inference
  - stochastic grammar
  - parse tree

# TERMINOLOGY
  - corpus: plural corpora; is a set of documents possibly with human or computer annotations
  - erroneous input: e.g. misspeled words or words accidently ommitted
  - unfamiliar input: e.g. containing words or structures that have not been seen before
  - morphemes
  - morphology
  - inflectional morphology
  - part of speech




# basics
  - nlp: field of computer science, artificial intelligence and computational linguistics concerned with the itneractions between computers and human natural languages
    1. concerned with programming computers to fruitfully process large natural language corpora




# statistical natural language processing
  - relies heavily on machine learning (vs direct coding of rules)
    - the machine-learning paradigm calls for using statistical inference toa utomatically learn rules through the analysis of large corpora of typical real-world examples
    - machine learning algorithms  take as input a large set of *Features* that are generated from input data
      1. decision trees: (and other such algorithms) make hard *if-then* rules similar to systems of hand-written rules
      2. statistical models: make soft, probabilistic decisions based on attaching real-valued weights to each input feature
        - can express the relative certainty of many different possible answers rather than only one, producing more reliable results when a such model is included as a component of a larger system
        - automatically focus on the most common cases
        - automatic learning procedures can make use of statistical inference algorithms to prdouce models that are robust to unfamiliar input
        - can be made more accurate simply by supplying more input data

# major tasks
## syntax related
  - lemmatization
  - morphological segmentation: separate words into individual morphemes and identify the class of the morphemes
  - part of speech tagging: given a sentence, determine the part of speech for each word
    1. many words can serve as multiple parts of speech, e.g. *book* can be a noun *the book on the table*, or a verb *to book a flight*
  - parsing: determine the parse tree (grammatical analysis) of a given sentence
  - sentence breaking
  - stemming
  - word segmentation
## semantics related
  - lexical semantics
  - machine translation
  - named entity recognition
  - natural language generation
  - natural language understanding
  - optical character recognition
  - question answering
  - recognizing textual entailment
  - relationship extraction
  - sentiment analysis
  - topic segmentation
  - topic recognition
  - word sense disambiguation
## discourse related
## speech related
