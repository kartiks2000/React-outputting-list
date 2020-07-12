import React,{ Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component{

  state = {
    person : [
      {name : "kartik" , age : 20},
      {name : "aishwary" , age : 14},
      {name : "caroline" , age : 24},
      {name : "cathrene" , age : 24},
      {name : "chirag" , age : 11},
      {name : "john" , age : 38},
    ]
  }
  
  SwitchNameHandler = (newname) => {
    this.setState({
      person : [
      {name : newname , age : 20},
      {name : "aishwary" , age : 14},
      {name : "caroline" , age : 24},
      {name : "cathrene" , age : 24},
      {name : "chirag" , age : 11},
      {name : "john" , age : 38},
      ],
      show : false
    })
  }


  render(){
      return (
        <div className="App">
          <h1>Hi,kartik this side!!!!</h1>
          <h3>Hope u guys are doing good..</h3>
          <button onClick={this.SwitchNameHandler.bind(this,"yashu")}>switch name</button>
            {/* <div>
            <Person name={this.state.person[0].name} age={this.state.person[0].age} position="CTO" click={this.SwitchNameHandler.bind(this,"maa")}></Person>
            <Person name={this.state.person[1]["name"]} age={this.state.person[1]["age"]} position="CEO" ></Person>
          </div> */}

          {this.state.person.map(per => {
            return (<Person name={per.name} age={per.age} click={() => this.SwitchNameHandler("papa")}></Person>)
          })}
        </div>
      );
    }
  }  

export default App;



