import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage  {

  constructor(public alertController: AlertController, public navegador: NavController) { }

  exibirMatches() {
    this.navegador.navigateForward('matches');
  }
  paginaPrincipal(){
    this.navegador.navigateForward('pagina-principal')
  }
  sair() {
    this.navegador.navigateForward('home');
  }
}
