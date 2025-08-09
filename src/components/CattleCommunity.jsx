import { useState } from 'react'
import './CattleCommunity.css'

const CattleCommunity = () => {
  const [selectedParty, setSelectedParty] = useState(null)
  const [showVotingModal, setShowVotingModal] = useState(false)

  const parties = [
    {
      id: 'cdf',
      name: 'Cattle Democratic Front',
      shortName: 'CDF',
      symbol: '🌾',
      color: '#e74c3c',
      slogan: 'Grass for All, Milk for Progress',
      leader: 'Comrade Lakshmi Buffalo',
      founded: '1957',
      members: '2.5M+',
      manifesto: [
        'Free grazing rights for all cattle',
        'Universal healthcare for livestock',
        'Equal representation in farm management',
        'Protection of traditional grazing lands',
        'Subsidized organic feed programs'
      ],
      achievements: [
        'Established first Cattle Welfare Board',
        'Introduced 8-hour grazing work limit',
        'Created emergency veterinary services',
        'Built 500+ community water tanks'
      ],
      description: 'Fighting for the rights of working cattle since 1957. We believe in equal opportunities for all bovines regardless of breed, color, or productivity.'
    },
    {
      id: 'bjp',
      name: 'Bovine Janata Party',
      shortName: 'BJP',
      symbol: '🏵️',
      color: '#ff9800',
      slogan: 'Cattle First, Strong Farms',
      leader: 'Shri Nandiji Bull',
      founded: '1980',
      members: '3.2M+',
      manifesto: [
        'Promote indigenous cattle breeds',
        'Build world-class dairy infrastructure',
        'Digital revolution in cattle management',
        'Zero-tolerance for cattle trafficking',
        'Skill development for modern farming'
      ],
      achievements: [
        'Launched Cattle ID digitization project',
        'Increased milk production by 40%',
        'Established cattle universities',
        'Created emergency response system'
      ],
      description: 'Committed to making our cattle community self-reliant and globally competitive. We focus on development, technology, and preserving our sacred bovine heritage.'
    },
    {
      id: 'ucf',
      name: 'United Cattle Front',
      shortName: 'UCF',
      symbol: '🔴',
      color: '#2ecc71',
      slogan: 'Unity in Diversity, Progress for All',
      leader: 'Dr. Ganga Cow (Ph.D.)',
      founded: '1999',
      members: '1.8M+',
      manifesto: [
        'Secular approach to cattle welfare',
        'Science-based farming policies',
        'Environmental protection initiatives',
        'Inter-species cooperation programs',
        'Transparent governance in dairy cooperatives'
      ],
      achievements: [
        'Pioneered organic farming movement',
        'Established inter-state cattle exchange',
        'Created climate-resilient grazing systems',
        'Launched cattle education programs'
      ],
      description: 'A progressive alliance working towards sustainable development and inclusive growth for all members of the cattle community.'
    }
  ]

  const currentIssues = [
    {
      title: 'Grazing Land Rights Bill 2025',
      description: 'Protecting traditional grazing lands from urban encroachment',
      status: 'Under Debate',
      urgency: 'High'
    },
    {
      title: 'Cattle Healthcare Insurance Scheme',
      description: 'Comprehensive health coverage for all registered cattle',
      status: 'Approved',
      urgency: 'Medium'
    },
    {
      title: 'Digital Cattle Identity Program',
      description: 'Implementing blockchain-based identity system for cattle',
      status: 'In Progress',
      urgency: 'High'
    },
    {
      title: 'Fair Milk Pricing Act',
      description: 'Ensuring fair compensation for milk producers',
      status: 'Proposed',
      urgency: 'High'
    }
  ]

  const upcomingElections = [
    {
      position: 'Chief Cattle Officer',
      constituency: 'Northern Dairy District',
      date: '2025-09-15',
      candidates: 3
    },
    {
      position: 'Grazing Rights Commissioner',
      constituency: 'Western Pastures',
      date: '2025-10-01',
      candidates: 5
    },
    {
      position: 'Farm Safety Inspector',
      constituency: 'Southern Agricultural Zone',
      date: '2025-10-20',
      candidates: 4
    }
  ]

  const VotingModal = () => (
    <div className="modal-overlay">
      <div className="voting-modal">
        <div className="modal-header">
          <h3>🗳️ Cast Your Vote</h3>
          <button onClick={() => setShowVotingModal(false)}>✕</button>
        </div>
        <div className="modal-body">
          <div className="voter-info">
            <h4>Voter Information</h4>
            <p><strong>Name:</strong> Ammini Das</p>
            <p><strong>Cattle ID:</strong> KL-07-COW-2023-001</p>
            <p><strong>Constituency:</strong> Palakkad Dairy District</p>
          </div>
          
          <div className="ballot">
            <h4>Choose Your Candidate</h4>
            {parties.map(party => (
              <div key={party.id} className="ballot-option">
                <input type="radio" id={party.id} name="vote" />
                <label htmlFor={party.id}>
                  <span className="party-symbol">{party.symbol}</span>
                  <div className="candidate-info">
                    <strong>{party.leader}</strong>
                    <span>{party.shortName}</span>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <button className="vote-btn">Submit Vote</button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="cattle-community">
      <div className="community-header">
        <div className="header-content">
          <h1>🏛️ Cattle Political Community</h1>
          <p className="header-subtitle">Democracy, Representation, Progress</p>
          <p className="header-description">
            Your voice matters! Join the largest democratic movement in the cattle community. 
            Exercise your rights, choose your representatives, and shape the future of bovine society.
          </p>
          <div className="header-stats">
            <div className="stat">
              <span className="stat-number">7.5M+</span>
              <span className="stat-label">Registered Voters</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Major Parties</span>
            </div>
            <div className="stat">
              <span className="stat-number">89%</span>
              <span className="stat-label">Voter Turnout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="parties-section">
          <h2>Political Parties</h2>
          <p>Choose the party that represents your values and aspirations</p>
          
          <div className="parties-grid">
            {parties.map(party => (
              <div 
                key={party.id} 
                className={`party-card ${selectedParty === party.id ? 'selected' : ''}`}
                style={{ borderColor: party.color }}
                onClick={() => setSelectedParty(party.id)}
              >
                <div className="party-header" style={{ background: party.color }}>
                  <div className="party-symbol">{party.symbol}</div>
                  <div className="party-info">
                    <h3>{party.name}</h3>
                    <span className="short-name">({party.shortName})</span>
                  </div>
                </div>
                
                <div className="party-content">
                  <div className="party-slogan">"{party.slogan}"</div>
                  
                  <div className="party-details">
                    <div className="detail">
                      <strong>Leader:</strong> {party.leader}
                    </div>
                    <div className="detail">
                      <strong>Founded:</strong> {party.founded}
                    </div>
                    <div className="detail">
                      <strong>Members:</strong> {party.members}
                    </div>
                  </div>
                  
                  <p className="party-description">{party.description}</p>
                  
                  <div className="party-manifesto">
                    <h4>Key Promises:</h4>
                    <ul>
                      {party.manifesto.slice(0, 3).map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    className="join-party-btn"
                    style={{ background: party.color }}
                  >
                    Join {party.shortName}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="issues-section">
          <h2>Current Political Issues</h2>
          <p>Stay informed about the latest developments affecting our community</p>
          
          <div className="issues-grid">
            {currentIssues.map((issue, index) => (
              <div key={index} className="issue-card">
                <div className="issue-header">
                  <h3>{issue.title}</h3>
                  <span className={`status-badge ${issue.status.toLowerCase().replace(' ', '-')}`}>
                    {issue.status}
                  </span>
                </div>
                <p className="issue-description">{issue.description}</p>
                <div className="issue-footer">
                  <span className={`urgency-badge ${issue.urgency.toLowerCase()}`}>
                    {issue.urgency} Priority
                  </span>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="elections-section">
          <h2>Upcoming Elections</h2>
          <p>Make your voice heard in the democratic process</p>
          
          <div className="elections-grid">
            {upcomingElections.map((election, index) => (
              <div key={index} className="election-card">
                <div className="election-info">
                  <h3>{election.position}</h3>
                  <p className="constituency">{election.constituency}</p>
                  <p className="election-date">📅 {election.date}</p>
                  <p className="candidates-count">{election.candidates} candidates registered</p>
                </div>
                <button 
                  className="vote-now-btn"
                  onClick={() => setShowVotingModal(true)}
                >
                  🗳️ Vote Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="civic-engagement">
          <h2>Get Involved</h2>
          <div className="engagement-options">
            <div className="engagement-card">
              <div className="engagement-icon">📢</div>
              <h3>Voice Your Opinion</h3>
              <p>Participate in public forums and policy discussions</p>
              <button>Join Forum</button>
            </div>
            
            <div className="engagement-card">
              <div className="engagement-icon">📝</div>
              <h3>Submit Petitions</h3>
              <p>Raise issues that matter to your community</p>
              <button>Create Petition</button>
            </div>
            
            <div className="engagement-card">
              <div className="engagement-icon">🤝</div>
              <h3>Volunteer</h3>
              <p>Help organize campaigns and community events</p>
              <button>Volunteer</button>
            </div>
            
            <div className="engagement-card">
              <div className="engagement-icon">💰</div>
              <h3>Donate</h3>
              <p>Support political parties and causes you believe in</p>
              <button>Donate</button>
            </div>
          </div>
        </div>

        <div className="news-section">
          <h2>Political News</h2>
          <div className="news-grid">
            <div className="news-item">
              <div className="news-date">Today</div>
              <h3>Major Breakthrough in Cattle Healthcare Bill</h3>
              <p>All three parties reach consensus on universal healthcare coverage...</p>
            </div>
            
            <div className="news-item">
              <div className="news-date">Yesterday</div>
              <h3>Debate Intensifies Over Grazing Land Rights</h3>
              <p>Parliamentary session sees heated discussion on land allocation policies...</p>
            </div>
            
            <div className="news-item">
              <div className="news-date">2 days ago</div>
              <h3>Digital Voting System Successfully Tested</h3>
              <p>Blockchain-based voting platform shows 99.8% accuracy in pilot program...</p>
            </div>
          </div>
        </div>
      </div>

      {showVotingModal && <VotingModal />}
    </div>
  )
}

export default CattleCommunity
