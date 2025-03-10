class UserDTO {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.username = user.username;
    this.role = user.role;

    this.whatsappNumber = user.whatsappNumber ?? "";
    this.phoneNumber = user.phoneNumber ?? "";
    this.gender = user.gender ?? "";
    this.dob = user.dob ?? "";
    this.address = user.address ?? "";
    this.country = user.country ?? "";
    this.city = user.city ?? "";
    this.lastInstitute = user.lastInstitute ?? "";
    this.degrees = user.degrees ?? [];
    this.profile = user.profile ?? "";
  }
}

export default UserDTO;
