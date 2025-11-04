import weatherForecasts from "./components/WeatherForecast/WeatherForecast";

import styled from "styled-components";
import { Sun } from "lucide-react";




const weather=  {
 border:'1px solid#ccc',
backgroundColor:'#352d2d2f',
display:'inlineblock',
columngap:'5px',
flexdirection:'row',
flex: '1',
padding:'10px',
width:'20px',

justifycontent:'center',
fontstyle:'oblique',

}
const weathers ={
color:'#a91f1f',
fontsize: 'large',
display:'flex',
 aligncontent:'center',
 flexdirection:'column',
textalign:'center'
}

const weatherspan  ={
  flexdirection:'column', 
  fontweight: 'bold',
  display:'flex',
justifycontent: 'center',
 color:'rgba(3, 5, 7, 1)',
   
  }
const section = {

  display:'flexbox',
  
  aligncontent:'center',
  textalign:'center',
  justifycontent:'center',

}
const img={
  size:'50px'
}


const App = () => {
  return (
  
    <section style={weathers}>

     {weatherForecasts.map(({ day, img, imgAlt, conditions, time }) => (
        <div style = {weather}  key={day}>
          <h2  >{day}</h2>
           <p style = {section}>
            <img src={img} alt={imgAlt} /> <br/>
         <span>The conditions: </span>{conditions} <br/>
          <span>The time: </span>{time}
       </p> 
       </div>
      ))}
    </section>
  );
};

export default App;




