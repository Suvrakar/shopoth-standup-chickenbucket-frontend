import "./App.css";
import Typography from "@mui/material/Typography";
import LoginForm from "./Components/Login/Login";
import Leaderboard from "./Components/LeaderBoard/LeaderBoard";
import { Container } from "@mui/system";
import PlayerForm from "./Components/PlayerForm/PlayerForm";

function App() {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>
        SHOPOTH STANDUP CHICKEN BUCKET APP
      </h1>
      <LoginForm />
      <PlayerForm />
      {/* <Leaderboard /> */}
    </Container>
  );
}

export default App;
