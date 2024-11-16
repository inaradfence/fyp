import React, { useEffect } from "react";
import Arrowup from "./../../icons/Arrowup";
import Arrowdown from "./../../icons/Arrowdown";
import UserInfo from "./UserInfo";
import Write from "./../../icons/Write";
import Send from "./../../icons/Send";
import { useQuery } from "react-query";
import newRequests from "./../../utils/newRequest";
import { useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loading from "./Loading";
import NothingHere from "./NothingHere";

const Content = () => {
  const { topic } = useParams();
  const [openId, setOpenId] = React.useState([]);
  const [answer, setAnswer] = React.useState("");
  const { isLoading, isError, data, error } = useQuery("getAllQuestions", () => {

    if (topic) {
      return newRequests
        .get(`http://localhost:8080/find/${topic}`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.error("Error fetching topic:", err);  // Error log
          throw err;
        });
    } else {
      return newRequests
        .get(`http://localhost:8080/questions`)
        .then((res) => {
          console.log("response is ", res);  // Debug log
          return res.data;
        })
        .catch((err) => {
          console.error("Error fetching questions:", err);  // Error log
          throw err;
        });
    }
  }, {
    onSuccess: (data) => {
      console.log("Query Success, Data received:", data);  // Success log
    },
    onError: (error) => {
      console.error("Error fetching data:", error);  // Error log
    },
  });


  if (isError) {
    console.log("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }

  if (isLoading) return <Loading />;

  return (
    <div
      className="md:w-[60%] flex flex-col items-center gap-y-5 
    md:gap-8 my-8 "
    >
      <Toaster />
      {data && data?.length > 0 &&
        data?.map((question, index) => {
          return (
            <div
              key={index}
              className="container-sm mx-auto mb-4 p-3 rounded bg-light"
            >
              <div className="d-flex p-4 rounded-3 shadow-sm bg-white">
                <div className="left-section text-center">
                  <Arrowup id={question._id} />
                  <h3 className="fs-6">
                    {question?.upvote?.length || 0}
                  </h3>
                  <Arrowdown id={question._id} />
                </div>
                <div className="right-section w-100 ms-3">
                  <h1 className="fs-5">{question?.question}</h1>
                  <p className="fs-6">
                    {question?.description}
                  </p>
                  <hr />
                  <UserInfo
                    openId={openId}
                    index={index + 1}
                    setOpenId={setOpenId}
                    question={question}
                  />
                </div>
              </div>

              {/* Nested Comments */}
              {openId.find((ele) => ele === index + 1) && (
                <>
                  {question?.replies?.map((answer, index) => {
                    return (
                      <div key={answer._id} className="d-flex align-items-start gap-3 mt-2">
                        <img
                          className="h-6 w-6"
                          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/nested_arrows_icon_155086.png"
                          alt=""
                        />
                        <div className="bg-light rounded-3 shadow-sm max-w-xl p-3 ms-2">
                          <p>{answer?.reply}</p>
                          <UserInfo answer={answer} />
                        </div>
                      </div>
                    );
                  })}

                  {/* Comment input box */}
                  <div className="d-flex align-items-center gap-3 mt-2 bg-light p-2 rounded-3 shadow-sm">
                    <Write />
                    <input
                      onChange={(e) => setAnswer(e.target.value)}
                      className="form-control border-0 rounded ms-2"
                      type="text"
                      value={answer}
                      placeholder="Write a comment"
                    />
                    <Send
                      questionId={question._id}
                      answer={answer}
                      setAnswer={setAnswer}
                    />
                  </div>
                </>
              )}
            </div>

          );
        })}
      {data.length === 0 && <NothingHere />}
    </div>
  );
};

export default Content;
