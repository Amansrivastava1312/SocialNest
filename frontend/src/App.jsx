import { useState } from "react";

import "./App.css";
import { Button } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Container maxW={"620px"}>
      <Header />
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
      </Routes>
    </Container>
  );
}

export default App;
