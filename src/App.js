import 'styles/Base.scss'; // reset css
import 'styles/App.scss'; // main css
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Home from 'pages/Home';
import MovieDetail from 'pages/MovieDetail';

// components
import Header from 'components/Header';
import Footer from 'components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
