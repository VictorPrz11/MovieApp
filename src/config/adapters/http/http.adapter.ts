export abstract class httpsAdapter{
    abstract get<T>(url:string,options?:unknown): Promise<T>
}