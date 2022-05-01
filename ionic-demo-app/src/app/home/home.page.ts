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

  async exibirAlerta() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Oii!',
      subHeader: 'Success',
      message: 'Você foi cadastrado com successo',
      buttons: ['OK']
    });

    await alert.present();
  }
}
