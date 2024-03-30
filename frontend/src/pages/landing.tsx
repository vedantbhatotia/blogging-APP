function Landing(){
    return(
        <>
        <div className="flex flex-col min-h-screen">
<header className="bg-white border-b border-gray-200 dark:bg-black dark:border-black-800 text-black dark:text-white">
<div className="container flex items-center justify-between h-14 px-4 md:px-6">
 <a href="#" className="flex items-center space-x-2 text-lg font-semibold tracking-wider uppercase">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
     className="h-6 w-6"
   >
     <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
     <line x1="4" x2="4" y1="22" y2="15"></line>
   </svg>
   <span>Blog</span>
 </a>
 <nav className="flex items-center space-x-4">
   <a href="#" className="text-lg font-medium">Sign In</a>
   <a href="#" className="text-lg font-medium underline underline-offset-2 text-lg">Sign Up</a>
 </nav>
</div>
</header>


   <main className="flex-1">
   <div className="w-full py-6 md:py-12 bg-gradient-to-r from-gray-400 to-white-500">
   <div className="container px-4 md:px-6">
     <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
       <div className="space-y-4">
         <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white animate__animated animate__fadeInUp">
           Welcome to the Blogging Platform
         </h1>
         <p className="text-black-200 md:text-xl dark:text-black-400 animate__animated animate__fadeInUp animate__delay-1s">
           Where your words meet the world. Start writing your story today.
         </p>
         <div className="flex space-x-7 animate__animated animate__fadeInUp animate__delay-2s">
           <a href="/signup" className="btn btn-lg bg-white text-black-500 hover:bg-gray-500 hover:text-black transition duration-300 ease-in-out transform hover:-translate-y-1">
             Sign Up
           </a>
           <a href="/signin" className="btn btn-lg bg-white text-black-500 hover:bg-gray-500 hover:text-black transition duration-300 ease-in-out transform hover:-translate-y-1">
             Sign In
           </a>
         </div>
       </div>
       <div className="flex justify-center relative">
         <div className="rounded-xl overflow-hidden bg-gray-300 border border-gray-400 transition duration-300 ease-in-out transform hover:scale-105">
           <img
             src="https://i.pinimg.com/736x/3f/0d/54/3f0d547a55536dc7c31ae12b33750210.jpg"
             width="550"
             height="310"
             alt="Hero"
             className="aspect-video overflow-hidden rounded-xl object-cover object-center animate__animated animate__fadeInRight"
           />
         </div>
       </div>
     </div>
   </div>
 </div>
     <div className="w-full py-6 md:py-12">
       <div className="container px-4 md:px-6">
         <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
           <div className="flex flex-col space-y-2">
             <a href="#" className="font-semibold">The Art of Cooking: Exploring Culinary Delights</a>
             <p className="text-sm text-gray-500 dark:text-gray-400">
               Embark on a journey through the world of culinary arts and discover the magic of cooking.
             </p>
           </div>
           <div className="flex flex-col space-y-2">
             <a href="#" className="font-semibold">Unlocking Creativity: A Guide to Inspired Living</a>
             <p className="text-sm text-gray-500 dark:text-gray-400">
               Dive into the depths of your imagination and unleash the creativity that lies within.
             </p>
           </div>
           <div className="flex flex-col space-y-2">
             <a href="#" className="font-semibold">Adventures in Nature: Exploring the Great Outdoors</a>
             <p className="text-sm text-gray-500 dark:text-gray-400">
               Experience the wonders of nature as we venture into the wilderness and embrace the beauty of the natural world.
             </p>
           </div>
         </div>
       </div>
     </div>
   </main>
   <footer className="flex-shrink-0 bg-black border-t border-gray-200 dark:bg-black-900 dark:border-gray-800 text-white">
<div className="container flex items-center justify-between h-14 px-4 md:px-6">
 <a href="#" className="flex items-center space-x-2 text-sm font-semibold tracking-wider uppercase">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
     className="h-6 w-6"
   >
     <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
     <line x1="4" x2="4" y1="22" y2="15"></line>
   </svg>
   <span>Blog</span>
 </a>
 <nav className="flex items-center space-x-4">
   <a href="#" className="text-sm font-medium">Terms</a>
   <a href="#" className="text-sm font-medium">Privacy</a>
 </nav>
</div>
</footer>

 </div>
        </>
    )
}
export default Landing