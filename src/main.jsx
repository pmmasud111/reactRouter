import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  CreateActionContact,
  deleteContactAction,
  updateActionContact,
  updateFavouriteAction,
} from "./Action/CreateActionContact";
import Contact from "./Contact";
import EditContact from "./Edit/EditContact";
import ErrorPage from "./ErrorPage";
import Index from "./Index";
import {
  createContactLoader,
  getContactsLoader,
} from "./Loader/getContactsLoader";
import Root from "./Root";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={getContactsLoader}
      action={CreateActionContact}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={createContactLoader}
          action={updateFavouriteAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={createContactLoader}
          action={updateActionContact}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={deleteContactAction}
          errorElement={<div>Oops! There was an error.</div>}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
