"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by barney on 2017/6/9.
 */
var core_1 = require("@angular/core");
var message_1 = require("../../shared/message/message");
var message_list_service_1 = require("../../shared/message/message-list.service");
var application_settings_1 = require("application-settings");
var MessageComponent = (function () {
    function MessageComponent(messageListService) {
        this.messageListService = messageListService;
        this.count = 1;
        this.messageList = []; // 数据源
    }
    // OnInit 必须实现
    MessageComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    MessageComponent.prototype.getList = function () {
        var _this = this;
        this.messageListService.getMessageList({ beginCount: "0", selectCount: this.count * 20, flag: "true" }).subscribe(function (json) {
            json.msg_list.forEach(function (message) {
                _this.messageList.push(new message_1.Message(message.fromUser, message.addTime, message.content));
                application_settings_1.setNumber("messageCount", 0);
            });
        });
    };
    MessageComponent.prototype.loadMoreItems = function () {
        // Load more items here.
        this.count += 1;
        this.getList();
    };
    return MessageComponent;
}());
MessageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "message",
        templateUrl: "./message.html",
        styleUrls: ["./message-common.css", "./message.css"],
        providers: [message_list_service_1.MessageListService],
    }),
    __metadata("design:paramtypes", [message_list_service_1.MessageListService])
], MessageComponent);
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsc0NBQWlGO0FBQ2pGLHdEQUF1RDtBQUN2RCxrRkFBK0U7QUFDL0UsNkRBRzhCO0FBUzlCLElBQWEsZ0JBQWdCO0lBR3pCLDBCQUEyQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUZ6RCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsZ0JBQVcsR0FBYyxFQUFFLENBQUMsQ0FBQyxNQUFNO0lBQ3lCLENBQUM7SUFDckUsY0FBYztJQUNQLG1DQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNELGtDQUFPLEdBQVA7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQ2pHLFVBQUMsSUFBSTtZQUNPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDMUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDdkYsZ0NBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQ1osQ0FBQztJQUNkLENBQUM7SUFDRCx3Q0FBYSxHQUFiO1FBQ0ksd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLGdCQUFnQjtJQVA1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxnQkFBZ0I7UUFDN0IsU0FBUyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsZUFBZSxDQUFDO1FBQ3BELFNBQVMsRUFBRSxDQUFDLHlDQUFrQixDQUFDO0tBQ2xDLENBQUM7cUNBSWlELHlDQUFrQjtHQUh4RCxnQkFBZ0IsQ0F1QjVCO0FBdkJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBiYXJuZXkgb24gMjAxNy82LzkuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZXNzYWdlL21lc3NhZ2VcIjtcbmltcG9ydCB7IE1lc3NhZ2VMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbWVzc2FnZS9tZXNzYWdlLWxpc3Quc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgICBnZXROdW1iZXIsXG4gICAgc2V0TnVtYmVyLFxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCwgLy8g5Yqg6L+Z5Liq77yM5Lul5LiL6Lev5b6E5Li655u45a+56Lev5b6EXG4gICAgc2VsZWN0b3I6IFwibWVzc2FnZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbWVzc2FnZS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL21lc3NhZ2UtY29tbW9uLmNzc1wiLCBcIi4vbWVzc2FnZS5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbTWVzc2FnZUxpc3RTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBjb3VudCA9IDE7XG4gICAgcHJpdmF0ZSBtZXNzYWdlTGlzdDogTWVzc2FnZVtdID0gW107IC8vIOaVsOaNrua6kFxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VMaXN0U2VydmljZTogTWVzc2FnZUxpc3RTZXJ2aWNlKSB7fVxuICAgIC8vIE9uSW5pdCDlv4Xpobvlrp7njrBcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0TGlzdCgpO1xuICAgIH1cbiAgICBnZXRMaXN0KCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VMaXN0U2VydmljZS5nZXRNZXNzYWdlTGlzdCh7YmVnaW5Db3VudDogXCIwXCIsIHNlbGVjdENvdW50OiB0aGlzLmNvdW50KjIwLCBmbGFnOiBcInRydWVcIn0pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgKGpzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbi5tc2dfbGlzdC5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VMaXN0LnB1c2gobmV3IE1lc3NhZ2UobWVzc2FnZS5mcm9tVXNlciwgbWVzc2FnZS5hZGRUaW1lLCBtZXNzYWdlLmNvbnRlbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE51bWJlcihcIm1lc3NhZ2VDb3VudFwiLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgfVxuICAgIGxvYWRNb3JlSXRlbXMoKSB7XG4gICAgICAgIC8vIExvYWQgbW9yZSBpdGVtcyBoZXJlLlxuICAgICAgICB0aGlzLmNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMuZ2V0TGlzdCgpO1xuICAgIH1cbn1cbiJdfQ==