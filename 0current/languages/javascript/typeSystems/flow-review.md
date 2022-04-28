# FLOW references

- easy to forget reference
- TODO: move this to repo/theBookOfNoah

- links
  - [annotate exports codemod](https://flow.org/en/docs/cli/annotate-exports/)]
  - [all cli cmds](https://flow.org/en/docs/cli/)

```js
  // annotate exports of all files under src
    mv .flowconfig .flowconfig.old
    pnpm exec flow init
    pnpm exec flow codemod annotate-exports --write --repeat --log-level info ./src 2> out.log
    pnpm repo:cp:configproto
      // available codemods
        codemod annotate-empty-object-experimental --write --repeat --log-level info ./src 2> out.log
          Annotates empty objects.
        codemod annotate-escaped-generics --write --repeat --log-level info ./src 2> out.log
          Annotates parts of input that receive out-of-scope generics
                                            as inferred types.
        codemod annotate-exports --write --repeat --log-level info ./src 2> out.log
          Annotates parts of input that are visible from the exports as
                                            required by Flow types-first mode.
        codemod annotate-lti-experimental --write --repeat --log-level info ./src 2> out.log
          Annotates function definitions required for Flow's local type
                                            interence.
        codemod key-mirror --write --repeat --log-level info ./src 2> out.log
          Replaces instances of the type $ObjMapi<T, <K>(K) => K> with
                                            $KeyMirror<T>
        codemod replace-existentials --write --repeat --log-level info ./src 2> out.log
          Replace existential types with inferred types.

  // get type suggestions for a file
  // this is fkn super useful
    pnpm exec flow suggest ./webpack.server.mjs

  // ignore the next line with any of these
  // $FlowFixMe, $FlowIssue, $FlowExpectedError, or $FlowIgnore

  // z === falsy|undefined|the type
  const z: ?{foo: number} = {foo: 5};
```
