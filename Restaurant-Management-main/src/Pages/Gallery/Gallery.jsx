import { Helmet } from "react-helmet-async"
import PrimaryHero from "../../Components/Hero/PrimaryHero"
import { useQuery } from "@tanstack/react-query"
import { getGallery } from "../../api/gallery"
import useAuth from "../../Hooks/useAuth"


const Gallery = () => {
    const {user} = useAuth()
    const {data:galleries} = useQuery({
        queryKey:['galleries'],
        queryFn:async() => getGallery()
    })
    return (
        <>
            {/* helmet */}
            <Helmet>
                <title>Restaurant Management / Gallery</title>
            </Helmet>
            {/* page title */}
            <PrimaryHero text="Gallery" />
            <div className="flex flex-col">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* add button */}
                <div className="">
                    
                </div>
                    {/* images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 ">
                         {/* gallery map */}
                         {galleries?.map((gallery, index) => (
                            <div
                                key={gallery._id}
                                className="relative"
                                data-aos="fade-up"
                                data-aos-delay={index * 400} // Delay based on index
                            >
                                <img
                                    src={gallery.image}
                                    alt={gallery.name}
                                    className="w-full h-60 object-cover rounded-lg shadow-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold">{gallery.name}</h3>
                                    <p className="mt-2">{gallery.feedback}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Gallery