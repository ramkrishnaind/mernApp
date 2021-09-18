import {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Container} from '@material-ui/core';

const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '500px'
};

const addMarkers = (markers) => {
    return (markers).map((marker, i) => {
        return <Marker
            key={i}
            title={`${marker.lat},${marker.lng}`}
            name={''}
            position={marker} />;
    });
};

export class MapContainer extends Component {



    render() {
        const defaultMarker = {lat: 26.827091790669822, lng: 75.84772681478361};

        const markers = this.props.markers || [defaultMarker];

        console.log("marker ", markers, this.props.markers);
        return (
            <Map google={this.props.google}
                zoom={14}
                containerStyle={containerStyle}
                initialCenter={markers[0]}
            >
                {/* <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{lat: 37.778519, lng: -122.405640}} />
                <Marker
                    name={'Dolores park'}
                    position={{lat: 37.759703, lng: -122.428093}} />
                <Marker />
                <Marker
                    name={'Your position'}
                    position={{lat: 37.762391, lng: -122.439192}}
                /> */}
                {
                    addMarkers(markers)
                }

                <InfoWindow onClose={this.onInfoWindowClose}>
                    {/* <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div> */}
                </InfoWindow>
            </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("")
})(MapContainer);