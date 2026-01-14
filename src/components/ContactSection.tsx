import React, { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

interface ContactSectionProps {
  isTransitioning: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isTransitioning }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-opacity duration-300 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="max-w-2xl w-full">
        <div className="flex items-center space-x-3 mb-12 animate-slide-right">
          <FiSend className="text-amber-400" size={32} />
          <h2 className="text-4xl font-bold">Get In Touch</h2>
        </div>

        <div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/20 animate-slide-up hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20">
          <div className="space-y-6">
            <div
              className="opacity-0 animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-stone-900 border border-amber-500/30 rounded-lg focus:outline-none focus:border-amber-400 transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-amber-500/30"
                placeholder="Your name"
              />
            </div>
            <div
              className="opacity-0 animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-stone-900 border border-amber-500/30 rounded-lg focus:outline-none focus:border-amber-400 transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-amber-500/30"
                placeholder="your.email@example.com"
              />
            </div>
            <div
              className="opacity-0 animate-slide-up"
              style={{ animationDelay: "300ms" }}
            >
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={2} // Adjusted from 3 to 2 to leave space at the bottom
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-stone-900 border border-amber-500/30 rounded-lg focus:outline-none focus:border-amber-400 transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-amber-500/30"
                placeholder="Your message..."
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                alert("Form submission would be handled here!");
              }}
              className="opacity-0 w-full py-3 bg-linear-to-r from-amber-600 to-orange-600 rounded-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 animate-slide-up"
              style={{ animationDelay: "400ms" }}
            >
              Send Message
            </button>
          </div>

          <div
            className="opacity-0 flex justify-center space-x-6 mt-8 pt-8 border-t border-amber-500/20 animate-slide-up"
            style={{ animationDelay: "500ms" }}
          >
            <a
              href="#"
              className="text-stone-400 hover:text-amber-400 transition-all duration-300 hover:scale-125 hover:-rotate-12"
            >
              <FiGithub size={28} />
            </a>
            <a
              href="#"
              className="text-stone-400 hover:text-amber-400 transition-all duration-300 hover:scale-125 hover:-rotate-12"
            >
              <FiLinkedin size={28} />
            </a>
            <a
              href="#"
              className="text-stone-400 hover:text-amber-400 transition-all duration-300 hover:scale-125 hover:-rotate-12"
            >
              <FiMail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
