# TLDR

- sync settings across vscode & codium
  - [settings sync gist](https://gist.github.com/noahehall/33f60c724f51bde9afa2c2a9e540d094)

# links

- [vscodium > vscode](https://github.com/VSCodium/vscodium/releases)
- [disable unused builting extensions](https://stackoverflow.com/questions/48852007/type-aliases-can-only-be-used-in-a-ts-file/51034421)

- tutorials
  - [7 recommended settings](https://betterprogramming.pub/my-7-recommended-settings-for-visual-studio-code-96fbd9f5e21a)
- [useful extensions](https://betterprogramming.pub/how-to-set-up-vs-code-like-a-pro-in-just-5-minutes-65aaa5788c0d)
- [more useful settings](https://dev.to/thegeoffstevens/vs-code-settings-you-should-customize-5e75)
- [vscode can do that](https://vscodecandothat.com/)
- [more useful extensions](https://dev.to/thegeoffstevens/vs-code-extensions-you-may-not-have-heard-of-before--5ed3)
- [more settings](https://dev.to/bhagatparwinder/top-10-vs-code-settings-1bkm)
- [more extensions](https://dev.to/bhagatparwinder/my-top-10-vs-code-extensions-1ikg)
- [vscode tips and tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)
- [optimize vs code and choosing extensions](https://www.freecodecamp.org/news/optimize-vscode-performance-best-extensions/)

```jsonc
//default settings
{
  "editor.acceptSuggestionOnEnter": "smart",
  "editor.autoIndent": "advanced",
  "editor.cursorBlinking": "phase",
  "editor.cursorStyle": "line",
  "editor.fontSize": 18,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.inlineSuggest.enabled": true,
  "editor.insertSpaces": true,
  "editor.lineHeight": 28,
  "editor.linkedEditing": true,
  "editor.minimap.enabled": false,
  "editor.rulers": [40, 80, 120],
  "editor.tabSize": 2,
  "editor.wordWrap": "wordWrapColumn",
  "editor.wordWrapColumn": 80,
  "editor.wrappingIndent": "same",
  "editor.fontFamily": "Ubuntu Mono,Input, Consolas, monospace",
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },

  "eslint.alwaysShowStatus": true,

  "explorer.sortOrder": "default",

  "files.autosave": false,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  "files.associations": {
    ".json": "json",
    ".jsonc": "jsonc",
  },

  "workbench.editor.closeEmptyGroups":true,
  "workbench.editor.enablePreview": true,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.editor.showTabs": true,
  "workbench.editor.tabCloseButton": "right",
  "workbench.editor.tabSizing": "shrink",
  "workbench.panel.defaultLocation": "right",
  "workbench.settings.editor": "json",
  "workbench.sideBar.location": "right",

  "outline.icons":true,
  "outline.problems.enabled":true,
  "outline.problems.badges":true,
  "outline.problems.colors":true,

  "terminal.integrated.allowChords": false,
  "terminal.integrated.defaultProfile.linux": "bash",
  "terminal.integrated.fontsize": 18,
  "terminal.integrated.sendKeybindingsToShell": true,
  "terminal.explorerKind": "external",



  "hediet.vscode-drawio.local-storage": "eyIuZHJhd2lvLWNvbmZpZyI6IntcImxhbmd1YWdlXCI6XCJcIixcImN1c3RvbUZvbnRzXCI6W10sXCJsaWJyYXJpZXNcIjpcImdlbmVyYWxcIixcImN1c3RvbUxpYnJhcmllc1wiOltcIkwuc2NyYXRjaHBhZFwiXSxcInBsdWdpbnNcIjpbXSxcInJlY2VudENvbG9yc1wiOltdLFwiZm9ybWF0V2lkdGhcIjpcIjI0MFwiLFwiY3JlYXRlVGFyZ2V0XCI6ZmFsc2UsXCJwYWdlRm9ybWF0XCI6e1wieFwiOjAsXCJ5XCI6MCxcIndpZHRoXCI6ODUwLFwiaGVpZ2h0XCI6MTEwMH0sXCJzZWFyY2hcIjp0cnVlLFwic2hvd1N0YXJ0U2NyZWVuXCI6dHJ1ZSxcImdyaWRDb2xvclwiOlwiI2QwZDBkMFwiLFwiZGFya0dyaWRDb2xvclwiOlwiIzZlNmU2ZVwiLFwiYXV0b3NhdmVcIjp0cnVlLFwicmVzaXplSW1hZ2VzXCI6bnVsbCxcIm9wZW5Db3VudGVyXCI6MCxcInZlcnNpb25cIjoxOCxcInVuaXRcIjoxLFwiaXNSdWxlck9uXCI6ZmFsc2UsXCJ1aVwiOlwiXCJ9In0=",
  "redhat.telemetry.enabled": false,

  "sync.autoDownload": true,
  "sync.autoUpload": true,
  "sync.forceDownload": true,
  "sync.gist": "33f60c724f51bde9afa2c2a9e540d094",
  "window.title": "${dirty} ${activeEditorMedium}",
  "window.zoomLevel": 1,

  // to be categorized
  "breadcrumbs.enabled": true,
  "css.lint.important": "warning",
  "scss.lint.important": "warning",
  "debug.toolBarLocation": "docked",
  "html.format.enable": true,
  "html.format.endWithNewline": false,
  "htmlhint.enable": true,
  "javascript.format.enable": true,
  "javascript.format.insertSpaceAfterConstructor": true,
  "javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": true,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": false,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "markdown.preview.scrollEditorWithPreview": true,
  "markdown.preview.scrollPreviewWithEditor": true,


  // language customizations
  "[markdown]": {},
  "[css]": {},
  "[dockerfile]": {},
  "[html]": {},
  "[javascript]": {},
  "[javascriptreact]": {},
  "[json]": {},
  "[scss]": {},
  "[sql]": {},
  "[typescript]": {},
  "[typescriptreact]": {},
  "[xml]": {},
  "[yaml]": {},
  "[yaml-frontmatter]": {}

}
```
