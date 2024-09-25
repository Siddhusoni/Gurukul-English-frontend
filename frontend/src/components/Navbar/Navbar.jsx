import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <section className="sticky top-0 z-40 w-full h-16 bg-white/80 backdrop-blur-xl dark:bg-black/80 px-6 md:px-8">
        <div className="w-full mx-auto max-w-7xl h-full hidden gap-5 md:grid md:grid-cols-[1fr_0.5fr_1fr] md:items-center">
          <nav className="w-full h-full flex items-center justify-start">
            <button className="pr-12 py-3 text-black whitespace-nowrap cursor-pointer hover:text-black/60 hover:transition-all duration-100 dark:text-white dark:hover:text-white/60">

              <Link to="/">
              <div
                className="relative undefined"
                data-link="link=home&target=_blank&text=Home"
              >
             Master English
              </div>
              </Link>
            
            </button>
          </nav>

          
          <div className="w-full h-full flex items-center justify-center">
            <img
              className="w-auto h-10 object-cover"
              src="https://cdn.wegic.ai/assets/onepage/thread/icon/1716712317642.png"
              alt="logo"
            />
          </div>

                
           
          
          <div className="w-full h-full flex items-center justify-end gap-4">


          <div className="flex gap-2">


  <>
    <Link to="/login">
      <button className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-500 transition-all duration-100">
        Login
      </button>
    </Link>
    <Link to="/register">
      <button className="px-4 py-2 text-indigo-600 bg-white rounded border border-indigo-600 hover:bg-indigo-100 transition-all duration-100">
        Register
      </button>
    </Link>
  </>

</div>
</div>
        </div>
        <div className="relative z-40 w-full h-full flex items-center justify-between md:hidden">
          <img
            className="w-auto h-10 px-6 object-cover"
            src="https://cdn.wegic.ai/assets/onepage/thread/icon/1716712317642.png"
            alt="logo"
          />
          <div className="flex gap-2">



        
       
            <>
              <Link to="/login">
                <button className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-500 transition-all duration-100">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="px-4 py-2 text-indigo-600 bg-white rounded border border-indigo-600 hover:bg-indigo-100 transition-all duration-100">
                  Register
                </button>
              </Link>
            </>
       
        </div>
          </div>
      
      </section>
    


      
    </>
  );
};

export default Navbar;
