import { Context } from './ctx';
export declare type YamlFile = any;
export declare function loadYamlConfig(ctx: Context, filename: string): Promise<YamlFile>;
