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
    image: "https://www.google.com/imgres?q=green%20meadows%20in%20kerala&imgurl=https%3A%2F%2Fwww.ktexplorer.com%2Fbanner%2Fpost%2F1578200058-dc15c5390bc4e1fea9b9169520152258.jpg&imgrefurl=https%3A%2F%2Fwww.ktexplorer.com%2Fpost%2Fgreen-meadows-of-vagamon&docid=V_bM4zWfQLDvOM&tbnid=y3B8VR0DPx6UOM&vet=12ahUKEwiNjsfbvP2OAxWvSGwGHfAmIFAQM3oECBgQAA..i&w=620&h=330&hcb=2&ved=2ahUKEwiNjsfbvP2OAxWvSGwGHfAmIFAQM3oECBgQAA"
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
    image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdavidspasture.com%2Fblog%2Fthe-mud-spa-why-pigs-love-to-wallow&psig=AOvVaw3A1EP27NxOMJBq2R3gJRCO&ust=1754820361749000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCICVr7W9_Y4DFQAAAAAdAAAAABAV"
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