import { Button } from "@mui/material";
import InputFieldPassword from "./InputFields/InputFieldPassword";

const PasswordForm = () => {
  return (
    <div className="overflow-hidden rounded-xl bg-white border-2 border-red-400 shadow-sm">
      {/* Banner */}
      <div className="h-14 w-full bg-primary text-white font-semibold flex items-center px-4">
        Change Password
      </div>

      {/* Old - New - Confirm Password Field */}
      <div className="p-4 space-y-4 overflow-y-auto">
        <InputFieldPassword required label={"Old Password"} />
        <InputFieldPassword required label={"New Password"} />
        <InputFieldPassword required label={"Confirm Password"} />

        {/* Save button */}
        <div className="pt-4">
          <Button
            fullWidth
            className="!bg-primary !rounded-full !font-bold !py-2"
            variant="contained"
            disableElevation
          >
            SAVE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PasswordForm;
