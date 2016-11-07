import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ServiceCommonService {

  // Observable string sources
  private missionAnnouncedSource: any = new Subject<string>();
  private missionConfirmedSource: any = new Subject<string>();

  // Observable string streams
  missionAnnounced$: any = this.missionAnnouncedSource.asObservable();
  missionConfirmed$: any = this.missionConfirmedSource.asObservable();

  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }
  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }
  
}
