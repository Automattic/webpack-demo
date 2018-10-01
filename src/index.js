import React from 'react';
import DOM from 'react-dom';

import( /* webpackChunkName: "page" */ './components/page' ).then ( module => {
    const Page = module.default;
    DOM.render( <Page />, document.getElementById( 'main' ) );
});

