import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcAge'
})
export class CalcAgePipe implements PipeTransform {
  

  transform(dateOfBirth?: Date): unknown {
    if(dateOfBirth){
      var today = new Date();
      var birthDate = new Date(dateOfBirth);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
      {
          age--;
      }
      console.log(age)
      
      return age;
    }
    return;
  }

}
