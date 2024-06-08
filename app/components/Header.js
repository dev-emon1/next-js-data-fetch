import Link from "next/link";
import React from "react";
import "../globals.css";

const Header = () => {
  return (
    <div className="wrapper-header">
      <header className="container header">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/todo">Todo</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
