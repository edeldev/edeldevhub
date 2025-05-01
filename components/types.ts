export interface IContainer {
  children: React.ReactNode;
  className?: string;
}

export interface IInput {
  id: string;
  type?: string;
  placeholder: string;
}

export interface IHeading {
  title: string;
  subtitle: string;
}
