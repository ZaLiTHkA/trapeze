/// <reference types="prompts" />
export declare function wrapAction(action: any): (...args: any[]) => Promise<void>;
export declare function logPrompt(msg: string, promptObject: any): Promise<import("prompts").Answers<string>>;
