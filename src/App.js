import React, {useState} from 'react';
import Button from './components/button'
import './App.css';

const App =() =>{
    const [value,setValue]=useState('0')

    const handelButtonPress=(content)=>{}

  return (
    <div className="App">
      <div className="display">{value}</div>
      <div className="buttons">
          <Button content={'AC'} type='function' onClick={'handelButtonPress'}/>
          <Button content={'+/-'} type='function' onClick={'handelButtonPress'}/>
          <Button content={'%'} type='function' onClick={'handelButtonPress'}/>
          <Button content={'÷'} type='operator' onClick={'handelButtonPress'}/>
          <Button content={'7'} onClick={'handelButtonPress'}/>
          <Button content={'8'} onClick={'handelButtonPress'}/>
          <Button content={'9'} onClick={'handelButtonPress'}/>
          <Button content={'x'} type='operator' onClick={'handelButtonPress'}/>
          <Button content={'4'} onClick={'handelButtonPress'}/>
          <Button content={'5'} onClick={'handelButtonPress'}/>
          <Button content={'6'} onClick={'handelButtonPress'}/>
          <Button content={'-'} type='operator' onClick={'handelButtonPress'}/>
          <Button content={'1'} onClick={'handelButtonPress'}/>
          <Button content={'2'} onClick={'handelButtonPress'}/>
          <Button content={'3'} onClick={'handelButtonPress'}/>
          <Button content={'+'} type='operator' onClick={'handelButtonPress'}/>
          <Button content={'0'} onClick={'handelButtonPress'}/>
          <Button content={'.'} onClick={'handelButtonPress'}/>
          <Button content={'='} type='operator' onClick={'handelButtonPress'}/>
      </div>
      <div className="bottom">-</div>


    </div>
  );
};

export default App;
