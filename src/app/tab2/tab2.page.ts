import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data } from '../model/data';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data.service';
import { AlertController } from '@ionic/angular';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnDestroy {
  public basePath: string = 'assets/images/';
  public itemsAse: Data[] = [];
  private dataSubscription: Subscription = new Subscription();

  constructor(
    private dataService: DataService,
    private alertController: AlertController,
    private eventService: EventService
  ) {}

  ionViewWillEnter() {
    this.loadData();

    this.eventService.newElement$.subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.dataSubscription = this.dataService.getAllData().subscribe({
      next: (response: Data[]) => {
        this.itemsAse = response;
      },
      error: (error) => {
        console.error('Error al cargar los datos:', error);
      },
    });
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
  async presentAlert(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Do you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Delete',
          handler: () => {
            this.dataService.deleteData(id).subscribe(() => {
              this.itemsAse = this.itemsAse.filter((item) => item.id !== id);
            });
          },
        },
      ],
    });

    await alert.present();
  }
}
