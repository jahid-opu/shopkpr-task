import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { FaUsers } from "react-icons/fa";
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


            <div className="col col-md-8 bg-light">

                <div className="d-flex justify-content-between">
                    <div>
                    <h5>Dashboard // Admin</h5>
                    <p>Add, Edit, Delete Users</p>
                    </div>
                    <div>
                        <button className="btn btn-primary">Dashboard</button>
                    </div>
                </div>

                <h5>Summary</h5>

                <div className="d-flex justify-content-between">

                    <div className="d-flex">
                        <div>
                          <FaUsers/>
                        </div>
                        <div>
                          <h6>Admins</h6>
                          <p>5 Users</p>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div>
                          <FaUsers/>
                        </div>
                        <div>
                          <h6>Admins</h6>
                          <p>5 Users</p>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div>
                          <FaUsers/>
                        </div>
                        <div>
                          <h6>Admins</h6>
                          <p>5 Users</p>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div>
                          <FaUsers/>
                        </div>
                        <div>
                          <h6>Admins</h6>
                          <p>5 Users</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div>
                    <button className="btn btn-primary">
                        Donwload CSV
                    </button>

                    <button className="btn btn-primary">
                        Donwload CSV
                    </button>
                    </div>

                    <button className="btn btn-primary">
                        Donwload CSV
                    </button>
                </div>

                <div>
                  <InputGroup className="mb-3">
                       <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                       <FormControl aria-label="Text input with checkbox" />
                  </InputGroup>
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
            <div className="col col-md-2 bg-light">
                <RightSidebar/>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;