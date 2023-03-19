import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1678289997/4_foug3j.png",
    alt: "image 1",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1678289997/4_foug3j.png",
    alt: "image 2",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1678289997/4_foug3j.png",
    alt: "image 3",
  },
];

export default function ImageCarousel() {
  return (
    <div className="w-full">
      <Carousel infiniteLoop autoPlay stopOnHover={false} >
        {images.map((image) => (
          <div
            key={image.alt}
            className="flex items-center justify-center h-64"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              height={50}
              width={50}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
