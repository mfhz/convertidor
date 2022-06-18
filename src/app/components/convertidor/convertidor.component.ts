import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.scss']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'LIBRA'];

  constructor() { }

  ngOnInit(): void {
  }

  convertir() {
    switch (this.tengo) {
      case 'USD':
        if(this.quiero === 'USD') {
          this.total = this.cantidad;
        }else if(this.quiero === 'EUR') {
          this.total = this.cantidad * 0.84;
          console.log(this.total);
        } else {
          this.total = this.cantidad * 0.75;
        }
        break;
      case 'EUR':
        if(this.quiero === 'EUR') {
          this.total = this.cantidad;
        }else if(this.quiero === 'USD') {
          this.total = this.cantidad * 1.20;
          console.log(this.total);
        } else {
          this.total = this.cantidad * 0.90;
        }
        break;
      case 'LIBRA':
        if(this.quiero === 'LIBRA') {
          this.total = this.cantidad;
        }else if(this.quiero === 'EUR') {
          this.total = this.cantidad * 1.20;
          console.log(this.total);
        } else {
          this.total = this.cantidad * 1.33;
        }
        break;
    }
  }

}
