import { Component, OnInit } from '@angular/core';


import { ServiceCommonService } from './service-comm.service';

@Component({
    selector: 'service1-common',
    template: `
        <button (click)="announce()">宣布任务</button>
        <service2-common *ngFor="let astronaut of astronauts" [astronaut]="astronaut"></service2-common>
        <h3>历史记录</h3>
        <ul>
          <li *ngFor="let event of history">{{event}}</li>
        </ul>
    `
})
export class Service1CommonComponent implements OnInit {
    astronauts = ['杨利伟','景海鹏', '陈冬'];
    history: string[] = [];
    missions = ['飞向月球!','飞向火星!'];
    nextMission = 0;
    
    constructor(private serviceCommonService: ServiceCommonService) { 
        serviceCommonService.missionConfirmed$.subscribe(
          astronaut => {
            this.history.push(`${astronaut} 已确认任务`);
          });
    }

    ngOnInit() { }

    announce() {
        let mission = this.missions[this.nextMission++];
        this.serviceCommonService.announceMission(mission);
        this.history.push(`任务 "${mission}" 已宣布`);
        if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
      }
}