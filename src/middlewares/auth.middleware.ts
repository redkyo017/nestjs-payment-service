import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { NextFunction } from 'express';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  constructor() {}
  async use(req: Request, res: Response, next: NextFunction) {
    // get token and decode or any custom auth logic but for now only mock for access token
    const headers = classToPlain(req.headers);
    const { authorization } = headers;
    if (!authorization) {
      throw new UnauthorizedException();
    }
    next();
  }
}
