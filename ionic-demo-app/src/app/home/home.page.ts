import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController, public navegador: NavController) {}
  paginaPrincipal() {
    this.navegador.navigateForward('pagina-principal');
  }
  paginaCadastro() {
    this.navegador.navigateForward('cadastro');
  }
}
