import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../services/spotify.service';

@Component({
    selector: 'track',
    template: `
        <div *ngIf="track">
            <h1>{{ track.name }}</h1>
            <p>
                <img src="{{ track.album.images[1].url }}">
            </p>
            <p>
                <audio controls src="{{ track.preview_url }}"></audio>
            </p>
            <p>
                <a href (click)="back()">Back</a>
            </p>
        </div>
        `
})
export class TrackComponent implements OnInit {
    constructor(private spotify: SpotifyService) { }

    ngOnInit(): void {
        // this.spotify.getTrack(this.id)
        //     .subscribe((res: any) => this.renderTrack(res));
    }
}