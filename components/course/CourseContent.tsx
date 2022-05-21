import { useEffect, useState } from "react";
import GuideSection from "../../components/course/section/GuideSection";
import BrowserPreviewSection from "./section/BrowserPreviewSection";
import CodeEditorSection from "./section/CodeEditorSection";

export default function CourseContent({ content, data, seed, solutions }: any) {
  const defaultValue = seed.default;
  const solutionsValue = solutions.default;
  const [editorValue, setEditorValue] = useState(defaultValue);
  const [iframeValue, setIframeValue] = useState(defaultValue);

  // Give 0.5 second delay before rendering
  useEffect(() => {
    const delayOnRender = setTimeout(() => {
      setIframeValue(`<html><body>${editorValue}</body></html>`);
    }, 500);

    return () => clearTimeout(delayOnRender);
  }, [editorValue]);

  function handleEditorChange(value: any) {
    setEditorValue(value);
  }

  function handleResetEditor() {
    setEditorValue(defaultValue);
    setIframeValue(`<html><body>${defaultValue}</body></html>`);
  }

  function checkAnswer(input: string, solutions: string) {
    // TODO: Improve check code
    if (input !== solutions) {
      console.log("answer is incorrect");
      return;
    }
    console.log("answer is correct");
  }

  return (
    // Padding vertical 64px (py-16) is used to make sure the content is not
    // hidden behind navbar and/or bottom bar
    <div className="flex flex-1 flex-row w-full h-screen py-16">
      <div className="w-1/3 overflow-y-auto">
          <GuideSection content={content} courseData={data} />
      </div>
      <div className="w-1/3 bg-ng-vs-code-secondary">
       <CodeEditorSection
         onCheckAnswer={() => checkAnswer(editorValue, solutionsValue)}
	 defaultValue={defaultValue}
	 editorValue={editorValue}
	 onEditorChange={handleEditorChange}
	 onResetEditor={handleResetEditor}
       />
      </div>
      <div className="w-1/3">
        <BrowserPreviewSection iframeValue={iframeValue} />
      </div>
    </div>
  );
}

