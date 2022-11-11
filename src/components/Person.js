import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>
          {/*
          {person.id}. I am {person.name}, I am {person.age}, I know {person.skill}
           */}
             I am {person}
        </h2>
    </div>
  )
}

export default Person