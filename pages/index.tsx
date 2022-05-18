import type { NextPage } from "next";
import Head from "next/head";
import CourseNavBar from "../components/navigations/CourseNavBar";
import Link from "next/link";

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
        <CourseContent />
        <BottomBar />
      </main>
    </div>
  );
};

export default Home;

function CourseContent() {
  return (
    // Padding vertical 64px (py-16) is used to make sure the content is not
    // hidden behind navbar and/or bottom bar
    <div className="flex flex-1 flex-row w-full h-screen py-16"> 
      <div className="w-1/3">
        <p>1</p>
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

function BottomBar() {
  return (
    <div className="navbar bg-primary bottom-0 fixed">
      <div className="flex-1 justify-end">
        <Link href="#">
          <a className="btn btn-ghost normal-case text-md font-normal text-white font-ng-text">
            Sebelumnya
          </a>
        </Link>
        <Link href="#">
          <a className="btn btn-outline normal-case text-md font-normal text-white font-ng-text hover:bg-white hover:text-primary">
            Selanjutnya
          </a>
        </Link>
      </div>
    </div>
  );
}
