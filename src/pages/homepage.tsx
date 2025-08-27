// import React from 'react';

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Volcomm</h1>
        <p className="hero-subtitle">
          Connecting communities through volunteer opportunities. Make a
          difference, one act of kindness at a time.
        </p>
        <button className="cta-button">Get Started</button>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🤝</div>
          <h3 className="feature-title">Find Opportunities</h3>
          <p className="feature-description">
            Discover volunteer opportunities that match your skills and
            interests in your community.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📍</div>
          <h3 className="feature-title">Location-Based</h3>
          <p className="feature-description">
            Find volunteer work near you with our interactive map showing urgent
            needs.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🏆</div>
          <h3 className="feature-title">Track Impact</h3>
          <p className="feature-description">
            Earn points for your contributions and see your impact on the
            community leaderboard.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📰</div>
          <h3 className="feature-title">Stay Updated</h3>
          <p className="feature-description">
            Get the latest news and updates about community initiatives and
            success stories.
          </p>
        </div>
      </div>
    </div>
  );
}
