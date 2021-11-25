import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/model/tournament';
import { DbService } from 'src/app/db.service';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { Match } from 'src/app/model/match';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  tournament: Tournament | undefined;
  matches: [] = [];
  lastMatch: Match | undefined;
  private routeSub: Subscription | undefined;
  tournamentId:string ='';
  constructor(private router:ActivatedRoute, private dbService: DbService, private route:Router) { }

  ngOnInit(): void {
    this.getTournamentById();
    this.getMatchesByTournamentId();
  }

  getTournamentById():void{
    this.routeSub = this.router.params.subscribe(params => {
      this.tournamentId = params['id'];
    });
    this.dbService.getTournamentById(this.tournamentId).subscribe(tournament => this.tournament = tournament)
    console.log(this.tournament )
  }

  getMatchesByTournamentId():void{
    this.routeSub = this.router.params.subscribe(params => {
      this.tournamentId = params['id'];
    });
    this.dbService.getMatchesByTournamentId(this.tournamentId).subscribe(matches => {
      this.matches = matches
      this.lastMatch = matches[matches.length - 1][0];

    })
  }
  startTournament( t : Tournament): void{ 
    let playerName : any | undefined;
    playerName = t.playersList;
    for (let i = 0; i < playerName.length; i++) {
      if (playerName[i].name =="" || playerName.length<8)
        {this.route.navigate(['/update/', t._id])
        break;}
      else {
        t.status = "started";
        this.dbService.updtTournament(t);
        this.dbService.createMatch(t);
      }
    } 
  }
}
