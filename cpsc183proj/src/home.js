import React, { useState } from "react";

const Home = ({ onStart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
        lineHeight: "1.8",
        margin: "0",
        padding: "0",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          backgroundColor: "#007B83",
          color: "white",
          padding: "15px 0",
          fontSize: "1.8rem",
          textAlign: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        CPSC 183 Final Project
      </div>

        {/* Green Banner */}
            <div
        style={{
          backgroundColor: "#eb9963",
          color: "white",
          padding: "40px 20px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", margin: "0 0 20px" }}>
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
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "40px 20px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", margin: "0 0 20px" }}>
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
          backgroundColor: "#87CEFA", // Light blue background
          color: "white",
          padding: "20px",
          textAlign: "center",
          fontSize: "2rem", // Matching green banner font size
          fontWeight: "bold",
          cursor: "pointer",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            backgroundColor: "#E0F2F7", // Lighter blue background
            color: "#333",
            padding: "40px 20px",
            textAlign: "center", // Centered text
            lineHeight: "1.8",
            fontSize: "1.8rem", // Bigger font size for expanded content
            width: "100%",
            boxSizing: "border-box",
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
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button
          onClick={onStart}
          style={{
            padding: "20px 40px",
            fontSize: "1.8rem",
            backgroundColor: "#4CAF50",
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
