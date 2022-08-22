
import NavigationBar from './NavigationBar';
import Header from './Header';
import About from './About';
import Services from './Services';
import ServiceSatisfaction from './ServiceSatisfaction';
import Contact from "./Contact";
import './CSS/App.css';

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Header />
        <About />
        <Services />
        <ServiceSatisfaction />
        <Contact />
    </div>
    
  );
}

export default App;