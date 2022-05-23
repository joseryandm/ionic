import { PaginaPrincipalPage } from './../pagina-principal/pagina-principal.page';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
})
export class MatchesPage {

  constructor(public alertController: AlertController, public navegador: NavController) { }

  paginaPrincipal(){
    this.navegador.navigateForward('pagina-principal')
  }
  exibirResults() {
    this.navegador.navigateForward('results');
  }
}
