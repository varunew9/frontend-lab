import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import { CalculatorPage, DigitalClockPage, Home, ProfileCardGenratorPage, ThemeChangerPage, FeaturesLayout, ComingSoon, ShoppingCart, CounterPage, Features, BackgroundChanger, RandomQuotePage } from "../pages";

import NotFound from "../pages/notFound/NotFound";
import { AccordionPage } from "../pages/features/accordion/AccordionPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Home
      {
        index: true,
        element: <Home />,
      },
      // Projects

      // {
      //   path: "projects",
      //   element: <Projects />,
      // },

      // Features
      {
        path: "features",
        element: <FeaturesLayout />, // Projects
        children: [
          { index: true, element: <Features /> },
          {
            path: "counter",
            element: <CounterPage />,
          },
          {
            path: "digital-clock",
            element: <DigitalClockPage />,
          },
          {
            path: "profile-card-generator",
            element: <ProfileCardGenratorPage />,
          },
          {
            path: "theme-changer",
            element: <ThemeChangerPage />,
          },
          {
            path: "calculator",
            element: <CalculatorPage />,
          },
          {
            path: "shopping-cart",
            element: <ShoppingCart />,
          },
          {
            path: "accordion",
            element: <AccordionPage />,
          },
          {
            path: "background-changer",
            element: <BackgroundChanger />,
          },
          {
            path: "random-quote",
            element: <RandomQuotePage />,
          },
          // Comming Soon
          {
            path: "*",
            element: <ComingSoon />,
          },
        ],
      },
    ],
  },

  // 404
  {
    path: "*",
    element: <NotFound />,
  },
]);
