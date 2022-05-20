import React from "react";
import Link from "next/link";
import { FiHelpCircle } from "react-icons/fi";

export default function CourseNavBar() {
  return (
    <div className="navbar bg-primary fixed top-0 border-b border-white">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl text-white font-ng-mono">
            g_&gt;
          </a>
        </Link>
        <Link href="#">
          <a className="btn btn-ghost normal-case text-md font-normal text-white font-ng-text">
            Beranda
          </a>
        </Link>
        <Link href="#">
          <a className="btn btn-ghost normal-case text-md font-normal text-white font-ng-text">
            Menu
          </a>
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="#">
              <a className="btn btn-outline normal-case text-md font-normal text-white font-ng-text hover:bg-white hover:text-primary">
                <FiHelpCircle />
                Dapatkan Bantuan
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
