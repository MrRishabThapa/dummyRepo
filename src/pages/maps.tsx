// import React from "react";

export default function MapView() {
  return (
    <div className="bg-green-50 min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-2">
          🗺️ Volunteer Campaign Map
        </h1>
        <p className="text-green-700 text-lg">
          Discover local campaigns by location and urgency. Stay involved and
          make an impact!
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden relative">
        <div className="w-full h-96 md:h-[600px] bg-green-100 flex flex-col items-center justify-center text-green-800 text-center">
          <h3 className="text-2xl font-semibold mb-2">Interactive Map</h3>
          <p className="text-green-700">
            Map showing volunteer opportunities by location and urgency
          </p>
        </div>

        <div className="absolute bottom-4 right-4">
          <button className="bg-green-700 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-colors duration-200">
            See Campaigns Nearby
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-6 flex justify-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-red-500 border border-red-700"></div>
          <span className="text-green-800 font-medium">High Urgency</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-yellow-400 border border-yellow-600"></div>
          <span className="text-green-800 font-medium">Medium Urgency</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-green-500 border border-green-700"></div>
          <span className="text-green-800 font-medium">Low Urgency</span>
        </div>
      </div>
    </div>
  );
}
