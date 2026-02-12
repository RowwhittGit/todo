import React from 'react'

function InfoCard({name, rollNo}) {
  return (
    <div>
      <h2>Persona Infromation</h2>
      <ul>
        <li>{name}</li>
        <li>{rollNo}</li>
      </ul>
    </div>
  )
}

export default InfoCard
