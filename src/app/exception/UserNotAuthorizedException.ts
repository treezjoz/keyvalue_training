import HttpException  from "./HttpException";
import { ErrorCodes } from "../util/errorCode";

class UserNotAuthorizedException extends HttpException {
    constructor(){
        const errorDetails = ErrorCodes.USER_NOT_AUTHORIZED;
        super(401, errorDetails.MESSAGE,errorDetails.CODE);
    }
}

export default UserNotAuthorizedException;