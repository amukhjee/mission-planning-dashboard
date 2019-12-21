import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

equipments: string[] = ["Habitat dome", "Drones", "Food containers", "Oxygen tanks"]
  add(newequipment: string) {
    this.equipments.push(newequipment);
  }

  remove(member: string) {
    let index = this.equipments.indexOf(member);
    this.equipments.splice(index, 1);
  }
  
  

  constructor() { } 

  ngOnInit() {
  }

}
