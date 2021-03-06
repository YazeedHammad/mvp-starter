import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div id="map">
    <h4 id="sub"> Menu Items </h4>
    There are { props.items.length } items.
    { props.items.map(item => <ListItem item={item}/>)}

  </div>
)

export default List;