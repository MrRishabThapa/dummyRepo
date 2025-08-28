// import React from 'react';
import Card from "../components/card";
import { opportunitiesData } from "../data/mockData";
import img from "../assets/volunteer.jpg";
import { Locate, Calendar, Timer } from "lucide-react";

export default function Opportunities() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-20 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-lg">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Empower Your Community
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Join hands with local organizations and contribute to causes that
            truly matter. Discover opportunities that align with your passion
            and skills.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition">
            Explore Opportunities
          </button>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={img}
            alt="Professional Volunteering"
            className="rounded-2xl shadow-2xl max-h-[450px] object-cover"
          />
        </div>
      </div>

      <div className="page-header text-center py-8 bg-gradient-to-r from-green-100 to-green-50">
        <h1 className="page-title text-3xl font-bold text-gray-800">
          Avaliable Campaigns
        </h1>
        <p className="page-subtitle text-gray-600 mt-2">
          Find meaningful ways to contribute to your community
        </p>
      </div>

      <div className="opportunities-grid grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {opportunitiesData.map((opportunity) => (
          <Card
            key={opportunity.id}
            className="p-5 rounded-xl shadow-md bg-white"
          >
            <div className="card-header flex justify-between items-center mb-3">
              <h3 className="card-title text-xl font-semibold text-gray-800">
                {opportunity.title}
              </h3>
              <span
                className={`urgency-badge px-3 py-1 text-sm rounded-full font-medium ${
                  opportunity.urgency === "high"
                    ? "bg-red-100 text-red-700"
                    : opportunity.urgency === "medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {opportunity.urgency} urgency
              </span>
            </div>

            <div className="card-meta text-gray-600 text-sm space-y-1 mb-3">
              <p className="flex items-center gap-2">
                <Locate /> {opportunity.location}
              </p>
              <p className="flex items-center gap-2">
                <Calendar /> {opportunity.date}
              </p>
              <p className="flex items-center gap-2">
                <Timer /> {opportunity.duration}
              </p>
            </div>

            <p className="card-description text-gray-700 mb-4">
              {opportunity.description}
            </p>

            <button className="btn-primary w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Apply Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
