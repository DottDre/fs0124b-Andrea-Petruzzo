import { User } from "./user";

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;

  user?: User
}
