import InputField from "./InputFields/InputField";
import InputFieldPhone from "./InputFields/InputFieldPhone";

const ProfileForm = () => {
  return (
    <div className="col-span-2 overflow-hidden rounded-xl bg-white border-2 border-red-400 shadow-sm">
      {/* Banner */}
      <div className="h-14 w-full bg-primary text-white font-semibold flex items-center px-4">
        Profile
      </div>

      <div className="p-4 space-y-4 overflow-y-auto">
        {/* Name */}
        <InputField label={"Your Name"} required />

        {/* Email */}
        <InputField label={"Email"} required />

        {/* Whatsapp No. */}
        <InputFieldPhone />
      </div>
    </div>
  );
};

export default ProfileForm;
