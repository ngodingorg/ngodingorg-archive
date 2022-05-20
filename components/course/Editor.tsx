import React from "react";

import Editor from "@monaco-editor/react";

function CodeEditor() {
  return (
    <Editor
      theme="vs-dark"
      height="100%"
      defaultLanguage="html"
      defaultValue="<p>Halooo</p>"
      options={{
          fontSize: 14,
        }}
    />
  );
}

export default CodeEditor;
