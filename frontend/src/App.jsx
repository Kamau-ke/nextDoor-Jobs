import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobApplication from './pages/JobApplication';

function App() {
  return (
    <div className='h-screen w-screen bg-white overflow-x-hidden'>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job/:jobId" element={<JobApplication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
