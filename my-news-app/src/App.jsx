import "./App.css";
import Navbar from "./navbar";
import Body from "./body";
import Footer from "./footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Body />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
