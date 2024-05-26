import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import "./Destinations.css";
import {
	APIProvider,
	Map,
	AdvancedMarker,
	useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import properties from "./dataset";

export default function Destinations() {
	const [markerRef, marker] = useAdvancedMarkerRef();
	const [isContentVisible, setContentVisible] = useState(true);
	const [activeButton, setActiveButton] = useState("Indang");
	const [mapType, setMapType] = useState("destinations");
	const [isButtonClicked, setButtonClicked] = useState(false);

	const handleButtonClick = (buttonName, type) => {
		setActiveButton(buttonName);
		setMapType(type);
		setButtonClicked(true);
		setTimeout(() => {
			setButtonClicked(false);
		}, 100);
	};

	const highlightMarker = (index) => {
		const element = document.querySelector(`.property${index}`); // Get the marker element

		if (element) {
			const grandparent = element.parentElement.parentElement; // Get the grandparent element
			const greatGrandparent = grandparent.parentElement;
			greatGrandparent.append(grandparent);

			setTimeout(() => {
				if (element.classList.contains("highlight")) {
					element.classList.remove("highlight");
					element.style.zIndex = null;
				} else {
					element.classList.add("highlight");
					element.style.zIndex = 999;
				}
			});
		}
	};

	const everything = (buttonName) => {
		handleButtonClick(buttonName);
		handleMapTypeToggle();
	};

	const handleMapTypeToggle = () => {
		setMapType((prevMapType) =>
			prevMapType === "accommodations" ? "accomodations" : "destinations"
		);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setContentVisible(!isContentVisible);
			setButtonClicked(false);
		}, 10);

		return () => clearTimeout(timer);
	}, [activeButton]);

	const center = { lat: 14.153059856204539, lng: 120.90277126727229 };

	const locationProperties = {
		Indang: properties.propertiesIndang,
		Amadeo: properties.propertiesAmadeo,
		Tagaytay: properties.propertiesTagaytay,
		Alfonso: properties.propertiesAlfonso,
	};

	const activeProperties = locationProperties[activeButton];

	const markers = [];

	activeProperties.forEach((property, index) => {
		markers.push(
			<AdvancedMarker
				id={`marker-${index}`}
				className={`property property${index}`}
				position={property.position}
				onClick={() => highlightMarker(index)}
				key={index}>
				{" "}
				{/* Add a unique key for each marker */}
				<div className='icon'>
					<i
						aria-hidden='true'
						className={`fa solid fa-${property.type}`}
						title={`${property.type}`}></i>
				</div>
				<div className='details'>
					<div className='address'>{property.address}</div>
					<div className='description' style={{ whiteSpace: "normal" }}>
						{property.description}
					</div>
					<div className='features'>
						<div>
							<i
								aria-hidden='true'
								className='fa fa-at fa-lg bed'
								title='bedroom'></i>
							<span className='fa-sr-only'>email</span>
							<span>{property.email}</span>
						</div>
						<div>
							<i
								aria-hidden='true'
								className='fa fa-solid fa-hashtag fa-lg bath'
								title='number'></i>
							<span className='fa-sr-only'>number</span>
							<span>{property.contactNo}</span>
						</div>
						<div>
							<i
								aria-hidden='true'
								className='fa fa-solid fa-link fa-lg size'
								title='size'></i>
							<span className='fa-sr-only'>link</span>
							<span>
								<a
									href={property.page}
									target='_blank'
									rel='noopener noreferrer'
									style={{ textDecoration: "none", color: "black" }}>
									Click here
								</a>
							</span>
						</div>
					</div>
				</div>
			</AdvancedMarker>
		);
	});

	return (
		<APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY}>
			<div className='destinations-container'>
				<div
					onClick={() => setContentVisible(!isContentVisible)}
					className={`destinations-content ${
						isContentVisible ? "active" : ""
					}`}>
					<div
						className={`expand ${!isContentVisible ? "active" : ""}`}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}>
						Click to Expand
					</div>
					<div
						className={`destinations-title ${
							isContentVisible ? "active" : ""
						}`}>
						<h2>Places</h2>
					</div>
					<div
						className={`destination-buttons ${
							isContentVisible ? "active" : ""
						}`}>
						<Button
							id={`btns ${activeButton === "Indang" ? "active" : ""}`}
							link='Destinations'
							buttonSize='btn--large'
							buttonStyle={
								activeButton === "Indang" ? "btn--primary" : "btn--outline"
							}
							onClick={() => everything("Indang")}>
							Indang
						</Button>
						<Button
							id={`btns ${activeButton === "Amadeo" ? "active" : ""}`}
							link='Destinations'
							buttonSize='btn--large'
							buttonStyle={
								activeButton === "Amadeo" ? "btn--primary" : "btn--outline"
							}
							onClick={() => everything("Amadeo")}>
							Amadeo
						</Button>
						<Button
							id={`btns ${activeButton === "Tagaytay" ? "active" : ""}`}
							link='Destinations'
							buttonSize='btn--large'
							buttonStyle={
								activeButton === "Tagaytay" ? "btn--primary" : "btn--outline"
							}
							onClick={() => everything("Tagaytay")}>
							Tagaytay
						</Button>
						<Button
							id={`btns ${activeButton === "Alfonso" ? "active" : ""}`}
							link='Destinations'
							buttonSize='btn--large'
							buttonStyle={
								activeButton === "Alfonso" ? "btn--primary" : "btn--outline"
							}
							onClick={() => everything("Alfonso")}>
							Alfonso
						</Button>
					</div>
				</div>
			</div>
			<div className='map1 active'>
				<Map
					zoom={12}
					center={center}
					mapId='7221de5946eae6f5'
					gestureHandling='greedy'
					disableDefaultUI={true}
					clickableIcons={false}>
					{markers}
				</Map>
			</div>
		</APIProvider>
	);
}
