import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TwoWayBindingJS from './component/TwoWayBindingJS';
import PlayList from './component/PlayList';


function App() {
  return (
    <div className='container mt-5'>
      {/* <TwoWayBindingJS /> */}
      <PlayList />
    </div>
  )
}

export default App;
