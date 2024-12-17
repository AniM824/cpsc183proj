import React, { useState } from "react";
import Home from "./home";
import Questions from "./questions";
import Results from "./results";

const App = () => {
  const [page, setPage] = useState("home");
  const [answers, setAnswers] = useState([]);

  const handleStart = () => {
    setPage("questions");
  };

  const handleSubmit = (answers) => {
    setAnswers(answers);
    setPage("results");
  };

  const goToHome = () => {
    setAnswers([]);
    setPage("home");
  };

  return (
    <div>
      {page === "home" && <Home onStart={handleStart} />}
      {page === "questions" && <Questions onSubmit={handleSubmit} />}
      {page === "results" && <Results answers={answers} goToHome={goToHome} />}
    </div>
  );
};

export default App;
