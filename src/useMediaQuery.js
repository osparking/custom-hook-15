import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQuery.matches);
    
    // 초기값 설정
    updateMatches();
    
    // 리스너 등록
    mediaQuery.addEventListener('change', updateMatches);
    
    // 클린업 함수
    return () => {
      mediaQuery.removeEventListener('change', updateMatches);
    };
  }, [query]);
  
  return matches;
}

export default useMediaQuery;