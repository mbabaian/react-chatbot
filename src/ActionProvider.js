/* eslint-disable no-multi-str */

class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }
 
 handleEducation = () => {
  // disable window.location until deployment
  // window.location = 'https://mbabaian.surge.sh/#about';
  const message = this.createChatBotMessage(
    "As you can see, Monica received her Bachelor of Arts from the University of Houston in 2002,\
    where she majored in History and German Studies. Monica earned her Master of Library Science degree\
    from the University of North Texas in 2008. \n What else would you like to know?",
    {
      widget: "learningOptions",
    }
  );

  this.updateChatbotState(message);
};

  handleExperience = () => {
    // disable window.location until deployment
    // window.location = 'https://mbabaian.surge.sh/#about';
    const message = this.createChatBotMessage(
      "Monica began her career in education as a German teacher in Fort Bend ISD. As a librarian, she has worked \
      with children at both the elementary and secondary level as well as community college students and faculty.",
      {
        widget: "learningOptions",
      }
    );
  
    this.updateChatbotState(message);
};

  handleService = () => {
    // disable window.location until deployment
    // window.location = 'https://mbabaian.surge.sh/#about';
    const message = this.createChatBotMessage(
      "Monica has been an active member of the Texas Library Association for the past several years. \
      She has served TLA's District 8 as alternate-counsilor, counsilor, and district chair in addition to chair for \
      Digital Libraries Rouond table. She has also served on the Texas\
      Association of School Librarians selection committee and operating procedures committee. She is \
      also a member of the Texas Computer Educators Association.",
      {
        widget: "learningOptions",
      }
    );

    this.updateChatbotState(message);
  };

  handleWebDevelopment = () => {
    // disable window.location until deployment
    // window.location = 'https://mbabaian.surge.sh/#technologies';

    // TO DO: figure out a way to use a javascript variable for the html
   // var portfolio = "<a href='https://mbabaian.surge.sh> portfolio section</a>"

    const message = this.createChatBotMessage(
      `In case you couldn't already tell, Monica really enjoys coding bots. She first learned to code in HTML \
      way back in the mid-1990s. In fact, her first website was hosted by Geocities. Since then, Monica has continued\
      to develop her coding skills, learning CSS, Javascript, Python, and Linux. Take a look at the portfolio section of this website\
      to see a sample of projects that Monica has created.`,
      {
        widget: "learningOptions",
      }
    );
  
    this.updateChatbotState(message);
  };
  
  
  

updateChatbotState(message) {
  // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. 
  // The setState function here actually manipulates the top level state of the Chatbot, so it's important 
  // that we make sure that we preserve the previous state.

  this.setState((prevState) => ({
    ...prevState,
    messages: [...prevState.messages, message],
  }));
}
}
 export default ActionProvider;