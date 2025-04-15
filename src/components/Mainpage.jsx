import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import desktop_cover from '../assets/images/pattern-bg-desktop.png';
import mobile_cover from '../assets/images/pattern-bg-mobile.png';
import arrow from '../assets/images/icon-arrow.svg';
import 'leaflet/dist/leaflet.css';
import { getIpAddress } from '../services/getIpAddress';
import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';

const Mainpage = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [ipData, setIpData] = useState({});
  const [lattitude, setLatitude] = useState(37.40599);
  const [longitude, setLongitude] = useState(37.40599);
  const [showMap, setShowMap] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setShowMap(true);
  }, [lattitude, longitude])


  // Geting input value 
  const handleInput = (e) => {
    setIpAddress(e.target.value);
  }

  const getData = async (e) => {
    try {
      e.preventDefault();
      setLoading(false);
      const data = await getIpAddress(ipAddress);
      setIpData(data);
      setLatitude(data.location.lat);
      setLongitude(data.location.lng);
      setLoading(true);

    } catch (error) {
      throw new Error("Error fetching dataWaiting");
    }
  }


  return (
    <div className='wrapper'>
      {/* this is the cover image */}
      <div className='background-image'>
        <picture>
          <source media="(max-width: 768px)" srcSet={mobile_cover} />
          <img src={desktop_cover} alt="Cover image" />
        </picture>
      </div>
      <header>
        <h1>IP Address Tracker</h1>
        <section>
          <form action='#' className='input-section' onSubmit={(e) => getData(e)}>
            <input type="text" placeholder='search for ' onChange={handleInput} />
            <button type='submit' ><img src={arrow} alt="search button" /></button>
          </form>
        </section>
        {/* this section will show all the information */}
        <div className='show-info'>

          <section className='first-section'>
            <h2>IP ADDRESS</h2>
            <p>{ipData.ip || "Waiting..."}</p>
          </section>

          <section className='second-section'>
            <h2>Location</h2>
            <p>{ipData.location?.city || "Waiting..."} {ipData.location?.region || ""}</p>
            <p>{ipData.location?.postalCode || ""}</p>
          </section>

          <section className='third-section'>
            <h2>TIMEZONE</h2>
            <p>{ipData.location?.timezone || "Waiting..."}</p>
          </section>

          <section className='fourth-section'>
            <h2>ISP</h2>
            <p>{ipData.isp || "Waiting..."}</p>
          </section>

        </div>
      </header>
      {loading ? <div className='map-container'>
        {showMap ? <MapContainer
          center={[lattitude, longitude]}
          zoom={13}
          style={{ height: "100vh", width: "100vw" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[lattitude, longitude]}>
            <Popup>IP Location</Popup>
          </Marker>
        </MapContainer> :
          <p>Waiting...</p>
        }
      </div> :
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          zIndex={1000}
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      }

    </div>
  )
}

export default Mainpage