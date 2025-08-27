import MapView from "../components/MapView";

export default function Map() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Opportunity Map</h1>
        <p className="page-subtitle">
          Explore volunteer opportunities by location and urgency level
        </p>
      </div>

      <MapView />
    </div>
  );
}
