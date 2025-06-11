

export function Footer(){

    return (
      <footer
        className="bg-gray-500 text-2xl text-white text-center h-50 
        p-10 mt-10 border-none shadow-lg shadow-gray-500/50"
      >
        <div className=" flex justify-center items-center gap-4 mt-5">
          <a href="#" className="text-black hover:text-zinc-200 transition duration-400">
            <i class="ri-linkedin-box-line"></i>
          </a>
          <a href="#" className="text-black hover:text-zinc-200">
            <i class="ri-twitter-x-fill"></i>
          </a>
          <a href="#" className="text-black hover:text-zinc-200">
            <i class="ri-instagram-line"></i>
          </a>
          <a href="#" className="text-black hover:text-zinc-200">
            <i class="ri-facebook-line"></i>
          </a>
        </div>
        <p className="text-sm text-black font-bold pt-3 ">Made by SHAYAN </p>
      </footer>
    );
}