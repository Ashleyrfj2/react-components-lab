import weatherForecasts from "./components/WeatherForecast/WeatherForecast";
import { Sun } from "lucide-react";
import styles from "./components/WeatherForecast/WeatherForecast.module.css";

const App = () => {
  return (
  
    <section className={styles.weather}>

     {weatherForecasts.map(({ day, img, imgAlt, conditions, time }) => (
        <div className={styles.weather} key={day}>
          <h2>{day}</h2>
          <img src={img} alt={imgAlt} />
          <p><span>The conditions: </span>{conditions}</p>
          <p><span>The time: </span>{time}</p>
        </div>
      ))}
    </section>
  );
};

export default App;




