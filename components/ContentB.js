import React from "react";
import { Button } from "./SharedComponents";

export function ContentB() {
  return (
    <section className="card">
      <h2>Content B</h2>
      <p>
        This is Content B. It also uses a named export and reuses the shared
        Button component.
      </p>
      <Button text="Button from Content B" />
    </section>
  );
}
