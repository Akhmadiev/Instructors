import { Injectable } from '@angular/core';
import { InstructorDetail } from './instructor-detail.model';
import { HttpClient } from '@angular/common/http'
import { Sort } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class InstructorDetailService {
  formData: InstructorDetail;
  readonly rootURL = 'http://localhost:51120/api';
  instructors : InstructorDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    return this.http.post(this.rootURL + '/InstructorDetail', this.formData);
  }
  putPaymentDetail() {
    return this.http.put(this.rootURL + '/InstructorDetail/'+ this.formData.id, this.formData);
  }
  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + '/InstructorDetail/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/InstructorDetail')
    .toPromise()
    .then(x => this.instructors = x as InstructorDetail[]);
  }

  sortData(sort: Sort) {
    var sortedData = this.instructors.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'firstName': return this.compare(a.firstName, b.firstName, isAsc);
        case 'lastName': return this.compare(a.lastName, b.lastName, isAsc);
        default: return 0;
      }
    });

    return sortedData;
  }
  compare(a: string, b: string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
