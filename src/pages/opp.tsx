// import React from "react";
import Card from "../components/card";
import { opportunitiesData } from "../data/mockData";

export default function Opportunities() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Volunteer Opportunities</h1>
        <p className="page-subtitle">
          Find meaningful ways to contribute to your community
        </p>
      </div>

      <div className="opportunities-grid">
        {opportunitiesData.map((opportunity) => (
          <Card key={opportunity.id}>
            <div className="card-header">
              <h3 className="card-title">{opportunity.title}</h3>
              <span className={`urgency-badge urgency-${opportunity.urgency}`}>
                {opportunity.urgency} urgency
              </span>
            </div>

            <div className="card-meta">
              <span className="meta-item">📍 {opportunity.location}</span>
              <span className="meta-item">📅 {opportunity.date}</span>
              <span className="meta-item">⏰ {opportunity.duration}</span>
            </div>

            <p className="card-description">{opportunity.description}</p>

            <button className="btn-primary">Apply Now</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
