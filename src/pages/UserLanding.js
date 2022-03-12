import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { useReadMe } from "../hooks/use-readme";

const UserLanding = () => {
  const [repo, setRepo] = useState(null);
  const { username } = useParams();

  const { readme, error } = useReadMe(username, repo);
  return (
    <>
      <div className="layout">
        <SideBar username={username} setRepo={setRepo} />
        <div>
          {readme ? (
            <div className="main">{readme}</div>
          ) : (
            <div className="main">Hello, {username}! Please select a Repo</div>
          )}
          {error && <p>{error}</p>}
        </div>
      </div>
      <style jsx>{`
        .main {
          padding: 32px;
        }
        .layout {
          padding: 16px;
          display: flex;
        }
      `}</style>
    </>
  );
};

export default UserLanding;
