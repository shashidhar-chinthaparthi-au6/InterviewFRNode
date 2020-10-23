import React from 'react'

export default function table(props) {
    
    return (
        <table >
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>email</th>
                    <th>phone no</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(row => (
                        <tr>
                            <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.gender}</td>
                    <td>{row.email}</td>
                    <td>{row.phoneNo}</td>
                        </tr>
                    )
                        
                    )
                }
            </tbody>
        </table>
    )
}
