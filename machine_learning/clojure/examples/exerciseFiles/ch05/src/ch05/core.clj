(ns ch05.core
  (:gen-class))

(def bigger-numbers (map inc (range)))

(defn lazy-loopy [x]
  (when (pos? x)
    (lazy-seq
      (println "Adding" x "to the seq")
      (cons x (lazy-loopy (dec x))))))
(def numbers (lazy-loopy 5))


(map #(do (println "generating answer #" %) %)
     (range 10))
(pmap #(do (println "generating answer #" %) %)
     (range 10))


(def lines
  (line-seq (clojure.java.io/reader "project.clj")))

(def line-counts (map count lines))

(def pos-line-counts (filter pos? line-counts))

(def total-characters (reduce + pos-line-counts))

(double (/ total-characters (count lines)))


(defn sequence-binding-example
  [[a b c]]
  (println "a is" a)
  (println "b is" b)
  (println "c is" c))

(defn map-binding-example
  [{:keys [a b c]}]
  (println "a is" a)
  (println "b is" b)
  (println "c is" c))


(macroexpand-1
  '(-> (a 1)
       (b 2)
       (c 3)
       (d 4)))








(defn output [filename lines]
  (let [my-file (clojure.java.io/writer filename)]
    (for [line lines]
      (.write my-file line))
    (.close my-file)))

(def data ["line1" "line2" "line3"])








(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
