import React from "react";
import "./Content.css";
import backgroundimage from "./images/pexels-pixabay-259915.jpg";
import img1 from "./images/pexels-pew-nguyen-243971.jpg";
import img2 from "./images/pexels-philippe-donn-1114690.jpg";
import img3 from "./images/pexels-photomix-company-96627.jpg";

const Content = () => {
    return (
        <main>
            <div className="backimage">
                <img src={backgroundimage} alt="Background" />
            </div>
            <div>
                <div className="head">
                    <h2 className="discounts">Special Discounts</h2>
                </div>
                <div className="loremdiv">
                    <p className="lorem">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugit, dolores ducimus tempora neque velit ipsa,
                        consequuntur obcaecati debitis praesentium ex
                        voluptatibus nobis illo. Ab expedita dicta consectetur
                        iste maxime laborum!
                    </p>
                    <p className="lorem">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugit, dolores ducimus tempora neque velit ipsa,
                        consequuntur obcaecati debitis praesentium ex
                        voluptatibus nobis illo. Ab expedita dicta consectetur
                        iste maxime laborum!
                    </p>
                    <p className="lorem">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugit, dolores ducimus tempora neque velit ipsa,
                        consequuntur obcaecati debitis praesentium ex
                        voluptatibus nobis illo. Ab expedita dicta consectetur
                        iste maxime laborum!
                    </p>
                </div>
                <div className="images">
                    <img src={img1} alt="img1" />
                    <img src={img2} alt="img2" />
                    <img src={img3} alt="img3" />
                </div>
            </div>
        </main>
    );
};

export default Content;
