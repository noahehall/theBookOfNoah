```clojure
(ns calculate-average)

;Write a function that returns the average of a set of numbers.
;Be sure to return longs. We don't want to return Clojure Ratios!
(defn find-average
  [numbers]
    (def total (count numbers))
    (def sum (apply + numbers))
    (double( / sum total))
)
```

```clojure
  ; capital first letter of each word in sentence

  (ns jaden-case)
  (require 'clojure.string)
  (defn jaden-case [s]
    (->>
      (clojure.string/split (str s) #"\s")
      (map clojure.string/capitalize)
      (clojure.string/join " ")
    )
  )

  ; better version
  (defn jaden-case [s]
    (clojure.string/replace s #"(?:^|\s)\w" #(.toUpperCase %)))
```

```clojure
  ; count number of vowels in a string
  (ns vowel-indices)

  (def vowels #{\a \A \e \E \i \I \o \O \u \U \y \Y})

  (defn vowel-indices
    [word]
    (keep-indexed #(when (vowels %2) (inc %1)) word))

  ; another version
    (defn vowel-indices [word]
      (keep-indexed (partial #(and (%1 %3) (inc %2)) (set "aeiouyAEIOUY")) word))

  ; another version
  (ns vowel-indices
    (require [clojure.string :as s]))

  (defn vowel-indices [word]
    (let [vowels "AEIOUYaeiouy"
          idx-word (zipmap (iterate inc 1) word)]
      (sort (reduce
            (fn [acc val] (conj acc (key val)))
            []
            (filter #(s/includes? vowels (str (val %))) idx-word)))))
```
