import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/genetics.css';
import Genetics from './genetics';


function App() {
  return (
<Router>
  <Routes>
  <Route path="/genetics" element={<Genetics />} />
  </Routes>
</Router>
  );
}

export default App;
