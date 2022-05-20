import type { NextPage } from "next";
import Head from "next/head";
import CourseNavBar from "../components/navigations/CourseNavBar";
import BottomBar from "../components/navigations/BottomBar";
import matter from "gray-matter";
import { FiBookOpen, FiGlobe } from "react-icons/fi";
import Guide from "../components/course/Guide";
import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";

const defaultValue = "<p>Halooo</p>";

const Home: NextPage = ({ content }: any) => {
  return (
    <div>
      <Head>
        <title>ngoding.org</title>
        <meta name="description" content="ngoding.org" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <CourseNavBar />
        <CourseContent content={content} />
        <BottomBar />
      </main>
    </div>
  );
};

export default Home;

function CourseContent({ content }: any) {
  const [editorContent, setEditorContent] = useState(defaultValue);
  const [srcDoc, setSrcDoc] = useState(defaultValue);

  // Give 0.5 second delay before rendering
  useEffect(() => {
    const delayOnRender = setTimeout(() => {
      setSrcDoc(`<html><body>${editorContent}</body></html>`);
    }, 500);

    return () => clearTimeout(delayOnRender);
  }, [editorContent]);

  function handleEditorChange(value: any) {
    setEditorContent(value);
  }

  return (
    // Padding vertical 64px (py-16) is used to make sure the content is not
    // hidden behind navbar and/or bottom bar
    <div className="flex flex-1 flex-row w-full h-screen py-16">
      <div className="w-1/3 overflow-y-auto">
        <div
          className="bg-yellow-400 flex flex-row items-center px-6 py-3 fixed top-16 w-1/3"
          style={{ marginTop: 1 }}
        >
          <FiBookOpen />
          <p className="font-ng-text text-base font-semibold ml-2">
            Pengenalan HTML
          </p>
        </div>
        <div className="px-6 pb-6 font-ng-text text-base">
          <Guide content={content} />
        </div>
      </div>
      <div className="w-1/3 bg-ng-vs-code-secondary">
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
          onChange={handleEditorChange}
        />
      </div>
      <div className="w-1/3">
        <div
          className="bg-white flex flex-row items-center fixed top-16 w-1/3"
          style={{ marginTop: 1 }}
        >
          <div className="bg-slate-100 p-4" style={{ color: "#94a3b8" }}>
            <FiGlobe />
          </div>
          <p className="font-ng-text text-sm font-normal ml-4">
            http://localhost:8000
          </p>
        </div>
        <iframe
          title="output"
          sandbox="allow-scripts"
          height="100%"
          width="100%"
          className="pt-16"
          frameBorder="0"
          srcDoc={srcDoc}
        />
      </div>
    </div>
  );
}

Home.getInitialProps = async () => {
  // const { id } = context.query;
  // @ts-ignore
  const content = await import(`../curriculum/html/1.md`);
  const data = matter(content.default);
  return { ...data };
};
