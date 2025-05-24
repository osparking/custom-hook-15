import { useEffect, useState } from "react";
import "./App.css";
import useMediaQuery from "./useMediaQuery";

function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Get initial width on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h1>맞춤 후크 - 미디어 쿼리 훜</h1>
      <div>
        <p>문서 폭: {windowWidth}</p>
        <p>{isMobile ? "모바일 장치" : "모바일 초과"}</p>
      </div>
    </>
  );
}

export default App;
