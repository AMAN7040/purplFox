import React from "react";
import styles from "../BreadCrumps/BreadCrumps.module.css";
import { Link, useLocation } from "react-router-dom";

const BreadCrumps = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/").filter((x) => x);
  const lastPath = pathName[pathName.length - 1];

  return (
    <div className={`${styles.bread}`}>
      <nav
        className="w-full py-[12px] text-[12px] sm:py-[20px]"
        aria-label="Bread crump"
      >
        <ul className="flex list-none flex-wrap items-center gap-[6px]">
          {lastPath && (
            <li>
              <Link className="underline underline-offset-3 mr-[3px]" to="/">
                Home
              </Link>
              {" > "}
              <Link className="ml-[3px]" to={location.pathname}>{lastPath.replace("-", " ")}</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default BreadCrumps;
