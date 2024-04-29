import { useState } from "react";

import "./App.css";
import { Button } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Container maxW={"620px"}>
      <Button>hii</Button>
    </Container>
  );
}

export default App;
