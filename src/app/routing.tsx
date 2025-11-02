import { Suspense } from "react";
import { Navigate, Outlet, RouteObject } from "react-router-dom";
import Loading from "../pages/loading/Loading";
import Layout from "../shared/components/layouts/Layout";
import {
  aboutPresenter,
  contactController,
  contactPresenter,
  heroPresenter,
  langController,
  langPresenter,
  notFoundPresenter,
  resumePresenter,
  worksController,
  worksPresenter,
} from "../shared/composition";

import About from "../pages/about";
import Contact from "../pages/contact";
import NotFound from "../pages/notFound";
import Resume from "../pages/resume";
import Works from "../pages/works";

const pageRoutes = (root: string) => [
  {
    path: root,
    element: <About presenter={aboutPresenter} />,
  },
  {
    path: "about",
    element: <About presenter={aboutPresenter} />,
  },
  {
    path: "contact",
    element: (
      <Contact presenter={contactPresenter} controller={contactController} />
    ),
  },
  {
    path: "resume",
    element: <Resume presenter={resumePresenter} />,
  },
  {
    path: "works",
    element: <Works presenter={worksPresenter} controller={worksController} />,
  },
  {
    path: "not-found",
    element: <NotFound presenter={notFoundPresenter} />,
  },
];

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Layout
        lang={{ presenter: langPresenter, controller: langController }}
        hero={{
          presenter: heroPresenter,
        }}
      >
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: pageRoutes("/"),
  },
  {
    path: "*",
    element: <Navigate to="/not-found" />,
  },
];

export default routes;
