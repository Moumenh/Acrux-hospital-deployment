
import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'
import "./depCard.css"
const useStyles = makeStyles({
  root: {
    width: 380,
  },
  media: {
    height: 250,
  },
});




export default function DepOne({department,image}) {
  const classes = useStyles();
  return (
    <Link to={`/department/${department.pk}`}  style={{textDecoration:'none'}}>
    <Card className={classes.root} className="cardit" style={{marginBottom:'17px',marginRight:"0px",marginTop:"17px",width:'100%'}}>
            <CardActionArea style={{display:"flex",width:"550px"}} className="try">
                <div className='zameel' style={{overflow:"hidden",height:"100px",width:"100px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"100PX",boxShadow:"3px 4px 15px #00000026", marginLeft:'15px'}} >
                    <img src={image} alt="image"/>
                </div>
                <CardContent style={{textAlign:"start",width:"450px"}}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {department.title}
            </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className='dep_text'>
                        {department.about}
            </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
    
  );
}

