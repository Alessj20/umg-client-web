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
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-bottom-center'});
        this.router.navigate(['']);
      }
    );
  }
}
