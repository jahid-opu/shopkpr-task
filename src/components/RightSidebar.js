import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaLink, FaNewspaper, FaShoppingBasket, FaUsers } from 'react-icons/fa';
import { useHistory } from 'react-router';
import './style.css';
import { FaUserCog } from 'react-icons/fa';
const RightSidebar = () => {
    const history = useHistory();
    console.log(history.location.pathname);
    const getColor = (current) =>{
        if (history.location.pathname === current) {
            return "#FF514F";
        }
    }
    return (
        <div className="py-5 px-3">
            <div className="d-flex justify-content-between mb-3">
             <i > <FaNewspaper/></i>
             <h5>MANAGEMENT</h5>
             <i style={{color:"#FF514F"}}> <FaUserCog/></i>
            </div>
            <h6>Manage</h6>
            <p style={{fontSize:"14px"}}>Add, edit, delete, users, groups and roles</p>

            <div>
            <Link style={{textDecoration: 'none'}} to="/dash-board/admin/manage-user">
                <div className="d-flex">

                    <div>
                      <h4 className="manage" style={{backgroundColor:getColor('/dash-board/admin/manage-user')}}>01</h4>
                    </div>

                <div className="manage-btn" style={{color:"black"}}>
                    <h6>Manage Users</h6>
                    <p style={{fontSize:'14px'}}>Let's you manage users</p>
                </div>
                </div>
            </Link>

                <Link style={{textDecoration: 'none'}} to="/dash-board/admin/manage-groups">

                <div className="d-flex">
                    <div>
                      <h4 className="manage" style={{backgroundColor:getColor('/dash-board/admin/manage-groups')}}>02</h4>
                  </div>
                  <div className="manage-btn" style={{color:"black"}}>
                    <h6>Manage Groups</h6>
                    <p style={{fontSize:'14px'}}>Let's you manage Groups</p>
                </div>
                </div>
                </Link>

                <Link style={{textDecoration: 'none'}} to="/dash-board/admin/manage-roles">

                <div className="d-flex">
                  <div>
                     <h4 className="manage" style={{backgroundColor:getColor('/dash-board/admin/manage-roles')}}>02</h4>
                  </div>
                  <div className="manage-btn" style={{color:"black"}}>
                    <h6>Manage Roles</h6>
                    <p style={{fontSize:'14px'}}>Let's you manage Roles</p>
                </div>
                </div>
                </Link>

        </div>

        <div style={{marginTop:'250px'}}>
            <h6>QUICK LINKS</h6>

            <div className="d-flex justify-content-between text-center">
                <Link style={{color:"#006838"}} to="#">
                <i > <FaBox/></i>
                <p>Products</p>
                </Link>

                <Link style={{color:"#006838"}} to="#">
                <i > <FaShoppingBasket/></i>
                <p>Orders</p>
                </Link>

                <Link style={{color:"#006838"}} to="#">
                <i > <FaNewspaper/></i>
                <p>Tickets</p>
                </Link>

                <Link style={{color:"#006838"}} to="#">
                <i > <FaLink/></i>
                <p>Leads</p>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default RightSidebar;