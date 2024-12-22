import React from 'react';
import { Github, Linkedin, MapPin, Users, GitFork, Star, Building } from 'lucide-react';


const DeveloperCard = ({ profile, linkedinUrl }) => {
  if (!profile) return null;

  return (
    <div className="max-w-3xl w-full bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/50">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="relative group">
          <div className="w-48 h-48 rounded-2xl overflow-hidden ring-4 ring-purple-500/20 transform transition-all duration-300 group-hover:scale-105">
            <img 
              src={profile.avatar_url} 
              alt={profile.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            {profile.name}
          </h2>
          
          {profile.bio && (
            <p className="mt-2 text-gray-300 italic">
              "{profile.bio}"
            </p>
          )}

          <div className="mt-4 space-y-2">
            {profile.company && (
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
                <Building size={18} className="text-purple-400" />
                <span>{profile.company}</span>
              </div>
            )}
            
            {profile.location && (
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
                <MapPin size={18} className="text-purple-400" />
                <span>{profile.location}</span>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-1 text-gray-400">
                <Users size={16} />
                <span>Followers</span>
              </div>
              <span className="text-xl font-semibold text-white">{profile.followers}</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-1 text-gray-400">
                <Users size={16} />
                <span>Following</span>
              </div>
              <span className="text-xl font-semibold text-white">{profile.following}</span>
            </div>
            <div className="flex flex-col items-center md:items-start col-span-2 md:col-span-1">
              <div className="flex items-center gap-1 text-gray-400">
                <GitFork size={16} />
                <span>Repositories</span>
              </div>
              <span className="text-xl font-semibold text-white">{profile.public_repos}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-6 flex justify-center gap-4">
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 hover:bg-black/60 text-white transition-colors duration-300"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/50 hover:bg-blue-600/50 text-white transition-colors duration-300"
        >
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default DeveloperCard;