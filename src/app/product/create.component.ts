import { Client } from '../model/client';
import { ClientService } from '../services/client.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  name!: string;
  birthday!: Date;
  gender!: string;
  dpi!: number;
  address!: string;
  nit!: number;
  phone!: number;

  constructor(
    private clientService: ClientService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    console.log("gender", this.gender)
    console.log("birthday", this.birthday)
    const product = new Client(this.name, this.birthday, this.gender, this.dpi, this.address, this.nit, this.phone);
    this.clientService.create(product).subscribe(
      data => {
        this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-bottom-center'});
        this.router.navigate(['']);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-bottom-center'});
      }
    );
  }

}
