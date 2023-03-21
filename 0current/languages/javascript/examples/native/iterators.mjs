/*

  // In for...of loops, abrupt iteration termination can be caused by break, continue, throw or return. In these cases, the iterator is closed.
    function* foo(){
      yield 1;
      yield 2;
      yield 3;
    };

    for (let o of foo()) {
      console.log(o);
      break; // closes iterator, triggers return
    }
*/
