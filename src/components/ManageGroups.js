import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { FaUsers, FaUserCog,FaDownload, FaPlus,FaSearch } from "react-icons/fa";
import { FormControl, InputGroup, Table } from 'react-bootstrap';
import GroupsTable from './GroupsTable';

const ManageGroups = () => {

    // Fake Data
    const groups = [
        {
            id: 89651,
            name: 'Support Group',
            details: 'Sopports Live Customers',
            date: '8:00 PM 19 sep 2021'
        },
        {
            id: 89652,
            name: 'Ticket Group',
            details: 'Check Teckets',
            date: '8:00 PM 19 sep 2021'
        },
        {
            id: 89653,
            name: 'Call Group',
            details: 'Handle Customer calling for leads',
            date: '8:00 PM 19 sep 2021'
        },
        {
            id: 89654,
            name: 'Chat Group',
            details: 'Sopports Live Customers',
            date: '8:00 PM 19 sep 2021'
        },
        {
            id: 89655,
            name: 'Manager Sylhet',
            details: 'Sylhet Manager',
            date: '8:00 PM 19 sep 2021'
        },
        {
            id: 89656,
            name: 'Manager Dhaka',
            details: 'Dhaka Manager',
            date: '8:00 PM 19 sep 2021'
        },
        {
            id: 89657,
            name: 'Support Group',
            details: 'Sopports Live Customers',
            date: '8:00 PM 19 sep 2021'
        },
        {
            id: 89658,
            name: 'Support Group',
            details: 'Sopports Live Customers',
            date: '8:00 PM 19 sep 2021'
        }
    ];
    const [group, setGroups] = useState(groups);
    return (
        <div className="container-fluid">
            <div className="row">

            {/* Left Sidebar */}
            <div className="col col-md-2">
                <LeftSidebar/>
            </div>


            <div className="col col-md-7 p-3 bg-light">

                <div className="d-flex justify-content-between">
                    <div>
                    <h5 style={{color:'#006838'}}>Dashboard // Admin</h5>
                    <p style={{fontSize:'14px', color:'gray'}}>Add, Edit, Delete Users</p>
                    </div>
                    <div>
                        <button style={{backgroundColor:'#006838', color:'white'}} className="btn">Dashboard</button>
                    </div>
                </div>

                <h5>Groups Summary</h5>

                <div className="d-flex justify-content-between">

                <div className="d-flex summary-option">
                        <div className="me-3">
                            <div className="icon">
                          <FaUserCog/>
                          </div>
                        </div>
                        <div>
                          <h6>Admins</h6>
                          <p>5 Users</p>
                        </div>
                    </div>

                    <div className="d-flex summary-option">
                        <div className="me-3">
                        <div className="icon">
                          <FaUsers/>
                        </div>
                        </div>
                        <div>
                          <h6>Admins</h6>
                          <p>5 Users</p>
                        </div>
                    </div>

                    <div className="d-flex summary-option">
                        <div className="me-3">
                        <div className="icon">
                          <FaUsers/>
                        </div>
                        </div>
                        <div>
                          <h6>Admins</h6>
                          <p>5 Users</p>
                        </div>
                    </div>

                    <div className="d-flex summary-option">
                        <div className="me-3">
                        <div className="icon">
                          <FaUsers/>
                        </div>
                        </div>
                        <div>
                          <h6>Admins</h6>
                          <p>5 Users</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex my-4 justify-content-between">
                    <div>
                    <button className="download-btn">
                    <i><FaDownload/></i>
                        Donwload CSV
                    </button>

                    <button className="download-btn">
                        <i><FaDownload/></i>
                        Donwload PDF
                    </button>
                    </div>

                    <button className="add-btn">
                    
                    <i><FaPlus/></i>
                        Add User
                    </button>
                </div>

                <div className="mt-5 mb-3 w-50 ms-auto">

                   <div className="form-group has-search">
                     <span className="form-control-feedback"><FaSearch/></span>
                  <input type="text" style={{backgroundColor:"#E6E6E7"}} className="form-control" placeholder="Search"/>
                   </div>
                </div>

                {/* Users Table */}
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>Group Id</th>
      <th>Group Name</th>
      <th>Group Description</th>
      <th>Creation Date</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {
        group.map(group => <GroupsTable group={group} />)
  }
  </tbody>
</Table>
                
            </div>


            {/* Right Sidebar */}
            <div className="col col-md-3">
                <RightSidebar/>
            </div>
            </div>
        </div>
    );
};

export default ManageGroups;