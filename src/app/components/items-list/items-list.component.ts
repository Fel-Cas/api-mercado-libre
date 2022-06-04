import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  // Formulario 
  formItem: FormGroup;
  // Items que me traiga la API
  items:any[];
  
  
  constructor(
    private itemService: ItemsService
  ) {
    this.items=[];
    this.formItem= new FormGroup({
      itemName: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ])
    }) 

  }

  ngOnInit(): void {
  }

  async onSubmit(){
    let itemNameToSearch=this.formItem.value?.itemName;
    let itemsFound:any=await this.itemService.searchItem(itemNameToSearch);
    this.items=itemsFound['results'];
    this.formItem.reset()
  }
}
