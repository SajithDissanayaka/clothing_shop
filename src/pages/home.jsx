import Hero from '../components/Home/Hero';
import ProductGrid from '../components/product/productGrid';'../../components/product/productGrid'



function Home(){
    return(
        <div className='homepage-container'>
            <Hero/>
            <div style={{padding: '60px 40px', textAlign:'center'}}>
                <h2 style={styles.sectionTitle}>New Arrive</h2>
                <p style={styles.sectionSub}>Discover Our latest minimalist pices</p>
            <ProductGrid/>
           
            </div>
        </div>
    );
}  const styles ={
    sectionTitle : {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontSize: '28px',
    fontWeight: '400',
    letterSpacing: '4px',
    marginBottom: '10px',
    color: 'white'
  },
  sectionSub: {
    fontSize: '14px',
    color: '#777',
    letterSpacing: '1px'
  }
    };

    export default Home;
