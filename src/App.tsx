import { Button } from "./components/ui/button";

export function App() {
  return (
    <div>
      <Button as="a" href={"/link"}></Button>
      <Button variant="primary" children={undefined}></Button>
    </div>
  );
}
