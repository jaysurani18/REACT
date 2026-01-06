import React, { useState, useEffect } from 'react';
import './society.css';

const SocietyDetails = () => {
  const [societies, setSocieties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock society daNBV JBta - replace with your API call
    const mockSocieties = [
      {
        id: 1,
        name: "Tech Society",
        description: "A community for technology enthusiasts",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
        members: 150
      },
      {
        id: 2,
        name: "Art Society",
        description: "Creative minds come together",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop",
        members: 89
      },
      {
        id: 3,
        name: "Sports Society",
        description: "Stay active and healthy",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
        members: 200
      }
    ];

    setTimeout(() => {
      setSocieties(mockSocieties);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="loading">Loading societies...</div>;
  }

  return (
    <div className="society-container">
      <h2>Society Details</h2>
      <div className="society-grid">
        {societies.map(society => (
          <div key={society.id} className="society-card">
            <img 
              src={society.image} 
              alt={society.name}
              className="society-image"
            />
            <div className="society-info">
              <h3>{society.name}</h3>
              <p>{society.description}</p>
              <span className="members">{society.members} members</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocietyDetails;