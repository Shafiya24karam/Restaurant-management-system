

const PrimaryButton = ({ text }) => {
    return (
        <>
             <button
                className="bg-tertiary text-black py-2 px-4 rounded-full shadow-[0_4px_10px_rgba(50,205,50,0.5)] hover:shadow-[0_8px_15px_rgba(50,205,50,0.7)] transition ease-in-out transform duration-300 hover:scale-105"
            >
                {text}
            </button>
        </>
    )
}

export default PrimaryButton