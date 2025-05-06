export interface IContainer {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export interface IInput {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
}

export interface IHeading {
  title: string;
  subtitle: string;
}
