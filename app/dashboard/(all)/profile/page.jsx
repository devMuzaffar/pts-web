import AcademicStats from "./components/AcademicStats";
import ProfileDetails from "./components/ProfileDetails";
import ProfileIcon from "./components/ProfileIcon";
import QuickRoutes from "./components/QuickRoutes";
import Subscription from "./components/Subscription";


const Profile = () => {
  return (
    <div className="px-4 py-10 flex flex-col gap-4">

      {/* Left Profile */}
      <ProfileIcon />

      {/* Profile Details */}
      <ProfileDetails />

      {/* Academic Stats */}
      <AcademicStats />

      {/* Subscription */}
      <Subscription />

      {/* Quick Routes */}
      <QuickRoutes />
      
    </div>
  );
};

export default Profile;
