import Link from 'next/link';
import React from 'react'


export default function BottomBar() {
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
