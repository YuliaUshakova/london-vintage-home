function Home() {
    return (<div>
        <div class="header" flexbox >
            <div class="row">
            <header justify-text-center>
            <h1>English Vintage Home</h1>
            </header>
            </div>
        </div>
        <br></br>
        <br></br>
        <hr></hr>
        <div class="home">
        <video autoPlay muted loop id="myVideo" playsInline>
          <source src="https://cdn.glitch.global/d2054fad-728b-4ad5-a0c4-1cea54967660/coffee.mp4?v=1657639425117" type="video/mp4" height="20px"/>
      </video>
    </div>
    <div className="footer">
    <hr/>
    <p>@All visual materials are from open sources and are used for demonstration purposes only</p>
  </div>
    </div>
            
    );
  }
  
  export default Home;