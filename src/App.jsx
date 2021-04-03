import {Routing} from './routing';
import './styles.scss';
import {Navigation} from './Layout/Navigation'
import {MenuList} from './Layout/Menu/MenuList'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navigation menu={MenuList} list='Primary' linkClass='link link--white' />
        <Routing/>
      </Router>
    </div>
  );
}

export default App;
