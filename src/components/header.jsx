import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "text-violet-300 font-semibold"
      : "";
  };

  return (
    <div>
      <div className="grid pb-5 font-bold text-violet-400">michelle vu</div>
      <ul className="grid content-start">
        <li>
          <Link
            to="/"
            className={`block ${isActive(
              "/"
            )} hover:underline decoration-violet-300`}
          >
            experience
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`block ${isActive(
              "/about"
            )} hover:underline decoration-violet-300`}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`block ${isActive(
              "/contact"
            )} hover:underline decoration-violet-300`}
          >
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
