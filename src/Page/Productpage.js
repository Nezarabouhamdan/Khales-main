import React, { useEffect, useRef, useState } from 'react';
import './Product.css';

function Productpage() {
  const [counter, setCounter] = useState(2);
  const mainRef = useRef(null);
  const imgWrapperRef = useRef(null);
  const productsRef = useRef([]);

  useEffect(() => {
    // Move initial setup logic here
    moveImgs();
  }, []);

  const moveImgs = () => {
    if (!imgWrapperRef.current) return;
    
    switch(counter) {
      case 1:
        imgWrapperRef.current.style.top = "80%";
        break;
      case 2: 
        imgWrapperRef.current.style.top = "0";
        break;
      case 3:
        imgWrapperRef.current.style.top = "-80%";
        break;
      default:
        break;
    }
  };

  const nextProduct = () => {
    if (counter >= 3) return;
    const index = counter - 1;
    moveImgs();
    
    productsRef.current[index].classList.remove('show');
    productsRef.current[index].classList.add('hide');
    productsRef.current[index + 1].classList.remove('hide');
    productsRef.current[index + 1].classList.add('show');
    setCounter(prev => prev + 1);
  };

  const prevProduct = () => {
    if (counter <= 1) return;
    const index = counter - 1;
    moveImgs();
    
    productsRef.current[index].classList.remove('show');
    productsRef.current[index].classList.add('hide');
    productsRef.current[index - 1].classList.remove('hide');
    productsRef.current[index - 1].classList.add('show');
    setCounter(prev => prev - 1);
  };

  return (
    <div className="main" ref={mainRef}>
      <div className="imgSection">
        <div className="imgWrapper" ref={imgWrapperRef}>
          <img src="https://mostaql.hsoubcdn.com/uploads/thumbnails/419048/181587/9e4e5e45-6d43-418b-a421-a90e9554a1ee.jpg" 
               alt="headphones type 1" className="headphone h1"/>
          <img src="https://mostaql.hsoubcdn.com/uploads/thumbnails/419048/181587/9e4e5e45-6d43-418b-a421-a90e9554a1ee.jpg" 
               alt="headphones type 2" className="headphone h2"/>
          <img src="https://mostaql.hsoubcdn.com/uploads/thumbnails/419048/181587/9e4e5e45-6d43-418b-a421-a90e9554a1ee.jpg" 
               alt="headphones type 3" className="headphone h3"/>
        </div>
        <img src="https://mostaql.hsoubcdn.com/uploads/thumbnails/419048/181587/9e4e5e45-6d43-418b-a421-a90e9554a1ee.jpg" 
             alt="logo" className="logo"/>
      </div>
      
      <div className="infoSection">
        {[1, 2, 3].map((num, index) => (
          <div 
            key={num}
            ref={el => productsRef.current[index] = el}
            className={`product${num} product ${num === 2 ? 'show' : 'hide'}`}
          >
            {/* Product content remains same */}
            <div className="productName">
              {num === 1 ? 'Architectural plan' : num === 2 ? 'Hesh-2 Wireless' : 'WHITE POWER'}
            </div>
            <div className="productNo">{num === 1 ? '512s' : num === 2 ? '71r1' : 'wI20'}</div>
            <div className="price">${num === 1 ? '200.00' : num === 2 ? '179.99' : '230.00'}</div>
      
            <div className="line"></div>
            <div className="rate">{num === 1 ? '4.1' : num === 2 ? '4.7' : '5'} / 5</div>
            <div className="productRate">Rate</div>
            <div className="addToCart">ADD TO CART</div>
            <div className="addToWishlist">
              <div className="heart">&hearts;</div>
              ADD TO WISHLIST
            </div>
          </div>
        ))}
      </div>
      
      <div className="next" onClick={nextProduct}>&#8594;</div>
      <div className="pre" onClick={prevProduct}>&#8592;</div>
    </div>
  );
}

export default Productpage;