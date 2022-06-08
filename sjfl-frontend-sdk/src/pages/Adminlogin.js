import React from "react";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";


const Adminlogin = () => {
    return (
      <div className="Admin">
          <div className = "flex flex-wrap justify-center mt-20">
              <div className="w-full max-w-sm">
              <h1 className="text-3xl font-oswald">Login</h1>
                  <form action="" className="shadown-md bg-white rounded px-8 pt-6 pb-8 mb-4">
                      <div className = "mb-5">
                          <label htmlfor="" className="font-poppins block text-gray-700 text-sm font-bold mb-2">
                              Username
                          </label>
                          <input type="text" className="shadow appreance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline" 
                          placeholder = "Username" />
                      </div>
                      <div className = "mb-6">
                          <label htmlfor="password" className="font-poppins block text-gray-700 text-sm font-bold mb-2">
                            Password
                          </label>
                          <input type="password" className="shadow appreance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline" 
                          placeholder = "Password" />
                      </div>
                      <div className="flex items-center justify-between">
                          <button className = "bg-black hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Sign In
                          </button>
                    </div>
                      
                  </form>
              </div> 
          </div>
        
      </div>
    );
  };
  
  export default Adminlogin;
  