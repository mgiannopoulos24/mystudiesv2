import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Header from "../../Header_Page/Header";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import CustomCard from "../../CustomCard/CustomCard";
import  book1 from "./assets/book1.jpg"
import book2 from "./assets/book2.jpg"
import book3 from "./assets/book3.jpg"
import "./Books.css"




const Books=()=>{
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

  
    return(
        <>
        <Header/>
        <Breadcrumbs/>
        <div className="row-books-title">
            <h2>Συγγράμματα</h2>
        </div>
        <div className="row-books-desc">
            Παρακάτω εμφανίζονται τα προτεινόμενα συγγράμματα για κάθε μάθημα ανά εξάμηνο
        </div><br></br>
        <div className="tabs">
            <Tabs value={activeTab} onChange={handleTabChange}>
                <Tab label="Εξάμηνο 1" sx={{textTransform:"none", fontSize:18}} />
                <Tab label="Εξάμηνο 2" sx={{textTransform:"none", fontSize:18}} />
                <Tab label="Εξάμηνο 3" sx={{textTransform:"none", fontSize:18}} />
            </Tabs>
        </div>
        <div className="main-row-books">
        {activeTab === 0 && (
           
            <div>
                <h3>Εισαγωγή στον Προγραμματισμό</h3>
                <div className="card-container">
                    <CustomCard image={book1} title={"C: Από τη Θεωρία στην Εφαρμογή"} description={ "Γ. Σ. Τσελίκης - Ν. Δ. Τσελίκας"} />
                    <CustomCard image={book2} title={"Η ΓΛΩΣΣΑ C ΣΕ ΒΑΘΟΣ"} description={ "ΝΙΚΟΣ Μ. ΧΑΤΖΗΓΙΑΝΝΑΚΗΣ"} />
                </div>
                <h3>Γραμμική Άλγεβρα</h3>
                <div className="card-container">
                    <CustomCard image={book1} title={"C: Από τη Θεωρία στην Εφαρμογή"} description={ "Γ. Σ. Τσελίκης - Ν. Δ. Τσελίκας"} />
                    <CustomCard image={book2} title={"Η ΓΛΩΣΣΑ C ΣΕ ΒΑΘΟΣ"} description={ "ΝΙΚΟΣ Μ. ΧΑΤΖΗΓΙΑΝΝΑΚΗΣ"} />
                </div>
                <h3>Διακριτά Μαθηματικά</h3>
                <div className="card-container">
                    <CustomCard image={book1} title={"C: Από τη Θεωρία στην Εφαρμογή"} description={ "Γ. Σ. Τσελίκης - Ν. Δ. Τσελίκας"} />
                    <CustomCard image={book2} title={"Η ΓΛΩΣΣΑ C ΣΕ ΒΑΘΟΣ"} description={ "ΝΙΚΟΣ Μ. ΧΑΤΖΗΓΙΑΝΝΑΚΗΣ"} />
                </div>
                <h3>Λογική Σχεδίαση</h3>
                <div className="card-container">
                    <CustomCard image={book1} title={"C: Από τη Θεωρία στην Εφαρμογή"} description={ "Γ. Σ. Τσελίκης - Ν. Δ. Τσελίκας"} />
                    <CustomCard image={book2} title={"Η ΓΛΩΣΣΑ C ΣΕ ΒΑΘΟΣ"} description={ "ΝΙΚΟΣ Μ. ΧΑΤΖΗΓΙΑΝΝΑΚΗΣ"} />
                </div>
                <h3>Εισαγωγή στην Πληροφορική και τις Τηλεπικοινωνίες</h3>
                <div className="card-container">
                    <CustomCard image={book1} title={"C: Από τη Θεωρία στην Εφαρμογή"} description={ "Γ. Σ. Τσελίκης - Ν. Δ. Τσελίκας"} />
                    <CustomCard image={book2} title={"Η ΓΛΩΣΣΑ C ΣΕ ΒΑΘΟΣ"} description={ "ΝΙΚΟΣ Μ. ΧΑΤΖΗΓΙΑΝΝΑΚΗΣ"} />
                </div>
            </div>
            
        )}
        {activeTab === 1 && (
            <div>
                <h3>Ανάλυση Ι</h3>
                <div className="card-container">
                    <CustomCard image={book1} title={"C: Από τη Θεωρία στην Εφαρμογή"} description={ "Γ. Σ. Τσελίκης - Ν. Δ. Τσελίκας"} />
                    <CustomCard image={book2} title={"Η ΓΛΩΣΣΑ C ΣΕ ΒΑΘΟΣ"} description={ "ΝΙΚΟΣ Μ. ΧΑΤΖΗΓΙΑΝΝΑΚΗΣ"} />
                </div>
                <h3>Αρχιτεκτονική Υπολογιστών Ι</h3>
                <div className="card-container">
                    <CustomCard image={book1} title={"C: Από τη Θεωρία στην Εφαρμογή"} description={ "Γ. Σ. Τσελίκης - Ν. Δ. Τσελίκας"} />
                    <CustomCard image={book2} title={"Η ΓΛΩΣΣΑ C ΣΕ ΒΑΘΟΣ"} description={ "ΝΙΚΟΣ Μ. ΧΑΤΖΗΓΙΑΝΝΑΚΗΣ"} />
                </div>
                <h3>Δομές Δεδομένων και Τεχνικές Προγραμματισμού</h3>
                <div className="card-container">
                    <CustomCard image={book1} title={"C: Από τη Θεωρία στην Εφαρμογή"} description={ "Γ. Σ. Τσελίκης - Ν. Δ. Τσελίκας"} />
                    <CustomCard image={book2} title={"Η ΓΛΩΣΣΑ C ΣΕ ΒΑΘΟΣ"} description={ "ΝΙΚΟΣ Μ. ΧΑΤΖΗΓΙΑΝΝΑΚΗΣ"} />
                </div>
                <h3>Ηλεκτρομαγνητισμός – Οπτική και Σύγχρονη Φυσική</h3>
                <div className="card-container">
                    <CustomCard image={book1} title={"C: Από τη Θεωρία στην Εφαρμογή"} description={ "Γ. Σ. Τσελίκης - Ν. Δ. Τσελίκας"} />
                    <CustomCard image={book2} title={"Η ΓΛΩΣΣΑ C ΣΕ ΒΑΘΟΣ"} description={ "ΝΙΚΟΣ Μ. ΧΑΤΖΗΓΙΑΝΝΑΚΗΣ"} />
                </div>
            </div>
        )}
        {activeTab === 2 && (
            <div>
                <h3>Ανάλυση ΙΙ</h3>
                <div className="card-container">
                    <CustomCard image={book1} title={"C: Από τη Θεωρία στην Εφαρμογή"} description={ "Γ. Σ. Τσελίκης - Ν. Δ. Τσελίκας"} />
                    <CustomCard image={book2} title={"Η ΓΛΩΣΣΑ C ΣΕ ΒΑΘΟΣ"} description={ "ΝΙΚΟΣ Μ. ΧΑΤΖΗΓΙΑΝΝΑΚΗΣ"} />
                </div>
                <h3>Πιθανότητες και Στατιστική</h3>
                <div className="card-container">
                    <CustomCard image={book1} title={"C: Από τη Θεωρία στην Εφαρμογή"} description={ "Γ. Σ. Τσελίκης - Ν. Δ. Τσελίκας"} />
                    <CustomCard image={book2} title={"Η ΓΛΩΣΣΑ C ΣΕ ΒΑΘΟΣ"} description={ "ΝΙΚΟΣ Μ. ΧΑΤΖΗΓΙΑΝΝΑΚΗΣ"} />
                </div>
                <h3>Αντικειμενοστραφής Προγραμματισμός</h3>
                <div className="card-container">
                    <CustomCard image={book1} title={"C: Από τη Θεωρία στην Εφαρμογή"} description={ "Γ. Σ. Τσελίκης - Ν. Δ. Τσελίκας"} />
                    <CustomCard image={book2} title={"Η ΓΛΩΣΣΑ C ΣΕ ΒΑΘΟΣ"} description={ "ΝΙΚΟΣ Μ. ΧΑΤΖΗΓΙΑΝΝΑΚΗΣ"} />
                </div>
                <h3>Σήματα και Συστήματα</h3>
                <div className="card-container">
                    <CustomCard image={book1} title={"C: Από τη Θεωρία στην Εφαρμογή"} description={ "Γ. Σ. Τσελίκης - Ν. Δ. Τσελίκας"} />
                    <CustomCard image={book2} title={"Η ΓΛΩΣΣΑ C ΣΕ ΒΑΘΟΣ"} description={ "ΝΙΚΟΣ Μ. ΧΑΤΖΗΓΙΑΝΝΑΚΗΣ"} />
                </div>
            </div>
        )}
        </div>
        </>
    )
}

export default Books;