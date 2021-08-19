import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../modules/shared/services/toast/toast.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-toast-message-example',
  templateUrl: './toast-message-example.component.html',
  styleUrls: ['./toast-message-example.component.css']
})
export class ToastMessageExampleComponent implements OnInit {
  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }
  showToastr(message) {
    switch (message) {
      case "success": { this.toastService.showSuccess('Success Toastr', 'Use this for success'); break; }
      case "danger": { this.toastService.showError('Danger Toastr', 'Use this for danger'); break; }
      case "info": { this.toastService.showInfo('Warning toastr', 'Use this for info'); break; }
      case "warning": { this.toastService.showWarning('Warning toastr', 'Use this for Warning'); break; }
      default: { this.toastService.showError('Something went wrong', 'Try after sometime time or check your internet connection'); break; }
    }
  }
  showSweetAlert(){
    // Swal.fire('Hello world!');
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }



}
