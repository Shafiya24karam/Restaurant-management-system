import { useNavigate } from "react-router-dom"
const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="">
        <h2 className="text-2xl font-semibold">Sorry, an unexpected error has occurred.</h2>
        <p className='mt-2 text-gray-700 text-center'>Here are some helpful links:</p>
        <div className=" flex justify-center mt-3">
            <button className="bg-secondary px-4 mr-4 py-2 rounded" onClick={() => navigate(-1)}>Go Back</button>
            <button className="bg-black text-secondary px-4 py-2 rounded" onClick={() => navigate('/')}>Take Me Home</button>
        </div>
        </div>
    </div>
  )
}

export default ErrorPage