import React from 'react';


export const TodoRowItem:React.FC<{
    rowNo:number,
    desc:string,
    assigned:string,
    deleteToDo:Function 
}> = (props) => {
    return (
        <tr onClick={() => props.deleteToDo(props.rowNo)}>
            <th scope='row'>{props.rowNo}</th>
            <td>{props.desc}</td>
            <td>{props.assigned}</td>
        </tr>
    );
}
