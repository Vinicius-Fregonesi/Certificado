import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'; // Import do MatListModule
import { MatMenuModule } from '@angular/material/menu';




@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatToolbarModule,MatSidenavModule, MatListModule, MatMenuModule
],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
