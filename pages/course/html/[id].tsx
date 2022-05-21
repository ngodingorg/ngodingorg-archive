import type { NextPage } from "next";
import Head from "next/head";
import matter from "gray-matter";
import CourseNavBar from "../../../components/navigations/CourseNavBar";
import CourseBottomBar from "../../../components/navigations/CourseBottomBar";
import CourseContent from "../../../components/course/CourseContent";

const CoursePage: NextPage = ({ content, data, seed, solutions }: any) => {
  return (
    <div>
      <Head>
        <title>{data.courseTitle} - ngoding.org</title>
        <meta name="description" content="ngoding.org" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <CourseNavBar />
        <CourseContent
          content={content}
          data={data}
          seed={seed}
          solutions={solutions}
        />
        <CourseBottomBar data={data} />
      </main>
    </div>
  );
};

export default CoursePage;


CoursePage.getInitialProps = async (context) => {
  const { id } = context.query;
  // @ts-ignore
  const content = await import(`../../../curriculum/html/${id}/course.md`);
  const data = matter(content.default);

  // @ts-ignore
  const seed = await import(`../../../curriculum/html/${id}/seed.html`);

  // @ts-ignore
  const solutions = await import(`../../../curriculum/html/${id}/solutions.html`);
  return { ...data, seed, solutions };
};
