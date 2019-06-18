// export declare namespace NodeJS {
//     module Global {
//         interface String {
//             foo(): string;
//         }
//     }

//@ts-ignore
declare global {
    export interface String {
        foo(): number;
    }
}
