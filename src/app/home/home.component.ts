import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrollDownArrowComponent } from '../components/scroll-down-arrow/scroll-down-arrow.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public belowId = 'below';

  scrollToId(id: string){
    const element = document.getElementById(id);
    if(element!==null){
      document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
    }
  }

}
