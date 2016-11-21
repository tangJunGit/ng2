// 导入测试助手
import { inject, fakeAsync, tick, TestBed } from '@angular/core/testing';

//导入类
import { MockBackend } from '@angular/http/testing';   // MockBackend 设定预期HTTP请求和验证
import { Http, ConnectionBackend, BaseRequestOptions, ResponseOptions, Response } from '@angular/http';

import { SpotifyService } from './spotify.service';

/**
 * HTTP连接
 * 
 * @param {MockBackend} backend
 * @param {string} url
 */
function expectURL(backend: MockBackend, url: string){
    backend.connections.subscribe((c: any) => {
        expect(c.request.url).toBe(url);
        let response = new ResponseOptions({body: '{"name": "felipe"}'});
        c.mockRespond(new Response(response));
    });
}

describe('SpotifyService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                SpotifyService,
                // 自定义 Http 实例
                {
                    provide: Http,
                    useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }
            ]
        });
    });

    describe('getTrack', () => {
        it('retrieves using the track ID', inject([SpotifyService, MockBackend],    //注入
            fakeAsync((spotifyService: SpotifyService, mockBackend: MockBackend) => {   // Promise 或 RxJS Observable 都应使用 fakeAsync
                var res: any;
                
                expectURL(mockBackend, 'https://api.spotify.com/v1/tracks/TRACK_ID');

                spotifyService.getTrack('TRACK_ID').subscribe((_res) => {
                    res = _res;
                });

                tick();            //执行异步代码 
                expect(res.name).toBe('felipe');
            })
        ));

        it('searches type and term', inject([SpotifyService, MockBackend], 
            fakeAsync((spotifyService: SpotifyService, mockBackend: MockBackend) => {
                var res: any;

                expectURL(mockBackend, 'https://api.spotify.com/v1/search?q=TERM&type=track');

                spotifyService.searchTrack('TERM').subscribe((_res) => {
                    res = _res;
                });

                tick();
                expect(res.name).toBe('felipe');
            })
        ));

    });
});