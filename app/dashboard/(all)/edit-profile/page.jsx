import HeaderImg from "./components/HeaderImg"
import PasswordForm from "./components/PasswordForm"
import ProfileForm from "./components/ProfileForm"
import ProfileHeader from "./components/ProfileHeader"

const EditProfile = () => {
  return (
    <div className="border-2 border-red-500">

        {/* Background */}
        <HeaderImg />

        {/* Padding Block */}
        <div className="px-4 md:px-10 lg:px-20">

            {/* Profile Header */}
            <ProfileHeader />

            <div className="py-14 grid md:grid-cols-3 gap-10">
              {/* Profile Form */}
              <ProfileForm />

              {/* Change Password */}
              <PasswordForm />
            </div>

        </div>   

    </div>
  )
}

export default EditProfile