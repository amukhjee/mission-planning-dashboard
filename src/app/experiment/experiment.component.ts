import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {

  experiments: string[] =["Mars soil sample", "Plant growth in habitat", "Human bone density"]
  add(newequipmentname:string){
    this.experiments.push(newequipmentname);
  }

  remove(member:string){
    let index = this.experiments.indexOf(member);
  this.experiments.splice(index, 1);
}


  constructor() { }

  ngOnInit() {
  }

}
