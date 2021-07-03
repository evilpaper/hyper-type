import React, { FormEvent, useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  margin-top: 1em;
`;

const Button = styled.button`
  margin-left: 1em;
`;

export default function RedditSearchForm({
  onSearch,
}: {
  onSearch: (subreddit: string) => void;
}) {
  const [subreddit, setSubreddit] = useState("");

  function onSubmit(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    onSearch(subreddit);
  }
  return (
    <Form>
      <label htmlFor="subredit">
        {" "}
        /r{" "}
        <input
          type="text"
          name="subreddit"
          value={subreddit}
          onChange={(event) => setSubreddit(event.target.value)}
          placeholder="What subreddit..."
        />
      </label>

      <Button type="submit" onClick={onSubmit}>
        Search
      </Button>
    </Form>
  );
}
