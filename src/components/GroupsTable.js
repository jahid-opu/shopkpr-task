import React from 'react';

const GroupsTable = ({group}) => {
    return (
        <tr>
            <td>{group.id}</td>
            <td>{group.name}</td>
            <td>{group.details}</td>
            <td>{group.date}</td>
            <td>Delete</td>
        </tr>
    );
};

export default GroupsTable;