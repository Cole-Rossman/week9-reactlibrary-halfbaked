import BookList from './views/Books/BookList';
import BookDetail from './views/Books/BookDetail';
import './App.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import Nav from './components/Controls/Nav';


function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <Nav />
      <main className="container">
        <h1>Library Catalog</h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/books">
            <BookList />
          </Route>
          <Route path="/books/:id">
            <BookDetail />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
