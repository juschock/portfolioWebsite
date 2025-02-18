import resumeData from '../../data/resume.js';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleExperience = () => {
    console.log("Handling experience...");
    const experience = resumeData.work_experience
      .map(exp => `${exp.role} at ${exp.company} (${exp.duration})`)
      .join(", ");
    const message = this.createChatBotMessage(`I have experience in: ${experience}`);
    this.setChatbotMessage(message);
  };

  handleSkills = () => {
    console.log("Handling skills...");
    const skills = resumeData.technical_proficiencies.development.join(", ");
    const message = this.createChatBotMessage(`My development skills include: ${skills}`);
    this.setChatbotMessage(message);
  };

  setChatbotMessage = (message) => {
    console.log("Setting chatbot message:", message);
    this.setState((prev) => {
      const newState = {
        ...prev,
        messages: [...prev.messages, message],
      };
      console.log("New state:", newState);
      return newState;
    });
  };
}

export default ActionProvider;
