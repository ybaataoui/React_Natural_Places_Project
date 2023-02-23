import banner from '../src/assets/banner.jfif'
const Header = () => {
    return (
        <div className="top">
            <img src={banner} alt="" className='banner'/>
            <h1><b>Best Natural Places to Visit in Orlando</b> </h1>
        </div>
    )
}

export default Header