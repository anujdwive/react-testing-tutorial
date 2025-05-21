import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Learn Jest testing</p>
        {/* If you you write any thing after the sentence this not affected into the test case because it match from tha starting  */}
        <p>This is Not Case sanstive123</p>{" "}
        <input
          type='text'
          placeholder='Enter Your Name'
          name='Anuj Dwivedi'
          id='userId'
          // value='name'
        />
        <img
          title='Image of the tree'
          src='https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg'
        />
      </header>
    </div>
  );
}

export default App;
