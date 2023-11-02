import React from "react";
import {TodoRowItem} from "./TodoRowItem";
import { ToDoModules } from "../models/ToDoModule";

export const ToTable:React.FC<{
    todos: ToDoModules[],
    deleteToDo: Function
}>=(props)=> {

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(
                    todos => (
                        <TodoRowItem
                            key={todos.rowNo}
                            rowNo={todos.rowNo}
                            desc={todos.desc}
                            assigned={todos.assigned}
                            deleteToDo={props.deleteToDo}

                        ></TodoRowItem>
                    )
                )}
                {/*  
              <TodoRowItem 
              rowNo={props.todos[0].rowNo}
              desc={props.todos[0].desc}
              assigned={props.todos[0].assigned}></TodoRowItem>
              <TodoRowItem 
              rowNo={props.todos[1].rowNo}
              desc={props.todos[1].desc}
              assigned={props.todos[1].assigned}></TodoRowItem>
              <TodoRowItem 
              rowNo={props.todos[2].rowNo}
              desc={props.todos[2].desc}
    assigned={props.Reacttodos[2].assigned}></TodoRowItem>*/}
            </tbody>
        </table>
    );

}
