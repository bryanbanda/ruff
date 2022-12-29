import { useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";

export default function Themes() {
  const monaco = useMonaco();

  useEffect(() => {
    // Generated via `monaco-vscode-textmate-theme-converter`.
    // See: https://github.com/ayu-theme/vscode-ayu/blob/91839e8a9dfa78d61e58dbcf9b52272a01fee66a/ayu-light.json.
    monaco?.editor.defineTheme("Ayu-Light", {
      inherit: false,
      base: "vs-dark",
      colors: {
        focusBorder: "#ffaa33b3",
        foreground: "#8a9199",
        "widget.shadow": "#00000026",
        "selection.background": "#035bd626",
        "icon.foreground": "#8a9199",
        errorForeground: "#e65050",
        descriptionForeground: "#8a9199",
        "textBlockQuote.background": "#f3f4f5",
        "textLink.foreground": "#ffaa33",
        "textLink.activeForeground": "#ffaa33",
        "textPreformat.foreground": "#5c6166",
        "button.background": "#ffaa33",
        "button.foreground": "#f8f9fa",
        "button.hoverBackground": "#f9a52e",
        "button.secondaryBackground": "#8a919933",
        "button.secondaryForeground": "#5c6166",
        "button.secondaryHoverBackground": "#8a919980",
        "dropdown.background": "#fcfcfc",
        "dropdown.foreground": "#8a9199",
        "dropdown.border": "#8a919945",
        "input.background": "#fcfcfc",
        "input.border": "#8a919945",
        "input.foreground": "#5c6166",
        "input.placeholderForeground": "#8a919980",
        "inputOption.activeBorder": "#f4a0284d",
        "inputOption.activeBackground": "#ffaa3333",
        "inputOption.activeForeground": "#f4a028",
        "inputValidation.errorBackground": "#fcfcfc",
        "inputValidation.errorBorder": "#e65050",
        "inputValidation.infoBackground": "#f8f9fa",
        "inputValidation.infoBorder": "#55b4d4",
        "inputValidation.warningBackground": "#f8f9fa",
        "inputValidation.warningBorder": "#f2ae49",
        "scrollbar.shadow": "#6b7d8f00",
        "scrollbarSlider.background": "#8a919966",
        "scrollbarSlider.hoverBackground": "#8a919999",
        "scrollbarSlider.activeBackground": "#8a9199b3",
        "badge.background": "#ffaa3333",
        "badge.foreground": "#f4a028",
        "progressBar.background": "#ffaa33",
        "list.activeSelectionBackground": "#56728f1f",
        "list.activeSelectionForeground": "#5c6166",
        "list.focusBackground": "#56728f1f",
        "list.focusForeground": "#5c6166",
        "list.focusOutline": "#56728f1f",
        "list.highlightForeground": "#ffaa33",
        "list.deemphasizedForeground": "#e65050",
        "list.hoverBackground": "#56728f1f",
        "list.inactiveSelectionBackground": "#6b7d8f1f",
        "list.inactiveSelectionForeground": "#8a9199",
        "list.invalidItemForeground": "#8a91994d",
        "list.errorForeground": "#e65050",
        "tree.indentGuidesStroke": "#8a919959",
        "listFilterWidget.background": "#f3f4f5",
        "listFilterWidget.outline": "#ffaa33",
        "listFilterWidget.noMatchesOutline": "#e65050",
        "list.filterMatchBackground": "#8f30efcc",
        "list.filterMatchBorder": "#9f40ffcc",
        "activityBar.background": "#f8f9fa",
        "activityBar.foreground": "#8a9199cc",
        "activityBar.inactiveForeground": "#8a919999",
        "activityBar.border": "#f8f9fa",
        "activityBar.activeBorder": "#ffaa33b3",
        "activityBarBadge.background": "#ffaa33",
        "activityBarBadge.foreground": "#f8f9fa",
        "sideBar.background": "#f8f9fa",
        "sideBar.border": "#f8f9fa",
        "sideBarTitle.foreground": "#8a9199",
        "sideBarSectionHeader.background": "#f8f9fa",
        "sideBarSectionHeader.foreground": "#8a9199",
        "sideBarSectionHeader.border": "#f8f9fa",
        "minimap.background": "#f8f9fa",
        "minimap.selectionHighlight": "#035bd626",
        "minimap.errorHighlight": "#e65050",
        "minimap.findMatchHighlight": "#9f40ff2b",
        "minimapGutter.addedBackground": "#6cbf43",
        "minimapGutter.modifiedBackground": "#478acc",
        "minimapGutter.deletedBackground": "#ff7383",
        "editorGroup.border": "#6b7d8f1f",
        "editorGroup.background": "#f3f4f5",
        "editorGroupHeader.noTabsBackground": "#f8f9fa",
        "editorGroupHeader.tabsBackground": "#f8f9fa",
        "editorGroupHeader.tabsBorder": "#f8f9fa",
        "tab.activeBackground": "#f8f9fa",
        "tab.activeForeground": "#5c6166",
        "tab.border": "#f8f9fa",
        "tab.activeBorder": "#ffaa33",
        "tab.unfocusedActiveBorder": "#8a9199",
        "tab.inactiveBackground": "#f8f9fa",
        "tab.inactiveForeground": "#8a9199",
        "tab.unfocusedActiveForeground": "#8a9199",
        "tab.unfocusedInactiveForeground": "#8a9199",
        "editor.background": "#f8f9fa",
        "editor.foreground": "#5c6166",
        "editorLineNumber.foreground": "#8a919966",
        "editorLineNumber.activeForeground": "#8a9199cc",
        "editorCursor.foreground": "#ffaa33",
        "editor.inactiveSelectionBackground": "#035bd612",
        "editor.selectionBackground": "#035bd626",
        "editor.selectionHighlightBackground": "#6cbf4326",
        "editor.selectionHighlightBorder": "#6cbf4300",
        "editor.wordHighlightBackground": "#478acc14",
        "editor.wordHighlightStrongBackground": "#6cbf4314",
        "editor.wordHighlightBorder": "#478acc80",
        "editor.wordHighlightStrongBorder": "#6cbf4380",
        "editor.findMatchBackground": "#9f40ff2b",
        "editor.findMatchBorder": "#9f40ff2b",
        "editor.findMatchHighlightBackground": "#9f40ffcc",
        "editor.findMatchHighlightBorder": "#8f30efcc",
        "editor.findRangeHighlightBackground": "#9f40ff40",
        "editor.rangeHighlightBackground": "#9f40ff33",
        "editor.lineHighlightBackground": "#8a91991a",
        "editorLink.activeForeground": "#ffaa33",
        "editorWhitespace.foreground": "#8a919966",
        "editorIndentGuide.background": "#8a91992e",
        "editorIndentGuide.activeBackground": "#8a919959",
        "editorRuler.foreground": "#8a91992e",
        "editorCodeLens.foreground": "#787b8099",
        "editorBracketMatch.background": "#8a91994d",
        "editorBracketMatch.border": "#8a91994d",
        "editor.snippetTabstopHighlightBackground": "#6cbf4333",
        "editorOverviewRuler.border": "#6b7d8f1f",
        "editorOverviewRuler.modifiedForeground": "#478acc",
        "editorOverviewRuler.addedForeground": "#6cbf43",
        "editorOverviewRuler.deletedForeground": "#ff7383",
        "editorOverviewRuler.errorForeground": "#e65050",
        "editorOverviewRuler.warningForeground": "#ffaa33",
        "editorOverviewRuler.bracketMatchForeground": "#8a9199b3",
        "editorOverviewRuler.wordHighlightForeground": "#478acc66",
        "editorOverviewRuler.wordHighlightStrongForeground": "#6cbf4366",
        "editorOverviewRuler.findMatchForeground": "#9f40ff2b",
        "editorError.foreground": "#e65050",
        "editorWarning.foreground": "#ffaa33",
        "editorGutter.modifiedBackground": "#478acccc",
        "editorGutter.addedBackground": "#6cbf43cc",
        "editorGutter.deletedBackground": "#ff7383cc",
        "diffEditor.insertedTextBackground": "#6cbf431f",
        "diffEditor.removedTextBackground": "#ff73831f",
        "diffEditor.diagonalFill": "#6b7d8f1f",
        "editorWidget.background": "#f3f4f5",
        "editorWidget.border": "#6b7d8f1f",
        "editorHoverWidget.background": "#f3f4f5",
        "editorHoverWidget.border": "#6b7d8f1f",
        "editorSuggestWidget.background": "#f3f4f5",
        "editorSuggestWidget.border": "#6b7d8f1f",
        "editorSuggestWidget.highlightForeground": "#ffaa33",
        "editorSuggestWidget.selectedBackground": "#56728f1f",
        "debugExceptionWidget.border": "#6b7d8f1f",
        "debugExceptionWidget.background": "#f3f4f5",
        "editorMarkerNavigation.background": "#f3f4f5",
        "peekView.border": "#56728f1f",
        "peekViewTitle.background": "#56728f1f",
        "peekViewTitleDescription.foreground": "#8a9199",
        "peekViewTitleLabel.foreground": "#5c6166",
        "peekViewEditor.background": "#f3f4f5",
        "peekViewEditor.matchHighlightBackground": "#9f40ffcc",
        "peekViewEditor.matchHighlightBorder": "#8f30efcc",
        "peekViewResult.background": "#f3f4f5",
        "peekViewResult.fileForeground": "#5c6166",
        "peekViewResult.lineForeground": "#8a9199",
        "peekViewResult.matchHighlightBackground": "#9f40ffcc",
        "peekViewResult.selectionBackground": "#56728f1f",
        "panel.background": "#f8f9fa",
        "panel.border": "#6b7d8f1f",
        "panelTitle.activeBorder": "#ffaa33",
        "panelTitle.activeForeground": "#5c6166",
        "panelTitle.inactiveForeground": "#8a9199",
        "statusBar.background": "#f8f9fa",
        "statusBar.foreground": "#8a9199",
        "statusBar.border": "#f8f9fa",
        "statusBar.debuggingBackground": "#ed9366",
        "statusBar.debuggingForeground": "#fcfcfc",
        "statusBar.noFolderBackground": "#f3f4f5",
        "statusBarItem.activeBackground": "#8a919933",
        "statusBarItem.hoverBackground": "#8a919933",
        "statusBarItem.prominentBackground": "#6b7d8f1f",
        "statusBarItem.prominentHoverBackground": "#00000030",
        "statusBarItem.remoteBackground": "#ffaa33",
        "statusBarItem.remoteForeground": "#fcfcfc",
        "titleBar.activeBackground": "#f8f9fa",
        "titleBar.activeForeground": "#5c6166",
        "titleBar.inactiveBackground": "#f8f9fa",
        "titleBar.inactiveForeground": "#8a9199",
        "titleBar.border": "#f8f9fa",
        "extensionButton.prominentForeground": "#fcfcfc",
        "extensionButton.prominentBackground": "#ffaa33",
        "extensionButton.prominentHoverBackground": "#f9a52e",
        "pickerGroup.border": "#6b7d8f1f",
        "pickerGroup.foreground": "#8a919980",
        "debugToolBar.background": "#f3f4f5",
        "debugIcon.breakpointForeground": "#ed9366",
        "debugIcon.breakpointDisabledForeground": "#ed936680",
        "debugConsoleInputIcon.foreground": "#ffaa33",
        "welcomePage.tileBackground": "#f8f9fa",
        "welcomePage.tileShadow": "#00000026",
        "welcomePage.progress.background": "#8a91991a",
        "welcomePage.buttonBackground": "#ffaa3366",
        "walkThrough.embeddedEditorBackground": "#f3f4f5",
        "gitDecoration.modifiedResourceForeground": "#478accb3",
        "gitDecoration.deletedResourceForeground": "#ff7383b3",
        "gitDecoration.untrackedResourceForeground": "#6cbf43b3",
        "gitDecoration.ignoredResourceForeground": "#8a919980",
        "gitDecoration.conflictingResourceForeground": "",
        "gitDecoration.submoduleResourceForeground": "#a37accb3",
        "settings.headerForeground": "#5c6166",
        "settings.modifiedItemIndicator": "#478acc",
        "keybindingLabel.background": "#8a91991a",
        "keybindingLabel.foreground": "#5c6166",
        "keybindingLabel.border": "#5c61661a",
        "keybindingLabel.bottomBorder": "#5c61661a",
        "terminal.background": "#f8f9fa",
        "terminal.foreground": "#5c6166",
        "terminal.ansiBlack": "#000000",
        "terminal.ansiRed": "#ea6c6d",
        "terminal.ansiGreen": "#6cbf43",
        "terminal.ansiYellow": "#eca944",
        "terminal.ansiBlue": "#3199e1",
        "terminal.ansiMagenta": "#9e75c7",
        "terminal.ansiCyan": "#46ba94",
        "terminal.ansiWhite": "#c7c7c7",
        "terminal.ansiBrightBlack": "#686868",
        "terminal.ansiBrightRed": "#f07171",
        "terminal.ansiBrightGreen": "#86b300",
        "terminal.ansiBrightYellow": "#f2ae49",
        "terminal.ansiBrightBlue": "#399ee6",
        "terminal.ansiBrightMagenta": "#a37acc",
        "terminal.ansiBrightCyan": "#4cbf99",
        "terminal.ansiBrightWhite": "#d1d1d1",
      },
      rules: [
        {
          fontStyle: "italic",
          foreground: "#787b8099",
          token: "comment",
        },
        {
          foreground: "#86b300",
          token: "string",
        },
        {
          foreground: "#86b300",
          token: "constant.other.symbol",
        },
        {
          foreground: "#4cbf99",
          token: "string.regexp",
        },
        {
          foreground: "#4cbf99",
          token: "constant.character",
        },
        {
          foreground: "#4cbf99",
          token: "constant.other",
        },
        {
          foreground: "#a37acc",
          token: "constant.numeric",
        },
        {
          foreground: "#a37acc",
          token: "constant.language",
        },
        {
          foreground: "#5c6166",
          token: "variable",
        },
        {
          foreground: "#5c6166",
          token: "variable.parameter.function-call",
        },
        {
          foreground: "#f07171",
          token: "variable.member",
        },
        {
          fontStyle: "italic",
          foreground: "#55b4d4",
          token: "variable.language",
        },
        {
          foreground: "#fa8d3e",
          token: "storage",
        },
        {
          foreground: "#fa8d3e",
          token: "keyword",
        },
        {
          foreground: "#ed9366",
          token: "keyword.operator",
        },
        {
          foreground: "#5c6166b3",
          token: "punctuation.separator",
        },
        {
          foreground: "#5c6166b3",
          token: "punctuation.terminator",
        },
        {
          foreground: "#5c6166",
          token: "punctuation.section",
        },
        {
          foreground: "#ed9366",
          token: "punctuation.accessor",
        },
        {
          foreground: "#fa8d3e",
          token: "punctuation.definition.template-expression",
        },
        {
          foreground: "#fa8d3e",
          token: "punctuation.section.embedded",
        },
        {
          foreground: "#5c6166",
          token: "meta.embedded",
        },
        {
          foreground: "#399ee6",
          token: "source.java storage.type",
        },
        {
          foreground: "#399ee6",
          token: "source.haskell storage.type",
        },
        {
          foreground: "#399ee6",
          token: "source.c storage.type",
        },
        {
          foreground: "#55b4d4",
          token: "entity.other.inherited-class",
        },
        {
          foreground: "#fa8d3e",
          token: "storage.type.function",
        },
        {
          foreground: "#55b4d4",
          token: "source.java storage.type.primitive",
        },
        {
          foreground: "#f2ae49",
          token: "entity.name.function",
        },
        {
          foreground: "#a37acc",
          token: "variable.parameter",
        },
        {
          foreground: "#a37acc",
          token: "meta.parameter",
        },
        {
          foreground: "#f2ae49",
          token: "variable.function",
        },
        {
          foreground: "#f2ae49",
          token: "variable.annotation",
        },
        {
          foreground: "#f2ae49",
          token: "meta.function-call.generic",
        },
        {
          foreground: "#f2ae49",
          token: "support.function.go",
        },
        {
          foreground: "#f07171",
          token: "support.function",
        },
        {
          foreground: "#f07171",
          token: "support.macro",
        },
        {
          foreground: "#86b300",
          token: "entity.name.import",
        },
        {
          foreground: "#86b300",
          token: "entity.name.package",
        },
        {
          foreground: "#399ee6",
          token: "entity.name",
        },
        {
          foreground: "#55b4d4",
          token: "entity.name.tag",
        },
        {
          foreground: "#55b4d4",
          token: "meta.tag.sgml",
        },
        {
          foreground: "#399ee6",
          token: "support.class.component",
        },
        {
          foreground: "#55b4d480",
          token: "punctuation.definition.tag.end",
        },
        {
          foreground: "#55b4d480",
          token: "punctuation.definition.tag.begin",
        },
        {
          foreground: "#55b4d480",
          token: "punctuation.definition.tag",
        },
        {
          foreground: "#f2ae49",
          token: "entity.other.attribute-name",
        },
        {
          fontStyle: "italic",
          foreground: "#ed9366",
          token: "support.constant",
        },
        {
          foreground: "#55b4d4",
          token: "support.type",
        },
        {
          foreground: "#55b4d4",
          token: "support.class",
        },
        {
          foreground: "#55b4d4",
          token: "source.go storage.type",
        },
        {
          foreground: "#e6ba7e",
          token: "meta.decorator variable.other",
        },
        {
          foreground: "#e6ba7e",
          token: "meta.decorator punctuation.decorator",
        },
        {
          foreground: "#e6ba7e",
          token: "storage.type.annotation",
        },
        {
          foreground: "#e65050",
          token: "invalid",
        },
        {
          foreground: "#c594c5",
          token: "meta.diff",
        },
        {
          foreground: "#c594c5",
          token: "meta.diff.header",
        },
        {
          foreground: "#f2ae49",
          token: "source.ruby variable.other.readwrite",
        },
        {
          foreground: "#399ee6",
          token: "source.css entity.name.tag",
        },
        {
          foreground: "#399ee6",
          token: "source.sass entity.name.tag",
        },
        {
          foreground: "#399ee6",
          token: "source.scss entity.name.tag",
        },
        {
          foreground: "#399ee6",
          token: "source.less entity.name.tag",
        },
        {
          foreground: "#399ee6",
          token: "source.stylus entity.name.tag",
        },
        {
          foreground: "#787b8099",
          token: "source.css support.type",
        },
        {
          foreground: "#787b8099",
          token: "source.sass support.type",
        },
        {
          foreground: "#787b8099",
          token: "source.scss support.type",
        },
        {
          foreground: "#787b8099",
          token: "source.less support.type",
        },
        {
          foreground: "#787b8099",
          token: "source.stylus support.type",
        },
        {
          fontStyle: "normal",
          foreground: "#55b4d4",
          token: "support.type.property-name",
        },
        {
          foreground: "#787b8099",
          token: "constant.numeric.line-number.find-in-files - match",
        },
        {
          foreground: "#fa8d3e",
          token: "constant.numeric.line-number.match",
        },
        {
          foreground: "#86b300",
          token: "entity.name.filename.find-in-files",
        },
        {
          foreground: "#e65050",
          token: "message.error",
        },
        {
          fontStyle: "bold",
          foreground: "#86b300",
          token: "markup.heading",
        },
        {
          fontStyle: "bold",
          foreground: "#86b300",
          token: "markup.heading entity.name",
        },
        {
          foreground: "#55b4d4",
          token: "markup.underline.link",
        },
        {
          foreground: "#55b4d4",
          token: "string.other.link",
        },
        {
          fontStyle: "italic",
          foreground: "#f07171",
          token: "markup.italic",
        },
        {
          fontStyle: "bold",
          foreground: "#f07171",
          token: "markup.bold",
        },
        {
          fontStyle: "bold italic",
          token: "markup.italic markup.bold",
        },
        {
          fontStyle: "bold italic",
          token: "markup.bold markup.italic",
        },
        {
          background: "#5c616605",
          token: "markup.raw",
        },
        {
          background: "#5c61660f",
          token: "markup.raw.inline",
        },
        {
          fontStyle: "bold",
          background: "#5c61660f",
          foreground: "#787b8099",
          token: "meta.separator",
        },
        {
          foreground: "#4cbf99",
          fontStyle: "italic",
          token: "markup.quote",
        },
        {
          foreground: "#f2ae49",
          token: "markup.list punctuation.definition.list.begin",
        },
        {
          foreground: "#6cbf43",
          token: "markup.inserted",
        },
        {
          foreground: "#478acc",
          token: "markup.changed",
        },
        {
          foreground: "#ff7383",
          token: "markup.deleted",
        },
        {
          foreground: "#e6ba7e",
          token: "markup.strike",
        },
        {
          background: "#5c61660f",
          foreground: "#55b4d4",
          token: "markup.table",
        },
        {
          foreground: "#ed9366",
          token: "text.html.markdown markup.inline.raw",
        },
        {
          background: "#787b8099",
          foreground: "#787b8099",
          token: "text.html.markdown meta.dummy.line-break",
        },
        {
          background: "#5c6166",
          foreground: "#787b8099",
          token: "punctuation.definition.markdown",
        },
        // Edits.
        {
          foreground: "#fa8d3e",
          token: "number",
        },
      ],
      encodedTokensColors: [],
    });
  }, [monaco]);

  return null;
}
