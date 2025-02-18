import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "ResumeBot",
  initialMessages: [createChatBotMessage("Hi, I'm here to help you with details about my resume. What would you like to know?")],
};

export default config;
