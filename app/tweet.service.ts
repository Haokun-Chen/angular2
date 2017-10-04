export class TweetService{

    getPosts(){
        return [
            {
                name: "Haokun",
                username: "chenhk",
                tweet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Mauris rutrum enim eget erat dictum, eget eleifend felis suscipit. 
                Etiam a eros at turpis auctor`,
                profilePic: "http://lorempixel.com/100/100/people?1",
                totalLikes: 23,
                iLiked: false
            },
            {
                name: "Yixue",
                username: "yixueli",
                tweet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Mauris rutrum enictor`,
                profilePic: "http://lorempixel.com/100/100/people?2",
                totalLikes: 9,
                iLiked: true
            },
            {
                name: "Holden Yu",
                username: "yuzhuohang",
                tweet: `Vestibulum elementum ultricies venenatis. 
                Mauris pulvinar arcu eu sapien scelerisque ornare. 
                Aliquam enim elit, molestie in molestie congue, varius id quam.`,
                profilePic: "http://lorempixel.com/100/100/people?3",
                totalLikes: 3,
                iLiked: false
            }
        ]
    }
}