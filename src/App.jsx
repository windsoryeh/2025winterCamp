import { useState, createContext, useContext } from "react";
import "./App.css";
import UserList from "./components/list";
import "bootstrap/dist/css/bootstrap.min.css";

// 1. 建立 Context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    // 2. 提供 Context 值
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        切換主題
      </button>
      <ChildComponent />
      <UserList />
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  // 3. 在子組件中使用 Context
  const theme = useContext(ThemeContext);

  return <p>目前的主題是：{theme}</p>;
}

export default App;