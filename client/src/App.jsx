import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from "./components/Home";
import './App.css';
import { useState } from 'react';
import Signup from './components/Signup';
import Login from "./components/Login";
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <ApolloProvider client={client}>
        <Router >
          <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            <div className="flex-row justify-center align-center min-100-vh">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          <Footer />
        </Router>
    </ApolloProvider>
  );
};
  

export default App;
      
