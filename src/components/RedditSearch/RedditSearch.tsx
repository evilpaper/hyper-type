import React, { useState } from "react";
import Form from "./Form";

export default function RedditSearch() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");

  async function onSearch(subreddit: string) {
    setStatus("loading");
    const url = `https://www.reddit.com/r/${subreddit}/top.json`;
    const response = await fetch(url);
    const { data } = await response.json();
    setPosts(data.children);
    setStatus("resolved");
  }
  return (
    <>
      <section>
        <h1>Find the best time for a subreddit</h1>
        <Form onSearch={onSearch} />
      </section>
      {status === "loading" && <p>Searching...</p>}
      {status === "resolved" && <p>Number of top posts: {posts.length}</p>}
    </>
  );
}
