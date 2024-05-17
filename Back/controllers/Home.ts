import {Request, Response} from 'express';

const index = function (request: Request, response: Response) {
    console.log("Teste de controller");
    response.send("Teste de controller bem sucedido");
}

export {index};