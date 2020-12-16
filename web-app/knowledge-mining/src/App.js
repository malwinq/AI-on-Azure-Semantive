import './App.css';
import DocumentSearch from './DocumentSearch';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3">
          Welcome in Knowledge Mining browser! 
        </Typography>
        <DocumentSearch/>
      </header>
    </div>
  );
}

export default App;
