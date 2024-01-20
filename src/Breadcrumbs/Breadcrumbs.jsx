import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Breadcrumbs.css'

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const customLabels = {
    MainStud: 'Αρχική σελίδα',
    CoursesDec:'Δήλωση Μαθημάτων',
    DecHistory:'Ιστορικό Δηλώσεων',
    Books:'Συγγράμματα',
    Recent:'Πρόσφατη Βαθμολογία',
    Detailed:'Αναλυτική Βαθμολογία',
    Requests:'Αιτήσεις',
    ProfileStud:'Το προφίλ μου',
    MainProf: 'Αρχική σελίδα',
    SubjectsOpenScore: 'Ανοικτές Βαθμολογίες',
    SubjectsSubmittedScore:'Υποβληθείσες Βαθμολογίες',
    Compilers:'Μεταγλωττιστές',   
    Graphics: 'Γραφικά' 
  };
  return (
    <div className='row-breadcrumbs'>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = customLabels[name] || name;

        return (
            <React.Fragment key={index}>
                <Link to={routeTo} className='breadcrumb-link'>{displayName}</Link>
                {!isLast && <ArrowForwardIosIcon fontSize='15px' className='breadcrumb-separator'/>}
            </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
