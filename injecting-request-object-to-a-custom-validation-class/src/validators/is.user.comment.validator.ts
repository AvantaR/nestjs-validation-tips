import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { REQUEST_CONTEXT } from 'src/interceptors/inject.user.interceptor';
import { ExtendedValidationArguments } from 'src/validators/extended.validation.arguments';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUserCommentValidatorConstraint
  implements ValidatorConstraintInterface
{
  async validate(commentId: number, args?: ExtendedValidationArguments) {
    const userId = args?.object[REQUEST_CONTEXT].user.id;

    if (userId && Number.isInteger(commentId)) {
      const comment = true; // Here is part for your logic

      if (!comment) {
        return false;
      }
    }

    return true;
  }

  defaultMessage(): string {
    return 'The comment does not belong to the user';
  }
}

export function IsUserComment(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsUserComment',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsUserCommentValidatorConstraint,
    });
  };
}
