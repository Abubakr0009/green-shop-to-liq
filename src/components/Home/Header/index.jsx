import { useState, useRef } from "react";
import { Carousel } from "antd";
const HeroCarousel = () => {
    
    const slides = [
        {
            id: 1,
            text: "Welcome to GreenShop",
            title: "LET'S MAKE A BETTER PLANET",
            description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
            img: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
        },
        {
            id: 2,
            text: "Welcome to GreenShop",
            title: "LET'S LIVE IN A BETTER PLANET",
            description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
            img: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d",
        },
        {
            id: 3,
            text: "Welcome to GreenShop",
            title: "LET'S OBSERVE A BETTER PLANET",
            description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
            img: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662",
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);

    return (
        <div className="max-w-[1240px] m-auto px-4 mt-4 relative">
            <Carousel ref={carouselRef} autoplay autoplaySpeed={3500} dots={false} beforeChange={(from, to) => setCurrentSlide(to)}>
                {slides.map((slide, index) => (
                    <div key={index} className="flex items-center justify-center bg-[#F5F5F5] rounded-xl h-[400px] pt-[100px] pb-[80px] pl-10">
                        <div className="max-co w-full flex items-center justify-between h-full">
                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="uppercase text-lg font-medium text-[#3D3D3D]">{slide.text}</h3>
                                <h2 className="font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl">
                                    {slide.title.split(" ").slice(0, -1).join(" ")}{" "}
                                    <span className="text-[#46A358] uppercase">
                                        {slide.title.split(" ").slice(-1)}
                                    </span>
                                </h2>
                                <p className="text-sm font-normal text-[#727272] w-3/5 max-lg:text-xs mt-[10px]">{slide.description}</p>
                            </div>

                            <div className="flex justify-end items-end">
                                <img src={slide.img} alt={slide.text || "Carousel img"} className="max-w-[390px] max-h-[390px]" width={390} height={390} priority />
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            <div className="justify-center items-center flex gap-2 absolute bottom-4 left-1/2">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        className={`relative cursor-pointer transition-all duration-300 bg-[#46A358] rounded-full !h-[6px] !w-[6px] ${currentSlide === index ? "!w-6" : "!h-6 hover:bg-[#46A358]/70 bg-[#46A358]/40"}`}
                        onClick={() => carouselRef.current?.goTo(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;