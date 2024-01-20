
import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./context/theme";

function App() {
  const [themeMode, setthemeMode] = useState("light")

  const lightTheme = () => {
    setthemeMode("light")
  }
  const darkTheme = () => {
    setthemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  
  return (
    <ThemeProvider value = {{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          <ThemeBtn />
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
