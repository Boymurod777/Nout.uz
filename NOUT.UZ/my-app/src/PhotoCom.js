import React, {useState,useContext} from 'react';
import { Context } from './context';
import styled from 'styled-components';
const PhotoCom = ({el}) => {
    const {toggleFavorite, AddCard, cardArray,RemoveCard} = useContext(Context)



    const ShopCards = () => {
        const plusArray = cardArray.find(cart => cart.id === el.id)
        if (plusArray) {
            return <i onClick={()=>RemoveCard(el.id)} className="fas fa-shopping-cart fa-2x"/>
        } else {
            return <i onClick={() => {AddCard(el)}} className="fas fa-plus fa-2x"/>
        }
    }
  return (
    <Container>
            <div>
                    {Heart()}
                    {ShopCards()}
                </div>

<img className="img" src={el.image} alt="Photo"/>
    </Container>
  )
}
const Container= styled.div`

`
export default PhotoCom;