import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import { PageType } from "@/shared/types";
import Home from "./scenes/home";

function App() {
  const [selectedPage, setSelectedPage] = useState<PageType>(PageType.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(PageType.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}></Home>
    </div>
  );
}

export default App;
