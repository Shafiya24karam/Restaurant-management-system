import { Link } from "react-router-dom"
import image from '../../assets/banner.jpg'
const PrimaryHero = ({ text, linkText, linkHref }) => {
  return (
    <div
      className="h-[400px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative flex items-center justify-center h-full text-center text-neutral-content">
        <div className="">
          <div className="text-white">
            <h2 className="text-5xl font-medium mb-5 bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text">{text}</h2>
            <div className="">
              <p className="flex justify-center items-center text-lg gap-2 mt-6">
                <Link to="/">
                  <span className="hover:text-secondary transition-colors duration-300 ease-in-out ">Home</span>
                </Link>
                /
                {linkText && linkHref ? (
                  <>
                    <Link to={linkHref} className="text-lg  hover:text-secondary transition-colors duration-300 ease-in-out">
                      {linkText}
                    </Link>
                    /
                  </>
                ) : null}
                <span className="bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text">{text}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimaryHero
