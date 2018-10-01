import React from 'react';

import button from './button';

export default function page() {
    return React.createElement( 'div', {
        className: 'page'
    }, button() );
}