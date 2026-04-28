import { Component } from '@angular/core';
import { IPerson } from '../../shared/interfaces/person';

@Component({
  selector: 'app-step4-for-directive',
  imports: [],
  templateUrl: './step4-for-directive.html',
  styleUrl: './step4-for-directive.css',
})
export class Step4ForDirective {
  persons: IPerson[] = [
    {"firstname":"Hanan","lastname":"Wolland","email":"hwolland0@yellowbook.com"},
   {"firstname":"Joshia","lastname":"Sleford","email":"jsleford1@merriam-webster.com"},
   {"firstname":"Lucia","lastname":"Allaway","email":"lallaway2@washington.edu"},
   {"firstname":"Krysta","lastname":"Boarleyson","email":"kboarleyson3@about.com"},
   {"firstname":"Hedda","lastname":"Gadd","email":"hgadd4@barnesandnoble.com"},
   {"firstname":"Northrop","lastname":"Kille","email":"nkille5@tuttocitta.it"},
   {"firstname":"Madalyn","lastname":"McGilleghole","email":"mmcgilleghole6@desdev.cn"},
   {"firstname":"Darya","lastname":"Wiley","email":"dwiley7@ebay.co.uk"},
   {"firstname":"Wadsworth","lastname":"Enoch","email":"wenoch8@tinypic.com"},
   {"firstname":"Granger","lastname":"Lovelock","email":"glovelock9@cpanel.net"},
   {"firstname":"Gabriel","lastname":"Dye","email":"gdyea@ca.gov"},
   {"firstname":"Bea","lastname":"Tixier","email":"btixierb@ted.com"},
   {"firstname":"Lucas","lastname":"Noller","email":"lnollerc@oakley.com"},
   {"firstname":"Trip","lastname":"Di Nisco","email":"tdiniscod@booking.com"},
   {"firstname":"Susanetta","lastname":"Wakeley","email":"swakeleye@google.com.au"}
  ]

  
}
