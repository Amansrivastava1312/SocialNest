import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Set up the embedded chatbot configuration
    window.embeddedChatbotConfig = {
      chatbotId: "tVlSFpN7WdXKcrr0gkAOW",
      domain: "www.chatbase.co",
    };

    // Dynamically load the chatbot script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <></>;
};

export default Chatbot;
