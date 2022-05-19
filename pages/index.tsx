import type { NextPage } from "next";
import Head from "next/head";
import CourseNavBar from "../components/navigations/CourseNavBar";
import BottomBar from "../components/navigations/BottomBar";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

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
        <CourseGuide content={content} />
      </div>
      <div className="w-1/3">
        <p>2</p>
      </div>
      <div className="w-1/3">
        <p>3</p>
      </div>
    </div>
  );
}

function CourseGuide({ content }: any) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

Home.getInitialProps = async () => {
  // const { id } = context.query;
  // @ts-ignore
  const content = await import(`../curriculum/hello.md`);
  const data = matter(content.default);
  return { ...data };
};
