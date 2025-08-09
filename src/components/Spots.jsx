import React from 'react';
import './Spots.css';

const spots = [
  {
    id: 1,
    name: "Evergreen Meadows",
    type: "Grass Field",
    location: "Kuttanad, Kerala",
    rating: 4.8,
    distance: "2 km away",
    image: "https://r1imghtlak.mmtcdn.com/88de6d1a-e610-4258-a283-d3e2d4e96175.jpg"
  },
  {
    id: 2,
    name: "The Mud Spa",
    type: "Mud Bath",
    location: "Wayanad, Kerala",
    rating: 4.9,
    distance: "5 km away",
    image: "https://th-i.thgim.com/public/news/national/kerala/4qal8o/article67546758.ece/alternates/LANDSCAPE_1200/Mudflat.JPG"
  },
  {
    id: 3,
    name: "Green Pastures",
    type: "Grass Field",
    location: "Idukki, Kerala",
    rating: 4.7,
    distance: "8 km away",
    image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/101000/101660-Idukki-District.jpg"
  },
  {
    id: 4,
    name: "Sodden Fields",
    type: "Mud Bath",
    location: "Alappuzha, Kerala",
    rating: 4.6,
    distance: "12 km away",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Sodden_field_beside_Hall_Road_-_geograph.org.uk_-_3834296.jpg"
  },
  {
    id: 5,
    name: "Misty Valley",
    type: "Grass Field",
    location: "Munnar, Kerala",
    rating: 4.9,
    distance: "15 km away",
    image: "https://t3.ftcdn.net/jpg/01/43/28/88/360_F_143288841_fKX8imAdOLIsYwRuvGmBFeImDeEhZbp4.jpg"
  },
  {
    id: 6,
    name: "The Wallow",
    type: "Mud Bath",
    location: "Thekkady, Kerala",
    rating: 4.7,
    distance: "20 km away",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Thekkady.jpg/1100px-Thekkady.jpg"
  }
];

const Spots = () => {
  return (
    <div className="spots-page">
      <div className="spots-hero">
        <img src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Beautiful landscape in Kerala" className="hero-image" />
        <div className="hero-overlay"></div>
        <h1 className="spots-title">Explore the Finest Spots</h1>
        <p className="spots-subtitle">Discover serene grass fields and rejuvenating mud baths in the heart of Kerala.</p>
      </div>
      <div className="spots-grid-container">
        <div className="spots-grid">
          {spots.map(spot => (
            <div key={spot.id} className="spot-card">
              <img src={spot.image} alt={spot.name} className="spot-image" />
              <div className="spot-info">
                <h3 className="spot-name">{spot.name}</h3>
                <p className="spot-type">{spot.type}</p>
                <p className="spot-location">{spot.location}</p>
                <div className="spot-details">
                  <span className="spot-rating">★ {spot.rating}</span>
                  <span className="spot-distance">{spot.distance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spots;