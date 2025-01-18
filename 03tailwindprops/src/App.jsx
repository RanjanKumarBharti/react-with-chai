import './App.css'
import Card from './components/Card';
function App() {
  return (
    <>
      <h1 className="bg-green-700 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card username="Ranjan kumar" btn="click me"/>
      <br />
      <Card username = "Rahul kumar" btn ="visit me"/>
    </>
  )
}

export default App;
