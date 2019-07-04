import React from 'react';
import ReactDOM from 'react-dom';


function Circle({color, children}){

   return <div style = {{  borderRadius: '50%', background: `${color}`}} className = 'div_style'>
       {children}
  </div>
}

function Rect({color,children}){
    return <div style = {{ background: `${color}`}} className = 'div_style'>{children}
   </div>
}

function Address({country, city, street, location}){
    location = {lat: 49.5944754, lng: 34.5524481}
    let place = `${location.lat},${location.lng},18z`;
   return <footer>
        <address>
        {country} {city} {street} 
        </address>
        <a href = {`https://www.google.com/maps/@${place}`}>{`https://www.google.com/maps/@${place}`}</a>
    </footer>
}

window.render = function render(){
    ReactDOM.render((
        <div>
            <div id= 'main'>
              <Circle color = 'red'><span> Hello world </span></Circle>
            <Rect color = '#24256d'><span>Hello world</span></Rect>  
            </div>
            
            <Address country = 'Украина' city=' Полтава' street = ' ул. Сковороды' >
                </Address> 
        </div>
    ), document.getElementById('root'));
    }

   