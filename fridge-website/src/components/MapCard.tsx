// ideally, we would want to abstract a map card component that would be used in the MapColumn.tsx file
export default function MapCard() {
    return (
        <>
            <button id="South end" type="button" style={{ backgroundColor: "#ffb9b3"}} className="collapsible">South End Fridge</button>
				<div className="content">
					<p>Status: Closed</p>
					<p>Neighborhood: South End</p>
					<p>Address: 549 Columbus Ave</p>
					<a href="https://www.google.com/maps/search/?api=1&query=South+End+Fridge+&query_place_id=ChIJC5gjthZ644kRDEvF1xk4pA4">Get directions!</a>
					<p> </p>
				</div>
			<p></p>
        </>
    )
}