import { ChatOpenAI } from "langchain/chat_models/openai";
import { AIMessage, HumanMessage, SystemMessage } from "langchain/schema";

const API = {
  GetChatbotResponse: async (message, chatHistory) => {
    const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

    const chat = new ChatOpenAI({
      temperature: 0.9,
      openAIApiKey: OPENAI_API_KEY,
    });
    if (message == "") {
      return "Hello! I'm here to help you with your financial goals. May I know your name and age, please?";
    }
    //const response = await chat.call(chatHistory);

    var newChat = [...chatHistory, new HumanMessage(message)];
    console.log(newChat);
    const response = await chat.call(newChat);

    return response.content;
    /*return new Promise(function (resolve, reject) {
      const chat = new ChatOpenAI({
        temperature: 0.9,
        openAIApiKey: OPENAI_API_KEY,
      });
      const response = await chat.call([
        new HumanMessage(
          "What is a good name for a company that makes colorful socks?"
        ),
      ]);
      console.log(response);
      // Pass in a list of messages to `call` to start a conversation. In this simple example, we only pass in one message.
      console.log(chatHistory);
      //const response = chat.call(chatHistory);
      //console.log(response);
      resolve(response);
    });*/
  },
};

export default API;
