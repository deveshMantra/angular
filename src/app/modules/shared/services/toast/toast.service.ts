import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }
  showSuccess(msg, heading) {
    this.toastr.success(heading, msg, {
      timeOut: 5000,
      positionClass: 'toast-top-center'

    });
  }
  showError(msg, heading) {
    this.toastr.error(heading, msg, {
      timeOut: 5000,
      positionClass: 'toast-top-left'
    });
  }
  showInfo(msg, heading) {
    this.toastr.info(heading, msg, {
      timeOut: 5000,
      positionClass: 'toast-center-center'
    });
  }
  showWarning(msg, heading) {
    this.toastr.warning(heading, msg, {
      timeOut: 5000,
      positionClass: 'toast-bottom-center'
    });
  }
}
