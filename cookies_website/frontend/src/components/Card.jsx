import cookies1Img from '../assets/Cookies1.png';

function Card(){
    return(
        <div className= "card"> 
        <img  className = "card-image" src={cookies1Img} alt="Chocolate Chips Cookies"></img>
        <h2 className='card-title'> Chocolate Chips Cookies</h2>
        <p className='card-price'> $6.99</p>
        <button className='card-button'>Add to Cart</button>
        </div>
    );
}
export default Card