import Swal from 'sweetalert2';
import { ClientService } from '../services/client.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../model/client';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clients: Client[] = [];
  displayedColumns: string[] = ['_id', 'name', 'birthday', 'gender', 'dpi', 'address', 'nit', 'phone', 'actions'];

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
        console.log("clients", this.clients)
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-bottom-center' });
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
            this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-bottom-center' });
            this.getProducts();
          },
          err => {
            this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-bottom-center' });
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
