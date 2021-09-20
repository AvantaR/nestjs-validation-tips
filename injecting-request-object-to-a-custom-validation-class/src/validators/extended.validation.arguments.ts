import { ValidationArguments } from 'class-validator';
import { REQUEST_CONTEXT } from 'src/interceptors/inject.user.interceptor';

export type User = {
  id: number;
  name: string;
  surname: string;
  email: string;
};

export interface ExtendedValidationArguments extends ValidationArguments {
  object: {
    [REQUEST_CONTEXT]: {
      user: User; // User is my type for User class
    };
  };
}
