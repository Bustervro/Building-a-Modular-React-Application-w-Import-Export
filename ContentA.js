import React from "react";
import { Button } from "./SharedComponents";

export function ContentA() {
  return (
    <section className="card">
      <h2>Content A</h2>
      <p>
        This is Content A. It demonstrates a component exported with a named
        export and imported into App.js.
      </p>
      <Button text="Button from Content A" />
    </section>
  );
}
