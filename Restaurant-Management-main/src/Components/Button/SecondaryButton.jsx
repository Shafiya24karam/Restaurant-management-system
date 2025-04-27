import { Link } from "react-router-dom"


const SecondaryButton = ({text,to}) => {
  return (
    <>
     <Link to={to}>
     <button className="bg-secondary text-black py-3 px-6 rounded-2xl transition ease-in-out duration-300 transform hover:scale-105 shadow-[0_4px_10px_rgba(50,205,50,0.5)] hover:bg-tertiary hover:shadow-[0_8px_15px_rgba(255,215,0,0.7)]">
        {text}
      </button>
     </Link>
    </>
  )
}

export default SecondaryButton