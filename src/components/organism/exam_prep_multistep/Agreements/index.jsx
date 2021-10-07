import React from "react";

import { FormControlLabel, Checkbox } from "@mui/material";
import { Videocam, Mic } from "@mui/icons-material";

const Agreements = ({ agree, setAgree }) => {
  return (
    <div>
      <div className="examprep__steps__header">
        <h1>Agreements</h1>
        <p>Pemrosesan Sinyal Multimedia-01 (2021)</p>
        <p>Kuis 1</p>
      </div>
      <div className="examprep__steps__content">
        <Videocam sx={{ fontSize: 100 }} />
        <Mic sx={{ fontSize: 100 }} />
        <p>
          TRUSTest will need to record your exam session for potential review.
          This information is encrypted and can be accessed only by individuals
          authorized by your institution. Recording will begin after we check
          your system and environment.
        </p>

        <FormControlLabel
          control={
            <Checkbox
              checked={agree}
              onChange={(event) => {
                setAgree(event.target.checked);
              }}
            />
          }
          label="I agree (Terms and Conditions)"
        />
      </div>
    </div>
  );
};

export default Agreements;
