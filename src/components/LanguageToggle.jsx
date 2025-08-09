import './LanguageToggle.css'

const LanguageToggle = ({ language, onLanguageChange }) => {
  return (
    <div className="language-toggle">
      <div className="toggle-container">
        <button
          className={`toggle-option ${language === 'human-to-buffalo' ? 'active' : ''}`}
          onClick={() => onLanguageChange('human-to-buffalo')}
        >
          <span className="icon">👨</span>
          <span className="arrow">→</span>
          <span className="icon">🐃</span>
          <span className="label">Human to Buffalo</span>
        </button>
        
        <button
          className={`toggle-option ${language === 'buffalo-to-human' ? 'active' : ''}`}
          onClick={() => onLanguageChange('buffalo-to-human')}
        >
          <span className="icon">🐃</span>
          <span className="arrow">→</span>
          <span className="icon">👨</span>
          <span className="label">Buffalo to Human</span>
        </button>
      </div>
    </div>
  )
}

export default LanguageToggle
