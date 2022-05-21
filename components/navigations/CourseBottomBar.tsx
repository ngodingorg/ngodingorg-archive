import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function CourseBottomBar({ data }: any) {
  const { asPath } = useRouter();
  const courseIndex = parseInt(asPath.substring(asPath.lastIndexOf("/") + 1));
  const parentPath = asPath.substring(0, asPath.lastIndexOf("/"));

  return (
    <div className="navbar bg-primary bottom-0 fixed border-t border-white">
      <div className="flex-1 justify-end">
        <Link href={data.courseStart ? "#" : `${parentPath}/${courseIndex - 1}`}>
          <a
            className={`border py-2.5 px-4 ${
              data.courseStart
                ? "cursor-not-allowed border-gray-500 text-gray-400"
                : "cursor-pointer border-white text-white hover:border-yellow-400"
            } normal-case text-md font-normal text-white font-ng-text mr-2`}
          >
            Sebelumnya
          </a>
        </Link>
        <Link href={data.courseEnd ? "#" : `${parentPath}/${courseIndex + 1}`}>
        <a
          className={`py-2.5 px-4 ${
            data.courseEnd
              ? "cursor-not-allowed bg-gray-800 text-gray-100"
              : "cursor-pointer bg-yellow-400 text-primary hover:bg-white"
          } normal-case text-md font-normal text-white font-ng-text`}
        >
          Selanjutnya
        </a>
	</Link>
      </div>
    </div>
  );
}
