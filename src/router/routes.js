import React from "react";
import UniversalRouter from "universal-router";

import Home from "./../pages/home";

const routes = {
  path: "/",
  async action({ next }) {
    const children = await next();
    return <>{children}</>;
  },
  children: [
    {
      path: "",
      async action() {
        return <Home />;
      },
    },
  ],
};

const router = new UniversalRouter(routes, {
  baseUrl: "",
});

export default router;
