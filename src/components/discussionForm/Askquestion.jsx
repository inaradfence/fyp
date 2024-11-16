import React from "react";
import Share from "./../../icons/Share";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { duration } from "moment";
import { useDispatch } from "react-redux";

const Askquestion = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, tags } = e.target;
    const question = {
      question: title.value,
      description: description.value,
      tags: tags.value.split(","),
      userId: user._id,
    };
    let spamScore;
    let notSpamScore;
    let label_0;
    let label_1;
    // Uncomment to use the Hugging Face API
    // const response = await query({ inputs: title.value });
    // if (response?.error) {
    //   toast.error(
    //     `${response?.error || "Something went wrong"}`,
    //     (duration = 2000)
    //   );
    //   return;
    // }
    // console.log("response", response);
    // label_0 = response[0][0].label;
    // label_1 = response[0][0].label;

    // if (label_0 === "LABEL_0") {
    //   toast.error("Your question seems to be a spam", (duration = 2000));
    //   return;
    // }
    // Uncomment ends here

    // spamScore = Number(response[0][0].score);
    // notSpamScore = Number(response[0][1].score);

    // console.log(spamScore * 100);
    // if (spamScore > notSpamScore) {
    //   toast.error("Your question seems to be a spam", (duration = 2000));
    //   return;
    // }

    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/ask-question`,
      question
    );
    if (res.status === 201) {
      toast.success("Question added successfully", (duration = 2000));
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/shahrukhx01/bert-mini-finetune-question-detection",
      {
        headers: {
          Authorization: "Bearer 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",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }

  return (
    <div className="container py-5">
      <Toaster />
      <div
        className="border p-4 pb-6 rounded-md bg-light mt-4 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3 text-center text-primary">Ask a Question</h1>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => navigate("/")}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label text-dark">
              Question Title
            </label>
            <input
              name="title"
              id="title"
              className="form-control"
              type="text"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label text-dark">
              Question Description
            </label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              rows="4"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tags" className="form-label text-dark">
              Related Tags
            </label>
            <input
              name="tags"
              id="tags"
              placeholder="Enter tags separated by commas"
              className="form-control"
              type="text"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2"
          >
            <Share />
            <span>Ask on Community</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Askquestion;
