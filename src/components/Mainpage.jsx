import desktop_cover from '../assets/images/pattern-bg-desktop.png';
import mobile_cover from '../assets/images/pattern-bg-mobile.png';

const Mainpage = () => {
  return (
    <div>
        <header>
            <picture>
                <source media="(max-width: 458px)" srcSet={mobile_cover} />
                <img src={desktop_cover} alt="Cover image" />
            </picture>
        </header>
    </div>
  )
}

export default Mainpage