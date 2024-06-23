import { createBrowserRouter } from "react-router-dom";

import { AuthPage } from "@pages/AuthPage";
import { CalendarPage } from "@pages/CalendarPage";
import { CreateListingPage } from "@pages/CreateListingPage";
import { DashboardPage } from "@pages/DashboardPage";
import { HelpCenterPage } from "@pages/HelpCenterPage";
import { InboxPage } from "@pages/InboxPage";
import { LandingPage } from "@pages/LandingPage";
import { MyListingsPage } from "@pages/MyListingsPage";
import { SearchPage } from "@pages/SearchPage";
import { SettingsPage } from "@pages/SettingsPage";
import { SignInPage } from "@pages/SignInPage";
import { SignUpPage } from "@pages/SignUpPage";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: (
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    ),
  },
  {
    path: "/s",
    element: <SearchPage />,
    children: [
      // Listing preview ??? TODO:
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        index: true,
        element: <div>?????????</div>,
      },
      {
        path: "create-listing",
        element: <CreateListingPage />,
      },
      {
        path: "calendar",
        element: <CalendarPage />,
      },
      {
        path: "help-center",
        element: <HelpCenterPage />,
      },
      {
        path: "inbox",
        element: <InboxPage />,
      },
      {
        path: "listings",
        element: <MyListingsPage />,
        children: [
          {
            path: "slug/:id",
            element: <div>Child</div>,
          },
        ],
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    element: <AuthPage />,
    children: [
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);
