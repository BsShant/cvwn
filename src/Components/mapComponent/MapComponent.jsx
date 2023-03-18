import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './map.styles.scss'
import waveHi from '../../assets/wave-hi.gif'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 27.700769,
            lng: 85.300140
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            //   <div style={{ height: '100vh', width: '100%' }}>
            //     <GoogleMapReact
            //       bootstrapURLKeys={{ key: 'AIzaSyD4eqh_2IgNuODfbj_J9S44p_f8AVbeju4' }}
            //       defaultCenter={this.props.center}
            //       defaultZoom={this.props.zoom}
            //     >
            //       <AnyReactComponent
            //         lat={59.955413}
            //         lng={30.337844}
            //         text="My Marker"
            //       />
            //     </GoogleMapReact>
            //   </div>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <h1 >SAY HELLO!</h1>
        
            <img src={waveHi} style={{height:"100px", width:"100px"}}></img>
            </div>
            // <div className='googleMap'>

            //     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28263.48129929145!2d85.31864798715819!3d27.68839876538011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1649661329824!5m2!1sen!2snp" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            // </div>
        );
    }
}

export default SimpleMap;

// import React, { Component } from 'react';

// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

// const customizeMap = {
//   width: '100%',
//   height: '100%'
// };

// export class GoogleMapComponent extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       cords: [
//         {latitude: 51.507351, longitude: -0.127758},
//         {latitude: 31.046051, longitude: 34.851612},
//         {latitude: 51.165691, longitude: 10.451526},
//         {latitude: 52.215933, longitude: 19.134422},
//         {latitude: 50.0874654, longitude: 14.4212535},
//         {latitude: 7.5554942, longitude: 80.7137847},
//       ]
//     }
//   }

//   drawMarker = () => {
//     return this.state.cords.map((store, i) => {
//       return <Marker key={i} id={i} position={{
//        lat: store.latitude,
//        lng: store.longitude
//      }}

//      onClick={() => ""} />
//     })
//   }

//   render() {
//     return (
//         <Map
//           google={this.props.google}
//           style={customizeMap}
//           zoom={6}
//           initialCenter={{
//             lat: 9.96233,
//             lng: 49.80404
//         }}>
//           {this.drawMarker()}
//         </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'Google Maps API Token'
// })(GoogleMapComponent);


// import { MapContainer, TileLayer } from 'react-leaflet'
// import React from 'react'
// import './map.css'


// function MapComponent() {
//     return (
//         <div>
//             <MapContainer center={[40.505, -100.09]} zoom={13} >

//                 {/* <TileLayer
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 /> */}
//             </MapContainer>

//         </div>
//     )
// }

// export default MapComponent
