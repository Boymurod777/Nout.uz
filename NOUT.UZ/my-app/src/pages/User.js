import React from 'react'
import Nav from "../components/Nav";
// import { Context } from '../context';
import { useParams } from 'react-router-dom';
import data from '../objects/Data'
import styled from 'styled-components';

const User = () => {
    const params = useParams()
    // const {filter} = useContext(Context)

    const currentData = data.find(el => {
        return(el.id === params.id)
    })
  return (
    <Uzer>
        <Nav/>
        <aside>
        <h3>{currentData.package}</h3>
        <img src={currentData.image} alt="" />
        <h1>{currentData.cost}</h1>
        <h2>{currentData.cash}</h2>
        <h4>{currentData.und}</h4>
        </aside>
    </Uzer>
  )
}
const Uzer = styled.div`

aside{
  margin:auto;
  text-align: center;
border: 5px solid blue;
width: 440px;
height: 500px;
img{
  width: 60%;
}
h4{
  color: grey;
}
h1,h2{
  color: blue;
}
}
`
export default User;