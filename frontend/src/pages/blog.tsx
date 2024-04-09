import React, { useState } from 'react';
import { BlogCard } from '../components/BlogCard';
import Header from '../components/header';
import Footer from '../components/Footer';
import useBlogs from '../hooks';

const LandingPage: React.FC = () => {
  const blogs = useBlogs();
  return (
    <div className="bg-white text-black font-sans flex flex-col justify-center items-center min-h-screen">
      <Header></Header>



      <div className="py-20 bg-slate-950 text-white text-center w-full">
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
      {blogs.map(blog => (
    <BlogCard 
        authorName={blog.author.name} 
        title={blog.title} 
        content={blog.content} 
        publishedDate='23223'
    />
))}
        {/* <BlogCard authorName={"Vedant Bhatotia"} title={"7 Mind-Blowing Kubernetes Hacks"} content={"Kubernetes harbors capabilities that even seasoned developers might not be fully aware of. These hacks delve into the more esoteric, yet incredibly potent tricks that can significantly empower those who master them"} publishedDate={"7th April 2024"}/>
        <BlogCard authorName={"Vedant Bhatotia"} title={"7 Mind-Blowing Kubernetes Hacks"} content={"Kubernetes harbors capabilities that even seasoned developers might not be fully aware of. These hacks delve into the more esoteric, yet incredibly potent tricks that can significantly empower those who master them"} publishedDate={"7th April 2024"}/>
        <BlogCard authorName={"Vedant Bhatotia"} title={"7 Mind-Blowing Kubernetes Hacks"} content={"Kubernetes harbors capabilities that even seasoned developers might not be fully aware of. These hacks delve into the more esoteric, yet incredibly potent tricks that can significantly empower those who master them"} publishedDate={"7th April 2024"}/>
        <BlogCard authorName={"Vedant Bhatotia"} title={"7 Mind-Blowing Kubernetes Hacks"} content={"Kubernetes harbors capabilities that even seasoned developers might not be fully aware of. These hacks delve into the more esoteric, yet incredibly potent tricks that can significantly empower those who master them"} publishedDate={"7th April 2024"}/> */}
        
        <div className="w-full flex justify-between max-w-3xl px-4 mt-8">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Previous</button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Next</button>
        </div>
      </div>
      <div className="py-7"></div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
