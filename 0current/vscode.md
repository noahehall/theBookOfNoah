# TLDR

- sync settings across vscode & codium
  - [settings sync gist](https://gist.github.com/noahehall/33f60c724f51bde9afa2c2a9e540d094)

# links

- [setup profiles for different languages](https://dev.to/sulmanweb/vs-code-pro-tip-code-profiles-multi-environment-development-hg2)
- [more of the same, but better user feedback in comments](https://dev.to/jsjoeio/how-to-create-code-profiles-in-vscode-3ofo)
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
  - `ctrl ,` open settings.json
  - `ctrl b` toggle explorer
  - `ctrl shift e` open workspace explorer
  - `ctrl backtick` toggle terminal

```jsonc
{
  // relativeliy stable
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.acceptSuggestionOnEnter": "smart",
  "editor.autoIndent": "advanced",
  "editor.cursorBlinking": "phase",
  "editor.cursorStyle": "line",
  "editor.fontSize": 18,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.inlineSuggest.enabled": true,
  "editor.insertSpaces": true,
  "editor.lineHeight": 34,
  "editor.linkedEditing": true,
  "editor.minimap.enabled": false,
  "editor.rulers": [100, 150, 200],
  "editor.tabSize": 2,
  "editor.wordWrap": "wordWrapColumn",
  "editor.wordWrapColumn": 80,
  "editor.wrappingIndent": "same",
  "editor.fontFamily": "Ubuntu Mono,Input, Consolas, monospace",
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },

  "terminal.integrated.tabs.location": "left",
  "terminal.integrated.enableFileLinks": true,
  "terminal.integrated.copyOnSelection": true,

  "eslint.alwaysShowStatus": true,
  "eslint.workingDirectories": [
    {
      "pattern": "./packages/*/"
    }
  ],
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
  "explorer.compactFolders": false,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  "files.associations": {
    ".json": "jsonc",
    ".jsonc": "jsonc",
    "*.ts": "javascript",
    "*.tsx": "javascript"
  },

  "workbench.editor.closeEmptyGroups": true,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.editor.showTabs": true,
  "workbench.editor.tabCloseButton": "right",
  "workbench.editor.tabSizing": "shrink",
  "workbench.panel.defaultLocation": "right",
  "workbench.settings.editor": "json",

  "outline.icons": true,
  "outline.problems.enabled": true,
  "outline.problems.badges": true,
  "outline.problems.colors": true,

  "terminal.integrated.allowChords": false,
  "terminal.integrated.defaultProfile.linux": "bash",
  "terminal.integrated.fontSize": 18,
  "terminal.integrated.sendKeybindingsToShell": true,
  "terminal.explorerKind": "external",

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
  "workbench.sideBar.location": "right",
  "files.autoSave": "afterDelay",
  "sync.quietSync": true,
  "sync.autoDownload": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "json.schemas": [],
  "yaml.customTags": [
    "!And",
    "!And sequence",
    "!If",
    "!If sequence",
    "!Not",
    "!Not sequence",
    "!Equals",
    "!Equals sequence",
    "!Or",
    "!Or sequence",
    "!FindInMap",
    "!FindInMap sequence",
    "!Base64",
    "!Join",
    "!Join sequence",
    "!Cidr",
    "!Ref",
    "!Sub",
    "!Sub sequence",
    "!GetAtt",
    "!GetAZs",
    "!ImportValue",
    "!ImportValue sequence",
    "!Select",
    "!Select sequence",
    "!Split",
    "!Split sequence"
  ],
  "aws.profile": "profile:nirv-noah",
  "workbench.colorTheme": "Dracula At Night",
  "files.watcherExclude": {
    "**/node_modules/**": true,
    "**/.git": true,
    "**/.bloop": true,
    "**/.metals": true,
    "**/.ammonite": true
  },
  "telemetry.telemetryLevel": "off",
  "files.exclude": false,
  "terminal.integrated.enableMultiLinePasteWarning": false
}
```
