'use client';

import { IoPaperPlaneOutline, IoPersonCircle, IoArrowForward } from 'react-icons/io5';
import { useChatbot } from '@/lib/useChatbot';

const INSTAGRAM = "@lutfiandrra";

function renderBotMessage(text: string) {
  if (!text.includes(INSTAGRAM)) {
    return (
      <p className="font-cousine text-white text-sm leading-relaxed whitespace-pre-wrap break-words">
        {text}
      </p>
    );
  }
  const [before, after] = text.split(INSTAGRAM);
  return (
    <p className="font-cousine text-white text-sm leading-relaxed whitespace-pre-wrap break-words">
      {before}
      <span className="inline-flex max-w-full flex-wrap items-center gap-1 align-middle">
        <span className="break-all">{INSTAGRAM}</span>
        <a
          href="https://www.instagram.com/lutfiandrra/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 text-blue-400 hover:text-blue-300 transition-colors"
          aria-label="Open Instagram"
        >
          <IoArrowForward className="w-4 h-4" />
        </a>
      </span>
      {after}
    </p>
  );
}

export default function ChatbotWidget() {
  const {
    messages,
    inputValue,
    setInputValue,
    isTyping,
    chatEndRef,
    sendMessage,
    clearMessages,
  } = useChatbot();

  return (
    <div className="bg-slate-300/10 backdrop-blur-md rounded-2xl border border-slate-400/30 overflow-hidden flex flex-col min-h-[420px] max-h-[500px] md:min-h-[460px] md:max-h-[540px]">

      {/* Header */}
      <div className="shrink-0 flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-400/30 bg-slate-200/10">
        <div className="flex items-center gap-3">
          <IoPersonCircle className="w-10 h-10 text-slate-200 shrink-0" aria-hidden />
          <div className="min-w-0">
            <p className="font-cousine font-semibold text-white truncate">F.R.I.D.A.Y</p>
            <p className="text-xs text-slate-400 mt-0.5">Lutfiandra&apos;s Assistant</p>
          </div>
        </div>
        <button
          type="button"
          onClick={clearMessages}
          suppressHydrationWarning
          className="p-2 text-slate-400 hover:text-slate-200 transition-colors duration-200 cursor-pointer flex items-center justify-center rounded-lg hover:bg-slate-400/10"
          title="Clear Chat"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {/* Message area */}
      <div className="flex-1 overflow-y-auto flex flex-col bg-slate-400/5">
        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 min-h-[200px]">
            <p className="text-slate-400 text-sm text-center">Ask to Collaborate</p>
          </div>
        ) : (
          <div className="p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    msg.role === 'bot'
                      ? 'bg-zinc-900 text-slate-100 rounded-bl-md border border-white/10'
                      : 'bg-zinc-800 text-white rounded-br-md'
                  }`}
                >
                  {msg.role === 'bot' ? (
                    renderBotMessage(msg.text)
                  ) : (
                    <p className="font-cousine text-sm leading-relaxed whitespace-pre-wrap text-white">
                      {msg.text}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl px-4 py-2.5 bg-zinc-900 text-slate-100 rounded-bl-md border border-white/10">
                  <p className="font-cousine text-sm leading-relaxed whitespace-pre-wrap text-slate-300 italic animate-pulse">
                    F.R.I.D.A.Y is typing
                  </p>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className="shrink-0 p-3 border-t border-slate-400/30 bg-slate-400/5">
        <div className="flex gap-2 rounded-xl border border-slate-400/30 bg-slate-950/30 focus-within:border-slate-300/50 focus-within:ring-2 focus-within:ring-slate-300/20 transition-all">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage(inputValue)}
            placeholder="Enter your message"
            suppressHydrationWarning
            className="flex-1 rounded-l-xl bg-transparent px-4 py-3 text-base text-white placeholder:text-slate-400 focus:outline-none outline-none"
          />
          <button
            type="button"
            onClick={() => sendMessage(inputValue)}
            suppressHydrationWarning
            className="shrink-0 rounded-r-xl px-4 py-2 text-slate-400 hover:text-slate-200 transition-colors disabled:opacity-50"
            aria-label="Kirim"
          >
            <IoPaperPlaneOutline className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  );
}
