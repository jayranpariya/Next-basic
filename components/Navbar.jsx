import React from "react";
import Link from "next/link";
// import { MDBBtn } from "rmdb-react-ui-kit";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">SuperHero</a>
        </Link>

        <Link href="/add">
          <a className="navbar-brand btn btn-primary mx-3">identity</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
