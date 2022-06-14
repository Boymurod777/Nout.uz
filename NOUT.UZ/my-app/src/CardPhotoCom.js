import React,{ useContext,useState } from 'react'
import styled from 'styled-components';
import { Context } from './context';

const CardPhotoCom = ({el}) => {
    const {RemoveCard} = useContext(Context);
  return (
    <Container>
   
<div>
<p>{el.package}</p>
<img className="img" src={el.image} alt="Photo"/>
    <div className="d-flex">
                    <div className="texts">
                      <h6>{el.cost}</h6>
                      <h6>{el.cash}</h6>
                      <p>{el.und}</p>
                           <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {RemoveCard(el.id)}}   width="26" height="26" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg>
                    </div>
      </div>
</div>
    

    </Container>
  )
}
const Container = styled.div`
p {
  color: #066ffe;
  font-weight: 600;
}
h6 {
  color: gray;
  font-weight: 600;
}
p,
h6 {
  text-align: left;
  padding-left: 10px;
}
#col {
  margin-top: 50px;
  width: 130px;
  text-align: center;
  margin-bottom: 30px;
}
#col:hover {
  border: 3px solid #e2eeee;
}
img {
  width: 80%;
  margin: 0 auto;
  padding: 0 auto;
}
`
export default CardPhotoCom;