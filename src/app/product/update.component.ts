import { Client } from './../model/client';
import { ClientService } from '../services/client.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  _id!: string;
  client!: Client;

  constructor(
    private clientService: ClientService,
    private toast: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private utilService: UtilService
  ) { }

  async ngOnInit() {
    await this.getProduct();
  }

  onUpdate(): void {
    this.clientService.update(this._id, this.client).subscribe(
      data => {
        this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-bottom-center'});
        this.router.navigate(['']);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-bottom-center'});
      }
    );
  }

  async getProduct() {
    this._id = this.activatedRoute.snapshot.params.id;
    await this.clientService.detail(this._id).subscribe (
      async data => {
        this.client = data.data;
        
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-bottom-center'});
        this.router.navigate(['']);
      }
    );
  }

  async transformBirthday(date: Date) {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    return new Date(day, month, year);
  }
}
