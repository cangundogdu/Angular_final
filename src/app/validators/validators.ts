import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";






export function nameValidator():ValidatorFn{
    return(control:AbstractControl):ValidationErrors | null =>{
        if (control.value.includes(" ")){
            return {'hasSpace':true};
        } else if  (control.value.match(/[\d]/g)){
            return {includeNumbers : true }
        } else if (control.value.length > 15) {
            return {exceedsMaxValue :true}
        } 
         return null;
 
}    

}





export function passwordValidator():ValidatorFn{
    return(control:AbstractControl):ValidationErrors | null =>{
        if (control.value.includes(" ")){
            return {hasSpace:true};
        } else if (control.value.length > 15) {
            return {exceedsMaxValue :true}
        } 
         return null;
 
}    

}


export function addressValidator():ValidatorFn{
    return(control:AbstractControl):ValidationErrors | null =>{
       if (control.value.length > 30) {
            return {exceedsMaxValue :true}
        } 
         return null;
 
}    

}

    export function postalCodeValidator():ValidatorFn{
        return(control:AbstractControl):ValidationErrors | null =>{
            if (control.value.match(/[A-Z]\d[A-Z]\s\d[A-Z]\d/g)){
                return null;
            }
            return {postalCodeInvalid:true};
        }
    
    }    