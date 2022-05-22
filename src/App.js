import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/customize-Bootstrap.scss';
import './assets/css/vendor/style.min.css';

import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import Services from './Services';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
  <>
    <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Services" component={Services}/>
      </Switch>
    <Footer />
  </>  
  );
}

export default App;
