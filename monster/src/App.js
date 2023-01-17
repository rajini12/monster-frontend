//this is using class component
import React, { Component } from "react";
 import Card from "./components/card";
import "./App.css";
import CardList from "./components/cardlist";
import SearchBox from "./components/searchbox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }



  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users })
    
      );
      
      
  }
  
    onSearchChange = (e) =>{
        this.setState({ searchField : e.target.value});

    };

    


render(){
    console.log(this.state.monsters)
     const {monsters , searchField} = this.state;

     const filtermonster = monsters.filter((monster) =>
       monster.name
         
         .includes(searchField.toLocaleLowerCase())
     );
    // console.log(filtermonster);

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        {/* <input
          className="search-box"
          type="search"
         
          onChange= {this.onSearchChange}
          />
    {filtermonster.map( (monster) => { return <h1 key={monster.id}>{monster.name}</h1>})}; */}
    <SearchBox 
    placeholder= "search for monsters"
    onSearchChange = {this.onSearchChange}
    />
    <CardList monsters={filtermonster}></CardList>
      </div>
    );
}

}
 export default App;
