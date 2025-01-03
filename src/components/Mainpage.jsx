import desktop_cover from '../assets/images/pattern-bg-desktop.png';
import mobile_cover from '../assets/images/pattern-bg-mobile.png';
import arrow from '../assets/images/icon-arrow.svg';
const Mainpage = () => {
  return (
    <div>
      <div>
        <picture>
          <source media="(max-width: 458px)" srcSet={mobile_cover} />
          <img src={desktop_cover} alt="Cover image" />
        </picture>
      </div>
      <header>
        <h1>IP Address Tracker</h1>
        <section className='input-section'>
          <input type="text" placeholder='search for ' />
          <button><img src={arrow} alt="search button" /></button>
        </section>
        {/* this section will show all the information */}
        <div className='show-info'>

          <section className='first-section'>
            <h2>IP ADDRESS</h2>
            <p>192.212.174.101</p>

          </section>

          <section className='second-section'>
            <h2>Location</h2>
            <p>Broklyn, NY</p>
            <p>10001</p>
          </section>

          <section className='third-section'>
            <h2>TIMEZONE</h2>
            <p>UTC-05:00</p>
          </section>

          <section className='fourth-section'>
            <h2>ISP</h2>
            <p>SpaceX Starlink</p>
          </section>

        </div>
      </header>
    </div>
  )
}

export default Mainpage