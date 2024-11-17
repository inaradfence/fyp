import React from 'react';

const ResourceCard = ({ resource }) => {
  return (
    <div className="card">
      <h2>{resource.title}</h2>
      <p>{resource.description}</p>
      <button>View/Download</button>
    </div>
  );
};

export default ResourceCard;
