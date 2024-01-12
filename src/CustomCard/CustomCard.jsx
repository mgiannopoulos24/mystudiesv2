import "./CustomCard.css"
import {Tilt} from "react-tilt";

const defaultOptions={
    reverse:false,
    max:15,
    perspective:500
}



const CustomCard=({image,title,description}) => {
    return (
        <Tilt options={defaultOptions}>
            <div className="tilt-card">
                <img src={image} alt="test" className="tilt-img"/>
                <div className="tilt-title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>         
            </div>
        </Tilt>
    );
}

export default CustomCard;