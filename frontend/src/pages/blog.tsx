import React, { useState } from 'react';
import { BlogCard } from '../components/BlogCard';

const LandingPage: React.FC = () => {
  // const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="bg-white text-black font-sans flex flex-col justify-center items-center min-h-screen">
      {/* User Profile Section */}
      <div className="bg-black text-white shadow-lg w-full">
        <div className="max-w-10xl mx-auto px-4 py-2 flex justify-between items-center">
          <a href="#" className="text-2xl font-semibold">Medium</a>
          {/* Search bar */}
          <div className="flex items-center justify-center flex-grow">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
              
            />
          </div>
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full mr-2" />
            <p className="text-lg font-semibold">John Doe</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-800 text-white text-center w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-semibold">Your place to write.</h1>
          <p className="mt-4 text-xl">Start writing, whatever comes to your mind.</p>
          <div className="mt-8">
            <a href="#" className="py-3 px-6 bg-white text-gray-800 font-semibold rounded hover:bg-gray-200 transition duration-300">Get started</a>
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="flex flex-wrap justify-center items-center w-full">
        <BlogCard authorName={"Vedant Bhatotia"} title={"7 Mind-Blowing Kubernetes Hacks"} content={"Kubernetes harbors capabilities that even seasoned developers might not be fully aware of. These hacks delve into the more esoteric, yet incredibly potent tricks that can significantly empower those who master them"} publishedDate={"7th April 2024"}/>
        <BlogCard authorName={"Vedant Bhatotia"} title={"7 Mind-Blowing Kubernetes Hacks"} content={"Kubernetes harbors capabilities that even seasoned developers might not be fully aware of. These hacks delve into the more esoteric, yet incredibly potent tricks that can significantly empower those who master them"} publishedDate={"7th April 2024"}/>
        <BlogCard authorName={"Vedant Bhatotia"} title={"7 Mind-Blowing Kubernetes Hacks"} content={"Kubernetes harbors capabilities that even seasoned developers might not be fully aware of. These hacks delve into the more esoteric, yet incredibly potent tricks that can significantly empower those who master them"} publishedDate={"7th April 2024"}/>
        <BlogCard authorName={"Vedant Bhatotia"} title={"7 Mind-Blowing Kubernetes Hacks"} content={"Kubernetes harbors capabilities that even seasoned developers might not be fully aware of. These hacks delve into the more esoteric, yet incredibly potent tricks that can significantly empower those who master them"} publishedDate={"7th April 2024"}/>
        {/* Add more BlogCard components here */}
        <div className="w-full flex justify-between max-w-3xl px-4 mt-8">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Previous</button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Next</button>
        </div>
      </div>
      <div className="py-7"></div>
      {/* Footer */}
      <footer className="bg-black text-white w-full">
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center">
          <p>&copy; 2024 Medium. All rights reserved.</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-gray-100">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-gray-100">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-gray-100">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
