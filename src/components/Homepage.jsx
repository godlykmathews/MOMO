import { useState } from 'react'
import './Homepage.css'

const Homepage = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      id: 'translator',
      title: 'Buffalo Translator',
      subtitle: 'Break the Communication Barrier',
      description: 'Finally understand what your buffalo is really thinking! Advanced AI-powered translation between human and authentic buffalo language.',
      icon: '🔄',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: ['Text & Voice Translation', 'Real Buffalo Thoughts', 'Philosophical Insights']
    },
    {
      id: 'matrimonial',
      title: 'Cattle Matrimonial',
      subtitle: 'Where Every Moo Finds Its Match',
      description: 'Kerala\'s most trusted matrimonial platform for cattle! Find the perfect life partner for your cow, buffalo, bull, or ox.',
      icon: '💕',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
      features: ['Verified Profiles', 'Caste-wise Search', 'Success Stories']
    },
    {
      id: 'linkedin',
      title: 'CattleIn Professional',
      subtitle: 'Network. Connect. Graze.',
      description: 'The professional networking platform for cattle. Build your bovine career, connect with industry leaders, and showcase your achievements.',
      icon: '💼',
      gradient: 'linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)',
      features: ['Professional Profiles', 'Job Opportunities', 'Industry Insights']
    },
    {
      id: 'community',
      title: 'Cattle Political Parties',
      subtitle: 'Your Voice, Your Vote',
      description: 'Join the political movement! Choose your party - Cattle Democratic Front (CDF), Bovine Janata Party (BJP), or United Cattle Front (UCF).',
      icon: '🏛️',
      gradient: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
      features: ['Political Representation', 'Community Forums', 'Voting Rights']
    }
  ]

  const testimonials = [
    {
      text: "This translator saved my marriage! I finally understood why my buffalo was always angry.",
      author: "Sudhakaran PP, Farmer",
      service: "Buffalo Translator"
    },
    {
      text: "Found the perfect match for my cow Lakshmi through this platform. 5 stars!",
      author: "Devi Lal, Dairy Owner",
      service: "Cattle Matrimonial"
    },
    {
      text: "Got a promotion at the dairy farm thanks to my CattleIn profile!",
      author: "Ammini (Professional Cow)",
      service: "CattleIn Professional"
    }
  ]

  const nearbySpots = [
    {
      id: 1,
      name: "Evergreen Meadows",
      type: "Grass Field",
      location: "Kuttanad, Kerala",
      rating: 4.8,
      distance: "2 km away",
      image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "The Mud Spa",
      type: "Mud Bath",
      location: "Wayanad, Kerala",
      rating: 4.9,
      distance: "5 km away",
      image: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "Green Pastures",
      type: "Grass Field",
      location: "Idukki, Kerala",
      rating: 4.7,
      distance: "8 km away",
      image: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      name: "Sodden Fields",
      type: "Mud Bath",
      location: "Alappuzha, Kerala",
      rating: 4.6,
      distance: "12 km away",
      image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="buffalo-emoji">🐃</span>
              Buffalo Services Hub
              <span className="buffalo-emoji">🐄</span>
            </h1>
            <p className="hero-subtitle">
              "പോത്തിന്റെ ചെവിയിൽ വേദം ഓതിട്ട് കാര്യം ഇല്ല"
            </p>
            <p className="hero-description">
              Not anymore! Welcome to the world's first comprehensive platform for all your buffalo and cattle needs.
              From communication to matrimony, professional networking to political representation - we've got every moo covered!
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Happy Buffaloes</span>
              </div>
              <div className="stat">
                <span className="stat-number">5,000+</span>
                <span className="stat-label">Successful Matches</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Career Placements</span>
              </div>
            </div>
          </div>
          <div className="hero-animation">
            <div className="floating-buffalo">🐃</div>
            <div className="floating-hearts">💕</div>
            <div className="floating-briefcase">💼</div>
            <div className="floating-speaker">🔊</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="section-header">
          <h2>Our Revolutionary Services</h2>
          <p>Everything your cattle family needs in one place</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card"
              style={{ background: service.gradient }}
              onClick={() => onNavigate(service.id)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <button className="service-btn">
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Spots Section */}
      

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>What Our Users Say</h2>
          <p>Real stories from our satisfied customers</p>
        </div>
        
        <div className="testimonials-slider">
          <button className="slider-btn prev" onClick={prevSlide}>←</button>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonials[currentSlide].text}"</p>
              <div className="testimonial-author">
                <strong>{testimonials[currentSlide].author}</strong>
                <span>{testimonials[currentSlide].service}</span>
              </div>
            </div>
          </div>
          
          <button className="slider-btn next" onClick={nextSlide}>→</button>
        </div>
        
        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Bridge the Species Gap?</h2>
          <p>Join thousands of satisfied users who have transformed their relationships with cattle!</p>
          <div className="cta-buttons">
            <button 
              className="cta-btn primary"
              onClick={() => onNavigate('translator')}
            >
              Start Translating 🔄
            </button>
            <button 
              className="cta-btn secondary"
              onClick={() => onNavigate('matrimonial')}
            >
              Find Love 💕
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="homepage-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>📧 moo@buffaloservices.com</p>
            <p>📞 1-800-BUFFALO</p>
            <p>🏢 Cattle Campus, Moo Street, Dairy District</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => onNavigate('translator')}>Buffalo Translator</button></li>
              <li><button onClick={() => onNavigate('matrimonial')}>Cattle Matrimonial</button></li>
              <li><button onClick={() => onNavigate('linkedin')}>CattleIn Professional</button></li>
              <li><button onClick={() => onNavigate('community')}>Political Parties</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <span>🐄 CattleBook</span>
              <span>🐃 BuffaloGram</span>
              <span>💼 CattleIn</span>
              <span>🎵 MooTok</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Buffalo Services Hub - Making the impossible, possible!</p>
          <p className="disclaimer">
            Created for entertainment purposes. No actual buffaloes were harmed in the making of this platform. 😄
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Homepage
