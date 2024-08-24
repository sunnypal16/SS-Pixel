import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = ({ setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation(); 

  return (
    <div>
      <div className="nav mt-3">
        <div
          className="nav-button button btn btn-secondary mx-2"
          onClick={() => {setSearch("Adventure")
            navigate('/')
          }}
        >
          Adventure
        </div>
        <div
          className="nav-button button btn btn-secondary mx-2"
          onClick={() => {setSearch("Travel")
            navigate('/')
          }}
        >
          Travel
        </div>
        <div
          className="nav-button button btn btn-secondary mx-2"
          onClick={() => {setSearch("City")
            navigate('/')
          }}
        >
          City
        </div>
        <div
          className="nav-button button btn btn-secondary mx-2"
          onClick={() => {setSearch("Car")
            navigate('/')
          }}
        >
          Car
        </div>
        <div
          className="nav-button button btn btn-secondary mx-2"
          onClick={() => {setSearch("Fashion")
            navigate('/')
          }}
        >
          Fashion
        </div>
        <div
          className="nav-button button btn btn-secondary mx-2"
          onClick={() => {setSearch("Animal")
            navigate('/')
          }}
        >
          Animals
        </div>
        <div
          className="nav-button button btn btn-secondary mx-2"
          onClick={() => {setSearch("Technology")
            navigate('/');
          }}
        >
          Technology
        </div>
        <div
          className="nav-button button btn btn-secondary mx-2"
          onClick={() => {setSearch("Business & finance")
            navigate('/')
          }}
        >
          Business & Finance
        </div>
        <div
          className="nav-button button btn btn-secondary mx-2"
          onClick={() => {setSearch("Tokyo")
            navigate('/')
          }}
        >
          Tokyo
        </div>
        <div
          className="nav-button button btn btn-secondary mx-2"
          onClick={() =>  {setSearch("Dubai")
            navigate('/')
          }}
        >
          Dubai
        </div>

        {
          location.pathname === '/saved' ?(
            <div
              className="nav-button button btn btn-secondary mx-2"
              onClick={() => navigate('/')}
            >
            Home   
         </div>

          ):(
            <div
              className="nav-button button btn btn-secondary mx-2"
              onClick={() =>navigate('/saved')}
            >
            Saved
           </div>
          )
        }
        
        
      </div>

      <div className="container">
        <div
          className="mb-30 my-4"
          style={{
            width: "700px",
            margin: "0 auto",
          }}
        >
          {
            location.pathname === '/' && (
            <input
              type="text"  // Changed type from 'email' to 'text' for general search
              className="form-control bg-light text-dark"
              placeholder="Search......."
              onChange={(e) => setSearch(e.target.value)}
            />
            )
            
          }
        </div>
      </div>
    </div>
  );
};
