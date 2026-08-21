import { Outlet } from "react-router-dom";
import Header from "./components/ui/header/Header";
import Footer from "./components/ui/footer/Footer";

function App() {
  return (
    <main>
      {/* <h1>React Project Showcase</h1> */}
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
