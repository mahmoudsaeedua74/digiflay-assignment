export interface FormValues {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  id?: string;
}
export type userInformation = {
  users: FormValues[];
};
