import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typing-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typing-text.component.html',
  styleUrls: ['./typing-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypingTextComponent {

}
