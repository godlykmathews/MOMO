import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import TranslatorInterface from './components/TranslatorInterface';
import CattleMatrimonial from './components/CattleMatrimonial';
import CattleLinkedIn from './components/CattleLinkedIn';
import CattleCommunity from './components/CattleCommunity';
import Spots from './components/Spots';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('homepage');

  const renderContent = () => {
    switch (activeSection) {
      case 'homepage':
        return <Homepage onNavigate={setActiveSection} />;
      case 'translator':
        return <TranslatorInterface />;
      case 'matrimonial':
        return <CattleMatrimonial />;
      case 'linkedin':
        return <CattleLinkedIn />;
      case 'community':
        return <CattleCommunity />;
      case 'spots':
        return <Spots />;
      default:
        return <Homepage onNavigate={setActiveSection} />;
    }
  };

  const NavLink = ({ section, children }) => (
    <button
      className={`nav-btn ${activeSection === section ? 'active' : ''}`}
      onClick={() => setActiveSection(section)}
    >
      {children}
    </button>
  );

  return (
    <div className={`App ${activeSection === 'homepage' ? 'App-homepage' : ''}`}>
      <Header />
      
      {activeSection !== 'homepage' && (
        <nav className="main-navigation">
          <div className="nav-container">
            <NavLink section="translator">Translator</NavLink>
            <NavLink section="matrimonial">Matrimonial</NavLink>
            <NavLink section="linkedin">CattledIn</NavLink>
            <NavLink section="community">Community</NavLink>
            <NavLink section="spots">Spots</NavLink>
            <button
              className="nav-btn back-home"
              onClick={() => setActiveSection('homepage')}
            >
              Home
            </button>
          </div>
        </nav>
      )}

      <main className="main-content">
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;