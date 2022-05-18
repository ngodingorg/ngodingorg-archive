import React from 'react'

export default function CourseNavBar() {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-white font-ng-mono">
          g_&gt;
        </a>
        <a className="btn btn-ghost normal-case text-md font-normal text-white font-ng-text">
          Beranda
        </a>
        <a className="btn btn-ghost normal-case text-md font-normal text-white font-ng-text">
          Menu
        </a>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a className="btn btn-ghost normal-case text-md font-normal text-white font-ng-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-help-circle"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              Dapatkan Bantuan
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

