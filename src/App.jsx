import { Header, Footer, Hero } from './components';
import Market from './components/Market';
import Numbers from './components/Numbers';
import TextTicker from './components/TextTicker';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
        <Numbers />
        <TextTicker />
        <Market />
        <Pricing />
        <Footer />
    </div>
  );
}

export default App;
