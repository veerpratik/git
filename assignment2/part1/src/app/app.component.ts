import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
              `
                  <h1>This is first change</h1> 
                  <p> This is second try</p>

                  Email: <input type = "text" name ="email" size="20"><br>
                <font color="red">  PIN : <input type = "text" name = "pin" size="20"></font> 

                <h2>Inside appcomponent  {{demo}}</h2>`
                  
                    
  
})
export class AppComponent {
  title = 'Assig2';
  public demo ="My Pune";
}
