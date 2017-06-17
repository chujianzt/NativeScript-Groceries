"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by barney on 2017/6/10.
 */
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var scan_login_service_1 = require("../../shared/scan-login/scan-login.service");
var router_2 = require("@angular/router");
var ScanLoginComponent = (function () {
    function ScanLoginComponent(activatedRoute, routerExtensions, scanLoginService) {
        this.activatedRoute = activatedRoute;
        this.routerExtensions = routerExtensions;
        this.scanLoginService = scanLoginService;
    }
    // OnInit 必须实现
    ScanLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 暂无
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.loginStr = params.loginStr;
        });
    };
    ScanLoginComponent.prototype.centerLogin = function () {
        var _this = this;
        var str = this.loginStr.split("qr_session_id=")[1].split(",")[0];
        this.scanLoginService.certainLoginPC({ qr_id: str }).subscribe(function (json) {
            if (json.ret === "100") {
                alert("电脑端登录成功");
                _this.routerExtensions.back();
            }
            else {
                alert("电脑端登录失败");
            }
        });
    };
    ScanLoginComponent.prototype.cancle = function () {
        this.routerExtensions.back();
    };
    return ScanLoginComponent;
}());
ScanLoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "scan-login",
        templateUrl: "./scan-login.html",
        styleUrls: ["./scan-login-common.css", "./scan-login.css"],
        providers: [scan_login_service_1.ScanLoginService],
    }),
    __metadata("design:paramtypes", [router_2.ActivatedRoute, router_1.RouterExtensions, scan_login_service_1.ScanLoginService])
], ScanLoginComponent);
exports.ScanLoginComponent = ScanLoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbi1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FuLWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsc0NBQXVEO0FBQ3ZELHNEQUE2RDtBQUM3RCxpRkFBNEU7QUFDNUUsMENBQStDO0FBUS9DLElBQWEsa0JBQWtCO0lBRTNCLDRCQUEyQixjQUE4QixFQUFVLGdCQUFrQyxFQUFVLGdCQUFrQztRQUF0SCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFDckosY0FBYztJQUNQLHFDQUFRLEdBQWY7UUFBQSxpQkFPQztRQU5HLEtBQUs7UUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQ3JDLFVBQUMsTUFBTTtZQUNILEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFDTyx3Q0FBVyxHQUFuQjtRQUFBLGlCQVlDO1FBWEcsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDeEQsVUFBQyxJQUFJO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQyxDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7UUFDTCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFDTyxtQ0FBTSxHQUFkO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1Qlksa0JBQWtCO0lBUDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLG1CQUFtQjtRQUNoQyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxrQkFBa0IsQ0FBQztRQUMxRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQztLQUNoQyxDQUFDO3FDQUc2Qyx1QkFBYyxFQUE0Qix5QkFBZ0IsRUFBNEIscUNBQWdCO0dBRnhJLGtCQUFrQixDQTRCOUI7QUE1QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGJhcm5leSBvbiAyMDE3LzYvMTAuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1NjYW5Mb2dpblNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2Nhbi1sb2dpbi9zY2FuLWxvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsIC8vIOWKoOi/meS4qu+8jOS7peS4i+i3r+W+hOS4uuebuOWvuei3r+W+hFxuICAgIHNlbGVjdG9yOiBcInNjYW4tbG9naW5cIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NjYW4tbG9naW4uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9zY2FuLWxvZ2luLWNvbW1vbi5jc3NcIiwgXCIuL3NjYW4tbG9naW4uY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW1NjYW5Mb2dpblNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBTY2FuTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgbG9naW5TdHI6IHN0cmluZztcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBzY2FuTG9naW5TZXJ2aWNlOiBTY2FuTG9naW5TZXJ2aWNlKSB7fVxuICAgIC8vIE9uSW5pdCDlv4Xpobvlrp7njrBcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIOaaguaXoFxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcbiAgICAgICAgICAgIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3RyID0gcGFyYW1zLmxvZ2luU3RyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjZW50ZXJMb2dpbigpIHtcbiAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5sb2dpblN0ci5zcGxpdChcInFyX3Nlc3Npb25faWQ9XCIpWzFdLnNwbGl0KFwiLFwiKVswXTtcbiAgICAgICAgdGhpcy5zY2FuTG9naW5TZXJ2aWNlLmNlcnRhaW5Mb2dpblBDKHtxcl9pZDogc3RyfSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKGpzb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoanNvbi5yZXQgPT09IFwiMTAwXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwi55S16ISR56uv55m75b2V5oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCLnlLXohJHnq6/nmbvlvZXlpLHotKVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjYW5jbGUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxufVxuIl19