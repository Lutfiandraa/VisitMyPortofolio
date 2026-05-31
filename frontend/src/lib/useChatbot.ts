import { useState, useRef, useEffect } from 'react';

export interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
}

export const BOT_REPLIES: Record<string, string> = {
  rude: "Well, you’re kinda rude and have no manners.",
  collaborate: "Sure! here's my personal email lutfiandrapohann@gmail.com",
  default: "Thank you for reaching out to Lutfiandra Pohan. I am F.R.I.D.A.Y, Lutfiandra's assistant. If you do not receive a response within the expected time, please contact Lutfiandra directly at\nlutfiandrapohann@gmail.com",
  woy: "Yes? What can i help u today maam//sir",
};

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInputValue("");

    const lowerText = trimmed.toLowerCase();

    const rudeWords = ["anjing", "babi", "tai", "bangsat"];
    const contactWords = ["collaborate", "collab", "let's talk", "where to chat?", "contact person", "business"];
    const woyWords = ["woy", "woi"];

    let botText = BOT_REPLIES.default;

    if (rudeWords.some((word) => lowerText.includes(word))) {
      botText = BOT_REPLIES.rude;
    } else if (contactWords.some((word) => lowerText.includes(word))) {
      botText = BOT_REPLIES.collaborate;
    } else if (woyWords.some((word) => lowerText.includes(word))) {
      botText = BOT_REPLIES.woy;
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: botText }]);
    }, 600);
  };

  const clearMessages = () => setMessages([]);

  return {
    messages,
    inputValue,
    setInputValue,
    chatEndRef,
    sendMessage,
    clearMessages
  };
}
