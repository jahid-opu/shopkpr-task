import React from 'react';
import { FaUsers, FaRegHeart, FaRegQuestionCircle, FaWrench } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    return (
        <div className="p-3">
            <div>
                <b style={{color: '#006838', fontSize: '25px'}}>ShopKpr</b>
            </div>
            <ul  className="pt-5 list-unstyled left-side-bar">
                <li style={{backgroundColor:"#006838"}}>
                    <Link style={{textDecoration: 'none'}} to="/"><FaUsers style={{color: 'white'}}/> <span style={{color: 'white'}}>Admin</span></Link>
                </li>
                <li>
                    <Link style={{textDecoration: 'none'}} to="/"><FaRegHeart style={{color: 'black'}}/> <span>Products</span></Link>
                </li>
                <li>
                    <Link style={{textDecoration: 'none'}} to="/"><FaWrench style={{color: 'black'}}/> <span>Settings</span></Link>
                </li>
                <li>
                    <Link style={{textDecoration: 'none'}} to="/"><FaRegQuestionCircle style={{color: 'black'}}/> <span>Helps</span></Link>
                </li>
            </ul>
        </div>
    );
};

export default LeftSidebar;