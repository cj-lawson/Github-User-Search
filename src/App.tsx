import { useState } from "react";
import "./App.css";

// Component Folder
import ThemeToggle from "./components/ThemeToggle";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="bg-[#f6f8ff] dark:bg-[#141d2f] dark:text-slate-100 flex items-center justify-center h-screen p-7">
      <div className="flex flex-col w-full max-w-xl">
        <div className="flex flex-row justify-between mb-8">
          <h1>Devfinder</h1>
          <ThemeToggle />
        </div>
        <ProfileCard />
      </div>
    </div>
  );
}

export default App;
