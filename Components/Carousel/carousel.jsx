/* This code is creating an image carousel component using Next.js and React. It imports the `Image`
component from Next.js to display the images and the `Marquee` component from `react-fast-marquee`
to create the scrolling effect. The `images` array contains the image URLs and alt text for each
image. The `ImageCarousel` function returns a div containing the `Marquee` component with each image
wrapped in a div with the `Image` component inside. It also includes a text overlay using a `p`
element with a gradient background and border. */
import Image from "next/image";
import Marquee from "react-fast-marquee";

const images = [
    {
        src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1674826123/Screenshot_2022-09-03_102413_szfbn5.png",
        alt: "image 0",
    },
    {
        src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/279881209_801798817465669_8315301464742405531_n_fi9jvr.jpg",
        alt: "image 1",
    },
    {
        src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/312212713_845444913535864_2965981991429716530_n_glljkz.jpg",
        alt: "image 2",
    },
    {
        src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679241238/IMG_20220725_191111_cyhcd7.jpg",
        alt: "image 7",
    },
    {
        src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/283119318_1176580216437313_7004400500214089155_n_vgmitz.jpg",
        alt: "image 5",
    },
    {
        src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/293066269_735263811101629_4917450492142136042_n_wh136u.jpg",
        alt: "image 6",
    },
    {
        src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/307752438_415835390664637_3534036197302672937_n_wfr6fi.jpg",
        alt: "image 3",
    },
    {
        src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/302443510_822286705609631_3473952214574021331_n_epcmhf.jpg",
        alt: "image 4",
    },
];

export default function ImageCarousel() {
    return (
        <div>
            <div className="flex w-full relative">
                <Marquee
                    pauseOnHover={true}
                    pauseOnClick={true}
                    loop={0}
                    speed={30}
                    gradient={false}
                    className={'bg-[black] border-x-2 border-b-2 border-main'}
                >
                    {images.map((image) => (
                        <div key={image.alt} className="">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-[30vw] h-full object-cover border-x-2 border-main"
                                height={1500}
                                width={1500}
                            />
                        </div>
                    ))}
                    </Marquee>
                    <div className="xl:text-6xl lg:text-5xl md:text-2xl sm:text-md z-10 text-center absolute inset-0 flex justify-start items-center">
                    <p className='p-8 h-[30vw] w-[25vw] flex justify-center items-center bg-gradient-to-t from-[#071fb4] to-[#dbad69] text-dark__blue border-x-4 border-t-4 border-b-2 border-dark__blue'> Welcome To CP Unofficial</p>
                    </div>
            </div>
        </div>
    );
}
