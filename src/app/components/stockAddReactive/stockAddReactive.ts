import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Stock } from '../../interfaces/stock.interface';

@Component({
  selector: 'stock-add-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './stockAddReactive.html',
})
export class StockAddReactive {
  private formBuilder = inject(FormBuilder);

  OnNewStock = output<Stock>();

  public reactiveStock = this.formBuilder.group({
    name: ['', Validators.required],
    quantity: [0, Validators.required],
  })

  addStock() {
    const newStock : Stock = {
      id: Math.floor(Math.random() * 100),
      name: this.reactiveStock.controls.name.value || '',
      cuantity: this.reactiveStock.controls.quantity.value || 0
    }
    
    this.OnNewStock.emit(newStock);
    this.reactiveStock.reset();
  }
}
