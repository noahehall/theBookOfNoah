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
  "editor.fontSize": 18,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.inlineSuggest.enabled": true,
  "editor.insertSpaces": true,
  "editor.linkedEditing": true,
  "editor.minimap.enabled": false,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.wordWrapColumn": 80,
  "editor.wrappingIndent": "same",
  "editor.rulers": [40, 80, 120],
  "editor.autoIndent": "advanced",

  "workbench.editor.enablePreview": true,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.editor.showTabs": true,
  "workbench.editor.closeEmptyGroups":true,
  "workbench.sideBar.location": "right",

  "outline.icons":true,
  "outline.problems.enabled":true,
  "outline.problems.badges":true,
  "outline.problems.colors":true,
  "terminal.integrated.allowChords": false,
  "terminal.integrated.defaultProfile.linux": "bash",
  "terminal.integrated.fontsize": 18,
  "terminal.integrated.sendKeybindingsToShell": true,

  "explorer.sortOrder": "default",
  "files.autosave": false,
  "files.trimFinalNewlines": true,
  "files.associations": {
      ".json": "json",
      ".jsonc": "jsonc",
  },


  "redhat.telemetry.enabled": false,

  "sync.autoDownload": true,
  "sync.autoUpload": true,
  "sync.forceDownload": true,
  "sync.gist": "33f60c724f51bde9afa2c2a9e540d094",
  "window.title": "${dirty} ${activeEditorMedium}",
  "window.zoomLevel": 1,


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