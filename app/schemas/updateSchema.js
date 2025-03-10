import * as yup from 'yup';
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const errorMessage = "use lowercase, uppercase and digits";

const newPasswordError = "New password cannot be same as the old password!";

// For Name
export const nameUpdateSchema = yup.object({
    name: yup.string().min(5).max(30).required("Name is required"),
});

// For Password Updates
export const passwordUpdateSchema = yup.object({
    oldPassword: yup.string().min(8).max(25).matches(passwordPattern, {message: errorMessage}).required('Old password is required'),
    newPassword: yup.string().min(8).max(25).matches(passwordPattern, {message: errorMessage}).required('New password is required').notOneOf([yup.ref("oldPassword")], newPasswordError),
    confirmPassword: yup.string().min(8).max(25).matches(passwordPattern, {message: errorMessage}).required('Confirm password is required').oneOf([yup.ref("newPassword")], "Passwords must match"),
});