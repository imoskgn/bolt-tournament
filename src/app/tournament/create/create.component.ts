import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TournamentCreate } from '../../model/tournament_create';
import { DbService } from 'src/app/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(private dbService: DbService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(data: NgForm) {
    console.log(data);

    let tournamentName: string = data.value.tournamentName;
    let tournamentDesc: string = data.value.tournamentDesc;
    let status: string = 'created';
    let startDate: Date = data.value.startDate;
    let endDate: Date = data.value.endDate;


    let player1 = {
      phoneNumber: data.value.pPhone1,
      name: data.value.pName1,
    };

    let player2 = {
      phoneNumber: data.value.pPhone2,
      name: data.value.pName2,
    };

    let player3 = {
      phoneNumber: data.value.pPhone3,
      name: data.value.pName3,
    };

    let player4 = {
      phoneNumber: data.value.pPhone4,
      name: data.value.pName4,
    };

    let player5 = {
      phoneNumber: data.value.pPhone5,
      name: data.value.pName5,
    };

    let player6 = {
      phoneNumber: data.value.pPhone6,
      name: data.value.pName6,
    };

    let player7 = {
      phoneNumber: data.value.pPhone7,
      name: data.value.pName7,
    };

    let player8 = {
      phoneNumber: data.value.pPhone8,
      name: data.value.pName8,
    };


    let playerList = [player1, player2, player3, player4,player5, player6, player7, player8 ];

    let newT: TournamentCreate = new TournamentCreate(
      tournamentName,
      tournamentDesc,
      startDate,
      endDate,
      playerList
    );

    this.dbService.addTournament(newT);

    this.router.navigate(['/home']);

  }
}
