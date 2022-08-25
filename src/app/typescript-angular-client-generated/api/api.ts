export * from './authenticate.service';
import { AuthenticateService } from './authenticate.service';
export * from './post.service';
import { PostService } from './post.service';
export * from './userConroller.service';
import { UserConrollerService } from './userConroller.service';
export const APIS = [AuthenticateService, PostService, UserConrollerService];
