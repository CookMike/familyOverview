import React from "react"
import { useAppSelector } from "../../store/store"

export const List = () =>{
    const persons = useAppSelector( state => state.person.persons )

    return (
            <div>
                <p>List component</p>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map(person=>(
                            <tr key ={person.id}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )
 }