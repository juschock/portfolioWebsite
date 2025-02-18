class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      console.log("Parsing message:", message);
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("experience")) {
        console.log("Triggering handleExperience");
        this.actionProvider.handleExperience();
      }
  
      if (lowerCaseMessage.includes("skills")) {
        console.log("Triggering handleSkills");
        this.actionProvider.handleSkills();
      }
    }
  }
  
  export default MessageParser;
  