import React from 'react';
import queryString from 'query-string';

const Posts = ({ location, match }) => {
  const result = queryString.parse(location.search);
  console.log(result);

  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.month}
    </div>
  );
};

export default Posts;
