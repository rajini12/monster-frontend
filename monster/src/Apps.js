//this is using functional component



import React, {useState, useEffect} from "react";
import Card from "./components/card";
import "./App.css";
import CardList from "./components/cardlist";
import SearchBox from "./components/searchbox";


const Apps =() =>{
   const [minimonsters, setMinimonsters] =  useState([]);
   const [searchField, setSearchField] = useState("");

const fetchdata = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  setMinimonsters(data);
 
}

useEffect( () => {
   fetchdata();
},[])


let  onSearchChange = (e) => {
   const field= e.target.value;
   setSearchField(field)
 };


const filtermonster = minimonsters.filter((minimonster) =>minimonster.name.includes(searchField.toLocaleLowerCase()) );
    

return (


<div className="App">
    <h1 className="app-title">Monster Rolodex</h1>

    <SearchBox
      placeholder="search for monsters"
      onSearchChange={onSearchChange}
      {...filtermonster.map( (monster) => { return <h1 key={monster.id}>{monster.name}</h1>})}
    />
    <CardList monsters={filtermonster}></CardList>
  </div>
);

}

export default Apps;