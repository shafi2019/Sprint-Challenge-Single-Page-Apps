import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";


const HeaderStyle = styled.div`
background-image: url(https://images.pexels.com/photos/2115578/pexels-photo-2115578.jpeg?cs=srgb&dl=adventure-blue-sky-boat-2115578.jpg&fm=jpg);
`

const NavContentStyle = styled.div`
display: flex;
justify-content: center;
text-align: justify;
margin-top: 2.5%;
`


export default function App() {
  return (
    <HeaderStyle>
    <main>
    <Header />
    <Route exact path="/" component={WelcomePage}/> 
    <Route exact path="/CharacterList" component={CharacterList}/> 
    <NavContentStyle>
    <div className="App">
        <div>
        <Link to="/">Home</Link>
        </div>
        <div>
        <Link to="/characterList">Character List</Link>
        </div>
    </div>
    </NavContentStyle> 
    </main>
    </HeaderStyle>
  );
}