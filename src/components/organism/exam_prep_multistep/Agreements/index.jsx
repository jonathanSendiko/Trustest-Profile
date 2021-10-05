import React from "react";

import { FormControlLabel, Checkbox } from "@mui/material";
import { Videocam, Mic } from "@mui/icons-material";

const Agreements = ({ agreementCheckBox, setAgreementCheckBox }) => {
  const handleChange = (event) => {
    setAgreementCheckBox(event.target.checked);
  };

  return (
    <div>
      <Videocam sx={{ fontSize: 100 }} />
      <Mic sx={{ fontSize: 100 }} />
      <p>
        TRUSTest will need to record your exam session for potential review.
        This information is encrypted and can be accessed only by individuals
        authorized by your institution. Recording will begin after we check your
        system and environment.
      </p>

      <FormControlLabel
        control={
          <Checkbox checked={agreementCheckBox} onChange={handleChange} />
        }
        label="I agree (Terms and Conditions)"
      />
    </div>
  );
};

export default Agreements;