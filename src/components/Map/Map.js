
import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import useCustom from "../../helpers/globalState";

export default function PincodeMap(props) {
    const [selectedPin, setSelectedPin] = useCustom({});

    return (
        <Map center={selectedPin.pincode ? [selectedPin.lat, selectedPin.lng] : [23.106401, 113.459749]} 
        zoom={5} 
        className="two"
        animate={true}>
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