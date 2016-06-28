import { Component } from '@angular/core';
import { PostService } from './modules/post/service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [PostService, HTTP_PROVIDERS]
})
export class AppComponent {
  title = 'app works!';

  constructor(private _postService: PostService){
    console.log('###inside app component');
    this._postService.getPosts()
      .subscribe(posts => console.log(posts));
  }
}
