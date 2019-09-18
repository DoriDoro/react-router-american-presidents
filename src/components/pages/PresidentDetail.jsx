import React from 'react'
import presidents from '../../presidents'

export default function PresidentDetail(props) {
  let number = props.match.params.number // because of <Route path=/.../:number component={...}/>
  // let president = presidents[number-1] // solution 1
  let president = presidents.find(p => p.number == number); // solution 2 // just == because the president.number is a number and the number = props.match.params.number is a string
  // OR: let number = Number(props.match.params.number)
  // let president = presidents.find(p => p.number === number)

  if(!president) {
    return <div> Oops, there is not president {props.match.parms.number} </div>
  }

  return (
    <div>
      <h1>President Detail</h1>
      <p> {number} </p>
      <p> {JSON.stringify(president)} </p>
      <ul>
        <li> Number: {president.number} </li>
        <li> Name: {president.president} </li>
        <li> Took Office: {president.took_office} </li>
        <li> Left Office: {president.left_office} </li>
        <li> Party: {president.party} </li>

      </ul>

    </div>
  )
}
