import Heading from "../Shared/Header/Heading"
import 'react-photo-view/dist/react-photo-view.css'; import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useQuery } from "@tanstack/react-query";
import { getGallery } from "../../api/gallery";

import SecondaryButton from "../Button/SecondaryButton";

const GallerySection = () => {
  const { data: galleries } = useQuery({
    queryKey: ['galleries'],
    queryFn: async () => getGallery()
  })
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
      <Heading heading="Our Gallery" subHeading="Check out some of our latest images" />
      <PhotoProvider>
        <div className="foo grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleries?.slice(0, 4)?.map((gallery, index) => (
            <PhotoView key={index} src={gallery.image}>
              <img src={gallery.image} alt={gallery.name} className="w-full h-60 object-cover rounded-lg shadow-lg" />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
      {/* button section */}
      <div className='pt-10 flex justify-center'>
       <SecondaryButton text={'See All Images'} to="/gallery"/>
      </div>
    </div>
  )
}

export default GallerySection