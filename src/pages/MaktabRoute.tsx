import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header/Header";
import EmployeeBox from "../components/Employee-box/EmployeeBox";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button, Grow, Snackbar } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import Modal from "@material-ui/core/Modal";

interface IEmployee {
  id: number;
  employee_name: string;
  employee_age: number;
  employee_salary: number;
}

function Route1() {
  const [employees, setEmployees] = useState<Array<IEmployee>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const fetchEmployees = () => {
    setIsLoading(true);
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        setIsLoading(false);
        setSnackbarOpen(false);

        setEmployees(res.data.data);
      })
      .catch((err) => {
        setErrMessage("Cannot Fetch data!");
        setSnackbarOpen(true);
        setIsLoading(true);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleRefresh = () => {
    setEmployees([]);
    setIsLoading(true);
    setSnackbarOpen(true);

    fetchEmployees();
  };

  const handleClose = () => {
    setSnackbarOpen(false);
  };
  return (
    <>
      <Header refreshBtn={handleRefresh} />
      <div
        style={{
          width: "100vw",
          height: "100%",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}>
        {isLoading && <CircularProgress />}
      </div>

      <Container style={{ marginTop: "1.5rem" }}>
        <Grid container spacing={6} justifyContent={"center"}>
          {employees &&
            employees.map((item, index) => (
             
                <Grow in={true}  timeout={index * 200}>
                  <Grid item >
                    <EmployeeBox 
                    onClick={handleOpen}
                      avatarSrc={"https://i.pravatar.cc/300?u" + item.id}
                      name={item.employee_name}
                      age={item.employee_age}
                      salary={item.employee_salary.toString()}
                    />
                  </Grid>
                </Grow>
             
            ))}
        </Grid>
      </Container>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={errMessage}
        action={
          <React.Fragment>
            <Button color="secondary" size="large" onClick={handleRefresh}>
              Refresh Again
              <RefreshIcon />
            </Button>
          </React.Fragment>
        }
      />

<Modal
  open={true}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  {body}
</Modal>
    </>
  );
}

export default Route1;
