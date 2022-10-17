import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  componentName = 'Cart'; 
  btnDisabled = true;
  item = '';
  cart:any = [];
  bg='grey';
  constructor() {
    setTimeout(()=>{
      this.btnDisabled = false;
    },2000)
   }

  ngOnInit(): void {
  }

  getItem(e:any){
    this.item = e.target.value;
    console.log(e.target.value);
  }

  addTocart(){
    this.cart.push(this.item);
    this.item = '';
  }

}
