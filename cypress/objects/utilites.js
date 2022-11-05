/// <reference types="cypress"/>

import { productCard } from "./productCard";

export class Utilites {
    
    sortFunc(a, b) {
        let arr = [];
        for (let i = 0; i < a; i++) {
            const curr = b(i);
            if (i > 0 && curr > arr[i-1]) {
                break; 
            }
            arr.push(curr);
        }
    }
        
}
export const utilites = new Utilites();

    

   





