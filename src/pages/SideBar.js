import React from "react";
import { useParams } from "react-router-dom";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { useRepos } from "./use-repos";

const SideBar = ({ setRepo }) => {
  const { username } = useParams();

  const { lastItem, page } = useInfiniteScroll({
    customRoot: document.querySelector(".sideBar"),
  });
  const { repos, error } = useRepos(username, page);

  return (
    <>
      <div className="sideBar">
        {repos?.map((r) => (
          <button
            key={r.id}
            onClick={() => {
              // setRepo(r);
              setRepo(r.name);
            }}
          >
            {r.name}
          </button>
        ))}

        <p ref={lastItem}>loading more...</p>
        {error && <p>{error}</p>}
      </div>
      <style jsx>{`
        .sideBar {
          min-width: fit-content;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          grid-gap: 16px;
          overflow-y: scroll;
        }
        li {
          cursor: pointer;
          margin-bottom: 16px;
        }
      `}</style>
    </>
  );
};

export default SideBar;
