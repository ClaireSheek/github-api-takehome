import { useEffect, useState } from "react";

// This hook fetches the README.md file from the specified repo sent as props
// Does not handle missing README

export const useReadMe = (username, repo) => {
  const [readme, setReadme] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("FETCHING REPO");

  // GitHub API path for README.md
  // /repos/${username}/${repo}/contents/README.md

  // Headers:
  // Accept: application/vnd.github.v3.raw+json

  const url = `https://api.github.com/repos/${username}/${repo}/contents/README.md`;
  useEffect(() => {
    setLoading(true);

    const fetchReadMe = async () => {
      console.log("Username: ", username, "Repo", repo);

      var request = new Request(url, {
        headers: new Headers({ accept: "application/vnd.github.v3.raw" }),
      });
      fetch(request)
        .then((res) => {
          return res.text();
        })
        .then((data) => {
          setReadme(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    };
    fetchReadMe();
  }, [username, repo, url]);

  return { readme, loading, error };
};
