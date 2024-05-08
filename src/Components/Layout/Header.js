import React from 'react'
import bgImg from '../../assests/background.jpg'
import cartImg from '../../assests/cart.png'

const Header = () => {
    const headerStyle={
        backgroundColor: 'rgba(186,99,9,1)',
        position: 'fixed',
        width: '100%',
        height:'1rem',
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
        padding: '30px',
        zIndex: 2,
    }
    const containerStyle = {
        position: 'relative',
        width: '100%', 
        height: '10rem', 
      };
      const imgStyle = {
        position: 'absolute',
        top: '50px',
        left: 0,
        width: '100%',
        height: '30%',
        objectFit: 'cover', 
      };
      const cartImgStyle = {
        height: '21px', 
        width: '21px',
        marginRight: '2px'
      }
  return (
    <React.Fragment>
        <header style={headerStyle}>
            <div id="thatdiv" style={{position: 'absolute' ,left: '45px', top: '25%' }}>ReactMeals</div>
            <div id="thisdiv" style={{position: 'absolute' ,right: '45px', top: '25%', display: 'flex', alignItems: 'center'}}>
                <img src={cartImg} style={cartImgStyle}/>
                <button>Your Cart</button>
            </div> 
        </header>
        <div style={{containerStyle}}>
          <img src={bgImg} alt="background_image" style={imgStyle}></img>
        </div>

    </React.Fragment>
  )
}

export default Header