import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [clickData, setClickData] = useState("");

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Learn Jest Testing</p>
        {/* If you you write any thing after the sentence this not affected into the test case because it match from tha starting  */}
        <p>This is Not Case sanstive123</p>

        {/* Test On onChange event */}
        <input
          type='text'
          placeholder='Enter Your Name'
          name='Anuj Dwivedi'
          id='userId'
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <button onClick={() => setClickData("Hello")}>Click Me</button>
        <h1>{clickData}</h1>

        <img
          title='Image of the tree'
          src='https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg'
          alt='No Image'
        />
      </header>
    </div>
  );
}

export default App;
