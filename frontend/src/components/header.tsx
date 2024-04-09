function Header(){
    return(
        <>
        <div className="bg-black text-white shadow-lg w-full">
  <div className="max-w-10xl mx-auto px-4 py-2 flex justify-between items-center">
    <a href="#" className="text-2xl font-semibold">Medium</a>
    <div style={{ width: '20px' }}></div>
    <div className="flex-grow">
      {/* Search bar */}
      <div className="flex items-center justify-start">
        <input
          type="text"
          placeholder="Search..."
          className="py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    </div>
    <div className="flex items-center">
      {/* User's Profile Image and Name */}
      <div className="flex items-center mr-4">

        <Avatar name="John Doe"></Avatar>
        <p className="text-lg font-semibold">John Doe</p>
      </div>
      {/* Logout Option */}
      <button className="text-white text-lg font-semibold focus:outline-none">
        Logout
      </button>
    </div>
  </div>
</div>

        </>
    )
}

export function Avatar({ name }: { name: string }) {
    return (
        <div className="relative inline-flex items-center justify-center overflow-hidden bg-orange-500 rounded-full w-10 h-10 mx-2">
            <span className="text-md font-extralight text-black text-lg font-bold
             dark:text-blacks">
                {name[0]}
            </span>
        </div>
    );
}
export default Header