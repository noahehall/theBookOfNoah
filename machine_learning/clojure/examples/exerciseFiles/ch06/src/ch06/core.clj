(ns ch06.core
  (:gen-class))

(def a (ref 1))
(def b (ref 0))

#_(dosync (commute a dec)
        (commute b inc))

(defn swap []
  (dosync
   (if (pos? @a)
     (do (alter a dec)
         (alter b inc))
     (do (alter a inc)
         (alter b dec)))
   {:a @a :b @b}))

(defn look []
  {:a @a :b @b})

(defn swapify []
  (future
    (println "starting")
    (dotimes [_ (rand-int 500)]
      (Thread/sleep (rand-int 50))
      (swap))
    (println "done")))







(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
