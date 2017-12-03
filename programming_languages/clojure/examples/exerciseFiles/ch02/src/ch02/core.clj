(ns ch02.core)


(def a 2)
(def b (+ 40 a))

(declare get-y)
(defn get-x []
  (+ (get-y) 4))
(defn get-y []
  38)

(defn fire-the-MISSILES!!! [are-you-sure?]
  (if are-you-sure?
    (println "WWooooosh!")
    (println "zzzzzzzzz")))
#_(fire-the-MISSILES!!! true)



(def ^{:true? true} real-identity
  {:name "Arthur"})
(def ^{:true? false} secret-identity
  {:name "ewlkjan"})



(defn make-a-fn-that-knows-the-secret
  [password]
  (let [the-secret password]
    (fn [password]
      (if (= password the-secret)
        :ok
        :fail!))))
(def check-password
  (make-a-fn-that-knows-the-secret "cats"))

(def functions-to-run
  [inc dec dec #(* % 2) println])
#_(reduce #(%2 %1)
        42
        functions-to-run)

(defn basic-function
  "I'm a doc string"
  [x]
  (println x))

(defn i-have-two-arities
  ([x]
   (println x))
  ([x y]
   (println (+ x y))))

(defn i-like-everything!
  [& argument-list]
  (println argument-list))

(when true (println "hello"))