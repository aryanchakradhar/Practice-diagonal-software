export type EditUserData = {
  name: string;
  address: string;
  gmail: string;
};

export type AddUserData = {
  name: string;
  address: string;
  gmail: string;
};

export type User ={
    id: string;
    name: string;
    address: string;
    dob: string;
    gmail: string;
    avatar: string;
}

export type UpdateUserParams = {
  data: EditUserData;
  id: string;
}