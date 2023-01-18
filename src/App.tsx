import { useState } from 'react';
import {Button} from '@mui/material'

function LikeButton() {
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      ♥ {count}
    </span>
  );
}
function App() {
  return (
    <div className="App">
      <Button variant='contained'>
        <LikeButton />
      </Button>
    </div>
  );
}


export default App;
