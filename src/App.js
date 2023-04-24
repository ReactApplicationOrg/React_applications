import './App.css';
import Application from './components/Application';

function App() {
  const expenses = [{
    id: 'z1',
    title: "z"
    },
    {
    id: 'z2',
    title: "abc"
    }
];
  return (
    <div className="App">
      <Application title={expenses[0].title}></Application>
    </div>
  );
}

export default App;
