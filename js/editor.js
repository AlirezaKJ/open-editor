function onTypeInEditor() {
    localStorage.setItem("LastFileContent",editor.getValue())
    localStorage.setItem("LastFileName",filename)
}
function setupEditor()
{
    window.editor = ace.edit("editor");
    editor.getSession().setMode("ace/mode/html");
//   editor.setValue(`<!DOCTYPE html>
// <html>
// <head>
//     <style>
//         h1 {
//             color: red;
//         }
//     </style>
// </head>
// <body>

//     <h1>Sample Text</h1>

// </body>
// </html>`,1); //1 = moves cursor to end

editor.getSession().on('change', function() {
    onTypeInEditor();
});
  
// Set Options
editor.setOptions({
    enableSnippets: true,
    fixedWidthGutter: true,
    highlightGutterLine: true,
    animatedScroll: true,
    cursorStyle: "smooth",
    wrap: false,
    autoScrollEditorIntoView: true,
    highlightSelectedWord: true,
    highlightActiveLine: true,
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible: false,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
});
    editor.focus();
    editor.setShowPrintMargin(false);
    editor.setTheme("ace/theme/monokai")
    editor.setOptions({fontSize: "20px"})
}
function updateEditor(content,name) {
    editordiv.style.visibility = "visible"
    myfl.style.visibility = "hidden"
    editor.setValue(content,1)
    filename = name
    filenamediv.innerText = name
    fileformat = name.split(".")
    fileformat = fileformat[fileformat.length - 1]
    if (fileformat === "txt") {
        editor.getSession().setMode("ace/mode/plain_text")
    } else {editor.getSession().setMode("ace/mode/" + fileformat)}

    btnsdiv.style.visibility = "hidden";
    editor.focus()
    onTypeInEditor()
}
function saveas() {
    download(filename,editor.getValue())
}

setupEditor();