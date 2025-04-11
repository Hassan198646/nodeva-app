import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { InlineWidget } from "react-calendly";
import { format } from "date-fns";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 900,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  maxHeight: "90vh",
  overflow: "auto",
};

export default function CustomModal({
  open,
  onClose,
  calendlyUrl,
  selectedDate,
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="time-selection-modal"
      aria-describedby="calendly-time-selection"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ mb: 2 }}
        >
          Select a Time for{" "}
          {selectedDate && format(selectedDate, "MMMM d, yyyy")}
        </Typography>
        <div style={{ height: "600px" }}>
          <InlineWidget
            url={calendlyUrl}
            styles={{
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      </Box>
    </Modal>
  );
}
