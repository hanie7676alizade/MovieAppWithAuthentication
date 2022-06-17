export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFormValues {
  ownerId: number;
  id: number;
  title: string;
  description: string;
  genre: string;
  releaseDate: number;
}
export interface IMovie {
  ownerId: number;
  id: number;
  title: string;
  description: string;
  genre: string;
  releaseDate: number;
}

export interface IUserRegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUserLoginForm {
  email: string;
  password: string;
}
