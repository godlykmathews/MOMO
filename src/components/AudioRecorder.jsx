import { useState, useRef } from 'react'
import './AudioRecorder.css'

const AudioRecorder = ({ onAudioInput, language }) => {
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [recordedAudio, setRecordedAudio] = useState(null)
  const mediaRecorderRef = useRef(null)
  const audioChunksRef = useRef([])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' })
        const audioUrl = URL.createObjectURL(audioBlob)
        setRecordedAudio(audioUrl)
        
        // Simulate speech-to-text processing
        setIsProcessing(true)
        setTimeout(() => {
          let mockTranscript
          if (language === 'human-to-buffalo') {
            const humanPhrases = [
              "Hello buffalo, how are you today?",
              "I hope you're having a wonderful day in the field",
              "What do you think about the weather?",
              "Tell me your thoughts about life",
              "Do you have any wisdom to share?",
              "I'm sorry for all the times humans have misunderstood you"
            ]
            mockTranscript = humanPhrases[Math.floor(Math.random() * humanPhrases.length)]
          } else {
            const buffaloSounds = [
              "Moo mooo moooo *snort* *grunt*",
              "Moooo-moo-moo *loud moo* Moo-mooo",
              "*snort* Mooo moooo *confused moo*",
              "Moo-moo-moo *grunt* Moooo-moo *snort*",
              "Moooo *loud moo* *snort* Moo-mooo-moo",
              "*grunt* *snort* Moooo-moooo-moo *confused moo*"
            ]
            mockTranscript = buffaloSounds[Math.floor(Math.random() * buffaloSounds.length)]
          }
          onAudioInput(mockTranscript)
          setIsProcessing(false)
        }, 2000)
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error('Error accessing microphone:', error)
      alert('Unable to access microphone. Please check permissions.')
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
      setIsRecording(false)
    }
  }

  const playRecording = () => {
    if (recordedAudio) {
      const audio = new Audio(recordedAudio)
      audio.play()
    }
  }

  return (
    <div className="audio-recorder">
      <div className="recording-controls">
        {!isRecording ? (
          <button 
            className="record-btn start"
            onClick={startRecording}
            disabled={isProcessing}
          >
            🎤 Start Recording
          </button>
        ) : (
          <button 
            className="record-btn stop"
            onClick={stopRecording}
          >
            ⏹️ Stop Recording
          </button>
        )}
      </div>

      {isRecording && (
        <div className="recording-indicator">
          <div className="pulse-animation"></div>
          <span>Recording... Speak now!</span>
        </div>
      )}

      {isProcessing && (
        <div className="processing-indicator">
          <div className="spinner"></div>
          <span>Processing your {language === 'human-to-buffalo' ? 'human' : 'buffalo'} speech...</span>
        </div>
      )}

      {recordedAudio && !isProcessing && (
        <div className="playback-controls">
          <button className="play-btn" onClick={playRecording}>
            ▶️ Play Recording
          </button>
          <div className="audio-info">
            Recording ready! Audio has been processed.
          </div>
        </div>
      )}

      <div className="audio-tips">
        <p>💡 <strong>Tips:</strong></p>
        <ul>
          <li>Speak clearly into your microphone</li>
          <li>Ensure you're in a quiet environment</li>
          <li>{language === 'human-to-buffalo' ? 'Use normal human speech' : 'Make buffalo sounds (moo, grunt, snort)'}</li>
        </ul>
      </div>
    </div>
  )
}

export default AudioRecorder
