import { Button, Modal, Typography } from "@material-ui/core";
import { DateRange } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import React from "react";

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
    height: "600px",
  },
  modalFooter: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    padding: "16px 24px",
  },
};

class ManageSlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSlotModal: true,
    };
  }

  handleSlot() {
    this.setState({ showSlotModal: true });
  }

  render() {
    const { showSlotModal } = this.state;
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
          onClose={() => {}}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modalContainer}
        >
          <div className={classes.modalBody}>
            <div className={classes.modalHeader}>
              <Typography variant="h5" style={{ display: "inline" }}>
                Manage Slots
              </Typography>
              <Typography variant="h5" style={{ float: "right" }}>
                X
              </Typography>
            </div>
            <div className={classes.modalContent}></div>
            <div className={classes.modalFooter}>
              <Button color="primary" onClick={() => {}}>
                Cancel
              </Button>
              <Button color="primary" variant="contained" onClick={() => {}}>
                Save
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default withStyles(styles)(ManageSlot);
