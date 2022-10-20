import Swal from 'sweetalert2';
import { ClientService } from '../services/client.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../model/Client';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clients: Client[] = [];

  constructor(
    private clientService: ClientService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.clientService.list().subscribe(
      data => {
        this.clients = data.data;
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
    );
  }

  onDelete(_id: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You cannot undo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.clientService.delete(_id).subscribe(
          data => {
            this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center' });
            this.getProducts();
          },
          err => {
            this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'canceled',
          'product not deleted',
          'error'
        )
      }
    });
  }

}
