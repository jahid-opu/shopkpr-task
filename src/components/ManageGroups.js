import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { FaUsers } from "react-icons/fa";
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

                <h5>Groups Summary</h5>

                <div className="d-flex justify-content-between">

                    <div className="d-flex">
                        <div>
                          <FaUsers/>
                        </div>
                        <div>
                          <h6>Total Groups</h6>
                          <p>555 Groups</p>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div>
                          <FaUsers/>
                        </div>
                        <div>
                          <h6>This Year</h6>
                          <p>255 Groups</p>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div>
                          <FaUsers/>
                        </div>
                        <div>
                          <h6>This Months</h6>
                          <p>50 Groups</p>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div>
                          <FaUsers/>
                        </div>
                        <div>
                          <h6>This Week</h6>
                          <p>5 Groups</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div>
                    <button className="btn btn-primary">
                        Donwload CSV
                    </button>

                    <button className="btn btn-primary">
                        Donwload PDF
                    </button>
                    </div>

                    <button className="btn btn-primary">
                        Add Group
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
            <div className="col col-md-2 bg-light">
                <RightSidebar/>
            </div>
            </div>
        </div>
    );
};

export default ManageGroups;