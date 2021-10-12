import { useState } from 'react';
import Button from './button';

function App() {
  const [btnText, setBtnText] = useState('状态 - true');
  const handleClick = () => {
    if (btnText === '状态 - true') {
      setBtnText('状态 - false');
    }
    else {
      setBtnText('状态 - true');
    }
  }
  return (
    <>
      <Button style={{margin: 100}} onClick={handleClick}>{btnText}</Button>
    </>
  );
}

export default App;
