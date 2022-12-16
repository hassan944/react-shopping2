

export function EventBinding(){

function stopAnimation(e){
e.target.stop();
}
function startAnimation(e){
e.target.start();
}
    return(
          <div className="container-fluid m-3">
            <marquee onMouseOver={stopAnimation} onMouseOut={startAnimation} scrollamount="40">
            <img src="images/1.jpg" width="100" height="100" />
            <img src="images/3.jpg" width="100" height="100" />
            <img src="images/4.jpg" width="100" height="100" />
            <img src="images/5.jpg" width="100" height="100" />
            </marquee>
          </div>

    )
}