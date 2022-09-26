import './App.css';
import RobotTile from './Images/robot-tile.png';
import BackgroundTile from './Images/empty-tile.png'

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td><img src={RobotTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
        </tr>
        <tr>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
        </tr>
        <tr>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
        </tr>
        <tr>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
        </tr>
        <tr>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
          <td><img src={BackgroundTile} /></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
