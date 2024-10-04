import Player from "./components/Player.jsx";
import TimerChallengde from "./components/TimerChallengde.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallengde title="Easy" targetTime={1}></TimerChallengde>
        <TimerChallengde title="Not easy" targetTime={5}></TimerChallengde>
        <TimerChallengde
          title="Getting tough"
          targetTime={10}
        ></TimerChallengde>
        <TimerChallengde title="Pros only" targetTime={15}></TimerChallengde>
      </div>
    </>
  );
}

export default App;
