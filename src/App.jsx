import './App.css';
import Card from './components/Card/index'

function App() {
  return (
    <div>
      <Card
        id={1}
        width={100}
        height={100}
        back={'/img/back.png'}
        front={'/img/react.png'}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
      />
    </div>
  );
}

export default App;
