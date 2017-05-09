import { async, TestBed, inject } from '@angular/core/testing';
import { SpotifyService } from './spotify.service';
import {
    MockBackend,
    MockConnection
} from '@angular/http/testing';
import {
    BaseRequestOptions,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';

describe('SpotifyService', () => {

  var mockbackend: MockBackend;
  var service: SpotifyService;
  var queryUrl: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        SpotifyService,
        {
          deps: [MockBackend, BaseRequestOptions],
          provide: Http,
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ]
    });
   }));

   beforeEach(inject([MockBackend, SpotifyService], (_mockbackend: MockBackend, _service: SpotifyService) => {
     mockbackend = _mockbackend;
     service = _service;
   }));

   it('should create the service', inject([SpotifyService], (service: SpotifyService) => {
     expect(service).toBeTruthy();
   }));

   it("should return empty list when searching null", done => {
     service.searchArtists("").subscribe((data: any) => {
       expect(data.length).toBe(0);
       done();
     });
   });

   it('should return artists when search', done => {

     setupConnections(mockbackend, 'https://api.spotify.com/v1/search?q=nirvana&type=artist', {
            body: [
                {
                    id: 1
                },
                {
                    id: 4
                },
                {
                    id: 2
                }
            ],
            status: 200
        });

     service.searchArtists("nirvana").subscribe((data: any) => {
       expect(data.length).toBe(3);
       done();
     });
   });

   function setupConnections(backend: MockBackend, acceptedUrl: string, options: any) {
      backend.connections.subscribe((connection: MockConnection) => {
        if (connection.request.url === acceptedUrl) {
          const responseOptions = new ResponseOptions(options);
          const response = new Response(responseOptions);
          connection.mockRespond(response);
        }
      });
    }

});
