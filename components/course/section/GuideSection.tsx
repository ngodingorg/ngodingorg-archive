import ReactMarkdown from "react-markdown";
import { default as SyntaxHighlighter } from "react-syntax-highlighter";
import { defaultStyle } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { FiBookOpen } from "react-icons/fi";

export default function GuideSection({ content, courseData }: any) {
  return (
    <>
      <div
        className="bg-yellow-400 flex flex-row items-center px-6 py-3 fixed top-16 w-1/3"
        style={{ marginTop: 1 }}
      >
        <FiBookOpen />
        <p className="font-ng-text text-base font-semibold ml-2">
          {courseData.courseTitle}
        </p>
      </div>
      <div className="px-6 pb-6 pt-12 font-ng-text text-base">
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  className="mb-3"
                  // @ts-ignore
                  style={defaultStyle}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code
                  className={className}
                  style={{
                    backgroundColor: "#F0F0F0",
                    paddingLeft: 2,
                    paddingRight: 2,
                  }}
                  {...props}
                >
                  {children}
                </code>
              );
            },
            h1({ ...props }) {
              return (
                <h1 className="font-ng-mono text-lg font-bold mb-3 mt-6">
                  <span className="text-yellow-400">&gt;</span> {props.children}
                </h1>
              );
            },

            h2({ ...props }) {
              return (
                <h1 className="font-ng-text text-md font-semibold mb-3 mt-6">
                  {props.children}
                </h1>
              );
            },
            p({ ...props }) {
              return (
                <p className="font-ng-text text-base mb-3">{props.children}</p>
              );
            },
            ul({ ...props }) {
              return (
                <ul className="list-disc list-inside mb-3">{props.children}</ul>
              );
            },
            li({ ...props }) {
              return <li className="ml-2">{props.children}</li>;
            },
            ol({ ...props }) {
              return (
                <ul className="list-decimal list-inside mb-3">
                  {props.children}
                </ul>
              );
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
      </div>
    </>
  );
}
