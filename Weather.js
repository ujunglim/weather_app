import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

// weather data object
const weatherOptions = {
	Haze: {
		iconName: "weather-hazy",
		gradient: ["#D7DDE8", "#757F9A" ],
		title: "Haze",
    subtitle: "Just don't go outside."
	},
	Thunderstorm: {
		iconName: "weather-lightning",
		gradient: ["#373B44", "#4286f4"],
		title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house"
	},
	Drizzle: {
    iconName: "weather-hail",
		gradient: ["#4CA1AF", "#C4E0E5"],
		title: "Drizzle",
    subtitle: "It's like rain"
	},
	Rain: {
    iconName: "weather-rainy",
		gradient: ["#2c3e50", "#3498db"],
		title: "Raining like a MF",
    subtitle: "For more info look outside"
	},
	Snow: {
		iconName: "weather-snowy",
		gradient: ["#7DE2FC", "#B9B6E5"],
		title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no."
	},
	Atmosphere: {
		iconName: "weather-sunny",
		gradient: ["#89F7FE", "#66A6FF"],
		title: "May be good",
		subtitle: "Get some fresh air"
	},
	Clear: {
		iconName: "weather-sunny",
		gradient: ["#91EAE4", "#2980B9"],
		title: "Sunny as fuck",
    subtitle: "Go get your ass burnt"
	},
	Clouds: {
		iconName: "weather-cloudy",
		gradient: ["#D7D2CC", "#304352"],
		title: "Clouds",
    subtitle: "I know, fucking boring"
	},
	Mist: {
		iconName: "weather-hail",
		gradient: ["#b6fbff", "#83a4d4"],
		title: "Mist!",
    subtitle: "It's like you have glasses on."
	},
	Dust: {
		iconName: "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"],
		title: "Dusty",
    subtitle: "Where're they from fuck ya 🖕🏻"
	}
};

export default function Weather({temp, condition}) {
	return (
			<LinearGradient
				colors={weatherOptions[condition].gradient}
				style={styles.container}
			>
				<StatusBar barStyle="light-content" />
				<View style={styles.halfContainer}>
					<MaterialCommunityIcons 
						name={weatherOptions[condition].iconName} 
						size={96} 
						color="white"
					/>
					<Text style={styles.temp}>{temp}℃</Text>
				</View>

				<View style={{...styles.halfContainer, ...styles.textContainer}}>
					<Text style={styles.title}>{weatherOptions[condition].title}</Text>
					<Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
				</View>
			</LinearGradient>
	)
}
// prop types to Weather component, temp and condition is required.
Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		"Haze",
		"Thunderstorm", 
		"Drizzle", 
		"Rain", 
		"Snow", 
		"Atmosphere", 
		"Clear", 
		"Clouds",
		"Mist",
		"Dust"
	]).isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},

	temp: {
		fontSize: 42,
		color: "white"
	},
	
	halfContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		color: "white",
		fontSize: 40,
		marginBottom: 8,
		fontFamily: "sans-serif-thin",
		textAlign: "left"
	},
	subtitle: {
		color: "white",
		fontSize: 20,
		fontFamily: "sans-serif",
		textAlign: "left"
	},
	textContainer: {
		paddingHorizontal: 40,
		alignItems: "flex-start"
	}
});