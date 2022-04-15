import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
      { text: "Education", handler: props.actionProvider.handleEducation, id: 1 },
      { text: "Experience", handler: props.actionProvider.handleExperience, id: 2 },
      { text: "Service", handler: props.actionProvider.handleService, id: 3 },
      { text: "Web Development", handler: props.actionProvider.handleWebDevelopment, id: 4 },
    ];  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };
  
  export default LearningOptions;