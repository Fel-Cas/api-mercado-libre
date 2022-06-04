import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: any;
  idItem:string;
  constructor(
    private activatedRoute:ActivatedRoute,
    private itemService: ItemsService
  ) {
    this.idItem='';
   }

  async ngOnInit(){
    this.activatedRoute.params.subscribe((params)=>{
      this.idItem=params['item'];
    });
    try {
      let response = await this.itemService.detailItem(this.idItem);   
      this.item=response;
    } catch (error) {
      console.error('Ocurrió un error')
    }
  }

}
