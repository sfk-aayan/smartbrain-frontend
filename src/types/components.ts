export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export interface InputProps {
  id: string;
  type: "text" | "email" | "password";
  label: string;
  className?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  autoComplete?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RegistrationProp {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LoginProp {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AuthProp {
  children: React.ReactNode;
}
