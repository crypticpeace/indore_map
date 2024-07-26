import React, { useState } from 'react';
import './Map.css';

// Import your images
import image1 from '../assets/indore_map_g1.png';
import image2 from '../assets/indore_map_g2.png';
import image3 from '../assets/indore_map_g3.png';
import image4 from '../assets/indore_map_g4.png';
import image5 from '../assets/indore_map_g5.png';


const MapComponent = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const regions = [
    { id: 'region1', path: image1, top: '1%', left: '7%', width: '32.5%' },
    { id: 'region2', path: image2, top: '15.1%', left: '24%', width: '28.5%'  },
    { id: 'region3', path: image3, top: '4.4%', left: '31.5%', width: '41.2%'  },
    { id: 'region4', path: image4, top: '21.4%', left: '37.3%', width: '56.2%'  },
    { id: 'region5', path: image5, top: '35.2%', left: '17.9%', width: '54.2%'  }
    
    
    
  ];

  return (
    
    <div className="map-container">
      {regions.map((region) => (
        <img
          key={region.id}
          src={region.path}
          alt={region.id}
          className={`region-image ${hoveredRegion === region.id ? 'hovered' : ''}`}
          style={{ 
            top: region.top, 
            left: region.left, 
            right: region.right, 
            width: region.width 
          }}
          onMouseEnter={() => setHoveredRegion(region.id)}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => console.log(`Clicked ${region.id}`)}
        />   
      ))}
   
    </div>
  );
};

export default MapComponent;