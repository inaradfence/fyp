import React from 'react';

const DiscussionForum = ({ discussions }) => {
  return (
    <div>
      <h2>Discussion Forum</h2>
      <ul>
        {discussions.map(discussion => (
          <li key={discussion._id}>
            <h3>{discussion.title}</h3>
            <p>{discussion.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscussionForum;