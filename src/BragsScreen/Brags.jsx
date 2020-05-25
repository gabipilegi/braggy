import React from 'react'

const Brags = ({ brags }) => (
  <ul>
    {brags.map((brag, index) => (
      <li key={index}>{brag}</li>
    ))}
  </ul>
)

export default Brags
