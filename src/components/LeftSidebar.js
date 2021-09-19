import React from 'react';
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    return (
        <div >
            <ul  className="list-unstyled">
                <li>
                    <Link to="/"><FaUsers/> <span>Admin</span></Link>
                </li>
                <li>
                    <Link to="/"><FaUsers/> <span>Products</span></Link>
                </li>
                <li>
                    <Link to="/"><FaUsers/> <span>Settings</span></Link>
                </li>
                <li>
                    <Link to="/"><FaUsers/> <span>Helps</span></Link>
                </li>
            </ul>
        </div>
    );
};

export default LeftSidebar;