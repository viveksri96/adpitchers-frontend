import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";
import { Formik } from "formik";
import React from "react";
import { Axios } from "../../config/environment";

const styles = {
  modalBody: {
    width: 700,
    margin: "24px auto",
    background: "white",
    padding: 24,
  },
  modalHeader: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 600,
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 16,
  },
  formControl: {
    height: 40,
    marginTop: 24,
  },
  selectRoot: {
    "&:hover, &:focus": {
      backgroundColor: "unset",
    },
  },
};

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, selectedAddress } = this.props;
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.handleModalClose.bind(this, null)}
      >
        <div className={classes.modalBody}>
          <Typography className={classes.modalHeader}>
            Add Address{" "}
            <span style={{ float: "right" }}>
              <CloseIcon />
            </span>
          </Typography>
          <Formik
            initialValues={
              selectedAddress
                ? { ...selectedAddress }
                : {
                    full_name: "",
                    address_line_1: "",
                    address_line_2: "",
                    landmark: "",
                    mobile_number: "",
                    pincode: "",
                    city: { name: "Lucknow", id: 1 },
                  }
            }
            validate={(values) => {
              //const errors = {};
              //if (!values.email) {
              //  errors.email = "Required";
              //} else if (
              //  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              //) {
              //  errors.email = "Invalid email address";
              //}
              //return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              values = { ...values, city: values.city.id };
              console.log(values);
              Axios[selectedAddress ? "put" : "post"](
                selectedAddress ? `/address/${selectedAddress.id}` : "/address",
                {
                  ...values,
                }
              )

                .then((res) => {
                  setSubmitting(false);
                  this.props.handleModalClose(res.data);
                })
                .catch((err) => {
                  console.log(err);
                  setSubmitting(false);
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="full_name"
                    value={values.full_name}
                    label="Full Name"
                    placeholder="Placeholder"
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <TextField
                    id="address_line_1"
                    label="Address line 1"
                    value={values.address_line_1}
                    placeholder="Placeholder"
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <TextField
                    id="address_line_2"
                    label="Address line 2"
                    value={values.address_line_2}
                    placeholder="Placeholder"
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <TextField
                    id="landmark"
                    label="landmark"
                    value={values.landmark}
                    placeholder="Placeholder"
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <TextField
                    id="mobile_number"
                    label="Phone Number"
                    value={values.mobile_number}
                    placeholder="Placeholder"
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <TextField
                    id="pincode"
                    label="Pincode"
                    value={values.pincode}
                    placeholder="Placeholder"
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{
                        marginTop: "-16px",
                        fontSize: 18,
                      }}
                    >
                      Select a city
                    </InputLabel>
                    <Select
                      value={values?.city.id}
                      variant="outlined"
                      onChange={(e, child) => {
                        console.log(child);
                        setFieldValue("city", {
                          id: child.props.value,
                          name: child.props.children,
                        });
                      }}
                      labelId="demo-simple-select-label"
                      placeholder="Select a city"
                      className={classes.selectEmpty}
                      style={{ height: 40 }}
                      inputProps={{ "aria-label": "Without label" }}
                      classes={{ root: classes.selectRoot }}
                    >
                      <MenuItem value={1}>Lucknow</MenuItem>
                      <MenuItem value={2}>Kanpur</MenuItem>
                    </Select>
                  </FormControl>

                  <div className={classes.btnContainer}>
                    <Button
                      color="primary"
                      disableElevation
                      onClick={this.props.handleModalClose.bind(this, null)}
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      disableElevation
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Save
                    </Button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(AddressForm);
