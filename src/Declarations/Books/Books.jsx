import Header from "../../Header_Page/Header";
import "./Books.css"




const Books=()=>{
  
    return(
        <>
        <Header/>
        <div className="row-books-title">
            <h2>Συγγράμματα</h2>
        </div>
        <div className="row-books-desc">
            Παρακάτω εμφανίζονται τα προτεινόμενα συγγράμματα για κάθε μάθημα ανά εξάμηνο
        </div><br></br>
        <div className="main-row-books">
           
        </div>
        </>
    )
}

export default Books;