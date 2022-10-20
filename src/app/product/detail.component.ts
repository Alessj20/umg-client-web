import { Client } from './../model/client';
import { ClientService } from '../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  client!: Client;

  constructor(
    private clientService: ClientService,
    private toast: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.clientService.detail(id).subscribe(
      data => {
        this.client = data.data;
        console.log(this.client);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);
      }
    );
  }

  parseDate(value: string): Date {
    //2021-05-04T15:35:46Z[GMT]
    try {
      let aux1 = value.split("-");
      let aux2 = aux1[2].split("T");
      let aux3 = aux2[1].split(":");
      let cadena =  aux1[0] + "-" + aux1[0] + "-";
      return new Date(Number(aux1[0]), Number(aux1[1]) - 1, Number(aux2[0]));
    } catch (error) {
      let date = new Date(parseInt(value));
      return new Date(date.valueOf() + date.getTimezoneOffset() * 60000);
    }
  }
}
