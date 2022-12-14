export function hasMessage(e: any): e is { message: string } {
    return e && typeof e.message == 'string';
}

export function getMessage(error: any) {
    return hasMessage(error) ? error.message : '';
}

class HttpException extends Error {
    public status: number;
    public message: string;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }
}

export default HttpException;
