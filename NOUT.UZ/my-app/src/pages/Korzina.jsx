import React, {useContext}from 'react'
import Nav from "../components/Nav";
import CardPhotoCom from '../CardPhotoCom';
import { Context } from '../context';
import styled from 'styled-components';
const Korzina = () => {

  const {cardArray} = useContext(Context);

  return (

    <Card>
        <Nav/>
       <div className="container">
       {cardArray.map(el => {
                return <CardPhotoCom el={el}/>
            })}
       </div>
    </Card>
  )
}
const Card= styled.div`

.container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 85%;
  margin: auto;
}
  .img {
    width: 400px;
    height: 400px;
    margin: 30px 0;
    object-fit: cover;
  }
`
export default Korzina;