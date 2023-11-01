import React from 'react';
function TodoRowItem(props: {
    rowNo: number,
    desc: string,
    assigned: string,
    deleteToDo: Function
}) {
    return (
        <tr onClick={() => props.deleteToDo(props.rowNo)}>
            <th scope='row'>{props.rowNo}</th>
            <td>{props.desc}</td>
            <td>{props.assigned}</td>
        </tr>
    );
}

export default TodoRowItem;