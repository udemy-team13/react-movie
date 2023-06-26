import 'styles/Base.scss';
import 'styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import MovieList from 'pages/MovieList';
import MovieDetail from 'pages/MovieDetail';

// components
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
