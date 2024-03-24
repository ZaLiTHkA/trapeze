import { Context } from '../ctx';
import { Operation } from '../definitions';
declare type OperationHandler = (ctx: Context, op: Operation) => Promise<any>;
export interface OperationHandlers {
    [id: string]: OperationHandler;
}
export declare function loadHandlers(): Promise<OperationHandlers>;
export declare function isOpRegistered(operations: OperationHandlers, opName: string): boolean;
export declare function runOperation(ctx: Context, operations: OperationHandlers, op: Operation): Promise<any>;
export {};
