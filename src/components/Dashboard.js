import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { FaUsers, FaUserCog, FaDownload, FaPlus, FaSearch, FaSquarespace, FaCircleNotch } from "react-icons/fa";
import { FormControl, InputGroup, Table } from 'react-bootstrap';
import UsersTable from './UsersTable';

const Dashboard = () => {

    // Fake Data
    const users = [
        {
            id: 89651,
            name: 'John Doe',
            userName: 'John Doe',
            email: 'john@example.com',
            date: '8:00 PM 19 sep 2021'
        },
        {
            id: 89652,
            name: 'Mr Rathor',
            userName: 'Mr Rathor',
            email: 'mr@example.com',
            date: '8:00 PM 19 sep 2021'
        },
        {
            id: 89653,
            name: 'Michel ab',
            userName: 'Michel ab',
            email: 'ab@example.com',
            date: '8:00 PM 19 sep 2021'
        },
        {
            id: 89654,
            name: 'Omar Abdullah',
            userName: 'Omar Abdullah',
            email: 'omar@example.com',
            date: '8:00 PM 19 sep 2021'
        },
        {
            id: 89655,
            name: 'John Dalton',
            userName: 'John Dalton',
            email: 'johnd@example.com',
            date: '8:00 PM 19 sep 2021'
        },
        {
            id: 89656,
            name: 'Provati v',
            userName: 'Provati v',
            email: 'provati@example.com',
            date: '8:00 PM 19 sep 2021'
        },
        {
            id: 89657,
            name: 'R karim',
            userName: 'R Karim',
            email: 'rkarim@example.com',
            date: '8:00 PM 19 sep 2021'
        },
        {
            id: 89658,
            name: 'John Doe',
            userName: 'John Doe',
            email: 'john@example.com',
            date: '8:00 PM 19 sep 2021'
        }
    ];
    const [user, setUsers] = useState(users);
    return (
        <div className="container-fluid">
            <div className="row">

            {/* Left Sidebar */}
            <div className="col col-md-2">
                <LeftSidebar/>
            </div>


            <div className="col col-md-7 px-3 py-5 bg-light">

                <div className="d-flex justify-content-between">
                    <div>
                    <h5 style={{color:'#006838'}}>Dashboard // Admin</h5>
                    <p style={{fontSize:'14px', color:'gray'}}>Add, Edit, Delete Users</p>
                    </div>
                    <div>
                        <button style={{backgroundColor:'#006838', color:'white'}} className="btn">Dashboard</button>
                    </div>
                </div>

                <h5>Summary</h5>

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
                          <h6>Users</h6>
                          <p>541 Users</p>
                        </div>
                    </div>

                    <div className="d-flex summary-option">
                        <div className="me-3">
                        <div className="icon">
                          <FaSquarespace/>
                        </div>
                        </div>
                        <div>
                          <h6>Gropus</h6>
                          <p>55 Groups</p>
                        </div>
                    </div>

                    <div className="d-flex summary-option">
                        <div className="me-3">
                        <div className="icon">
                          <FaCircleNotch/>
                        </div>
                        </div>
                        <div>
                          <h6>Roles</h6>
                          <p>25 Roles</p>
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
      <th>User Id</th>
      <th>Name</th>
      <th>User Name</th>
      <th>Email</th>
      <th>Creation Date</th>
      <th>User Details</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {
        user.map(user => <UsersTable user={user} />)
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

export default Dashboard;