import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      foodName: '11111',
      price: '22222'
    }
  }

foodChange(event) {
  this.setState({foodName: event.target.value});
}

priceChange(event) {
  this.setState({price: event.target.value});
}

onSubmit(event) {
  console.log("Yazeed:" ,this.state.foodName);
      $.ajax({
      url: '/items',
      type: 'POST',
      data:{foodName:this.state.foodName, price:this.state.price},

      success: (data) => {
        this.setState({items: data})
        console.log(data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
}

showMenu(event) {
      $.ajax({
      url: '/items',
      type: 'GET',
      success: (data) => {
        this.setState({items: data})
        console.log(data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
}

  // componentDidMount() {
  // }
   

  render () {
    return (<div>
      <h1 id="title">Food Menu</h1>
      <List items={this.state.items}/><br></br>
      <form onSubmit={this.onSubmit.bind(this)} id="form">
      <label>
      Food Name:
      <input type="text" name="foodName" onChange={this.foodChange.bind(this)} />
      </label><br></br><br></br>
      <label>
      Price:
      <input type="text" name="price" onChange={this.priceChange.bind(this)} />
      </label><br></br><br></br>
      </form>
      <button id="sug" onClick={this.onSubmit.bind(this)}> Suggestions </button>
      <button id="show" onClick={this.showMenu.bind(this)}> Show Menu </button>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));