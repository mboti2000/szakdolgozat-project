import { Header, Footer, Welcome } from './components';
import Market from './components/Market';
import Numbers from './components/Numbers';
import TextTicker from './components/TextTicker';
function App() {
  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Header />
        <Welcome />
      </div>
        <Numbers />
        <TextTicker />
        <Market />
        <Footer />
    </div>
  );
}

export default App;
