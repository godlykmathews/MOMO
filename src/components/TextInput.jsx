import './TextInput.css'

const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <div className="text-input-container">
      <textarea
        className="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={6}
        maxLength={500}
      />
      <div className="character-count">
        {value.length}/500 characters
      </div>
    </div>
  )
}

export default TextInput
