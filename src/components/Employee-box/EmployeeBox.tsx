import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Grid, Avatar, Box, Button, Paper  } from "@material-ui/core";



interface IEmployeeBox{
  avatarSrc:string,
  name:string,
  age:number,
  salary:any
}

const EmployeeBox:React.FC<IEmployeeBox> = (props)=> {
  return (
    <>
      <Paper elevation={3} style={{ width: "15rem", height: "15rem" }}>
        <Grid container direction={"column"}  alignItems={'center'} spacing={1}>
          <Grid item>
            <Avatar style={{ width: "7rem", height: "7rem" }} src={props.avatarSrc} />
          </Grid>
          <Grid item>
            <Typography variant="h6" component="div">
              {props.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" component="div">
              {props.age}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              ${props.salary}/y - ${Math.ceil(+props.salary/12)}/m
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}


export default EmployeeBox;
