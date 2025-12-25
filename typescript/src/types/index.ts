export type EditUserData = {
  name: string;
  address: Address[];
  gmail: string;
};

export type AddUserData = {
  name: string;
  address: Address[];
  gmail: string;
};

export type Address ={
  address1: string
}

export type User ={
    id: string;
    name: string;
    address: Address[];
    dob: string;
    gmail: string;
    avatar: string;
};

export type UpdateUserParams = {
  data: EditUserData;
  id: string;
};

