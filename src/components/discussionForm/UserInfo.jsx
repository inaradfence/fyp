import React from "react";
import Comment from "./../../icons/Comment";
import moment from "moment";

const UserInfo = ({ openId, index, setOpenId, question, answer }) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="d-flex justify-content-between w-100">
      <div className="d-flex align-items-center gap-2">
        <img
          src={
            question?.author?.profileImage ||
            answer?.author?.profileImage ||
            "https://avatars.githubusercontent.com/u/56132780?v=4"
          }
          alt="profile"
          className="rounded-circle"
          style={{ width: '24px', height: '24px' }}
        />
        <h2 className="text-muted small mb-0">
          {answer ? "answered by\n" : "posted by "}{" "}
          <span className="text-primary fw-bold">
            {question
              ? question?.author?.name === currentUser?.name
                ? question?.author?.name + " (You)"
                : question?.author?.name
              : answer
              ? answer?.author?.name === currentUser?.name
                ? answer?.author?.name + " (You)"
                : answer?.author?.name
              : ""}
          </span>
        </h2>
      </div>
      <div className="text-center">
        <h2 className="text-muted small mb-0">
          {question
            ? moment(question?.createdAt).fromNow()
            : moment(answer?.createdAt).fromNow()}
        </h2>
      </div>
      {openId && (
        <div
          className="d-flex align-items-center gap-2 cursor-pointer ms-auto"
          onClick={() => {
            if (!openId.find((ele) => ele === index)) {
              console.log("hello");
              setOpenId([...openId, index]);
            }
            if (openId.find((ele) => ele === index)) {
              setOpenId(openId.filter((ele) => ele !== index));
            }
          }}
        >
          <Comment />
          <span className="text-muted small">
            {question?.replies?.length || "No replies"}
          </span>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
