import { useState } from 'react'
import './CattleLinkedIn.css'

const CattleLinkedIn = () => {
  const [activeTab, setActiveTab] = useState('feed')
  const [showCreatePost, setShowCreatePost] = useState(false)

  const userProfile = {
    name: "Ammini Das",
    title: "Senior Milk Production Specialist at Green Pastures Dairy",
    location: "Palakkad, Kerala",
    connections: "500+",
    profilePic: "/img/pothu 3.avif",
    about: "Experienced dairy professional with 5+ years in high-volume milk production. Specialized in organic farming methods and sustainable grazing practices. Passionate about advancing cattle welfare and dairy innovation.",
    experience: [
      {
        title: "Senior Milk Production Specialist",
        company: "Green Pastures Dairy",
        duration: "2022 - Present",
        description: "Leading a team of 10 cows in daily milk production operations. Achieved 25% increase in daily output."
      },
      {
        title: "Junior Grazer",
        company: "Happy Fields Farm",
        duration: "2020 - 2022",
        description: "Specialized in field management and grass quality optimization."
      }
    ]
  }

  const posts = [
    {
      id: 1,
      author: "Bheemudu Rao",
      title: "Chief Bull Officer at Strength Farms",
      profilePic: "/img/male cow.jpg",
      time: "2h",
      content: "Excited to announce that I've successfully completed the Advanced Cart Pulling Certification! 💪 Special thanks to my mentor Raman Uncle for the guidance. #BullLife #StrengthTraining #CattleCareer",
      likes: 127,
      comments: 23,
      shares: 8,
      image: null
    },
    {
      id: 2,
      author: "Lakshmi Buffalo",
      title: "Chief Milk Officer at Murrah Enterprises",
      profilePic: "/img/pothu 1.jpg",
      time: "4h",
      content: "Just closed a major deal with the city's largest dairy cooperative! 🎉 Our premium buffalo milk will now reach 50,000+ households. Proud to be contributing to the nutrition of our community. #BuffaloMilk #Success #Entrepreneur",
      likes: 89,
      comments: 45,
      shares: 12,
      image: "🥛"
    },
    {
      id: 3,
      author: "Dr. Velu Ox",
      title: "Agricultural Consultant & Former Field Operator",
      profilePic: "/img/pothu5.jpeg",
      time: "6h",
      content: "After 30 years in agricultural operations, I'm now sharing my expertise with the next generation of working cattle. If you're looking to transition from fieldwork to consulting, happy to share my experience! #CattleConsulting #CareerTransition #Agriculture",
      likes: 156,
      comments: 67,
      shares: 34,
      image: null
    }
  ]

  const jobs = [
    {
      title: "Senior Milk Production Specialist",
      company: "Premium Dairy Farms",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      salary: "₹800-1200/day",
      requirements: "5+ years experience, High yield capacity"
    },
    {
      title: "Cart Pulling Specialist",
      company: "Heavy Transport Ltd",
      location: "Punjab",
      type: "Contract",
      salary: "₹1500/day",
      requirements: "Strong build, Transportation experience"
    },
    {
      title: "Organic Farm Ambassador",
      company: "EcoFarms India",
      location: "Remote",
      type: "Part-time",
      salary: "₹500/day",
      requirements: "Organic farming background, Social media savvy"
    }
  ]

  const connections = [
    { name: "Ganga Cow", title: "Milk Quality Analyst", mutual: 12, profilePic: "/img/kullan breed.jpg" },
    { name: "Surya Bull", title: "Farm Security Officer", mutual: 8, profilePic: "/img/pothu5.jpeg" },
    { name: "Kamala Buffalo", title: "Rural Development Expert", mutual: 15, profilePic: "/img/cow widow.jpeg" },
    { name: "Raja Ox", title: "Agricultural Innovation Lead", mutual: 6, profilePic: "/img/male cow.jpg" }
  ]

  const CreatePostModal = () => (
    <div className="modal-overlay">
      <div className="create-post-modal">
        <div className="modal-header">
          <h3>Create a post</h3>
          <button onClick={() => setShowCreatePost(false)}>✕</button>
        </div>
        <div className="modal-body">
          <div className="post-author">
            <img className="author-pic" src={userProfile.profilePic} alt={userProfile.name} />
            <div>
              <strong>{userProfile.name}</strong>
              <p>{userProfile.title}</p>
            </div>
          </div>
          <textarea placeholder="What do you want to talk about?" rows="5"></textarea>
          <div className="post-options">
            <button>📷 Photo</button>
            <button>🎥 Video</button>
            <button>📄 Document</button>
            <button>🎉 Celebrate</button>
          </div>
        </div>
        <div className="modal-footer">
          <button className="post-btn">Post</button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="cattle-linkedin">
      <div className="linkedin-header">
        <div className="header-content">
          <div className="logo">
            <img className="logo-icon" src="/img/naughtycow.jpg" alt="CattledIn Logo" />
            <span className="logo-text">CattledIn</span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search for cattle, jobs, companies..." />
            <button>🔍</button>
          </div>
          <div className="header-nav">
            <button className="nav-item active">
              <span>🏠</span>
              <span>Home</span>
            </button>
            <button className="nav-item">
              <span>👥</span>
              <span>My Network</span>
            </button>
            <button className="nav-item">
              <span>💼</span>
              <span>Jobs</span>
            </button>
            <button className="nav-item">
              <span>💬</span>
              <span>Messaging</span>
            </button>
            <button className="nav-item">
              <span>🔔</span>
              <span>Notifications</span>
            </button>
          </div>
        </div>
      </div>

      <div className="linkedin-main">
        <div className="sidebar-left">
          <div className="profile-card">
            <div className="profile-bg"></div>
            <div className="profile-info">
              <img className="profile-pic" src={userProfile.profilePic} alt={userProfile.name} />
              <h3>{userProfile.name}</h3>
              <p>{userProfile.title}</p>
              <p className="location">{userProfile.location}</p>
              <div className="profile-stats">
                <div className="stat">
                  <span>Who viewed your profile</span>
                  <strong>47</strong>
                </div>
                <div className="stat">
                  <span>Connections</span>
                  <strong>{userProfile.connections}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li>🔖 Saved items</li>
              <li>👥 Groups</li>
              <li>📅 Events</li>
              <li>📰 Newsletters</li>
              <li>🎓 Learning</li>
            </ul>
          </div>
        </div>

        <div className="main-content">
          <div className="content-tabs">
            <button 
              className={`tab ${activeTab === 'feed' ? 'active' : ''}`}
              onClick={() => setActiveTab('feed')}
            >
              📰 Feed
            </button>
            <button 
              className={`tab ${activeTab === 'jobs' ? 'active' : ''}`}
              onClick={() => setActiveTab('jobs')}
            >
              💼 Jobs
            </button>
            <button 
              className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              👤 Profile
            </button>
          </div>

          {activeTab === 'feed' && (
            <div className="feed-content">
              <div className="create-post">
                <div className="post-input">
                  <img className="user-pic" src={userProfile.profilePic} alt={userProfile.name} />
                  <button 
                    className="post-placeholder"
                    onClick={() => setShowCreatePost(true)}
                  >
                    Start a post about your latest achievements...
                  </button>
                </div>
                <div className="post-actions">
                  <button>📷 Photo</button>
                  <button>🎥 Video</button>
                  <button>🎉 Celebrate</button>
                  <button>✍️ Write article</button>
                </div>
              </div>

              {posts.map(post => (
                <div key={post.id} className="post">
                  <div className="post-header">
                    <img className="post-author-pic" src={post.profilePic} alt={post.author} />
                    <div className="post-author-info">
                      <strong>{post.author}</strong>
                      <p>{post.title}</p>
                      <span className="post-time">{post.time}</span>
                    </div>
                    <button className="post-menu">⋯</button>
                  </div>
                  <div className="post-content">
                    <p>{post.content}</p>
                    {post.image && (
                      <div className="post-image">{post.image}</div>
                    )}
                  </div>
                  <div className="post-engagement">
                    <div className="engagement-stats">
                      <span>👍 {post.likes}</span>
                      <span>{post.comments} comments • {post.shares} shares</span>
                    </div>
                    <div className="engagement-actions">
                      <button>👍 Like</button>
                      <button>💬 Comment</button>
                      <button>🔄 Share</button>
                      <button>📤 Send</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'jobs' && (
            <div className="jobs-content">
              <div className="jobs-header">
                <h2>Recommended jobs for you</h2>
                <p>Based on your profile and search history</p>
              </div>
              {jobs.map((job, index) => (
                <div key={index} className="job-card">
                  <div className="job-info">
                    <h3>{job.title}</h3>
                    <p className="company">{job.company}</p>
                    <p className="location">{job.location} • {job.type}</p>
                    <p className="salary">{job.salary}</p>
                    <p className="requirements">{job.requirements}</p>
                  </div>
                  <div className="job-actions">
                    <button className="apply-btn">Apply Now</button>
                    <button className="save-btn">💾 Save</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="profile-content">
              <div className="profile-section">
                <h2>About</h2>
                <p>{userProfile.about}</p>
              </div>
              <div className="profile-section">
                <h2>Experience</h2>
                {userProfile.experience.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                    <p className="duration">{exp.duration}</p>
                    <p className="description">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="sidebar-right">
          <div className="news-section">
            <h4>Cattle Industry News</h4>
            <ul>
              <li>📈 Milk prices surge 15% this quarter</li>
              <li>🌱 New organic certification standards announced</li>
              <li>🏆 Best Dairy Farm Awards 2025 nominations open</li>
              <li>💼 Remote working opportunities for cattle consultants</li>
              <li>🔬 Revolutionary AI-powered milking technology launched</li>
            </ul>
          </div>

          <div className="connections-section">
            <h4>People you may know</h4>
            {connections.map((connection, index) => (
              <div key={index} className="connection-suggestion">
                <img className="connection-pic" src={connection.profilePic} alt={connection.name} />
                <div className="connection-info">
                  <strong>{connection.name}</strong>
                  <p>{connection.title}</p>
                  <span>{connection.mutual} mutual connections</span>
                </div>
                <button className="connect-btn">Connect</button>
              </div>
            ))}
          </div>

          <div className="ad-section">
            <div className="ad">
              <h4>🌾 Premium Cattle Feed</h4>
              <p>Boost your milk production by 30% with our scientifically formulated feed!</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {showCreatePost && <CreatePostModal />}
    </div>
  )
}

export default CattleLinkedIn
