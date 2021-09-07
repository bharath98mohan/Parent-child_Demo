import React from 'react'
import Parent from './components/parentToChild/parent'
import Child from './components/parentToChild/child'
import ParentA from './components/childToParent/parent'
import ChildA from './components/childToParent/child'

function App() {
  return (
    <div>
      <Parent />
      <Child />
      <ParentA />
      <ChildA />
    </div>
  )
}

export default App
