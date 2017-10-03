import { FormControl } from '@angular/forms';

export class DateValidator {

    static isStartDateLessAndEqual(endDate: any) {
        return (control: FormControl) => {

           console.log('Hello World');
           
           console.log(endDate.value);
           console.log(control.value);
            
           let valid = control.value > endDate;

           return valid ? null : {
            isStartDateLessAndEqual: {
                   valid: false
             }
         }
     }
    }
}