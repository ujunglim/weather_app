import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";
import Weather from "./Weather";

// key of OpenWeather API
const API_KEY = "b53ce7cd48c147440cd16264b4419699";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    // give url with latitude, longitude to openweathermap API and get data of current location
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    // set isLoading, temp, condition states
    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main,
    });
  };

  getLocation = async () => {
    try {
      // ask user for get location permission
      await Location.requestPermissionsAsync();
      // get latitude, longitude from getCurrentPositionAsync method
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // send latitude, longitude to getWeather method
      this.getWeather(latitude, longitude);
    } catch (error) {
      // fail to get permission of getting location
      Alert.alert("Can't find you", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation(); // when app is ready, get location first
  }

  render() {
    // get from this.state
    const { isLoading, temp, condition } = this.state;
    // if is not loading, send temp, condition to Loading Component
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
