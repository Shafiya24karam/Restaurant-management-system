const Heading = ({heading,subHeading}) => {
  return (
 <>
  <div className="my-16 text-center">
        <h2 className="text-5xl font-semibold text-center bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text">
          {heading}
        </h2>
        <p className="mt-4 text-lg text-center">{subHeading}</p>
      </div>
 </>
  )
}

export default Heading