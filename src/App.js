import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Keep this app open to enable following shortcuts to edit{" "}
          <code>home_score.txt</code> and <code>away_score.txt</code> files.
        </p>

        <table>
          <thead>
            <tr>
              <th>Shortcut</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>CTRL+ALT+a</code>
              </td>
              <td>Increase home score</td>
            </tr>
            <tr>
              <td>
                <code>CTRL+ALT+z</code>
              </td>
              <td>Decrease home score</td>
            </tr>
            <tr>
              <td>
                <code>CTRL+ALT+s</code>
              </td>
              <td>Increase away score</td>
            </tr>
            <tr>
              <td>
                <code>CTRL+ALT+x</code>
              </td>
              <td>Decrease away score</td>
            </tr>
            <tr>
              <td>
                <code>CTRL+ALT+r</code>
              </td>
              <td>Reset scores to 0</td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
