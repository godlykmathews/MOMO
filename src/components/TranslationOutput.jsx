import { useState } from 'react'
import './TranslationOutput.css'

const TranslationOutput = ({ text, isBuffalo, isLoading, language }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const playAudio = () => {
    if (!text || isPlaying) return
    
    setIsPlaying(true)
    
    if (isBuffalo) {
      // For buffalo sounds, we'll simulate playing buffalo audio
      // User will provide actual audio clips later
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.5
      utterance.pitch = 0.3
      utterance.volume = 0.8
      utterance.onend = () => setIsPlaying(false)
      speechSynthesis.speak(utterance)
    } else {
      // For human text, use normal speech synthesis
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.onend = () => setIsPlaying(false)
      speechSynthesis.speak(utterance)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
    // Could add a toast notification here
  }

  if (isLoading) {
    return (
      <div className="translation-output loading">
        <div className="loading-animation">
          <div className="buffalo-thinking">🐃</div>
          <div className="thinking-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
        <p>
          {language === 'buffalo-to-human' 
            ? "Consulting with the buffalo council and interpreting deep thoughts..."
            : "Converting to authentic buffalo language..."
          }
        </p>
      </div>
    )
  }

  if (!text) {
    return (
      <div className="translation-output empty">
        <div className="empty-state">
          <span className="empty-icon">{isBuffalo ? '🐃' : '👨'}</span>
          <p>Translation will appear here</p>
          <small>
            {isBuffalo 
              ? 'Buffalo language with authentic moos and grunts' 
              : 'Human-readable translation'
            }
          </small>
        </div>
      </div>
    )
  }

  return (
    <div className={`translation-output ${isBuffalo ? 'buffalo' : 'human'}`}>
      <div className="output-content">
        <div className="output-text">
          {text}
        </div>
        
        <div className="output-controls">
          <button 
            className="control-btn play-btn"
            onClick={playAudio}
            disabled={isPlaying}
            title="Play audio"
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          
          <button 
            className="control-btn copy-btn"
            onClick={copyToClipboard}
            title="Copy to clipboard"
          >
            📋
          </button>
          
          {isBuffalo && (
            <div className="buffalo-indicator">
              <span className="buffalo-emoji">🐃</span>
              <span className="buffalo-label">Authentic Buffalo</span>
            </div>
          )}
        </div>
      </div>
      
      {language === 'buffalo-to-human' && text && (
        <div className="buffalo-notes">
          <p><strong>Buffalo Communication Notes:</strong></p>
          <ul>
            <li>🧠 Buffaloes have deep thoughts and philosophical insights</li>
            <li>😤 They're often frustrated with human misconceptions</li>
            <li>😄 They have a great sense of humor about life</li>
            <li>🤔 They observe human behavior with curiosity</li>
            <li>🌱 Their wisdom comes from simple, natural living</li>
          </ul>
          <small><em>Each translation reveals authentic buffalo thoughts and feelings!</em></small>
        </div>
      )}
      
      {language === 'human-to-buffalo' && text && (
        <div className="buffalo-notes">
          <p><strong>Translation Notes:</strong></p>
          <ul>
            <li>*snort* = space</li>
            <li>*grunt* = period</li>
            <li>*loud moo* = exclamation</li>
            <li>*confused moo* = question</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default TranslationOutput
