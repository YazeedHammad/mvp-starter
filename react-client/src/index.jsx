import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      foodName: '',
      price: ''
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      type: 'POST',

      success: (data) => {
        this.setState({items: data})
        console.log(data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });

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
      // <form method='POST' action='/items'>
      // <input type="text" />
      // <input type='submit' value='Suggestions' />
      // </form>
      // <form method='GET' action='/items'>
      // <input type='submit' value='Show Menue' />
      // </form>

  render () {
    return (<div>
      <h1>Food Menu</h1>
      <List items={this.state.items}/><br></br>
      <form>
      <label>
      Food Name:
      <input type="text" name="foodName" />
      </label><br></br><br></br>
      <label>
      Price:
      <input type="text" name="price" />
      </label><br></br><br></br>
      <input type="submit" value="Suggestions" />
      </form>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));