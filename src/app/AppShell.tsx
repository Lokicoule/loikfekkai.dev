import "react-toastify/dist/ReactToastify.css";

import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { routingService } from "../shared/composition";
import routes from "./routing";
import ThemeContainer from "../shared/components/theme/ThemeContainer";

const AppShell = () => {
  return (
    <HelmetProvider>
      <ThemeContainer>
        {routingService.createRoutes(routes)}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ThemeContainer>
    </HelmetProvider>
  );
};

export default AppShell;
