import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondcomp',
  templateUrl: './secondcomp.component.html',
  styleUrls: ['./secondcomp.component.css']
})
export class SecondcompComponent implements OnInit {

  constructor() { }
  public name ="veer"
  public fun()
  {
    this.name="Button pressed";
  }
  ngOnInit() {
  }

}
