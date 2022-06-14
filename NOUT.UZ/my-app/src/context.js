import React, { useState, createContext } from "react";
import lapTops from "./objects/Data";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [array , setArray ] = useState(lapTops)
  const [filter, setFilter] = useState("");
    const [cardArray, setCardArray] = useState([]);

  const toggleFavorite =(id) =>{
    const Favorite = array.map(el => {
      if (el.id === id) {
        return {
            ...el,
            isFavorite: !el.isFavorite
        }
    }
    return el
})
setArray(Favorite);
}

const AddCard = (newItem) => {
  setCardArray([...cardArray, newItem])
}

const RemoveCard = (id) => {
  let newArray = cardArray.filter((el) => {
      return el.id !== id
  })
  setCardArray(newArray)
}

const ArrayIndex = (cardArray) => {

}

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  console.log(lapTops);
  const dataSearch = lapTops.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase() 
        .includes(filter.toString().toLowerCase())
    );
  });

  return ( 
    <div>
      <Context.Provider value={{ filter, searchText, dataSearch,lapTops, toggleFavorite, AddCard, cardArray, RemoveCard }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export { ContextProvider, Context };
