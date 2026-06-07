import { useState, useRef, useEffect } from 'react';

export interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
}

export const BOT_REPLIES: Record<string, string> = {
  rude: "Well, you’re kinda rude and have no manners.",
  collaborate: "Sure! here's my instagram @lutfiandrra",
  default: "Thank you for reaching out to Lutfiandra Pohan. I am F.R.I.D.A.Y, Lutfiandra's assistant. If you do not receive a response within the expected time, please contact Lutfiandra directly at\n@lutfiandrra",
  woy: "Yes? What can i help u today maam//sir",
  greeting: "Yes?",
};

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
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
    const greetingWords = ["halo lutfi", "halo kak lutfi", "hi lutfi", "kak lutfi", "lutfi", "woy lutfi", "upi", "kak", "bang", "mas", "om"];

    let botText = BOT_REPLIES.default;

    if (rudeWords.some((word) => lowerText.includes(word))) {
      botText = BOT_REPLIES.rude;
    } else if (contactWords.some((word) => lowerText.includes(word))) {
      botText = BOT_REPLIES.collaborate;
    } else if (greetingWords.some((word) => lowerText.includes(word))) {
      botText = BOT_REPLIES.greeting;
    } else if (woyWords.some((word) => lowerText.includes(word))) {
      botText = BOT_REPLIES.woy;
    }

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text: botText }]);
    }, 900);
  };

  const clearMessages = () => {
    setMessages([]);
    setIsTyping(false);
  };

  return {
    messages,
    inputValue,
    setInputValue,
    isTyping,
    chatEndRef,
    sendMessage,
    clearMessages
  };
}
