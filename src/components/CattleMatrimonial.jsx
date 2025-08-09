import React, { useState, useEffect } from 'react';
import './CattleMatrimonial.css';

const CattleMatrimonial = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Cow',
    breed: 'Nadhan Pashu',
    age: '',
    color: '',
    owner: '',
    milkProduction: '',
    maritalStatus: 'Virgin/Bachelor',
    accommodation: '',
    diet: '',
    photo: 'public/img/male cow.jpg'
  })

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showRegistrationForm) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showRegistrationForm])

  const handleInputChange = React.useCallback((e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const handlePhotoUpload = React.useCallback((e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setFormData(prev => ({
          ...prev,
          photo: event.target.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Registration submitted:', formData)
    alert('Registration successful! Your cattle profile will be reviewed and activated within 24 hours.')
    setShowRegistrationForm(false)
    setFormData({
      name: '',
      gender: 'Cow',
      breed: 'Nadhan Pashu',
      age: '',
      color: '',
      owner: '',
      milkProduction: '',
      maritalStatus: 'Virgin/Bachelor',
      accommodation: '',
      diet: '',
      photo: 'public/img/kullan breed.jpg'
    })
    // Prevent any scrolling after form submission
    return false
  }

  const cattleProfiles = [
    {
      id: 1,
      name: "Ammini",
      gender: "Cow",
      age: "3 years",
      caste: "Nadhan Pashu",
      color: "Full Black with white spots",
      owner: "Sudhakaran PP",
      milkPerDay: "20L",
      maritalStatus: "Virgin (except veterinary doctor Prabha)",
      shedSpace: "Deluxe AC shed with fan",
      dailyDiet: "25 okka grass + premium hay",
      hobbies: "Grazing, gossiping by the pond, judging humans",
      lookingFor: "Handsome bull with good family background and strong horns",
      photo: "/img/cow widow.jpeg",
      location: "Palakkad, Kerala",
      education: "Graduated from Cow University (Grass Studies)",
      salary: "₹500/day (milk income)",
      familyDetails: "Father: Champion bull Raman, Mother: Prize-winning cow Kamala"
    },
    {
      id: 2,
      name: "Kannan",
      gender: "Bull",
      age: "5 years",
      caste: "Ongole",
      color: "Pure White (Very Fair)",
      owner: "Ramachandran",
      milkPerDay: "N/A (I'm a gentleman)",
      maritalStatus: "Bachelor, ready to settle down",
      shedSpace: "Spacious barn with morning sunlight",
      dailyDiet: "30 okka grass + protein supplements",
      hobbies: "Weight lifting (pulling carts), intimidating farmers, philosophical debates",
      lookingFor: "Beautiful, homely cow who can manage household (shed) efficiently",
      photo: "public/img/kala.avif",
      location: "Pathanamthitta",
      education: "Self-taught in agricultural operations",
      salary: "₹1000/day (field work)",
      familyDetails: "From a noble lineage of working bulls"
    },
    {
      id: 3,
      name: "Lakshmi",
      gender: "Buffalo",
      age: "4 years",
      caste: "Murrah",
      color: "Jet Black (Original Beauty)",
      owner: "Devi Lal",
      milkPerDay: "25L premium quality",
      maritalStatus: "Widow (husband eaten by tiger, very sad story)",
      shedSpace: "Traditional mud house with attached bathroom",
      dailyDiet: "35 okka green fodder + jaggery treats",
      hobbies: "Swimming, mud baths, scaring children, weather prediction",
      lookingFor: "Understanding buffalo who respects my past",
      photo: "public/img/pothu 3.avif",
      location: "Alapuzha",
      education: "Expert in traditional farming methods",
      salary: "₹800/day (milk + curd business)",
      familyDetails: "One calf (studying in agricultural college)"
    },
    {
      id: 4,
      name: "Mathukutty",
      gender: "Ox",
      age: "6 years",
      caste: "Hallikar",
      color: "Light Brown (Wheatish complexion)",
      owner: "Thomachan",
      milkPerDay: "N/A (Retired from field duty)",
      maritalStatus: "Divorced (wife ran away with a younger bull)",
      shedSpace: "Retirement home with medical facilities",
      dailyDiet: "20 okka light diet (doctor's orders)",
      hobbies: "Telling stories to young calves, complaining about modern farming",
      lookingFor: "Mature cow/buffalo for companionship in old age",
      photo: "public/img/pothu 2.avif",
      location: "Kottayam",
      education: "40 years field experience",
      salary: "₹200/day (pension)",
      familyDetails: "Estranged from family, looking for new beginning"
    },
    {
      id: 5,
      name: "Sundari",
      gender: "Cow",
      age: "2.5 years",
      caste: "Jersey Cross",
      color: "Brown & White Mix (Modern Look)",
      owner: "Dr. Shanthi (Veterinarian)",
      milkPerDay: "18L",
      maritalStatus: "Never been in relationship (very shy)",
      shedSpace: "Modern dairy farm with music system",
      dailyDiet: "Scientific diet plan + vitamins",
      hobbies: "Modeling for dairy advertisements, yoga, organic farming",
      lookingFor: "Progressive bull who supports working cows",
      photo: "public/img/cow widow.jpeg",
      location: "Pune, Maharashtra",
      education: "Modern dairy management course",
      salary: "₹600/day (brand ambassador)",
      familyDetails: "City-bred, well-educated family"
    },
    {
      id: 6,
      name: "Veerappan",
      gender: "Buffalo",
      age: "7 years",
      caste: "Bhadawari",
      color: "Dark Black (Tall, Dark & Handsome)",
      owner: "Vasu",
      milkPerDay: "N/A (But I ensure my wife produces 30L)",
      maritalStatus: "Widower with 3 grown-up calves",
      shedSpace: "Ancestral farmhouse with 5 acres",
      dailyDiet: "50 okka premium fodder + beer on weekends",
      hobbies: "Fighting, protecting territory, traditional wrestling",
      lookingFor: "Strong buffalo woman who can handle my attitude",
      photo: "/img/pothu4.jpg",
      location: "Uttar Pradesh",
      education: "Street smart, self-made buffalo",
      salary: "₹1200/day (breeding business)",
      familyDetails: "Joint family, looking for daughter-in-law who adjusts"
    }
  ]

  const filteredProfiles = selectedFilter === 'all' 
    ? cattleProfiles 
    : cattleProfiles.filter(profile => 
        profile.gender.toLowerCase() === selectedFilter.toLowerCase()
      )

  const ProfileCard = ({ profile }) => (
    <div className="profile-card">
      <div className="profile-header">
        <img className="profile-photo" src={profile.photo} alt={profile.name} />
        <div className="profile-basic">
          <h3>{profile.name}</h3>
          <p className="profile-tagline">
            {profile.age} • {profile.gender} • {profile.caste} • {profile.location}
          </p>
        </div>
        <div className="profile-status">
          <span className={`status-badge ${profile.maritalStatus.includes('Virgin') || profile.maritalStatus.includes('Bachelor') ? 'available' : 'complicated'}`}>
            Available
          </span>
        </div>
      </div>
      
      <div className="profile-details">
        <div className="detail-row">
          <span className="label">Color:</span>
          <span className="value">{profile.color}</span>
        </div>
        <div className="detail-row">
          <span className="label">Owner:</span>
          <span className="value">{profile.owner}</span>
        </div>
        <div className="detail-row">
          <span className="label">Milk Production:</span>
          <span className="value">{profile.milkPerDay}</span>
        </div>
        <div className="detail-row">
          <span className="label">Marital Status:</span>
          <span className="value">{profile.maritalStatus}</span>
        </div>
        <div className="detail-row">
          <span className="label">Accommodation:</span>
          <span className="value">{profile.shedSpace}</span>
        </div>
        <div className="detail-row">
          <span className="label">Daily Diet:</span>
          <span className="value">{profile.dailyDiet}</span>
        </div>
        <div className="detail-row">
          <span className="label">Income:</span>
          <span className="value">{profile.salary}</span>
        </div>
      </div>

      <div className="profile-description">
        <h4>About Me:</h4>
        <p><strong>Hobbies:</strong> {profile.hobbies}</p>
        <p><strong>Looking For:</strong> {profile.lookingFor}</p>
        <p><strong>Education:</strong> {profile.education}</p>
        <p><strong>Family:</strong> {profile.familyDetails}</p>
      </div>

      <div className="profile-actions">
        <button className="action-btn interest">
          💕 Express Interest
        </button>
        <button className="action-btn contact">
          📞 Contact Owner
        </button>
        <button className="action-btn shortlist">
          ⭐ Shortlist
        </button>
      </div>
    </div>
  )

  const handleOverlayClick = React.useCallback((e) => {
    if (e.target === e.currentTarget) {
      setShowRegistrationForm(false)
    }
  }, [])

  const renderRegistrationForm = React.useMemo(() => {
    if (!showRegistrationForm) return null;
    
    return (
      <div className="registration-overlay" onClick={handleOverlayClick}>
        <div className="registration-form">
          <h2>Register Your Cattle for Matrimony</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Upload Photo:</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handlePhotoUpload}
                style={{ marginBottom: '10px' }}
              />
              {formData.photo && (
                <div className="photo-preview">
                  <img 
                    src={formData.photo} 
                    alt="Preview" 
                    style={{ 
                      width: '100px', 
                      height: '100px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
                      border: '2px solid #0d6efd'
                    }} 
                  />
                </div>
              )}
            </div>
          <div className="form-group">
            <label>Name of Cattle:</label>
            <input 
              type="text" 
              name="name"
              value={formData.name || ''}
              onChange={handleInputChange}
              placeholder="e.g., Lakshmi, Raman, Sundari" 
              required
              autoComplete="off"
              key="cattle-name"
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleInputChange}>
              <option value="Cow">Cow</option>
              <option value="Bull">Bull</option>
              <option value="Buffalo">Buffalo</option>
              <option value="Ox">Ox</option>
            </select>
          </div>
          <div className="form-group">
            <label>Caste (Breed):</label>
            <select name="breed" value={formData.breed} onChange={handleInputChange}>
              <option value="Nadhan Pashu">Nadhan Pashu</option>
              <option value="Ongole">Ongole</option>
              <option value="Jersey Cross">Jersey Cross</option>
              <option value="Murrah">Murrah</option>
              <option value="Hallikar">Hallikar</option>
              <option value="Gir">Gir</option>
              <option value="Sahiwal">Sahiwal</option>
              <option value="Red Sindhi">Red Sindhi</option>
            </select>
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input 
              type="text" 
              name="age"
              value={formData.age || ''}
              onChange={handleInputChange}
              placeholder="e.g., 3 years 6 months" 
              required
              autoComplete="off"
              key="cattle-age"
            />
          </div>
          <div className="form-group">
            <label>Color/Complexion:</label>
            <input 
              type="text" 
              name="color"
              value={formData.color || ''}
              onChange={handleInputChange}
              placeholder="e.g., Fair, Wheatish, Dark, Black & White" 
              required
              autoComplete="off"
              key="cattle-color"
            />
          </div>
          <div className="form-group">
            <label>Owner Name:</label>
            <input 
              type="text" 
              name="owner"
              value={formData.owner || ''}
              onChange={handleInputChange}
              placeholder="Your name" 
              required
              autoComplete="off"
              key="owner-name"
            />
          </div>
          <div className="form-group">
            <label>Milk Production (for cows/buffaloes):</label>
            <input 
              type="text" 
              name="milkProduction"
              value={formData.milkProduction || ''}
              onChange={handleInputChange}
              placeholder="e.g., 15L per day"
              autoComplete="off"
              key="milk-production"
            />
          </div>
          <div className="form-group">
            <label>Marital Status:</label>
            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange}>
              <option value="Virgin/Bachelor">Virgin/Bachelor</option>
              <option value="Widow/Widower">Widow/Widower</option>
              <option value="Divorced">Divorced</option>
              <option value="Complicated">Complicated</option>
            </select>
          </div>
          <div className="form-group">
            <label>Shed/Accommodation:</label>
            <textarea 
              name="accommodation"
              value={formData.accommodation || ''}
              onChange={handleInputChange}
              placeholder="Describe living arrangements..."
              required
              autoComplete="off"
              key="accommodation"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Daily Diet (in okka):</label>
            <input 
              type="text" 
              name="diet"
              value={formData.diet || ''}
              onChange={handleInputChange}
              placeholder="e.g., 25 okka grass + supplements" 
              required
              autoComplete="off"
              key="diet"
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn">Register Profile</button>
            <button type="button" className="cancel-btn" onClick={() => setShowRegistrationForm(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    );
  }, [showRegistrationForm, formData, handleOverlayClick, handleSubmit, handlePhotoUpload, handleInputChange]);

  return (
    <div className="cattle-matrimonial">
      <div className="matrimonial-header">
        <h2>🐄 Cattle Matrimonial 💕</h2>
        <p className="header-tagline">
          "Where Every Moo Finds Its Match" - India's #1 Trusted Cattle Marriage Portal
        </p>
        <div className="header-stats">
          <span>✅ 10,000+ Successful Matches</span>
          <span>🏆 Award Winning Service</span>
          <span>🔒 100% Verified Profiles</span>
        </div>
      </div>

      <div className="matrimonial-controls">
        <div className="filters">
          <h3>Find Your Perfect Match:</h3>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              🐄 All Profiles
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'cow' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('cow')}
            >
              🐄 Cows
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'bull' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('bull')}
            >
              🐂 Bulls
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'buffalo' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('buffalo')}
            >
              🐃 Buffaloes
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'ox' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('ox')}
            >
              🐂 Oxen
            </button>
          </div>
        </div>

        <button 
          className="register-btn"
          onClick={() => setShowRegistrationForm(true)}
        >
          ➕ Register Your Cattle
        </button>
      </div>

      <div className="profiles-grid">
        {filteredProfiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>

      {renderRegistrationForm}

      <div className="matrimonial-footer">
        <div className="success-stories">
          <h3>💕 Recent Success Stories</h3>
          <div className="story">
            <p>"Thanks to Cattle Matrimonial, my cow Ganga found her perfect match! Now they have 3 beautiful calves." - Ramakrishna, Farmer</p>
          </div>
          <div className="story">
            <p>"Best platform for buffalo matrimony! Highly recommend to all cattle owners." - Devi Singh, Dairy Owner</p>
          </div>
        </div>
        
        <div className="contact-info">
          <h4>Contact Us:</h4>
          <p>📧 moo@cattlematrimony.com</p>
          <p>📞 1-800-MOO-LOVE</p>
          <p>🏢 Cattle Matrimonial HQ, Cow Street, Dairy District</p>
        </div>
      </div>
    </div>
  )
}

export default CattleMatrimonial
