import React, { useState } from 'react';
import "./App.css";
import { Toggle } from './components/Toggle';

export const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} hangleChange={() => setIsDark(!isDark)} />
      <h1 className="title">Hello world!</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  )
}
