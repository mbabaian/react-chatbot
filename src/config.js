// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/components/LearningOptions";
import LinkList from "./components/LinkList/LinkList"

var botName = "Milo";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi, I\'m ${botName}. Would you like to learn more about Monica?`, {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "bioLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Education",
            url:
              "https://mbabaian.surge.sh/#about",
            id: 1,
          },
          {
            text: "Library Skills",
            url:
              "https://mbabaian.surge.sh/#about",
            id: 2,
          },
          {
            text: "Service",
            url: "https://mbabaian.surge.sh/#about",
            id: 3,
          },
          {
            text: "Web Development",
            url:
                  "https://mbabaian.surge.sh/#technologies",
            id: 4,
          }
        ],
      },
    },
  ],
};

export default config;