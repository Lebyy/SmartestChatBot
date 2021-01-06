class APIError extends Error {
    constructor(message){
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = 'APIError';
        this.message = message;
    }
}

module.exports = APIError;
