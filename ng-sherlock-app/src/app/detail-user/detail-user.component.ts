import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-user',
  standalone: true,
  imports: [],
  templateUrl: './detail-user.component.html',
  styles: ``,
})
export class DetailUserComponent {
  @Input() id!: string;
}
