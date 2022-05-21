import Editor from "@monaco-editor/react";
import { FiRefreshCcw } from "react-icons/fi";

export default function CodeEditorSection({
  onCheckAnswer,
  defaultValue,
  editorValue,
  onEditorChange,
  onResetEditor,
}: any) {
  return (
    <>
      <div>
        <button
          onClick={() => {}}
          className="ng-editor-tab ng-editor-tab-active"
        >
          index.html
        </button>
      </div>
      <Editor
        theme="vs-dark"
        height="100%"
        options={{
          fontSize: 14,
        }}
        path="index.html"
        defaultLanguage="html"
        defaultValue={defaultValue}
        value={editorValue}
        onChange={onEditorChange}
      />
      <div
        className="bg-ng-vs-code-secondary flex flex-row items-center fixed bottom-16 w-1/3"
        style={{ marginTop: 1 }}
      >
        <div className="tooltip" data-tip="Periksa jawaban yang kamu berikan">
          <button
            onClick={onCheckAnswer}
            className="font-ng-mono font-semibold bg-yellow-400 py-3 px-6"
          >
            Periksa
          </button>
        </div>
        <div
          className="tooltip"
          style={{ color: "white" }}
          data-tip="Atur ulang kode"
        >
          <button
            onClick={onResetEditor}
            className="font-ng-mono font-semibold py-4 px-4 h-full"
          >
            <FiRefreshCcw />
          </button>
        </div>
      </div>
    </>
  );
}
