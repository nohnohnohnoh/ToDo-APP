export type ToDo = {
  title: string;
  content: string;
  id?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ToDoData = [
  {
    title?: string;
    content?: string;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
  },
];

export type AuthType = {
  email: string;
  password: string;
};
