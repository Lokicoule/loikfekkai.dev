import "react-toastify/dist/ReactToastify.css";

import { MotionConfig } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "./routing";
import ThemeContainer from "../shared/components/theme/ThemeContainer";

const router = createBrowserRouter(routes);

const AppShell = () => {
  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <ThemeContainer>
          <a
            href="#content"
            lang="en"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary focus:px-4 focus:py-2 focus:rounded-lg"
          >
            Skip to content
          </a>
          <RouterProvider router={router} future={{ v7_startTransition: true }} />
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
      </MotionConfig>
    </HelmetProvider>
  );
};

export default AppShell;
