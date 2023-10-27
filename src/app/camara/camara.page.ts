





import { Component, OnInit } from '@angular/core';
import { PhotoService } from '..//photo.service';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {


  constructor(public photoService: PhotoService,
              private menu: MenuController,
              private router: Router
              ) {


    defineCustomElements(window); 


   }


  ngOnInit() {
  }


  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }




  camara() {
    // Lógica para la opción 1


    this.router.navigate(['camara']);
    this.menu.close('end'); // Cierra el menú
  }


  geolocalizacion() {
    // Lógica para la opción 2


    this.router.navigate(['geo']);
    this.menu.close('end'); // Cierra el menú
  }
  
  home(){
    this.router.navigate(['home']);
    this.menu.close('end'); // Cierra el menú
  }






}



