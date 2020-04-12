
import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default function PincodeMap(props) {
    let marker = props.pincodes.map(x => {
        let pos = [x.lat, x.lng];
        return <Marker />
    });
    return (
        <Map center={[52.8314927, -8.9775014]} zoom={5} className="two">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {props.pincodes.map(x => (
                <Marker
                    key={x.pincode}
                    position={[x.lat, x.lng]}
                />
            ))}
        </Map>
    );
}