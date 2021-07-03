import React, { useState } from "react";
import RedditSearchForm from "./RedditSearchForm";
import styled from "styled-components";

const Result = styled.p`
  margin-top: 1em;
`;

export default function RedditSearch() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");

  async function onSearch(subreddit: string) {
    setStatus("loading");
    const url = `https://www.reddit.com/r/${subreddit}/top.json`;
    const response = await fetch(url);
    const { data = [] } = await response.json();
    setPosts((data.children = []));
    setStatus("resolved");
  }
  return (
    <>
      <section>
        <h1>Find the best time for a subreddit</h1>
        <RedditSearchForm onSearch={onSearch} />
      </section>
      {status === "loading" && <Result>Searching...</Result>}
      {status === "resolved" && (
        <Result>Number of top posts: {posts.length}</Result>
      )}
    </>
  );
}
