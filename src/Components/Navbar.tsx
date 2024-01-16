import React from 'react'

const Navbar: React.FC = () => {
      return (
        <nav className="bg-gray-800 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">

            <h1 className="text-2xl font-semibold">Zepto Chip Component</h1>
    
      
            <div className="flex items-center space-x-4">
                  <a target='_blank' href="https://github.com/leander006/"><i className="fa-brands cursor-pointer fa-2xl fa-github"></i></a>
                  <a target='_blank' href="https://www.linkedin.com/in/leander06/"><i className="fa-brands cursor-pointer fa-2xl fa-linkedin"></i></a>
                  <a target='_blank' href="https://leanderdsilva.netlify.app/"><i className="fa-solid cursor-pointer fa-2xl fa-blog"></i></a>
            </div>
          </div>
        </nav>
      );
    };

export default Navbar