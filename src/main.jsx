import Root, { loader as rootLoader, action as rootAction } from "./routes/root"
import ErrorPage from "./error-page"
import Contact, { loader as contactLoader } from "./routes/contact"
import { ReactDOM, React, Children } from "react"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,
            }
        ],
    },
])


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
