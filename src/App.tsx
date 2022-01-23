import React, { useContext } from "react";
import "./App.css";
import DetailContainer from "./components/DetailContainer";
import ListContainer from "./components/ListContainer";
import ListItem from "./components/ListItem";
import SelectedItemProvider from "./context/SelectedItem";
import SelectedItem, { ItemContext } from "./context/SelectedItem";
import { Container } from "./styles/Container";

const App = (): React.ReactElement => {
  return (
    <SelectedItemProvider>
      <Container>
        <ListContainer />
        <DetailContainer />
      </Container>
    </SelectedItemProvider>
  );
};

export default App;
