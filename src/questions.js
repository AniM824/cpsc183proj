import React, { useState, useEffect } from "react";
import "./styles.css";

// Add a global style reset
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.overflowX = "hidden"; // Prevent horizontal scrolling

const Questions = ({ onSubmit }) => {

    const [questions, setQuestions] = useState([
        {
          id: 1,
          prompt: "Authors Guild v. Google (2015)",
          description:
            "Google digitized millions of books for its Google Books search engine, allowing users to search text and view small snippets of copyrighted works. The Authors Guild argued this violated copyright law, while Google claimed it was transformative and beneficial for research and education. The court ruled in favor of Google, holding that its snippet display was fair use because it was transformative and did not harm the market for the original works.",
          answer: "",
        },
        {
          id: 2,
          prompt: "Google LLC v. Oracle America, Inc. (2021)",
          description:
            "Google used 11,500 lines of Java API code to develop its Android platform, arguing this use was necessary for innovation and fell under fair use. Oracle, the owner of the Java API, claimed copyright infringement, stating Google’s use was not transformative. The Supreme Court sided with Google, concluding that its use was fair because it was transformative, limited in scope, and did not harm Oracle's market.",
          answer: "",
        },
        {
          id: 3,
          prompt: "Bloomberg v. Swatch Group (2014)",
          description:
            "Swatch held a private earnings call for analysts and later released a transcript. Bloomberg published the entire audio recording, claiming it was essential for news reporting. Swatch sued for copyright infringement, arguing the recording was not intended for public use. The court ruled in favor of Bloomberg, stating that the full reproduction was fair use due to its transformative purpose of news dissemination.",
          answer: "",
        },
        {
          id: 4,
          prompt: "Warner Bros. Entertainment Inc. v. RDR Books (2008)",
          description:
            "This case revolved around The Harry Potter Lexicon, a fan-created encyclopedia based on J.K. Rowling’s Harry Potter series. The author and Warner Bros. sued RDR Books, arguing that the Lexicon infringed on their copyrights by copying substantial portions of the books without permission. The court ruled in favor of Warner Bros., restricting the Lexicon’s publication due to its commercial nature and market harm.",
          answer: "",
        },
        {
          id: 5,
          prompt: "Sony Corp. v. Universal City Studios (1984)",
          description:
            "Universal sued Sony over the Betamax VCR, claiming it enabled users to record copyrighted TV programs, leading to widespread copyright infringement. Sony argued the device had substantial non-infringing uses, such as time-shifting (recording programs for later viewing). The Supreme Court ruled in favor of Sony, establishing the \"substantial non-infringing use\" doctrine and holding that manufacturers cannot be held liable for copyright infringement by their customers if the product has significant lawful applications.",
          answer: "",
        },
        {
          id: 6,
          prompt: "New York Times Co. vs. Sullivan (1964)",
          description: "Sullivan sued the New York Times over an advertisement that criticized police actions in Montgomery, Alabama, during the civil rights movement, claiming inaccuracies harmed his reputation. The Times argued the First Amendment protects free expression, even if some errors occur. The Supreme Court ruled in favor of the Times, emphasizing that public officials must prove \"actual malice\"—meaning the statements were made with knowledge of their falsity or reckless disregard for the truth.",
          answer: "",
        },
        {
          id: 7,
          prompt: "Snyder v. Phelps (2011)",
          description: "The family of Marine Lance Corporal Matthew Snyder sued the Westboro Baptist Church for emotional distress after the church picketed Snyder's funeral with hateful messages. The church argued their speech was protected under the First Amendment. The Supreme Court ruled in favor of the church, holding that speech on matters of public concern, even if offensive or hateful, is protected under the Constitution when conducted in a lawful and peaceful manner.",
          answer: "",
        },
        {
          id: 8,
          prompt: "Hustler Magazine v. Falwell (1988)",
          description: "Reverend Jerry Falwell sued Hustler Magazine for intentional infliction of emotional distress after it published a satirical parody suggesting Falwell had an inappropriate relationship with his mother. Falwell claimed the parody caused him severe emotional harm. The Supreme Court ruled in favor of Hustler Magazine, holding that public figures cannot recover damages for emotional distress caused by satire or parody unless it includes false statements made with \"actual malice.\" The Court emphasized that satire and parody, even if offensive, are protected under the First Amendment to safeguard free expression and prevent the suppression of critical or humorous commentary.",
          answer: "",
        },
        {
          id: 9,
          prompt: "Cohen v. Google, Inc. (2009)",
          description: "Model Liskula Cohen sued Google to reveal the identity of an anonymous blogger who called her a “skank” and other derogatory terms on a blog. Cohen argued the statements were defamatory, and Google, as the blog's host, was compelled to disclose the poster's identity. The New York court ruled in favor of Cohen, ordering Google to unmask the anonymous blogger, affirming that individuals who post defamatory content online cannot always hide behind anonymity when the statements cause reputational harm.",
          answer: "",
        },
        {
          id: 10,
          prompt: "Obsidian Finance Group, LLC v. Cox (2011)",
          description: "In this case, blogger Crystal Cox was sued for defamation by Obsidian Finance Group after she published critical posts accusing the company and its co-founder of fraud. Cox argued that her statements were protected under the First Amendment, claiming she was acting as a journalist. The court ruled against Cox, holding that she could not invoke journalist protections because she failed to demonstrate that her posts adhered to established journalistic standards, such as fact-checking and accuracy. The decision underscored that online publishers, including bloggers, can be held liable for defamation if they make false statements of fact without meeting the standards applied to traditional media.",
          answer: "",
        },
    ]);

    // Fade-in animation
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setTimeout(() => setIsVisible(true), 100); // Delay to trigger fade-in
    }, []);

  const allAnswered = questions.every((q) => q.answer !== "");

  const handleAnswerChange = (id, answer) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, answer } : q))
    );
  };

  const handleSubmit = () => {
    if (allAnswered) {
      window.scrollTo(0, 0); // Scrolls to the top of the page
      onSubmit(questions);
    }
  };

  return (
    <div
      className={`fade-in ${isVisible ? 'show' : ""}`}
      style={{
        fontFamily: "'Montserrat', sans-serif",
        color: "#333",
        lineHeight: "1.5",
        margin: "0",
        padding: "0",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          fontFamily: "'Courier New', monospace",
          color: "dark gray",
          padding: "15px 0",
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

      {/* Yellow Banner */}
      <div
        style={{
          backgroundColor: "#FFC107",
          color: "#333",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1.4rem", margin: "0", lineHeight: "1.6" }}>
          Please answer the following questions to help us explore your opinions
          on landmark legal cases, ethical dilemmas, and societal values. Answer whether you agree 
          or disgree with each court's ruling.
        </p>
      </div>

      {/* Questions */}
      <div style={{ padding: "30px", maxWidth: "1000px", margin: "0 auto" }}>
        {questions.map((q) => (
          <div
            key={q.id}
            style={{
              marginBottom: "30px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "20px",
            }}
          >
            <h2 style={{ fontSize: "1.8rem", textAlign: "center" }}>
              {q.prompt}
            </h2>
            <p style={{ fontSize: "1.4rem", textAlign: "center" }}>
              {q.description}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              {["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"].map(
                (option) => (
                  <button
                    key={option}
                    style={{
                      padding: "15px 20px",
                      backgroundColor:
                        q.answer === option ? "#d0eaff" : "#f0f0f0",
                      border: "1px solid #ccc",
                      cursor: "pointer",
                      flex: "1",
                      transition: "background 0.3s",
                    }}
                    onClick={() => handleAnswerChange(q.id, option)}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>
        ))}

        {/* Submit Button */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            disabled={!allAnswered}
            onClick={handleSubmit}
            style={{
              padding: "15px 30px",
              fontSize: "1.6rem",
              fontFamily: "'Montserrat', sans-serif",
              backgroundColor: allAnswered ? "#FFB300" : "#ccc",
              color: "white",
              border: "none",
              cursor: allAnswered ? "pointer" : "not-allowed",
              borderRadius: "5px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
