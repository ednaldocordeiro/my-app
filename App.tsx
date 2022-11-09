import {React} from './deps.ts';

function App() {
  return (
    <>
      <link rel={'stylesheet'} href={'./static/css/App.css'}/>
      <div className="App">
        <header className="App-header">
          <img src={'./static/assets/deno.png'} alt="deno logo" className={'App-logo'} />
          My React App with Deno
        </header>
      </div>
    </>
  );
}

export default App;
