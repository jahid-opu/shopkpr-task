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
            return "red";
        }
    }
    return (
        <div>
            <h5>Management</h5>
            <h6>Manage</h6>
            <p>Add, edit, delete, users, groups and roles</p>

            <div >
            <Link style={{textDecoration: 'none'}} to="/dash-board/admin/manage-user">
                <div className="p-3">
                    <span className="manage" style={{backgroundColor:getColor('/dash-board/admin/manage-user')}}
                    >01</span>
                <span>Manage Users</span>
                </div>
                </Link>

                <Link style={{textDecoration: 'none'}} to="/dash-board/admin/manage-groups">
                <div className="p-3">
                <span className="manage" style={{backgroundColor:getColor('/dash-board/admin/manage-groups')}}>02</span>
                <span>Manage Groups</span>
                </div>
                </Link>

                <Link style={{textDecoration: 'none'}} to="/dash-board/admin/manage-roles">
                <div className="p-3">
                <span className="manage" style={{backgroundColor:getColor('/dash-board/admin/manage-roles')}}>02</span>
                <span>Manage Roles</span>
                </div>
                </Link>

        </div>
        </div>
    );
};

export default RightSidebar;