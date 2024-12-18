import React, { useState, useEffect } from "react";
import "./styles.css";

// Add a global style reset
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.overflowX = "hidden"; // Prevent horizontal scrolling


const Home = ({ onStart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Fade-in animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Delay to trigger fade-in
  }, []);

  // Start next page at top of page
  const handleStart = () => {
    window.scrollTo(0, 0);
    onStart();
  }

  return (
    <div
      className={`fade-in ${isVisible ? "show" : ""}`}
      style={{
        backgroundColor: "white",
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
          color: "dark gray",
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
          zoom: 0.8,
        }}
      >
        CPSC 183 Final Project
      </div>

        {/* Green Banner */}
            <div
        style={{
          backgroundColor: "#FFF9C4",
          color: "#333333",
          padding: "40px 80px",
          textAlign: "center",
          borderRadius: "20px", // Rounded corners
          margin: "50px auto", // Increased spacing between bubbles
          maxWidth: "1500px", // Optional: Center the bubbles with max width
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
          zoom: 0.8,
        }}
      >
        <h1 style={{fontFamily: "'Montserrat', sans-serif", fontSize: "2.5rem", margin: "0 0 20px" }}>
          A Personality Quiz on Copyright
        </h1>
        <p
          style={{
            fontSize: "1.8rem", // Bigger text
            margin: "0",
            lineHeight: "1.8",
          }}
        >
Below, you will find details on a fictional court case that falls into many legal and moral gray areas. We aim to create a “personality test” that will measure your legal philosophies to try and predict your stance on the given scenario. We will then provide a dynamically generated justification based on your answers to provide more insight into our prediction and your answers.
        </p>
      </div>

      {/* Green Banner */}
      <div
        style={{
          backgroundColor: "#FFE082",
          color: "#333333",
          padding: "40px 80px",
          textAlign: "center",
          borderRadius: "20px", // Rounded corners
          margin: "30px auto", // Increased spacing between bubbles
          maxWidth: "1500px", // Optional: Center the bubbles with max width
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
          zoom: 0.8,
        }}
      >
        <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "2.5rem", margin: "0 0 20px" }}>
          Summary
        </h1>
        <p
          style={{
            fontSize: "1.8rem", // Bigger text
            margin: "0",
            lineHeight: "1.8",
          }}
        >

          A political advocacy group leverages an AI model trained on a dataset
          containing copyrighted books, movies, and social media posts to
          generate memes and short videos. These creations are designed to
          critique political candidates and policies. The group disseminates
          these memes and videos on platforms like TikTok, pairing iconic movie
          scenes, dialogue, or music with political messages. The campaign
          becomes massively influential, with millions of views shaping public
          opinion. However, the campaign is monetized through sponsorships and
          ad revenue.
        </p>
      </div>

      {/* Light Blue Banner with Dropdown */}
      <div
        style={{
          backgroundColor: "#FFF8E1", // Light blue background
          color: "#5C4033",
          padding: "20px 80px",
          textAlign: "center",
          fontSize: "2rem", // Matching green banner font size
          fontWeight: "bold",
          cursor: "pointer",
          width: "100%",
          borderRadius: "20px", // Rounded corners
          margin: "20px auto", // Spacing between sections
          maxWidth: "1500px", // Optional: Center the bubbles with max width
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zoom: 0.8,
        }}
        onClick={toggleDetails}
      >
        <span style={{ marginRight: "10px" }}>Full Details</span>
        <span
          style={{
            transform: showDetails ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
            fontSize: "1.4rem", // Smaller dropdown triangle
            marginTop: "3px",
          }}
        >
          ▼
        </span>
      </div>

      {/* Full Details Section (Expandable) */}
      {showDetails && (
        <div
          style={{
            backgroundColor: "#FFF3E0", // Lighter blue background
            color: "#333",
            padding: "40px 80px",
            textAlign: "center", // Centered text
            lineHeight: "1.8",
            fontSize: "1.8rem", // Bigger font size for expanded content
            width: "100%",
            borderRadius: "20px", // Rounded corners
            margin: "20px auto", // Spacing between sections
            maxWidth: "1500px", // Optional: Center the bubbles with max width
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
            zoom: 0.8,
          }}
        >
          <p>
          During a high-stakes election season, a political advocacy group called TrueVoice launched a digital campaign aimed at critiquing political candidates and policies. The group utilized a sophisticated AI model trained on a diverse dataset that included copyrighted books, movies, music, news articles, and social media posts. The AI-generated output consisted of short-form videos, memes, and multimedia posts that combined recognizable elements from popular culture with political messaging.
          </p>
          <p>
          TrueVoice’s content quickly gained traction across platforms like TikTok, Instagram, and YouTube Shorts, where its engaging and provocative style resonated with millions of users. Using widely familiar movie scenes, viral song lyrics, and edited clips from news broadcasts, the campaign delivered pointed critiques of political figures, often with humor, irony, or satire. For example:
          </p>
          <ul style={{ margin: "20px auto", display: "inline-block", textAlign: "left" }}>
            <li>
              A clip from a well-known animated film was re-edited to depict a
              politician as a villainous character.
            </li>
            <li>
              Song lyrics about greed were paired with visuals of political
              events involving wealth and luxury.
            </li>
            <li>
            Selectively edited news footage presented candidates in ways that emphasized perceived contradictions or failures.
            </li>
          </ul>
          <p>
          The campaign blurred the line between entertainment and commentary, making it highly shareable. As the content spread, engagement metrics soared, and the group monetized its success through sponsorships, ad revenue, and donations.
          </p>
          <p>
          Critics began to raise concerns about TrueVoice’s methods and the consequences of its campaign. Some objected to the use of copyrighted material, arguing that iconic works were being repurposed without authorization or credit. Movie studios, musicians, and other creators pointed to scenes, dialogue, and music that had been lifted from their works and inserted into political content that was now part of a monetized operation.
          </p>
          <p>
          Others questioned the accuracy and tone of the campaign. While TrueVoice maintained that its content represented legitimate critique, opponents argued that heavily edited clips and exaggerated narratives misrepresented facts, unfairly targeting political figures. Certain videos used language and imagery that opponents described as inflammatory, reducing nuanced issues to oversimplified or distorted narratives. For example:
          </p>
          <ul style={{ margin: "20px auto", display: "inline-block", textAlign: "left" }}>
            <li>
              A post portrayed a political candidate alongside ominous music and
              movie monologues to imply a threat to public safety.
            </li>
            <li>
              A satirical meme mocked a candidate’s family, simplifying their
              background into a caricature.
            </li>
          </ul>
          <p>
          Supporters of TrueVoice defended the group’s work as a modern form of political commentary that made complex issues accessible to a broader audience. They pointed to the content’s use of humor, irony, and cultural references as a legitimate method of critique. Others saw it as an important counterbalance to traditional media narratives, particularly for younger audiences accustomed to consuming news through social media formats.
          </p>
          <p>
          However, the campaign’s rapid spread and influence raised questions about responsibility. Political opponents argued that the campaign’s tone and approach were not only misleading but harmful, especially when reputations were affected by content that reached millions of viewers.
          </p>
          <p>
          As the election progressed, legal and ethical concerns surrounding TrueVoice’s campaign grew. The widespread use of copyrighted material, the monetization of content containing familiar pop-culture elements, and the group’s reliance on AI-driven editing tools brought attention to unresolved questions about modern digital expression. Critics questioned the extent to which such content could reshape public opinion while operating in a gray area of intellectual property, accuracy, and public discourse.
          </p>
          <p>
          TrueVoice continued to defend its campaign, asserting that it used the tools of modern technology to engage citizens in political critique and encourage participation. For some, the campaign demonstrated the power of digital platforms and AI to disrupt traditional media and challenge public figures. For others, it represented a troubling shift in the boundaries of cultural expression, accountability, and public debate.
          </p>
        </div>
      )}

      {/* Continue Button */}
      <div style={{ textAlign: "center", margin: "40px auto", padding: "20px 0", borderRadius: "20px" }}>
        <button
          onClick={handleStart}
          style={{
            padding: "15px 30px",
            fontSize: "1.8rem",
            fontFamily: "'Montserrat', sans-serif",
            backgroundColor: "#FFB300",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Home;
