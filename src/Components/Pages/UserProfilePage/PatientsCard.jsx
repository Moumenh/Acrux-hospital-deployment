import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function PatientsCard({ patient, getAppointments }) {
    const classes = useStyles();
    // console.log('details', patient)

    const acceptPatient = () => {
        const obj = { patientId: patient.patientId, doctorId: patient.doctorId }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };

        fetch('https://acrux-hospital.herokuapp.com/patient/accept', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.non_field_errors) {
                    throw Error
                } else {
                    window.location.reload()
                }
            })
            .catch(() => alert('Already Added'))
    }

    const declinePatient = () => {
        const obj = { id: patient.id }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };

        fetch('https://acrux-hospital.herokuapp.com/day/delete', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log('deleted',data)
                getAppointments()
                // window.location.reload()
            })
    }

    return (
        <div className={classes.root} style={{ marginTop: '15px' }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{patient.patientName}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
                            <Typography>
                                Date : {patient.date}
                            </Typography>
                            <Typography>
                                Hour : {patient.hour}
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '80px' }}>
                            <CheckIcon onClick={acceptPatient} style={{ color: 'green', cursor: 'pointer' }} />
                            <CloseIcon onClick={declinePatient} style={{ color: 'red', cursor: 'pointer' }} />
                        </div>


                    </div>


                </AccordionDetails>
            </Accordion>

        </div>
    );
}