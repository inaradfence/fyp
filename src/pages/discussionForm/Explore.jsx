import React from "react";

const discussionTopics = [
  "Technology",
  "Climate",
  "Space exploration",
  "AI and ethics",
  "Social media",
  "Mental health",
  "Education",
  "Health",
  "Culture",
  "Politics",
  "Sports",
  "Public opinion",
  "History",
  "Economy",
  "Business",
  "Science",
  "Philosophy",
  "Art",
];

const hexColorCodes = [
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#FF3357",
  "#33FFB2",
  "#33B2FF",
  "#B233FF",
  "#FF33B2",
  "#B2FF33",
  "#FFB233",
  "#B233FF",
  "#33FF6F",
  "#6FFF33",
  "#336FFF",
  "#FF336F",
  "#6F33FF",
  "#33FF8C",
  "#8CFF33",
  "#FF8C33",
  "#8C33FF",
  "#33FFFF",
  "#FFFF33",
  "#33FFC2",
  "#C2FF33",
  "#FFC233",
  "#C233FF",
];

const Explore = () => {
  const navigateToTopic = (topic) => {
    window.location.href = `/explore/${topic.toLowerCase()}`;
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-dark mb-4">
        Select A Topic To Explore
      </h1>
      <div className="row g-4 justify-content-center">
        {discussionTopics.map((topic, index) => (
          <div
            key={index}
            className="col-6 col-md-3 d-flex align-items-center cursor-pointer"
            onClick={() => navigateToTopic(topic)}
          >
            <div
              className="rounded-circle"
              style={{
                backgroundColor: hexColorCodes[index],
                width: "30px",
                height: "30px",
              }}
            ></div>
            <h3 className="ms-2 mb-0 text-truncate" style={{ fontSize: "0.85rem" }}>
              {topic}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
