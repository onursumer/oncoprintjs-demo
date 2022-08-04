import {useEffect} from 'react';

import './App.css';
import {heatmap} from "./oncoprint-heatmap";
import {glyphmap} from "./oncoprint-glyphmap";

function App() {

  useEffect(() => {
      glyphmap();
      heatmap();
  }, []);

  return (
    <div className="App">
      <h2>Oncoprint Genomic Alterations</h2>
      <div id="oncoprint-glyphmap"></div>
      <h2>Oncoprint Heatmap</h2>
      <div id="oncoprint-heatmap"></div>
    </div>
  );
}

export default App;
