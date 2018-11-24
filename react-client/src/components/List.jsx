import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Menu Items </h4>
    <input type = "text"></input>
    <button> Suggestions </button>
    <button> Show Menu </button>
    There are { props.items.length } items.
    { props.items.map(item => <ListItem item={item}/>)}

  </div>
)

export default List;