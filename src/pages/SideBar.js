import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { useRepos } from "../hooks/use-repos";

const SideBar = ({ setRepo }) => {
  const [repoList, setRepoList] = useState([]);
  const { username } = useParams();

  const { lastItem, page } = useInfiniteScroll(
    document.querySelector(".sideBar"),
    repoList
  );
  const { repos, error } = useRepos(username, page);

  useEffect(() => {
    setRepoList(repos);
    return () => {
      setRepoList({}); // Cleanup function
    };
  }, [repos]);

  return (
    <>
      <div className="sideBar">
        {repos?.map((r, index) =>
          index === repos.length - 1 ? (
            <button
              ref={lastItem}
              key={r.id}
              onClick={() => {
                setRepo(r.name);
              }}
            >
              {r.name}
            </button>
          ) : (
            <button
              key={r.id}
              onClick={() => {
                setRepo(r.name);
              }}
            >
              {r.name}
            </button>
          )
        )}

        {/* <p ref={lastItem}>loading more...</p> */}
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
