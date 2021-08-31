import React from 'react'

import Person from '../Types';

const Table: React.FC<{people: Person[]}> = ({people}) => {
    console.log("people table", people)
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr className='table-row headRow'>
                        <th className='table-column'>#</th>
                        <th className='table-column'>Name</th>
                        <th className='table-column'>Birth year</th>
                        <th className='table-column'>Gender</th>
                        <th className='table-column'>Mass kg</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, index) => { return (
                        <tr key={index}  className='table-row '>
                            <th className='table-column'>{index + 1}</th>
                            <td className='table-column tBody'>{person.name}</td>
                            <td className='table-column'>{person.birth_year}</td>
                            <td className='table-column '>{person.gender}</td>
                            <td className='table-column'>{ person.mass}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
            
        </div>
    )
}

export default Table
