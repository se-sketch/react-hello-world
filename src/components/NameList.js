import React from 'react'
import Person from './Person'

function NameList() {

    const persons = [
        {id: 1, name: 'Bruce', age: 30, skill: 'react'},
        {id: 2, name: 'Clark', age: 25, skill: 'angular'},
        {id: 3, name: 'Diana', age: 33, skill: 'php'}
    ]

    const personList = persons.map(person => <Person person={person} />)

    return <div>{personList}</div>
}

export default NameList