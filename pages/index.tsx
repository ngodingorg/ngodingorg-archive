import type { NextPage } from "next";
import Head from "next/head";
import CourseNavBar from "../components/navigations/CourseNavBar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ngoding.org</title>
        <meta name="description" content="ngoding.org" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <CourseNavBar />
      </main>
    </div>
  );
};

export default Home;
