import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Slider2.css'
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

export const Slider2 = ({data}) => {
    return <div id="slider2">
        <Carousel partialVisible={true} responsive={responsive}>
            {
                data.map(ele=>{
                    return <div className="slider2Container">
                        <img src={ele.image_url} />
                        <p>{ele.shop_name}</p>
                    </div>
                })
            }
        </Carousel>
    </div>
}