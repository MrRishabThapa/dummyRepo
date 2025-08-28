// import React from 'react';

export default function MapView() {
  return (
    <div className="map-container">
      <div className="map-placeholder">
        <h3>🗺️ Interactive Map</h3>
        <p>Map showing volunteer opportunities by location and urgency</p>
        <div className="map-legend">
          <div className="legend-item">
            <div className="legend-color legend-red"></div>
            <span>High Urgency</span>
          </div>
          <div className="legend-item">
            <div className="legend-color legend-yellow"></div>
            <span>Medium Urgency</span>
          </div>
          <div className="legend-item">
            <div className="legend-color legend-green"></div>
            <span>Low Urgency</span>
          </div>
        </div>
      </div>
    </div>
  );
}
