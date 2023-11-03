import React from 'react';

import './App.css';
import { DropdownCard } from './components/UI/DropdownCard/DropdownCard';
import {DropdownHeader} from './components/DropdownHeader/DropdownHeader';
import { DropdownBody } from './components/DropdownBody/DropdownBody';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <DropdownCard>
        <DropdownHeader />
        <DropdownBody />
      </DropdownCard>

        <Footer/>
    </div>
  );
}

export default App;
