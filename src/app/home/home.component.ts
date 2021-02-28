import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  results:boolean = false;
  numInput: number = 0;
  calOption: string = '1';

  constructor() { }

  ngOnInit(): void {
  }
  calculated(){
   
    if(this.calOption === "1"){
      //isPrime
      if (this.numInput===1){
        this.results = false;
        return false;
      }
      else if(this.numInput === 2){
        this.results = true;
        return true;
      }else{
        for(var i = 2; i < this.numInput; i++){
          if(this.numInput % i === 0){
            this.results = false;
            return false;
          }
        }
        this.results = true;
        return true;  
      } 
    }else{
      //isFibonacci 5N^2 + 4 or 5N^2 – 4
      if (this.checkSquare(5*(this.numInput*this.numInput)-4) || this.checkSquare(5*(this.numInput*this.numInput)+4)) {
        this.results = true;
        return true;
      } else { 
        this.results = false;
        return false; 
      }
    }    
  }
  checkSquare(x:number){
     return x > 0 && Math.sqrt(x) % 1 === 0;
  }



}
