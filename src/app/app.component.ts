import { Component, OnInit, OnDestroy} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { PostService } from './modules/post/service';

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
  followers = [];
  // theUser = {};//也许是因为这个原因导致找不到theUser.login变量？没有定义为对象{}
  user = {}; //证明了 this.user中有user这个变量名是没有问题的。
  userName = 'octocat';

  constructor(private _postService: PostService) {
    console.log('###inside app component');
    // compile time type checking
    // this._postService.createPost(1);
    // this._postService.createPost({
    //   userId: 1,
    //   title: 'a',
    //   body: 'b',
    // });
  }

  // first constructor, then init.
  ngOnInit() {
    console.log('###inside OnInit of app component');
    // this._postService.getPosts()
    //   .then(posts => {
    //     this.isLoading = false;
    //     console.log(posts[0].id)
    //   }
    //   );

    this._postService.getUser(this.userName)
      .subscribe(
        user => {
          this.user = user;
        },
        null,
        () => { this.isLoading = false; }
      );

    this._postService.getFollowers(this.userName)
      .subscribe(
          followers => {
            this.followers = followers;
          }, 
        null, 
        () => { this.isLoading = false; });

    // forkJoin, to execute ajax call in sequence.
    // Observable.forkJoin(
    //   this._postService.getUser(),
    //   this._postService.getFollowers()
    // ).subscribe(
    //   res => {
    //     this.user = res[0];
    //     this.followers = res[1];
    //   },
    //   null,
    //   () => {this.isLoading = false;}
    // )

    
  }

  ngOnDestroy() {
    console.log('###inside ngOnDestroy of app component');
  }
}
