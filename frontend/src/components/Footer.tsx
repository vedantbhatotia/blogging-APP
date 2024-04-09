
function Footer(){
    return(
        <>
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
        </>
    )
}
export default Footer