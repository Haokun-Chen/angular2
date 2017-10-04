import {Component,Input} from 'angular2/core';

@Component({
    selector:'like',
    template:`
    <i class="glyphicon glyphicon-heart" 
    [class.liked]="isLiked"
    (click)=onLike()></i> 
    <span>{{totalLikes}}</span>`,
    styles:[`
    .liked{
        color:deeppink
    }
    .glyphicon{
        cursor:pointer;
    }
    `]
})
export class LikeComponent{
   @ Input() totalLikes = 0;
   @ Input() isLiked = false;
   
   onLike(){
       this.totalLikes += this.isLiked ? -1 : 1;
       this.isLiked = !this.isLiked;
   }
}