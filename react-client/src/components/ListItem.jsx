import React from 'react';

const ListItem = (props) => (
  <div>
    { props.item.foodName }: { props.item.price }
  </div>
)

export default ListItem;