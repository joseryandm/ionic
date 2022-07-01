import { Component, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuarios';
//import { StorageService } from '@capacitor/storage';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit{

  formCadastro: FormGroup;
  usuario: Usuario = new Usuario();  
  constructor(public alertController: AlertController, public navegador: NavController, public photoService: PhotoService, private formBuilder: FormBuilder) {
    this.formCadastro = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }
  paginaPrincipal() {
    this.navegador.navigateForward('pagina-principal');
    this.usuario.name = this.formCadastro.value.name;
    this.usuario.username = this.formCadastro.value.username;
    this.usuario.email = this.formCadastro.value.email;
    this.usuario.password = this.formCadastro.value.password;
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  ngOnInit(){
    
  }
}
