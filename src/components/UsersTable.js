import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const UsersTable = ({user}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user.date}</td>
            <td><a href="#" style={{color: '#006838'}}>View Details</a></td>
            <td>
                <a href="#" style={{color: '#006838'}} className="me-3"><FaEdit/></a>
                <a href="#" style={{color: '#FF514F'}}><FaTrash/></a>
            </td>
        </tr>
    );
};

export default UsersTable;