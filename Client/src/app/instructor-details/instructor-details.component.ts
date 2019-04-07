import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InstructorDetailService } from '../shared/instructor-detail.service';
import { InstructorDetail } from '../shared/instructor-detail.model';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {

  constructor(private service: InstructorDetailService) { 
  }

  ngOnInit() {
    this.resetForm();
    this.service.refreshList();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    }
    this.service.formData = {
      id: 0,
      firstName: '',
      middleName: '',
      lastName: ''
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  onDelete(id) {
    if (confirm('Are you sure to remove this record ?')) {
      this.service.deletePaymentDetail(id)
      .subscribe(res => {
        this.service.refreshList();
        this.resetForm();
      },
      err => {
        console.log(err);
      })
    }
  }
  onEdit(form: InstructorDetail) {
    this.service.formData = form;
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  sortData(sort) {
    this.service.instructors = this.service.sortData(sort);
  }
}
