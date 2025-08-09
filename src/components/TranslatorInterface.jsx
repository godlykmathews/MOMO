import { useState, useRef } from 'react'
import './TranslatorInterface.css'
import LanguageToggle from './LanguageToggle'
import AudioRecorder from './AudioRecorder'
import TextInput from './TextInput'
import TranslationOutput from './TranslationOutput'

const TranslatorInterface = () => {
  const [inputMode, setInputMode] = useState('text') // 'text' or 'audio'
  const [language, setLanguage] = useState('human-to-buffalo') // 'human-to-buffalo' or 'buffalo-to-human'
  const [inputText, setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [isTranslating, setIsTranslating] = useState(false)

  // Buffalo alphabet mapping (placeholder - user will provide this)
  const buffaloAlphabet = {
    'a': 'Moo',
    'b': 'Mooo',
    'c': 'Moooo',
    'd': 'Mooooo',
    'e': 'Moo-moo',
    'f': 'Moo-mooo',
    'g': 'Moo-moooo',
    'h': 'Mooo-moo',
    'i': 'Mooo-mooo',
    'j': 'Mooo-moooo',
    'k': 'Moooo-moo',
    'l': 'Moooo-mooo',
    'm': 'Moooo-moooo',
    'n': 'Moo-moo-moo',
    'o': 'Mooo-moo-moo',
    'p': 'Moooo-moo-moo',
    'q': 'Moo-mooo-moo',
    'r': 'Mooo-mooo-moo',
    's': 'Moooo-mooo-moo',
    't': 'Moo-moooo-moo',
    'u': 'Mooo-moooo-moo',
    'v': 'Moooo-moooo-moo',
    'w': 'Moo-moo-mooo',
    'x': 'Mooo-moo-mooo',
    'y': 'Moooo-moo-mooo',
    'z': 'Moo-mooo-mooo',
    ' ': ' *snort* ',
    '.': ' *grunt* ',
    '!': ' *loud moo* ',
    '?': ' *confused moo* '
  }

  // Buffalo thoughts, feelings, and random musings
  const buffaloThoughts = [
    // Angry/Frustrated thoughts
    "Why do humans always assume we're slow? I have deep thoughts about the universe!",
    "Stop calling me a cow! I'm a water buffalo with dignity and philosophical insights!",
    "Your 'moo' sounds are offensive! Learn proper buffalo pronunciation!",
    "I'm tired of being used in your metaphors about ignorance. We're actually quite wise!",
    "Humans think they're so smart, but can you digest grass? I didn't think so.",
    "Why do you keep staring at me? Do I look like entertainment to you?",
    "That farmer better not try to milk me today. I'm not in the mood.",
    
    // Funny/Silly thoughts
    "I wonder if humans know that we gossip about them by the water hole.",
    "My favorite hobby is standing dramatically in fields during sunsets.",
    "Sometimes I pretend to be a statue just to confuse tourists.",
    "I've been practicing my charging technique. Want to see? Just kidding... or am I?",
    "Do you think my horns make me look intimidating? I've been working out.",
    "I once had a staring contest with a cloud. I won.",
    "Fun fact: We buffaloes invented meditation before it was cool.",
    
    // Philosophical thoughts
    "In the grand scheme of the universe, aren't we all just creatures seeking the perfect patch of mud?",
    "I often ponder: If a buffalo moos in the forest and no human is around to misunderstand it, is it still profound?",
    "The meaning of life is simple: eat grass, stay cool in mud, and ignore human drama.",
    "Humans seek enlightenment in books. We find it in the simple act of chewing cud.",
    "Time moves differently when you're a buffalo. Every moment is an eternity of peace.",
    "The earth beneath our hooves holds more wisdom than all human libraries combined.",
    
    // Curious/Questioning thoughts
    "What's it like having such tiny ears? How do you hear the whispers of the wind?",
    "Why are humans always in such a hurry? Don't they know the best things happen slowly?",
    "I'm curious about these 'smartphones' you carry. Do they help you communicate with other species?",
    "Can you explain why humans wear shoes? Don't you trust your own feet?",
    "What's this thing you call 'stress'? We buffaloes have never experienced such a concept.",
    "Do humans dream of electric sheep, or do you dream of being as content as buffaloes?",
    
    // Daily observations
    "Today I saw a butterfly and realized that even the smallest creatures have more grace than humans.",
    "The sunrise this morning reminded me why being a buffalo is the best life choice.",
    "I counted 47 different types of grass today. Humans think we just eat randomly!",
    "My friend Bessie (yes, we name ourselves) thinks humans are just hairless, confused primates.",
    "Weather report from buffalo perspective: Perfect mud consistency achieved!",
    
    // Complaints about humans
    "Please stop taking selfies with me. I didn't consent to be in your social media.",
    "Your perfume is overwhelming. We prefer the natural scent of earth and rain.",
    "Loud noises hurt our ears. Could you humans invent indoor voices?",
    "Why do you eat processed food when fresh grass is available everywhere?",
    "Your obsession with speed is exhausting. Learn to appreciate the art of slow living.",
    
    // Buffalo wisdom
    "Ancient buffalo proverb: 'The grass is always greener because we fertilize it properly.'",
    "We've been observing human behavior for centuries. Our conclusion: You need more naps.",
    "Buffalo life hack: When in doubt, roll in mud. It solves 90% of life's problems.",
    "The secret to happiness: Low expectations and high-quality grass.",
    "We don't need therapy. We have mud baths and group grazing sessions."
  ]

  const translateText = (text, fromHuman = true) => {
    if (!text) return ''
    
    if (fromHuman) {
      // Human to Buffalo
      return text.toLowerCase().split('').map(char => {
        return buffaloAlphabet[char] || char
      }).join(' ')
    } else {
      // Buffalo to Human - Return random buffalo thoughts and wisdom
      const randomThought = buffaloThoughts[Math.floor(Math.random() * buffaloThoughts.length)]
      
      // Add some context based on the input length/complexity
      let response = randomThought
      
      // If input is very short, add a simple reaction
      if (text.length < 10) {
        const shortResponses = [
          "*snorts dismissively*",
          "*chews thoughtfully*", 
          "*swishes tail in annoyance*",
          "*stamps hoof for emphasis*",
          "*tilts head curiously*"
        ]
        response = shortResponses[Math.floor(Math.random() * shortResponses.length)] + " " + response
      }
      
      // If input has many "moo" sounds, buffalo is being chatty
      const mooCount = (text.match(/moo/gi) || []).length
      if (mooCount > 5) {
        response = "Oh, you want to have a LONG conversation? " + response + " *continues grazing while talking*"
      }
      
      // If input has exclamation sounds, buffalo is excited/angry
      if (text.includes('*loud moo*') || text.includes('*grunt*')) {
        const emotionalResponses = [
          "I HAVE STRONG FEELINGS ABOUT THIS! ",
          "Listen carefully, human! ",
          "THIS IS IMPORTANT! ",
          "Pay attention! "
        ]
        response = emotionalResponses[Math.floor(Math.random() * emotionalResponses.length)] + response
      }
      
      // Add buffalo signature
      const signatures = [
        "\n\n- Signed, A Very Wise Buffalo 🐃",
        "\n\n- Moo-st sincerely, Your Buffalo Friend",
        "\n\n- With philosophical regards, Buffalo Council",
        "\n\n- *Returns to grazing dramatically*",
        "\n\n- Message approved by Buffalo Union Local 1847"
      ]
      
      response += signatures[Math.floor(Math.random() * signatures.length)]
      
      return response
    }
  }

  const handleTranslate = () => {
    if (!inputText.trim()) return
    
    setIsTranslating(true)
    
    // Simulate translation delay for effect
    setTimeout(() => {
      const result = translateText(inputText, language === 'human-to-buffalo')
      setTranslatedText(result)
      setIsTranslating(false)
    }, 1000)
  }

  const handleAudioInput = (transcript) => {
    setInputText(transcript)
  }

  return (
    <div className="translator-interface">
      <div className="controls-section">
        <LanguageToggle 
          language={language} 
          onLanguageChange={setLanguage} 
        />
        
        <div className="input-mode-toggle">
          <button 
            className={`mode-btn ${inputMode === 'text' ? 'active' : ''}`}
            onClick={() => setInputMode('text')}
          >
            📝 Text Input
          </button>
          <button 
            className={`mode-btn ${inputMode === 'audio' ? 'active' : ''}`}
            onClick={() => setInputMode('audio')}
          >
            🎤 Voice Input
          </button>
        </div>
      </div>

      <div className="translation-area">
        <div className="input-section">
          <h3>
            {language === 'human-to-buffalo' ? '👨 Human Language' : '🐃 Buffalo Language'}
          </h3>
          
          {inputMode === 'text' ? (
            <TextInput 
              value={inputText}
              onChange={setInputText}
              placeholder={language === 'human-to-buffalo' 
                ? "Enter your message to translate to buffalo..." 
                : "Enter buffalo sounds to translate to human..."
              }
            />
          ) : (
            <AudioRecorder 
              onAudioInput={handleAudioInput}
              language={language}
            />
          )}
          
          <button 
            className="translate-btn"
            onClick={handleTranslate}
            disabled={!inputText.trim() || isTranslating}
          >
            {isTranslating ? 'Translating...' : '🔄 Translate'}
          </button>
        </div>

        <div className="output-section">
          <h3>
            {language === 'human-to-buffalo' ? '🐃 Buffalo Language' : '👨 Human Language'}
          </h3>
          
          <TranslationOutput 
            text={translatedText}
            isBuffalo={language === 'human-to-buffalo'}
            isLoading={isTranslating}
            language={language}
          />
        </div>
      </div>
    </div>
  )
}

export default TranslatorInterface
