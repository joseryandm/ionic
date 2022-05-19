import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage{

  constructor(public alertController: AlertController, public navegador: NavController) { }
  
  paginaPrincipal() {
    this.navegador.navigateForward('pagina-principal');
  }
}
