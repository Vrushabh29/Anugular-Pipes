import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouschk'
})
export class MarvellouschkPipe implements PipeTransform {

  transform(value: number, param: string): string {
    let str=""

    if(param=="Even")
    {
      if(value%2==0)
      {
str="this is Even number"
      }
      else{
str="this is not a Even number"
      }
    }
    else
      if(param=="Prime")
    {
      let flag=1;
      for(let i=2;i<=value/2;i++)
      {
        if(value%i==0)
        {
          flag=0
        }
      }
      if(flag==1)
      {
        str="this is prime number"
      }
      else{
        str="this is not a prime number"
      }
    }
    else if(param=="Perfect")
    {
      let sum=0;
      for(let i=1;i<=value/2;i++)
      {
        if(value%i==0)
        {
          sum=sum+i;
        }
      }
      if(value==sum)
      {
        str="this is perfect number"
      }
      else{
        str="this is not a perfect number"
      }
    }
    return str;
  }

}
