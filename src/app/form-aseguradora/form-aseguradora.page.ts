import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { ToastController } from '@ionic/angular';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-form-aseguradora',
  templateUrl: './form-aseguradora.page.html',
  styleUrls: ['./form-aseguradora.page.scss'],
})
export class FormAseguradoraPage implements OnInit {
  public myForm: FormGroup = new FormGroup({});
  public basePath: string = 'assets/images/';
  public itemsAse: { image: string }[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dataService: DataService,
    private toastController: ToastController,
    private router: Router,
    private eventService: EventService
  ) {
    this.itemsAse = [
      { image: 'logo-la_colonial.png' },
      { image: 'futuro_logo.svg' },
      { image: 'patria_logo.png' },
      { image: 'logo_humano.svg' },
      { image: 'logo_aps.png' },
      { image: 'logo_atlantica.png' },
    ];
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      subtitle: ['', [Validators.required]],
      descrip: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });

    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.dataService.getDataById(id).subscribe((data) => {
          if (data) {
            this.myForm.patchValue({
              title: data.title || '',
              subtitle: data.subtitle || '',
              descrip: data.descrip || '',
              image: data.image || '',
            });

            console.log('Datos obtenidos:', data);
          } else {
            console.error('Error: No se encontraron datos para el ID:', id);
          }
        });
      }
    });
  }

  radioGroupChange(event: CustomEvent) {
    const imageControl = this.myForm.get('image');
    if (imageControl !== null) {
      imageControl.setValue(event.detail.value);
    }
  }

  submitForm() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      const id = this.route.snapshot.params['id'];
      if (id) {
        this.dataService.updateData(id, formData).subscribe(() => {
          this.presentToast('Elemento actualizado correctamente');
          this.router.navigate(['/tabs/tab2']);
        });
      } else {
        this.dataService.createData(formData).subscribe(() => {
          this.presentToast('Elemento creado correctamente');
          this.router.navigate(['/tabs/tab2']);
        });
      }
      this.eventService.emitNewElement();
    }
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'success',
    });
    toast.present();
  }
}
