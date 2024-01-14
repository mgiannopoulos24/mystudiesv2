import React from 'react';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';


const SubjectCard = ({title,id,professor,period,type,points,grade}) => {
    const gradeColor = grade < 5 ? 'red' : 'green';
    return (
        <>
        <Card sx={{ display: 'flex', width: '100%', alignItems:"center",fontSize:18}}>
            <CardContent sx={{display:"flex",width:"30%"}}>
                <div><strong>{title}</strong></div>
            </CardContent>
            <CardContent sx={{display:"flex",width:"5%"}}>
                <div>{id}</div>
            </CardContent>
            <CardContent sx={{display:"flex",width:"20%"}}>
                <div>{professor}</div>
            </CardContent>
            <CardContent sx={{display:"flex",width:"15%"}}>
                <div>{period}</div>    
            </CardContent>
            <CardContent sx={{display:"flex",width:"15%"}}>
                <div>{type}</div>
            </CardContent>
            <CardContent sx={{display:"flex",width:"5%"}}>
                <div>{points}</div>
            </CardContent>
            <CardContent sx={{display:"flex",width:"5%"}}>
                <h2 style={{ color: gradeColor }}>{grade}</h2>
            </CardContent>
            
            
            
            
            
        
        </Card>
        <br></br>
        </>
  );
}

export default SubjectCard;
