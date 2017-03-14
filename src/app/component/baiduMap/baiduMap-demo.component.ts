import { Component, OnInit } from '@angular/core';

// import { BaiduMapModule, BaiduMapService, LoadScriptService } from './component/baiduMap';
import { BaiduMapService } from './'       // ./ 为 baiduMap 文件下的 index.ts

@Component({
    selector: 'baidu-demo',
    template: `
        <div id="map"></div>
    ` ,
    styles: [`
        #map {
            width: 400px;
            height: 400px;
        }
    `],
})
export class BaiduMapDemoComponent implements OnInit {
    constructor(private _baiduMap: BaiduMapService) { }

    ngOnInit() {
        let key = 'GRaPtLAZFqPgc6GrghXbQ3qG';

        this._baiduMap.init(key).then(() => {
            this.initMap(window['BMap'])
        })
     }

     initMap(BMap:any) {
        var map = new BMap.Map("map");          
        var point = new BMap.Point(116.404, 39.915);  
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom(true);
    }
}