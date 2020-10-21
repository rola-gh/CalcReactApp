import React, {useState} from 'react';
import Button from './components/button'
import './App.css';

const App =() =>{
    const [value,setValue]=useState('0')

    const handelButtonPress = (content) => () =>{
        const n =parseFloat(value)
        if (content ==='AC'){
            return setValue('0');
        }
        if (content ==='+/-'){
            return setValue((n* -1).toString())
        }

        setValue((parseFloat(n +content)).toString())
    };

  return (
    <div className="App">
      <div className="display">{value}</div>
      <div className="buttons">
          <Button onClick={handelButtonPress} content={'AC'} type='function' />
          <Button content={'+/-'} type='function' onClick={handelButtonPress}/>
          <Button content={'%'} type='function' onClick={handelButtonPress}/>
          <Button content={'÷'} type='operator' onClick={handelButtonPress}/>
          <Button content={'7'} onClick={handelButtonPress}/>
          <Button content={'8'} onClick={handelButtonPress}/>
          <Button content={'9'} onClick={handelButtonPress}/>
          <Button content={'x'} type='operator' onClick={handelButtonPress}/>
          <Button content={'4'} onClick={handelButtonPress}/>
          <Button content={'5'} onClick={handelButtonPress}/>
          <Button content={'6'} onClick={handelButtonPress}/>
          <Button content={'-'} type='operator' onClick={handelButtonPress}/>
          <Button content={'1'} onClick={handelButtonPress}/>
          <Button content={'2'} onClick={handelButtonPress}/>
          <Button content={'3'} onClick={handelButtonPress}/>
          <Button content={'+'} type='operator' onClick={handelButtonPress}/>
          <Button content={'0'} onClick={handelButtonPress}/>
          <Button content={'.'} onClick={handelButtonPress}/>
          <Button content={'='} type='operator' onClick={handelButtonPress}/>
      </div>
      <div className="bottom">-</div>


    </div>
  );
};

export default App;
