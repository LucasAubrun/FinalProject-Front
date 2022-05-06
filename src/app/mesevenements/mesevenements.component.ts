import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-mesevenements',
  templateUrl: './mesevenements.component.html',
  styleUrls: ['./mesevenements.component.css']
})
export class MesevenementsComponent implements OnInit {

  //♦♣♦♣♦♣♦♣♦♣ création de variable ♦♣♦♣♦♣♦♣♦♣//
  baseURL: string = "http://localhost:8482/";
  resultMessage: string = " ";
  TtEventId: any;
  result: string = "";
  invitationEv: any;
  resultMessageInvit: any;
  errorInvit: any;

  //♦♣♦♣♦♣♦♣♦♣ fin création de variable ♦♣♦♣♦♣♦♣♦♣//

  constructor(private http: HttpClient,
    private url: UrlService) { }

  ngOnInit(): void {
    this.callTtEventId();
  }

  callTtEventId() {
    this.http.get(this.url.baseURL+"participants/membres/1").subscribe({
      next: (data) => { this.TtEventId = data },
      error: (err) => { console.log(err) }
    });
  }

  SupprimerEvent(id:any) {

    this.http.delete(this.url.baseURL+"Evenements/supprimer/"+id)
      .subscribe({
        next: (data) => { this.result = "Suppression réussie" },
        error: (err) => { console.log(err) }
      })
  }

  QuitterEvent(id:any) {

    this.http.delete(this.url.baseURL+"Participants/supprimer/"+id)
      .subscribe({
        next: (data) => { this.result = "Suppression réussie" },
        error: (err) => { console.log(err) }
      })
  }


  sendinvitationEv(val: any) {
    let invitations = {
      idM: val.id,
    };
    console.log(invitations);
    this.http.post(this.url.baseURL+"Participant/inviter", invitations).subscribe({
      next: (data) => {
        this.resultMessageInvit = "invitation envoyée"
      },
      error: (err) => {
        this.errorInvit = "invitation impossible"
      }
    })
  }

}
