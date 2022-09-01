import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  initialFrame:string[] = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
  ]
  solution:string[] = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784595",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
  ]
}
