"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by barney on 2017/6/10.
 */
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var main_service_1 = require("../../service/main.service");
var MessageListService = (function () {
    function MessageListService(net) {
        this.net = net;
    }
    MessageListService.prototype.getMessageList = function (params) {
        if (params === void 0) { params = {}; }
        return this.net.post("/app/buyer/message.htm", "我的消息列表", params);
    };
    return MessageListService;
}());
MessageListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [main_service_1.NetworkService])
], MessageListService);
exports.MessageListService = MessageListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsc0NBQTJDO0FBRzNDLGlDQUErQjtBQUMvQiwyREFBNEQ7QUFHNUQsSUFBYSxrQkFBa0I7SUFFM0IsNEJBQW9CLEdBQW1CO1FBQW5CLFFBQUcsR0FBSCxHQUFHLENBQWdCO0lBQUcsQ0FBQztJQUNwQywyQ0FBYyxHQUFyQixVQUFzQixNQUFnQjtRQUFoQix1QkFBQSxFQUFBLFdBQWdCO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FHZ0IsNkJBQWM7R0FGOUIsa0JBQWtCLENBTTlCO0FBTlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGJhcm5leSBvbiAyMDE3LzYvMTAuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7IE5ldHdvcmtTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvbWFpbi5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXNzYWdlTGlzdFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXQ6IE5ldHdvcmtTZXJ2aWNlKSB7fVxuICAgIHB1YmxpYyBnZXRNZXNzYWdlTGlzdChwYXJhbXM6IGFueSA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0LnBvc3QoXCIvYXBwL2J1eWVyL21lc3NhZ2UuaHRtXCIsIFwi5oiR55qE5raI5oGv5YiX6KGoXCIsIHBhcmFtcyk7XG4gICAgfVxufVxuIl19