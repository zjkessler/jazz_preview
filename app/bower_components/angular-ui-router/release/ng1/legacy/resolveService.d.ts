import { Obj } from "../../common/common";
/** @hidden */
export declare const resolveFactory: () => {
    resolve: (invocables: {
        [key: string]: Function;
    }, locals?: {}, parent?: Promise<any>) => Promise<Obj>;
};
