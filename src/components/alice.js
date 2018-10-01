import React from "react";

import { alice } from '../utils';

export default function page() {
  return (
    <div className="page">
      <pre>{ alice() }</pre>
    </div>
  );
}
