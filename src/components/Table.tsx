import React from 'react'

import Person from '../Types';

const Table: React.FC<{people: Person[]}> = ({people}) => {
    console.log("people table", people)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Birth year</th>
                        <th>Gender</th>
                        <th>Mass kg</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, index) => { return (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{person.name}</td>
                            <th>{person.birth_year}</th>
                            <td>{person.gender}</td>
                            <td>{ person.mass} kg</td>
                        </tr>
                    )})}
                </tbody>
            </table>
            
        </div>
    )
}

export default Table
