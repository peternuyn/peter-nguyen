import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class AboutComponent {
  name: string = 'Peter Nguyen';
  title: string = 'A passionate developer';



  onImageError(event: any) {

    event.target.src = 'assets/fallback-image.png';

  }
}
