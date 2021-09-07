import React, { Component } from 'react'
import Child from './child'

class Parent extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: 'Data from parent'
    }
}

render(){
  const {data} = this.state;
  return(
      <div>
          <Child dataParentToChild = {data}/>
      </div>
  )
}
}

export default Parent
