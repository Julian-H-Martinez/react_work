import './App.css';
import Header from '../Header';
import Navigation from '../Navigation';
import Main from '../Main';
import SubContents from '../SubContents';
import Advertisement from "../Advertisement";


function App() {
  return (
    <div className={"app"}>
      <Header />
      <Navigation />
      <Main>
        <SubContents />
        <SubContents />
        <SubContents />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;
