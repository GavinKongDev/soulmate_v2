import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MobileHome from "./mobile/index";
import QA1 from "./qa1";

const App: FC = () => {
  const [deviceWidth, setDeviceWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setDeviceWidth(window.innerWidth);
    handleResize();
  }, []);

  return (
    <Routes>
      <Route
        index
        element={deviceWidth <= 750 ? <MobileHome /> : <MobileHome />}
      />
      <Route path="qa1" element={<QA1 />} />
    </Routes>
  );
};

export default App;
