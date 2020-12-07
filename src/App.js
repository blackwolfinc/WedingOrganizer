import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Gallery2 from "./pages/Gallery2"
import HomePage from "./pages/HomePage"
import Item from "./pages/Item"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{backgroundColor:'red'}}>
      <BrowserRouter>
       <Switch>
       <Route path="/item">
        <Item />
      </Route>
       <Route path="/gallery">
        <Gallery />
      </Route>
       <Route path="/gallery2">
        <Gallery2 />
      </Route>
       <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
      <Redirect to="/" />
    </Switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
