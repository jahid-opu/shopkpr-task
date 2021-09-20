import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const GroupsTable = ({group}) => {
    return (
        <tr>
            <td>{group.id}</td>
            <td>{group.name}</td>
            <td>{group.details}</td>
            <td>{group.date}</td>
            <td>
            <a href="#" style={{color: '#006838'}} className="me-3"><FaEdit/></a>
                <a href="#" style={{color: '#FF514F'}}><FaTrash/></a>
            </td>
        </tr>
    );
};

export default GroupsTable;