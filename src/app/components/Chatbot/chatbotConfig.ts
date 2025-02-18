import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "ResumeBot",
  initialMessages: [createChatBotMessage("Hi, I'm here to help you with details about my resume. My responses are limited to that context. What would you like to know? (p.s. Shhhh, you can drag and place me.")]
};

export default config;
