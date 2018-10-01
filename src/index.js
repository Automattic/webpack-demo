import React from "react";
import DOM from "react-dom";

if (window.location.search.indexOf("alice") !== -1 ) {
  import(/* webpackChunkName: "pageAlice" */ "./components/alice").then(
    module => {
      const Page = module.default;
      DOM.render(<Page />, document.getElementById("main"));
    }
  );
} else {
  import(/* webpackChunkName: "pageTime" */ "./components/page").then(
    module => {
      const Page = module.default;
      DOM.render(<Page />, document.getElementById("main"));
    }
  );
}
