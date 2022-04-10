// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
     
      if (message.includes('hi'))
      {
        console.log("Message received")
      }    
      else {
        console.log("Sorry. I do not understand.")
      }
    }
  }
  
  export default MessageParser;