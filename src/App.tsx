import { FC, useLayoutEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DesktopHome from "./desktop/index";
import MobileHome from "./mobile/index";
import MobileQa1 from "./mobile/qa1";
import MobileQa2 from "./mobile/qa2";
import MobileQa3 from "./mobile/qa3";

const App: FC = () => {
  const [deviceWidth, setDeviceWidth] = useState<number>(0);

  useLayoutEffect(() => {
    const handleResize = () => setDeviceWidth(window.innerWidth);
    handleResize();
  }, []);

  return (
    <Routes>
      <Route
        index
        element={deviceWidth >= 750 ? <DesktopHome /> : <MobileHome />}
      />
      <Route path="/soulmate-with-daily-maintenance" element={<MobileQa1 />} />
      <Route path="/soulmate-with-medical-beauty" element={<MobileQa2 />} />
      <Route path="/soulmate-with-diet" element={<MobileQa3 />} />
    </Routes>
  );
};

export default App;
