import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DefaultTitleStrategy } from '@angular/router';

@Component({
  selector: 'app-scroll-down-arrow',
  templateUrl: './scroll-down-arrow.component.html',
  styleUrls: ['./scroll-down-arrow.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollDownArrowComponent {

}
