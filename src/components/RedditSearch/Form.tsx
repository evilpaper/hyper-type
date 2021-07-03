import React, { FormEvent, useState } from "react";

export default function Form({
  onSearch,
}: {
  onSearch: (subreddit: string) => void;
}) {
  const [subreddit, setSubreddit] = useState("javascript");

  function onSubmit(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    onSearch(subreddit);
  }
  return (
    <form>
      <label htmlFor="subredit"></label>
      <input
        type="text"
        name="subreddit"
        value={subreddit}
        onChange={(event) => setSubreddit(event.target.value)}
      ></input>
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </form>
  );
}
