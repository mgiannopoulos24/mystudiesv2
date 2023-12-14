import './QuickAccess.css'
import { useState, useEffect } from 'react';
import image1 from "../Quick_Access/assets/subjects.jpg"
import image2 from "../Quick_Access/assets/grades.jpg"
import image3 from "../Quick_Access/assets/dilwsi.png"
import image4 from "../Quick_Access/assets/certificate.png"
import image5 from "../Quick_Access/assets/history.jpg"



const images = [image1, image2, image3, image4, image5];
const descriptions = [
    'Μαθήματα',
    'Βαθμολόγιο',
    'Δήλωση Μαθημάτων',
    'Υποβολή Αίτησης',
    'Ιστορικό Δηλώσεων',
  ];

export const QuickAccess=()=>{
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    const handleRadioChange = (index) => {
        setCurrentIndex(index);
    };



    return(
        <>
        <center>
        <div className='two-columns'>
            <div className='column-1'>
                <div className="image-slider">
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex+1}`} />

                    <div className="description-box">
                        <p className="description-text">{descriptions[currentIndex]}</p>
                    </div>

                    <div className="radio-buttons-container">
                        <div className="radio-buttons">
                            {images.map((_,index) => (
                                <input 
                                    key={index}
                                    type="radio"
                                    name="slider"
                                    checked={index === currentIndex}
                                    onChange={() => handleRadioChange(index)} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div class='column-2'>
                <h1>Ταχεία Πρόσβαση</h1>
                <ul>
                    <li>Μαθήματα</li>
                    <li>Βαθμολόγιο</li>
                    <li>Δήλωση Μαθημάτων</li>
                    <li>Υποβολή Αίτησης</li>
                    <li>Ιστορικό Δηλώσεων</li>
                </ul>
            </div>
        </div>
        </center>
        </>
    )
}

export default QuickAccess;