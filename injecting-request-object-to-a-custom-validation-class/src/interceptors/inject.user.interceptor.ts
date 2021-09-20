import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

export const REQUEST_CONTEXT = '_requestContext';

@Injectable()
export class InjectUserInterceptor implements NestInterceptor {
  constructor(private type?: NonNullable<'query' | 'body' | 'params'>) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    if (this.type && request[this.type]) {
      // When You use auth module, it should pass user object with your request.
      // Otherwise, you need to handle it by yourself.
      // Below code uses just simple mocked user object.
      request[this.type][REQUEST_CONTEXT] = {
        user: {
          id: 1,
          name: 'Chris',
          surname: 'Johnson',
          email: 'c.johnson@random.mail',
        },
      };
    }

    return next.handle();
  }
}
