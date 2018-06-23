import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asg3';
  public name = "veer";
  public fun()
  {
    this.name="Button pressed";
  }
}
