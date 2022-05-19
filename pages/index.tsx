import type { NextPage } from "next";
import Head from "next/head";
import CourseNavBar from "../components/navigations/CourseNavBar";
import BottomBar from "../components/navigations/BottomBar";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { default as SyntaxHighlighter } from "react-syntax-highlighter";
import { irBlack } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { FiBookOpen } from "react-icons/fi";

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
  return (
    // Padding vertical 64px (py-16) is used to make sure the content is not
    // hidden behind navbar and/or bottom bar
    <div className="flex flex-1 flex-row w-full h-screen py-16">
      <div className="w-1/3 overflow-y-auto">
        <div className="bg-ng-cream flex flex-row items-center px-6 py-3">
          <FiBookOpen />
          <p className="font-ng-text text-base font-semibold ml-2">Pahami</p>
        </div>
        <div className="px-6 pb-6 font-ng-text text-base">
          <MarkdownSection content={content} />
        </div>
      </div>
      <div className="w-1/3 bg-primary text-white">
        <p>2</p>
      </div>
      <div className="w-1/3 bg-primary text-white">
        <p>3</p>
      </div>
    </div>
  );
}

function MarkdownSection({ content }: any) {
  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              className="mb-3"
              // @ts-ignore
              style={irBlack}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        h1({ children }) {
          return (
            <h1 className="font-ng-mono text-lg font-bold mb-3 mt-6">
              {children}
            </h1>
          );
        },
        h2({ children }) {
          return (
            <h1 className="font-ng-text text-md font-semibold mb-3 mt-6">
              {children}
            </h1>
          );
        },
        p({ children }) {
          return <p className="font-ng-text text-base mb-3">{children}</p>;
        },
        ul({ children }) {
          return <ul className="list-disc list-inside mb-3">{children}</ul>;
        },
        li({ children }) {
          return <li className="ml-2">{children}</li>;
        },
        ol({ children }) {
          return <ul className="list-decimal list-inside mb-3">{children}</ul>;
        },
        a({ ...props }) {
          return (
            <a
              href={props.href}
              rel="noreferrer"
              target="_blank"
              className="font-semibold underline underline-offset-1 decoration-yellow-400 cursor-pointer"
            >
              {props.children}
            </a>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

Home.getInitialProps = async () => {
  // const { id } = context.query;
  // @ts-ignore
  const content = await import(`../curriculum/hello.md`);
  const data = matter(content.default);
  return { ...data };
};
