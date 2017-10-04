System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getPosts = function () {
                    return [
                        {
                            name: "Haokun",
                            username: "chenhk",
                            tweet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n                Mauris rutrum enim eget erat dictum, eget eleifend felis suscipit. \n                Etiam a eros at turpis auctor",
                            profilePic: "http://lorempixel.com/100/100/people?1",
                            totalLikes: 23,
                            iLiked: false
                        },
                        {
                            name: "Yixue",
                            username: "yixueli",
                            tweet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n                Mauris rutrum enictor",
                            profilePic: "http://lorempixel.com/100/100/people?2",
                            totalLikes: 9,
                            iLiked: true
                        },
                        {
                            name: "Holden Yu",
                            username: "yuzhuohang",
                            tweet: "Vestibulum elementum ultricies venenatis. \n                Mauris pulvinar arcu eu sapien scelerisque ornare. \n                Aliquam enim elit, molestie in molestie congue, varius id quam.",
                            profilePic: "http://lorempixel.com/100/100/people?3",
                            totalLikes: 3,
                            iLiked: false
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map