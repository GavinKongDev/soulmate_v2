import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MobileHome from "./mobile/index";
import QA1 from "./mobile/qa1";
import QA2 from "./mobile/qa2";
import QA3 from "./mobile/qa3";

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
      <Route path="soulmate-with-daily-maintenance" element={<QA1 />} />
      <Route path="soulmate-with-medical-beauty" element={<QA2 />} />
      <Route path="soulmate-with-diet" element={<QA3 />} />
    </Routes>
  );
};

export default App;
