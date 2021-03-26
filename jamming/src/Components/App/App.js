import './App.css';
import {SearchBar} from './SearchBar';
import {SearchResults} from './SearchResults';
import {Playlist} from './Playlist';

function App() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmmm</span>ing!</h1>
      <div className='App'>
          <SearchBar/>
      </div>
      <div className="App-playlist">
          <SearchResults/>
          <Playlist/>
      </div>
    </div>
  );
}

export default App;
