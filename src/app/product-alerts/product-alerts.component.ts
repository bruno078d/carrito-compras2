import { Component, Input } from '@angular/core';
import {Product} from '../products';

export

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {
@Input() producto: Product | undefined; 

}
