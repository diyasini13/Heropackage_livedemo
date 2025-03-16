import banner from "../assets/banner.png"
import { SecretsManager } from "../utils/SecretsManager";
import { BasicButton } from "./Buttons";


interface HeaderProps {
  setIsAuthenticated: (value: boolean) => void;
  isAuthenticated: boolean;
}

function Header({ isAuthenticated, setIsAuthenticated }: HeaderProps) {
  const handleLogout = () => {
    SecretsManager.clearToken();
    setIsAuthenticated(false);
  };
  return (
    <>
      <div className='text-center p-2 bg-gray-100'>
        <p className='font-googlesans text-sm md:text-2xl'>Hero Packages: Ready-to-Deploy Google Cloud Solutions</p>
      </div>
      <a href="https://cloud.google.com/?e=48754805" target="_blank" rel="noopener noreferrer">
        <img className='' src={banner} alt="banner" sizes="" />
      </a>
      <div className="h-4"></div>
      <div className="text-center p-2 bg-white-10  bg-gray-100"> {/* Added margin top for spacing */}
        <p className="font-googlesans text-sm md:text-xl">Please fill the <a href="https://forms.gle/fC76Upee7H6d88j37" className="text-blue-600 underline" target="_blank">feedback form</a></p>
      </div>
      <div className="flex justify-end pr-7 pt-4" >
       
        {isAuthenticated ? (

          <BasicButton text={"Log Out"} clickAction={() => handleLogout()} />

        ) : (
          ""
        )}

      </div>
      <div className="h-4"></div>
    </>
  )
}

export default Header