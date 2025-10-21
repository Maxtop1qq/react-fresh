import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home/home";
import Footer from "./components/Footer/Footer";

function App() {
  const [navigation, setNavigation] = useState([
    { id: 1, title: "Почему Фреш", href: "#" },
    { id: 2, title: "Для кого", href: "#" },
    { id: 3, title: "Как работает", href: "#" },
    { id: 4, title: "Стоимость", href: "#" },
    { id: 5, title: "FAQ", href: "#" },
  ]);
  return (
    <>
      <Header navigation={navigation} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
