import React from "react";
import Form from "./Form";

export default function RedditSearch() {
  function onSearch(subreddit: string) {
    console.log(subreddit);
  }
  return (
    <>
      <section>
        <h1>Find the best time for a subreddit</h1>
        <Form onSearch={onSearch} />
      </section>
    </>
  );
}
