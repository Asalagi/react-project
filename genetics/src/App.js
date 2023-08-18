import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Genetics from './genetics';
import HeartHorse from './heart-horse';


function App() {
  return (
<Router>
  <Routes>
  <Route path="/genetics" element={<Genetics />} />
  <Route path="/heart-horse" element={<HeartHorse />} />
  </Routes>
</Router>
  );
}

export default App;
