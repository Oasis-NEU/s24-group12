import { useState } from "react";
import "../../main.css";

export default function MapColumn() {
	// State to manage the visibility of each collapsible section
    const [activeSections, setActiveSections] = useState<{ [x: string]: any; }>({});

    // Function to toggle the visibility of a collapsible section
    const toggleCollapsible = (id: string) => {
        setActiveSections((prevState: { [x: string]: any; }) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };
	
	// scripts are not executed in react, so we need to use the useState hook to manage the visibility of the collapsible sections
    return (
		<div id="rightcolumn">
			<button id="New Health" 
				type="button" 
				style={{ backgroundColor: "#b9ffb3"}} 
				className={`collapsible ${activeSections["New Health"] ? 'activeq' : ''}`}
				onClick={() => {toggleCollapsible("New Health")}}>New Health Fridge</button>
				<div className="content" style={{ display: activeSections["New Health"] ? 'block' : 'none' }}>
  					<p>Status: Active</p>
					<p>Neighborhood: Charlestown</p>
					<p>Address: 15 Tufts St</p>
					<a href="https://www.google.com/maps/place/15+Tufts+St,+Boston,+MA+02129/@42.3778685,-71.0593625,17z/data=!3m1!4b1!4m6!3m5!1s0x89e370f1243c07b5:0x2468c718a0f2828e!8m2!3d42.3778685!4d-71.0567876!16s%2Fg%2F11c1f_jky3?authuser=1&entry=ttu">Get directions!</a>
					<p> </p>
				</div>
			<p></p>
			<button id="Northeastern" type="button" style={{ backgroundColor: "#b9ffb3"}} className="collapsible">NU Fridge</button>
				<div className="content">
					<p>Status: Active</p>
					<p>Neighborhood: Fenway</p>
					<p>Address: 70 St Stephen St</p>
					<a href="https://www.google.com/maps/search/?api=1&query=Symphony+Interfaith%C2%A0Fridge&query_place_id=ChIJ2VObvBl644kR-tYuE4tkqpY">Get directions!</a>
					<p> </p>
				</div>
			<p></p>
			<button id="Faneuil St" type="button" style={{ backgroundColor: "#e6e6e6"}} className="collapsible">Faneuil St Fridge</button>
				<div className="content">
					<p>Status: Unsure</p>
					<p>Neighborhood: Brighton</p>
					<p>Address: 243 Faneuil St</p>
					<a href="https://www.google.com/maps/search/?api=1&query=The+Faneuil+Street+Fridge&query_place_id=ChIJHVMy_Dh444kRmU7ith9UXJc">Get directions!</a>
					<p> </p>
				</div>
			<p></p>
			<button id="Brighton Center" type="button" style={{ backgroundColor: "#e6e6e6"}} className="collapsible">Brighton Center Fridge</button>
				<div className="content">
					<p>Status: Unsure</p>
					<p>Neighborhood: Brighton</p>
					<p>Address: Brighton Allston Congregational Church, UCC</p>
					<a href="https://www.google.com/maps/search/?api=1&query=The+Brighton+Center%C2%A0Fridge&query_place_id=ChIJ65wRPkh444kRKnYF98JSEEg">Get directions!</a>
					<p> </p>
				</div>
			<p></p>
			<button id="Jamaica Plain" type="button" style={{ backgroundColor: "#e6e6e6"}} className="collapsible">Jamaica Plain</button>
				<div className="content">
					<p>Status: Unsure</p>
					<p>Neighborhood: Jamaica Plain</p>
					<p>Address: 672 Centre St</p>
					<a href="https://www.google.com/maps/search/?api=1&query=Jamaica+Plain+Community+Fridge&query_place_id=ChIJO9RYZm5544kRWXZpTRLol6c">Get directions!</a>
					<p> </p>
				</div>
			<p></p>
			<button id="BU" type="button" style={{ backgroundColor: "#ffb9b3"}} className="collapsible">BU Fridge</button>
				<div className="content">
					<p>Status: Closed</p>
					<p>Neighborhood: Fenway</p>
					<p>Address: </p>
					<a href="https://www.google.com/maps/search/?api=1&query=Mattapan+Community+Fridge&query_place_id=ChIJYedXIAF844kRbgl8GegHN_M">Get directions!</a>
					<p> </p>
				</div>
			<p></p>
			<button id="Mattapan" type="button" style={{ backgroundColor: "#ffb9b3"}} className="collapsible">Mattapan Fridge</button>
				<div className="content">
					<p>Status: Closed</p>
					<p>Neighborhood: Mattapan</p>
					<p>Address: 1290 Blue Hill Ave</p>
					<a href="">Get directions!</a>
					<p> </p>
				</div>
			<p></p>
			<button id="Roslindale" type="button" style={{ backgroundColor: "#ffb9b3"}} className="collapsible">Roslindale Fridge</button>
				<div className="content">
  					<p>Status: Closed</p>
					<p>Neighborhood: Roslindale</p>
					<p>Address: 4140 Washington St</p>
					<a href="https://www.google.com/maps/search/?api=1&query=Roslindale+Community+Fridge&query_place_id=ChIJTUlKuDR544kR_PCHN4xtz_c">Get directions!</a>
					<p> </p>
				</div>
			<p></p>
			<button id="South end" type="button" style={{ backgroundColor: "#ffb9b3"}} className="collapsible">South End Fridge</button>
				<div className="content">
					<p>Status: Closed</p>
					<p>Neighborhood: South End</p>
					<p>Address: 549 Columbus Ave</p>
					<a href="https://www.google.com/maps/search/?api=1&query=South+End+Fridge+&query_place_id=ChIJC5gjthZ644kRDEvF1xk4pA4">Get directions!</a>
					<p> </p>
				</div>
			<p></p>
		</div>

	// {/* <script>
	// 	var coll = document.getElementsByClassName("collapsible");
	// 	var i;
	// 	for (i = 0; i < coll.length; i++) {
	// 	  coll[i].addEventListener("click", function() {
	// 		this.classList.toggle("activeq");
	// 		var content = this.nextElementSibling;
	// 		if (content.style.display === "block") {
	// 		  content.style.display = "none";
	// 		} else {
	// 		  content.style.display = "block";
	// 		}
	// 	  });
	// 	}
	// 	</script> */}
    )
}