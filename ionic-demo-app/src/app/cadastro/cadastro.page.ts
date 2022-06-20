import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage{

  constructor(public alertController: AlertController, public navegador: NavController, public photoService: PhotoService) { }
  
  paginaPrincipal() {
    this.navegador.navigateForward('pagina-principal');
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
