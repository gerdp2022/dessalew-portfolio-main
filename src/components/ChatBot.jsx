import { useState, useRef, useEffect } from 'react'
import { findAnswer, botSuggestions } from '../data/botKnowledge.js'
import './ChatBot.css'

const GREETING = {
  role: 'bot',
  text: "Hi, I'm a quick assistant for Dessalew's portfolio. Ask me about his experience, skills, education, certifications, projects, or how to get in touch.",
}

const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([GREETING])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const send = (text) => {
    const question = text.trim()
    if (!question) return

    setMessages((prev) => [...prev, { role: 'user', text: question }])
    setInput('')
    setIsTyping(true)

    window.setTimeout(() => {
      const answer = findAnswer(question)
      setMessages((prev) => [...prev, { role: 'bot', text: answer }])
      setIsTyping(false)
    }, 420)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    send(input)
  }

  return (
    <div className="chatbot">
      {open && (
        <div className="chatbot__panel" role="dialog" aria-label="Ask about Dessalew">
          <div className="chatbot__window">
            <span className="chatbot__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="chatbot__path mono">~/ask-dessalew</span>
            <button
              className="chatbot__close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chatbot__messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chatbot__bubble chatbot__bubble--${m.role}`}>
                {m.text}
              </div>
            ))}
            {isTyping && (
              <div className="chatbot__bubble chatbot__bubble--bot chatbot__bubble--typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="chatbot__suggestions">
              {botSuggestions.map((s) => (
                <button key={s} onClick={() => send(s)} className="mono">
                  {s}
                </button>
              ))}
            </div>
          )}

          <form className="chatbot__input" onSubmit={onSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              aria-label="Type your question"
            />
            <button type="submit" className="btn btn--primary btn--sm" disabled={!input.trim()}>
              Send
            </button>
          </form>
        </div>
      )}

      <button
        className="chatbot__launcher"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close chat assistant' : 'Ask about Dessalew'}
      >
        {open ? '×' : 'Ask me'}
      </button>
    </div>
  )
}

export default ChatBot
