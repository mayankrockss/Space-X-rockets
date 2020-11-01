import "./flight_card.css";

export function FlightCard({ flight }) {
    const { links, mission_name, flight_number, mission_id, launch_year, launch_success, rocket: { first_stage: { cores = []} = {} } = {} } = flight;

    return <div className="flight_card">
        <div className="image"><img src={links.mission_patch_small} alt={mission_name}/></div>
        <div className="mission_name">{mission_name}#{flight_number}</div>
        {mission_id && !!mission_id.length && <div className="element">
            <label>Mission Ids: </label>
            <ul className="mission_id">{mission_id.map(id => <li key={id}>{id}</li>)}</ul>
        </div>}
        <div className="element">
            <label>Launch year: </label>
            {launch_year}
        </div>
        <div className="status">{launch_success ? <span>Launch was a Success</span> : <span>Launch Failed</span>}</div>
        <div className="status">{cores.length && cores[0].land_success ? <span>Landing was a Success</span> : <span>Landing Failed</span>}</div>
        <div></div>
    </div>
}