
import './components/WeatherForecast/WeatherForecast.css';
import './index.css';

const App = () => {

const weatherForecasts = [
  {
    day: 'Mon',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];


  return (
   <> 
   {weatherForecasts.map(({ day, img, imgAlt, conditions, time }) => (
     <div className="weather" key={day}>
       <h2>{day}</h2>
       <img src={img} alt={imgAlt} />
       <p><span>The conditions: </span>{conditions}</p>
       <p><span>The time: </span>{time}</p>
     </div>
   ))}
  </> 
  )}
// const day = currentForecast.days;
// const condition = currentForecast.conditions;
// const imgs = currentForecast.img;
// const imgAlts= currentForecast.imgAlt;
// const times= currentForecast.time;


export default App;

