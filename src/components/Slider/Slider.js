import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Slider.css'
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const Slider = ({data}) => {
    return <div>
        <Carousel partialVisible={true} responsive={responsive}>
            {
                data.map(ele=>{
                    return <div key={`slider${ele.id}`} className="sliderContainer">
                        <img src={ele.img} />
                        <p>{ele.content}</p>
                    </div>
                })
            }
        </Carousel>
    </div>
}