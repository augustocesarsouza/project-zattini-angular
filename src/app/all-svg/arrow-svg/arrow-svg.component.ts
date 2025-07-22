import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-svg',
  standalone: false,
  templateUrl: './arrow-svg.component.html',
  styleUrl: './arrow-svg.component.css',
})
export class ArrowSvgComponent {
  @Input() rotate: string = 'rotate(0deg)';
}
