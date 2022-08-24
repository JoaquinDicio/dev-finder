import GeneralContainer from './components/GeneralContainer/GeneralContainer.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';

function App() {
  return (
   <div className='app container-fluid row justify-content-center align-items-center'>
      <GeneralContainer></GeneralContainer>
   </div>
  );
}

export default App;
