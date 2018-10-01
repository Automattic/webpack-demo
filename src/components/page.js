import React from "react";

import Button from "./button";
import CurrentTime from './current-time';

export default function page() {
  return (
    <div className="page">
      <CurrentTime />
      <Button>Hi there</Button>
    </div>
  );
}
