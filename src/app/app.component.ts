import { Component, OnInit, OnDestroy} from '@angular/core';
import { PostService } from './modules/post/service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [PostService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app works!';
  isLoading = true;

  constructor(private _postService: PostService) {
    console.log('###inside app component');
    // compile time type checking
    // this._postService.createPost(1);
    this._postService.createPost({
      userId: 1,
      title: 'a',
      body: 'b',
    });
  }

  // first constructor, then init.
  ngOnInit() {
    console.log('###inside OnInit of app component');
    this._postService.getPosts()
      .then(posts => {
        this.isLoading = false;
        console.log(posts[0].id)}
        );
  }

  ngOnDestroy() {
    console.log('###inside ngOnDestroy of app component');
  }
}
