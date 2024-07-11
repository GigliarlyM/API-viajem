import { FastifyInstance } from "fastify";
import { ClientError } from "./error/client-error";
import { ZodError } from "zod";

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandler = (error, reponse, reply) => {
    if (error instanceof ZodError) {
        return reply.status(400).send({
            message: 'Invalid Input',
            errors: error.flatten().fieldErrors
        })
    }

    if (error instanceof SyntaxError) {
        return reply.status(400).send({
            message: 'Invalid Syntax'
        })
    }

    if (error instanceof ClientError) {
        return reply.status(400).send({
            message: error.message
        })
    }
    
    return reply.status(500).send({ message: 'Internal server error' })
}