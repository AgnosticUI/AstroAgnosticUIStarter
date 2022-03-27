import { useState } from 'react';
import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";
import { Alert, Button } from "agnostic-react";

export default function ReactCounter() {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <Alert type="info"><span className="mie12">🔥</span>AgnosticUI — React</Alert>
      <div id="react" className="counter">
        <Button mode="secondary" isRounded onClick={subtract}>-</Button>
        <pre>{count}</pre>
        <Button mode="primary" isRounded onClick={add}>+</Button>
      </div>
    </>
  );
}
