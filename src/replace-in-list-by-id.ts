import AppUnit from "./types/app-unit";


export const replaceInListById = <A extends AppUnit<number, A>>(arr: A[], from: A, to: A) =>
    arr.reduce<A[]>(
        (acc, val) =>
            val.id === from.id ? [...acc, to] : [...acc, val],
        []
    );
