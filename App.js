import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Interests from './Interests';
function App() {
  let list_of_topic = ['ML', 'NLP', 'AI', 'Blockchain', 'Data Structures',
    'Data Science', 'React_Redux', 'HTML', 'CSS', 'bootStrap']
  return (
    <div className="App">
      <h1>TEST HEADING</h1>
      <Login></Login>
      <Interests array={list_of_topic} />
    </div>
  );
}

export default App;
