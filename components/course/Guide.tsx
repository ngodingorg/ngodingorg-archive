import ReactMarkdown from "react-markdown";
import { default as SyntaxHighlighter } from "react-syntax-highlighter";
import { defaultStyle } from "react-syntax-highlighter/dist/cjs/styles/hljs";


export default function Guide({ content }: any) {
  return (
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
        h1({ children }) {
          return (
            <h1 className="font-ng-mono text-lg font-bold mb-3 mt-6">
              <span className="text-yellow-400">&gt;</span> {children}
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
