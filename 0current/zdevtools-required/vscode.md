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

- keymap
  - `ctrl ,` open fkn settings.json
  - `ctrl backtick` open terminal

```jsonc
//default settings
{
{
  // often need to edit
  // enable when in typescript project
  "typescript.validate.enable": false,
  "javascript.validate.enable": false,

  // enable when in flow project
  // https://github.com/flowtype/flow-for-vscode
  "flow.useNPMPPackedFlow": true,
  "flow.coverageSeverity": "info",
  "flow.pathToFlow": "${workspaceFolder}/node_modules/.bin/flow",
  "flow.runOnEdit": true,
  "flow.showUncovered": true,
  "flow.stopFlowOnExit": true,
  "flow.useBundledFlow": false,
  "flow.useCodeSnippetOnFunctionSuggest": true,

  // relativeliy stable
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

  "terminal.integrated.tabs.location": "left",
  "workbench.experimental.sidePanel.enabled": true,
  "terminal.integrated.enableFileLinks": true,
  "terminal.integrated.copyOnSelection": true,

  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "json",
    "yaml",
    "yml"
  ],
  "explorer.sortOrder": "default",

  "files.autosave": false,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  "files.associations": {
    ".json": "jsonc",
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



  "hediet.vscode-drawio.local-storage": "some key i dont want ot share with you",
  "redhat.telemetry.enabled": false,
  "sync.gist": "71451b778136a553e785868c37c7e9a0",
  "sync.autoUpload": true,
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": false,
    "markdown": false
  },
  "editor.formatOnType": true,
  "window.zoomLevel": 1
}

```
