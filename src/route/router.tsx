import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CounterPage, DigitalClockPage, Home, ProfileCardGenratorPage, ThemeChangerPage } from "../pages";
import NotFound from "../pages/notFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/counter",
        element: <CounterPage />,
      },
      {
        path: "/digital-clock",
        element: <DigitalClockPage />,
      },
      {
        path: "/profile-card-generator",
        element: <ProfileCardGenratorPage />,
      },
      {
        path: "/theme-changer",
        element: <ThemeChangerPage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
