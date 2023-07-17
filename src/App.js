import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contacts from "./components/contact/Contacts";
import Toggle from "./components/toggle/Toggle";
import { useContext, useState } from "react";
import { ThemeContext } from "./context";



function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode
  const [dark,setDark] = useState(false) 
  return (
    <div style={{backgroundColor:darkMode?'#222':"whitesmoke",color:darkMode && 'whitesmoke'}}>
      <Toggle/>
      <Intro />
      <About />
      <ProductList />
      <Contacts />
    
    </div>
  );
}

export default App;
