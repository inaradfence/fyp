import React, { useEffect } from "react";
import Write from "./../../icons/Write";
import moment from "moment";
import { socket } from "./../../App";
import { useSelector } from "react-redux";

const discussionTopics = [
  "technology",
  "Climate",
  "Space",
  "Artificial intelligence",
  "Social media",
  "health",
  "education",
  "globalization",
  "culture",
  "Political",
  "Sports",
  "Public opinion",
];

const Chat = () => {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState({
    technology: [],
    Climate: [],
    Space: [],
    health: [],
    education: [],
    globalization: [],
    culture: [],
    Political: [],
    Sports: [],
  });

  const [user, setUser] = React.useState("");
  const [room, setRoom] = React.useState("technology");
  const onlineUsers = useSelector((state) => state.online.onlineUsers);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    socket.connect();
    socket.emit("join-room", {
      room: room,
      user: JSON.parse(localStorage.getItem("user")),
    });

    socket.on("receive-message", ({ message, room, user }) => {
      setMessages((prev) => ({
        ...prev,
        [room]: [...prev[room], { message, user }],
      }));
    });
  }, [socket]);

  const handleClick = () => {
    socket.emit("send-message", {
      message: message,
      room: room,
      user: user,
    });
    setMessage("");
  };

  return (
    <div className="container-fluid mt-4 d-flex flex-column align-items-center">
      {/* Online Users Header */}
      <div className="d-flex justify-content-between align-items-center w-100 mb-3">
        <h1 className="d-flex align-items-center mb-0">
          Online Users
          <span className="ms-3 d-flex gap-2">
            {onlineUsers.map((user) => (
              <img
                key={user._id}
                alt="profile"
                className="rounded-circle border border-light"
                src={user.profileImage}
                style={{ width: "30px", height: "30px" }}
              />
            ))}
          </span>
        </h1>
        <h1 className="mb-0">{onlineUsers.length ? onlineUsers.length : 0}</h1>
      </div>

      {/* Chat Box */}
      <div
        className="border rounded-3 p-3 w-100 mb-3 d-flex flex-column"
        style={{
          maxHeight: "80vh",
          overflowY: "scroll",
          backgroundColor: "#1E212A", // Dark mode bg
          color: "white", // Text color for dark mode
        }}
      >
        {messages &&
          Object.entries(messages).map(([key, value]) => {
            return (
              <div key={key}>
                {key === room &&
                  value.map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-2 ${
                        user?._id === msg.user._id ? "ms-auto" : ""
                      }`}
                    >
                      <div
                        className={`${
                          user?._id === msg.user._id ? "bg-purple-600" : "bg-purple-400"
                        } text-white py-2 px-3 rounded-3`}
                      >
                        {msg.message}
                      </div>
                      <small className="text-muted d-block mt-1">
                        {msg.user._id === user?._id
                          ? "(You) "
                          : msg.user.name + " "}
                        {moment(msg.createdAt).fromNow()}
                      </small>
                    </div>
                  ))}
              </div>
            );
          })}
      </div>

      {/* Message Input */}
      <div className="d-flex align-items-center w-100 bg-purple-600 p-2 rounded-3 shadow-sm">
        <Write />
        <div className="flex-grow-1 ms-2">
          <input
            onChange={(e) => setMessage(e.target.value)}
            className="form-control border-0 rounded-3"
            type="text"
            value={message}
            placeholder="Write a comment"
          />
        </div>

        <svg
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-white cursor-pointer ms-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Chat;
