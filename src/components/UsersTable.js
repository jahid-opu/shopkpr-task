import React from 'react';

const UsersTable = ({user}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user.date}</td>
            <td>View Details</td>
            <td>Delete</td>
        </tr>
    );
};

export default UsersTable;