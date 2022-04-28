# jsdocs

- takes code with `/** */`comments and produces HTML documentation 'for' it
- meta data 'for' the entire file

  ```js
  /**
   * @fileOverview HTML widget for displaying documentation about a reusable react component.
   * @author <a href="mailto:noah.hall@dictionary.com">Noah Hall</a>
   * @version 0.3.0
   */
  ```

  - giving an example of use

    ```

    ```

  /\*\*

  - @example
  - var str = "abc";
  - console.log(repeat(str, 3)); // abcabcabc
    \*/

    ```

    ```

  - @see: points to a related resource.

    ```

    /**
      * @see MyClass#myInstanceMethod
       * @see The <a href="http://example.com">Example Project</a>.
      */

    ```

  - {@link ...}: works like @see, but can be used inside other tags.
  - @requires resourceDescription: a resource that the documented entity needs. The resource description is either a name path or a natural language description.
  - documenting functions and methods: For functions and methods. describes the parameter whose name is paramName. Type and description are optional.

    ```

    @param {paramType} paramName description:
     @param str
       @param str The string to repeat.
       @param {string} str
       @param {string} str The string to repeat.

    ```

  - specify a param is optional and not require
    `@param {number} [times] The number of times is optional`
    - specify a param is optional and display its default value
      `@param {number} [times=1] The number of times is optional.`
    - specify the return of a function
      `@returns {returnType} describes the return value of the function or method. Either type or description can be omitted.`
    - specify if this function throws any errors
      `@throws {exceptionType} description: describes an exception that might be thrown during the execution of the function or method. Either type or description can be omitted.`
