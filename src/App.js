import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Banner from './components/Banner';
import Resume from './components/Resume';


function App() {

  useEffect(() => {
    document.title = 'Stephon Treadwell - Portfolio';
  });
  const [currentPage, setCurrentPage] = useState('About');
  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio': return <Portfolio />;
      case 'Contact': return <Contact />;
      case 'Resume': return <Resume />;
      default: return <About />;
    }
  }
  return (
    <div className='bg-dark text-white d-flex flex-column min-vh-100 position-relative'>
      <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Banner />
    </div>  
      <main className='flex-grow-1 d-flex flex-column m-2'>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}



export default App;