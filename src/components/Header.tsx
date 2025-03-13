import banner from "../assets/banner.png"
function Header() {
  return (
    <>
      <div className='text-center p-2 bg-gray-100'>
        <p className='font-googlesans text-sm md:text-2xl'>Hero Packages: Ready-to-Deploy Google Cloud Solutions</p>
      </div>
      <img className='' src={banner} alt="" />
    </>
  )
}

export default Header