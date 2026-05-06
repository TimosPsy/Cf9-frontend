import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { JokeService } from '../../shared/services/joke.service';

@Component({
  selector: 'app-step12-http-client-service',
  imports: [ MatButtonModule,
    MatCardModule],
  templateUrl: './step12-http-client-service.html',
  styleUrl: './step12-http-client-service.css',
})
export class Step12HttpClientService {
  jokeService = inject(JokeService);
  dadText: string = '';
  chuckNorrisText: string = '';

  ngOnInit(){
    this.chuckNorris();
    this.dadJokes();
  }

  dadJokes(){
    this.jokeService.getDadJoke().subscribe((data) => {
      this.dadText = data.joke;
    });
  };
  

  chuckNorris(){
    this.jokeService.getChuckNorrisJoke().subscribe((data)=>{
      this.chuckNorrisText = data.value;
      console.log("ChuckNorris", this.chuckNorrisText);
    });
  };
}
