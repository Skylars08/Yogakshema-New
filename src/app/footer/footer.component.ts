import { Component } from '@angular/core';
import {faLinkedin, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
    mylinkedin = faLinkedin;
    mytwitter = faTwitter;
    myfacebook = faFacebook

}
