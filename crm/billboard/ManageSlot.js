import { Button, Grid, Modal, Typography } from "@material-ui/core";
import { DateRange } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import moment from "moment";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { RangeDatePicker } from "react-google-flight-datepicker";

const localizer = momentLocalizer(moment);

const styles = {
  modalContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  modalBody: {
    width: "60%",
    alignSelf: "center",
    backgroundColor: "white",
    outline: "none",
    border: "none",
    borderRadius: "4px",
  },
  modalHeader: {
    padding: "16px 24px",
  },
  modalContent: {
    // height: "600px",
  },
  modalLeftChild: {
    padding: "0px 16px",
  },
  modalRightChild: {
    padding: "24px",
  },
  modalFooter: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    padding: "16px 24px",
  },
};
let id = 1;
class ManageSlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSlotModal: true,
      events: [
        {
          id: 0,
          title: "Tanishq",
          allDay: true,
          start: moment().subtract(5, "day").toDate(),
          end: moment().add(5, "day").toDate(),
        },
      ],
      tempStart: null,
      tempEnd: null,
    };
  }

  handleSlot() {
    this.setState({ showSlotModal: true });
  }

  onDateRangeClose = () => {
    const { tempEnd, tempStart } = this.state;
    const event = {
      id: ++id,
      title: "Tanishq",
      allDay: true,
      start: tempStart,
      end: tempEnd,
    };
    this.setState((state) => ({
      events: [...state.events, event],
      tempStart: null,
      tempEnd: null,
    }));
  };

  onDateChange = (tempStart, tempEnd) => {
    this.setState({ tempStart, tempEnd });
  };

  render() {
    const { showSlotModal, events, tempEnd, tempStart } = this.state;
    const { billboard, classes } = this.props;
    return (
      <>
        <Button
          color="secondary"
          startIcon={<DateRange />}
          onClick={this.handleSlot.bind(this, billboard.id)}
        >
          Manage Slot
        </Button>
        <Modal
          open={showSlotModal}
          onClose={() => {
            this.setState({ showSlotModal: false });
          }}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modalContainer}
        >
          <div className={classes.modalBody}>
            <div className={classes.modalHeader}>
              <Typography variant="h5" style={{ display: "inline" }}>
                Manage Slots
              </Typography>
              <Typography
                variant="h5"
                style={{ float: "right" }}
                onClick={() => {
                  this.setState({ showSlotModal: false });
                }}
              >
                X
              </Typography>
            </div>
            <div className={classes.modalContent}>
              <Grid container>
                <Grid item xs={12} className={classes.modalRightChild}>
                  <div style={{ width: "350px", marginBottom: "24px" }}>
                    <RangeDatePicker
                      startDate={tempStart}
                      endDate={tempEnd}
                      onChange={this.onDateChange}
                      onCloseCalendar={this.onDateRangeClose}
                    />
                  </div>
                  <Calendar
                    localizer={localizer}
                    views={["month"]}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    eventPropGetter={(event) => {
                      return { className: { backgroundColor: "green" } };
                    }}
                  />
                </Grid>
              </Grid>
            </div>
            {/* <div className={classes.modalFooter}>
              <Button color="primary" onClick={() => {}}>
                Cancel
              </Button>
              <Button color="primary" variant="contained" onClick={() => {}}>
                Save
              </Button>
            </div> */}
          </div>
        </Modal>
      </>
    );
  }
}

export default withStyles(styles)(ManageSlot);
