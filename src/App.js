import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="rehan" />
      <div className="container mt-5">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
