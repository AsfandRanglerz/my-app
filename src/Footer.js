import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
        <div className="row mx-0">
            <div className="col-sm-4">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li> {/* Added link to the new page */}
                </ul>                
            </div>
            <div className="col-sm-4">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li> {/* Added link to the new page */}
                </ul>
            </div>
            <div className="col-sm-4">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li> {/* Added link to the new page */}
                </ul>                
            </div>
        </div>
    </footer>
  );
};

export default Footer;