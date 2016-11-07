import { Component, OnInit, Input, OnDestroy  } from '@angular/core';

import { Subscription }   from 'rxjs/Subscription';
import { ServiceCommonService } from './service-comm.service'; 

@Component({
    selector: 'service2-common',
    template: `
        <p>
          {{astronaut}}: <strong>{{mission}}</strong>
          <button (click)="confirm()" [disabled]="!announced || confirmed"> 确认 </button>
        </p>
    `
})
export class Service2CommonComponent implements OnInit, OnDestroy {
    @Input() astronaut: string;
    mission: string = '<没有任务宣布>';
    confirmed: boolean = false;
    announced: boolean = false;
    subscription: Subscription;

    constructor(private serviceCommonService: ServiceCommonService) {
        this.subscription = serviceCommonService.missionAnnounced$.subscribe(
          (mission: string) => {
            this.mission = mission;
            this.announced = true;
            this.confirmed = false;
        });
     }

    ngOnInit() { }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    confirm() {
        this.confirmed = true;
        this.serviceCommonService.confirmMission(this.astronaut);
      }
}