import {Component} from 'angular2/core';
import {LikeComponent} from './like.component';
import {TweetService} from './tweet.service';

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet.template.html',
    styles:[`
        img{
             border-radius: 10px;
        }
        .media-heading{
            font-weight:bold;
        }
        .username{
            color:lightgrey;
        }
        .content{
            font-size: 1.2em;
        }
        .media{
            margin:30px;
            width:40%;
        }
    `],
    providers: [TweetService],
    directives: [LikeComponent]
})
export class TweetComponent{
    posts;
    constructor(tweetService: TweetService){
        this.posts = tweetService.getPosts();
    }

    onLike(){
        
    }
}