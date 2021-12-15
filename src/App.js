import Billboard from "./components/Billboard";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation/Navigation";
import Rows from "./components/Rows";

import {
  fetchNetflixOriginals,
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
} from "./apis";

function App() {
  return (
    <div className="App" style={{ overflowY: "auto", overflowX: "hidden" }}>
      <Navigation />
      <Billboard />
      <div style={{ position: "relative", marginTop: "-15vw" }}>
        <Rows title={"넷플릭스 인기 콘텐츠"} fetchUrl={fetchNetflixOriginals} />
        <Rows title={"트렌딩"} fetchUrl={fetchTrending} />
        <Rows title={"순위"} fetchUrl={fetchTopRated} />
        <Rows title={"액션"} fetchUrl={fetchActionMovies} />
        <Rows title={"코메디"} fetchUrl={fetchComedyMovies} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
