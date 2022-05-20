import React from "react";

import Editor from "@monaco-editor/react";

function CodeEditor() {
  const file = {
    name: "index.html",
    language: "html",
    value: "<p>Halooo</p>",
  };

  return (
    <Editor
      theme="vs-dark"
      height="100%"
      options={{
        fontSize: 14,
      }}
      path={file.name}
      defaultLanguage={file.language}
      defaultValue={file.value}
    />
  );
}

export default CodeEditor;
