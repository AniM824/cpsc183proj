import React, { useState, useEffect } from "react";
import "./styles.css";

// Add a global style reset
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.overflowX = "hidden"; // Prevent horizontal scrolling

const Results = ({ answers, goToHome }) => {
  // Reasonings for each question
  const reasonings = [
    { agree: "You view transformative uses of copyrighted material as generally acceptable, especially when they serve a public purpose like research or education.", disagree: "You prioritize protecting the integrity and market value of original works." },
    { agree: "You support innovative uses of copyrighted material that do not directly compete with the original market, creating a new potential market.", disagree: "You believe that reusing parts of copyrighted works—even if transformative—can still harm the rights-holder’s control. " },
    { agree: "You prioritize the public’s right to access information, especially when the use is for news or commentary. ", disagree: "You see full reproduction as excessive, regardless of its transformative purpose. " },
    { agree: "You see derivative works as acceptable if they add value or serve a broader purpose.", disagree: "You believe that commercial uses of copyrighted works require a high degree of transformative value to justify fair use. " },
    { agree: "You focus on whether the tool or technology itself has substantial legal uses. ", disagree: "You hold developers and users equally responsible for copyright misuse. " },
    { agree: "You prioritize protecting speech that criticizes public officials, even if minor inaccuracies occur, as long as there’s no reckless intent to harm.", disagree: "You believe public officials need stronger protections from inaccuracies that can unfairly damage reputations and erode public trust." },
    { agree: "You believe protecting offensive speech on public issues is essential to preserving diverse and open expression.", disagree: "You believe deeply offensive speech targeting private individuals causes harm that outweighs its value." },
    { agree: "You see satire and parody as vital for critiquing public figures, even if it offends.", disagree: "You believe public figures need more protection when satire causes unnecessary personal harm." },
    { agree: "You value online anonymity to protect free expression, even for critical or unpopular speech.", disagree: "You believe anonymity shouldn’t protect individuals who unfairly harm others’ reputations." },
    { agree: "You believe holding bloggers to traditional standards risks silencing alternative or dissenting voices.", disagree: "You believe all publishers must be accountable for false statements that harm reputations." },
  ];

  const scoring = [
    [-2, -1, 1, 2], // Question 1
    [-2, -1, 1, 2],  // Question 2
    [-2, -1, 1, 2], // Question 3
    [2, 1, -1, -2], // Question 4
    [-2, -1, 1, 2],  // Question 5
    [-2, -1, 1, 2], // Question 6
    [-2, -1, 1, 2], // Question 7
    [-2, -1, 1, 2], // Question 8
    [2, 1, -1, -2],  // Question 9
    [2, 1, -1, -2], // Question 10
  ];

  // Function to map answers to their corresponding scores
  const getScore = (questionIdx, answer) => {
    const scores = scoring[questionIdx];
    switch (answer) {
      case "Strongly Disagree":
        return scores[0];
      case "Disagree":
        return scores[1];
      case "Agree":
        return scores[2];
      case "Strongly Agree":
        return scores[3];
      default:
        return 0;
    }
  };

// Function to add random +1 or -1 if score is 0
const adjustIfZero = (score) => {
  if (score === 0) {
    return Math.random() < 0.5 ? 1 : -1; // Randomly add 1 or subtract 1
  }
  return score;
};

// Calculate overall score
let totalScore = answers.reduce(
  (sum, q, idx) => sum + getScore(idx, q.answer),
  0
);
totalScore = adjustIfZero(totalScore);

// Calculate scores for specific question ranges
let copyrightScore = answers
  .slice(0, 5) // First 5 questions
  .reduce((sum, q, idx) => sum + getScore(idx, q.answer), 0);
copyrightScore = adjustIfZero(copyrightScore);

let freeSpeechScore = answers
  .slice(5, 10) // Last 5 questions
  .reduce((sum, q, idx) => sum + getScore(idx + 5, q.answer), 0); // Offset idx
freeSpeechScore = adjustIfZero(freeSpeechScore);

  // Determine prediction based on score
  const prediction = totalScore > 0 ? "agree" : "disagree";
  const answer = totalScore > 0 ? "support" : "don't support";

  const overallJustification = totalScore > 0 ? "Your belief in looser copyright protections and broad free speech rights suggests you view TrueVoice’s campaign as a transformative political expression that creatively repurposes cultural works to engage the public, despite its provocative tone and profit from the use of copyrighted material." : "Your preference for stricter copyright enforcement and limits on inflammatory speech indicates you see TrueVoice’s campaign as an exploitative and irresponsible use of others’ work, where monetization and the emotional impact outweigh respect for creators and truthful discourse.";
  const copyrightJustification = copyrightScore > 0 ? "Your belief in looser copyright restrictions and the value of transformative use suggests that you see creative reimagination as an essential part of cultural and political discourse. In the fictional scenario, you might view TrueVoice’s campaign as a modern, innovative way to repurpose familiar cultural material—like movie scenes, songs, and dialogue—into tools for critique and commentary. For you, the group’s use of AI to generate politically charged content is transformative, as it blends existing works with new meaning to engage the public in political conversations. While the monetization aspect could raise concerns, you may still prioritize the broader communicative and expressive purpose of the campaign over strict adherence to copyright protections." : "Your preference for stricter copyright protections indicates that you place significant value on respecting the rights of original creators and preserving the integrity of their work. In the fictional scenario, you would likely see TrueVoice’s use of copyrighted material without authorization as problematic, particularly given its commercial success. From your perspective, the campaign’s reliance on familiar pop-culture elements—movie scenes, songs, and dialogue—feels less like transformation and more like exploitation, where the emotional impact of these works is leveraged for profit and political messaging. You may view this as setting a harmful precedent, undermining creators’ control over their work and blurring the boundaries of fair and responsible use.";
  const freeSpeechJustification = freeSpeechScore > 0 ? "Your belief in broad free speech protections suggests that you prioritize the importance of open expression, even when it is provocative, critical, or offensive. In the fictional scenario, you might view TrueVoice’s campaign as a legitimate exercise of political speech—satirical, biting, and designed to challenge powerful figures. For you, the use of strong language, humor, and cultural references is part of a larger tradition of political critique that thrives on pushing boundaries. While some content may be seen as inflammatory or exaggerated, you likely view this as an acceptable trade-off to preserve a robust public discourse, especially when it engages citizens and sparks critical conversations during an election season." : "Your preference for limiting certain forms of speech suggests that you value responsibility and accountability in public expression, especially when it risks harm or misinformation. In the fictional scenario, you might see TrueVoice’s campaign as crossing important boundaries by using inflammatory rhetoric, selective editing, and provocative content to influence public opinion. From your perspective, speech that misrepresents facts, targets individuals unfairly, or fuels divisiveness undermines meaningful discourse rather than enhancing it. You likely believe that public figures and creators deserve protections from such forms of expression, particularly when their reputations or works are used without their consent for profit or political gain.";

  // Generate the reasoning paragraph
  const reasoningParagraph = answers
    .map((q, idx) => {
      const isAgree = getScore(idx, q.answer) > 0;
      // Only include reasoning if the answer aligns with the final prediction
      if (
        (prediction === "agree" && isAgree) ||
        (prediction === "disagree" && !isAgree)
      ) {
        return isAgree ? reasonings[idx].agree : reasonings[idx].disagree;
      }
      return null;
    })
    .filter(Boolean) // Remove null values
    .join(" ");

  // Fade-in animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Delay to trigger fade-in
  }, []);

  return (
    <div
      className={`fade-in ${isVisible ? "show" : ""}`}
      style={{
        fontFamily: "'Montserrat', sans-serif",
        textAlign: "center",
        padding: "20px",
        lineHeight: "1.5",
      }}
    >
      <div
        style={{
          color: "#333333",
          padding: "15px 0",
          fontFamily: "'Courier New', monospace",
          fontSize: "1.8rem",
          textAlign: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          backdropFilter: "blur(10px)", // Blurs the content behind the header
          WebkitBackdropFilter: "blur(10px)", // For Safari compatibility
          boxSizing: "border-box",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle bottom shadow
          borderBottom: "2px solid rgba(0, 0, 0, 0.1)", // Optional thin line
        }}
      >
        CPSC 183 Final Project
      </div>

      <h1 style={{ fontSize: "2.5rem", color: "#FFB300" }}>Results</h1>
      <p style={{ fontSize: "1.8rem", marginTop: "20px" }}>
        Based on your answers, we predict that you <strong>{answer}</strong>{" "}
        TrueVoice.
      </p>
      <div
        style={{
          margin: "40px 0", // Removed horizontal auto margin
          padding: "20px",
          width: "100%", // Full width of the page
          backgroundColor: "#f9f9f9",
          border: "1px solid #ddd",
          borderRadius: "5px",
          textAlign: "center",
          boxSizing: "border-box", // Ensures padding doesn't affect width
        }}
      >
        <h2 style={{ fontSize: "2rem", color: "#FFB300" }}>Justification</h2>
        <p style={{ fontSize: "1.4rem" }}>{overallJustification}</p>
        <p style={{ fontSize: "1.4rem" }}>{reasoningParagraph}</p>
        <p style={{ fontSize: "1.4rem" }}>{copyrightJustification}</p>
        <p style={{ fontSize: "1.4rem" }}>{freeSpeechJustification}</p>
      </div>
      <div style={{ margin: "20px auto", padding: "20px 0", borderRadius: "20px" }}>
        <button
          onClick={goToHome}
          style={{
            padding: "15px 30px",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "1.5rem",
            backgroundColor: "#FFB300",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Results;
