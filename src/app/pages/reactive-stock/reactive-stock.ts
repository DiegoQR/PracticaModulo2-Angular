import { Component, inject } from '@angular/core';
import { StockList } from "../../components/stockList/stockList";
import { StockService } from '../../services/stockService';
import { StockAddReactive } from "../../components/stockAddReactive/stockAddReactive";

@Component({
  selector: 'app-reactive-stock',
  imports: [StockList, StockAddReactive],
  templateUrl: './reactive-stock.html',
})
export default class ReactiveStock {
  public stockService = inject(StockService);
}
