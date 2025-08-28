import { Link } from "react-router-dom";
import { Leaf, Heart, Globe } from "lucide-react";
// import opportunities from "../pages/opp";

const Footer = () => {
  return (
    <footer className="bg-green-900 border-t border-green-700 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 font-bold text-xl text-green-50"
            >
              <Leaf className="h-8 w-8 text-green-200" />
              <span className="text-green-50">Volcomm.</span>
            </Link>
            <p className="text-green-200 text-sm">
              Building stronger communities through volunteerism and compassion.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-green-50">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/opportunities"
                className="block text-green-200 hover:text-green-100 transition-colors text-sm"
              >
                Find Opportunities
              </Link>
              <Link
                to="/news"
                className="block text-green-200 hover:text-green-100 transition-colors text-sm"
              >
                Latest News
              </Link>
              <Link
                to="/hall-of-fame"
                className="block text-green-200 hover:text-green-100 transition-colors text-sm"
              >
                Hall of Fame
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-green-50">Emergency</h3>
            <div className="space-y-2">
              <Link
                to=""
                className="block text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
              >
                Report Emergency
              </Link>
              <Link
                to=""
                className="block text-green-200 hover:text-green-100 transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="space-y-4">
            <h3 className="font-semibold text-green-50">Our Impact</h3>
            <div className="space-y-2 text-sm text-green-200">
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-green-300" />
                <span>1,247 Volunteers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-green-300" />
                <span>523 Communities Helped</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200 text-sm">
            © 2024 Volunteer Community. Made with{" "}
            <Heart className="h-4 w-4 text-green-300 inline mx-1" />
            for a better world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
