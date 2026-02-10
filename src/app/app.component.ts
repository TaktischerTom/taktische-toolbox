import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NzInputDirective} from "ng-zorro-antd/input";

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    NzInputDirective
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'taktische-toolbox';
  value: string = ""
}
