
import NavBar from './components/common/NavBar';
import Home from './pages/home';

function App(){
  return(
    <div>
      <NavBar/>
      {/* <Hero/> */}
      <Home/>
      <div style={{
        padding:'40px',
        textAlign:'center'
      }}>
        <h2>Welcome To Our Shop</h2>
        <p>Our beatiful minimalist navbar is active above</p>
      </div>
    </div>

  );
}
export default App;
