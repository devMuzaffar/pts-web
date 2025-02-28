import HeaderImg from "./components/HeaderImg";
import PasswordForm from "./components/PasswordForm";
import ProfileForm from "./components/ProfileForm";
import ProfileHeader from "./components/ProfileHeader";

const EditProfile = () => {
  return (
    <div>
      {/* Background */}
      <HeaderImg />

      {/* Padding Block */}
      <div className="px-4 md:px-10 xl:px-24">
        {/* Profile Header */}
        <ProfileHeader />

        {/* grid gap-10 md:grid-cols-3 */}
        <div className="py-14 flex flex-col gap-10 md:flex-row">
          {/* Profile Form */}
          <ProfileForm />

          {/* Change Password */}
          <PasswordForm />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
