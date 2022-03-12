import { useEffect, useState } from "react";

// This hook is used to fetch a list of 30 Public user repos at a time, by page number
// Currently not setup to handle nonexistant users or to incorporate "total pages" for a page limit.

export const useRepos = (username, page) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = `https://api.github.com/users/${username}/repos?private=false&page=${page}`;

  useEffect(() => {
    setLoading(true);

    const fetchUserRepos = async () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setRepos((prev) => [...prev, ...data]);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    };
    // setLoading(false);
    fetchUserRepos();
  }, [username, url, page]);

  return { repos, loading, error };
};
