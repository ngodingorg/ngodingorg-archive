import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>test changes - ngoding.org</title>
        <meta name="description" content="ngoding.org" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main>
        <Link href="/course/html/1">
          <p className="underline font-ng-mono cursor-pointer">Go to example course</p>
        </Link>
      </main>
    </div>
  );
};

export default Home;
