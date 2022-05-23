import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
})
export class PaginaPrincipalPage {

  constructor(public alertController: AlertController, public navegador: NavController) { }

  exibirMatches() {
    this.navegador.navigateForward('matches');
  }
  exibirResults() {
    this.navegador.navigateForward('results');
  }
}
