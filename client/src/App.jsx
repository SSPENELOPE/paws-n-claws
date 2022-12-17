import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from "./pages/Home";
import './App.css';
import Signup from './components/Signup/index';
import Login from "./pages/Login";
import Profile  from './pages/Profile';
import Appointment from './pages/Appointments';
import Scheduler from './components/Schedule';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router >
            <div className="flex-row justify-center align-center min-100-vh">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/me" element={<Profile />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/appointment/schedule" element={<Scheduler />} />
              </Routes>
            </div>
        </Router>
    </ApolloProvider>
  );
};
  

export default App;
      
