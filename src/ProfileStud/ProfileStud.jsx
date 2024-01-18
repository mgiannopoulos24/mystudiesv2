import React from 'react';
import "./ProfileStud.css"
import user_img from "./assets/user.png"
import Grid from '@mui/material/Grid';
import Header from '../Header_Page/Header';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

export const ProfileStud =()=>{
    return(
        <>
        <Header/>
        <Breadcrumbs/>
        <div className='row-header'>
            <h2>Το προφίλ μου</h2>
        </div>
        <div className='row-main-1'>
            <img src={user_img} alt="user"/>
        </div>
        <div className='row-name-status'>
            <h3>ΛΑΚΗΣ ΛΑΛΑΚΗΣ</h3>
            Ενεργός
        </div>
        <div className='track-progress'>
            <li className='done'>
                Οκτώβριος 2022            
            </li> 
            <li className='done'>
                Εξάμηνο 1
            </li>
            <li className='done'>
                Εξάμηνο 2
            </li>
            <li className='done'>
                Εξάμηνο 3
            </li>
            <li className='todo'>
                Εξάμηνο 4
            </li>
            <li className='todo'>
                Εξάμηνο 5
            </li>
            <li className='todo'>
                Εξάμηνο 6
            </li>
            <li className='todo'>
                Εξάμηνο 7
            </li>
        </div>
        <div className='empty-space'></div>
        <div className='row-info'>
            <Grid container textAlign="center" rowSpacing={1} columnSpacing={{ xs: 1}}>
                <Grid item xs={3}>Τμήμα</Grid>
                <Grid item xs={3}>ΤΜΗΜΑ ΠΛΗΡΟΦΟΡΙΚΗΣ</Grid>
                <Grid item xs={3}>Κατεύθυνση</Grid>
                <Grid item xs={3}>ΚΟΡΜΟΣ</Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>Πρόγραμμα Σπουδών</Grid>
                <Grid item xs={3}><a href='https://www.di.uoa.gr/sites/default/files/documents/ODIGOS_SPOYDWN_DIT_EKPA_2023-24.pdf' target="_blank">Πρόγραμμα Σπουδών 2023-24</a></Grid>
            </Grid>
        </div>
        </>
    )
    
       
}



export default ProfileStud;