// import Header from "./components/Header";
// import Content from "./components/Content";
// import Footer from "./components/Footer";

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Top from './pages/Top';
import './App.css';

function App(){
  return <>
     <Top/>
     
     <Router>
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
            
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
             
            </ul>
          </div>
        </div>
      </nav>
       <Switch>
         <Route path="/" component={Home} exact></Route>
         <Route path="/about" component={About}></Route>
       </Switch>
     </Router>
{/*         
        <Router>
          
            <Link to="/">Home</Link>&nbsp;
            <Link to="/about">About</Link>
        <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/about" component={About}></Route>
        </Switch>
        </Router> */}
 
 
  </>;
}

export default App;