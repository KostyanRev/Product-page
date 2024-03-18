import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import LikeBlock from './components/Like/LikeBlock';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Breadcrumbs />
        <Product />
        <Feedback />
        <LikeBlock />
      </div>
      <Footer />
    </div>
  );
}

export default App;
