import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-amis',
  templateUrl: './amis.component.html',
  styleUrls: ['./amis.component.css']
})
export class AmisComponent implements OnInit {

  listamis1: any;
  listamis2: any;

  constructor(
    public authService: AuthentificationService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.callAmisMembre1();
    this.callAmisMembre2();
  }

  callAmisMembre1() {
    this.http.get('http://localhost:8082/amis/membre1/' + this.authService.getUserConnect().id)
      .subscribe({
        next: (data) => { this.listamis1 = data },
        error: (err) => { console.log(err) }
      });
  }

  callAmisMembre2() {
    this.http.get('http://localhost:8082/amis/membre2/' + this.authService.getUserConnect().id)
      .subscribe({
        next: (data) => { this.listamis2 = data },
        error: (err) => { console.log(err) }
      });
  }

  setAmitieTrue(id: any) {
    let amitievalidation = true;
    console.log(amitievalidation);
    this.http.patch('http://localhost:8082/amis/membre1/valide/' + id, amitievalidation)
      .subscribe({
        next: (data) => { window.location.reload() },

        error: (err) => { console.log(err) }
      })
  }

  setAmitieFalse(id: any) {
    let amitievalidation = false;
    console.log(amitievalidation);
    this.http.patch('http://localhost:8082/amis/membre1/valide/' + id, amitievalidation)
      .subscribe({
        next: (data) => { window.location.reload() },

        error: (err) => { console.log(err) }

      })
  }


}