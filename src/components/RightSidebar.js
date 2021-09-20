import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import { useHistory } from 'react-router';
import './style.css';
const RightSidebar = () => {
    const history = useHistory();
    console.log(history.location.pathname);
    const getColor = (current) =>{
        if (history.location.pathname === current) {
            return "#FF514F";
        }
    }
    return (
        <div className="py-3 px-3">
            <h5>MANAGEMENT</h5>
            <h6>Manage</h6>
            <p style={{fontSize:"14px"}}>Add, edit, delete, users, groups and roles</p>

            <div >
            <Link style={{textDecoration: 'none'}} to="/dash-board/admin/manage-user">
                <div className="d-flex">

                    <div>
                      <h4 className="manage" style={{backgroundColor:getColor('/dash-board/admin/manage-user')}}>01</h4>
                    </div>

                <div style={{color:"black"}}>
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
                  <div style={{color:"black"}}>
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
                  <div style={{color:"black"}}>
                    <h6>Manage Roles</h6>
                    <p style={{fontSize:'14px'}}>Let's you manage Roles</p>
                </div>
                </div>
                </Link>

        </div>
        </div>
    );
};

export default RightSidebar;