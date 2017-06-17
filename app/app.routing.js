"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var tab_component_1 = require("./pages/tab/tab.component");
var list_component_1 = require("./pages/list/list.component");
var index_component_1 = require("./pages/tabbar/index.component");
var one_component_1 = require("./pages/one/one.component");
var two_component_1 = require("./pages/two/two.component");
var three_component_1 = require("./pages/three/three.component");
var four_component_1 = require("./pages/four/four.component");
var five_component_1 = require("./pages/five/five.component");
var home_component_1 = require("./home/home.component");
var one_one_component_1 = require("./pages/one-one/one-one.component");
var one_two_component_1 = require("./pages/one-two/one-two.component");
var action_bar_component_1 = require("./pages/action-bar/action-bar.component");
var store_component_1 = require("./pages/store/store.component");
var store_classify_component_1 = require("./pages/store/store-classify/store-classify.component");
var message_component_1 = require("./pages/message/message.component");
var goods_search_component_1 = require("./pages/goods-search/goods-search.component");
var view_pager_component_1 = require("./pages/view-pager/view-pager.component");
var lines_label_component_1 = require("./pages/lines-label/lines-label.component");
var goods_filter_component_1 = require("./pages/goods-filter/goods-filter.component");
var brand_list_componemt_1 = require("./pages/brand-list/brand-list.componemt");
// 要跳转的页面
var routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
    },
    {
        path: "home",
        component: home_component_1.HomeComponent,
        children: [
            {
                path: "",
                component: one_component_1.OneComponent,
                children: [
                    {
                        path: "",
                        component: one_one_component_1.OneOneComponent,
                    },
                    {
                        path: "onetwo",
                        component: store_component_1.StoreComponent,
                    },
                    {
                        path: "goodsSearch",
                        component: goods_search_component_1.GoodsSearchComponent,
                    },
                    {
                        path: "brandList",
                        component: brand_list_componemt_1.BrandListComponent,
                    },
                ],
            },
            {
                path: "one",
                component: one_component_1.OneComponent,
            },
            {
                path: "two",
                component: store_classify_component_1.StoreClassifyComponent,
            },
            {
                path: "three",
                component: store_component_1.StoreComponent,
            },
            {
                path: "four",
                component: four_component_1.FourComponent,
            },
            {
                path: "five",
                component: five_component_1.FiveComponent,
            },
        ],
    },
];
exports.allComponents = [
    tab_component_1.TabComponent,
    list_component_1.ListComponent,
    index_component_1.TabbarComponent,
    one_component_1.OneComponent,
    two_component_1.TwoComponent,
    three_component_1.ThreeComponent,
    four_component_1.FourComponent,
    five_component_1.FiveComponent,
    home_component_1.HomeComponent,
    one_one_component_1.OneOneComponent,
    one_two_component_1.OneTwoComponent,
    action_bar_component_1.MyActionBarComponent,
    store_component_1.StoreComponent,
    message_component_1.MessageComponent,
    store_classify_component_1.StoreClassifyComponent,
    goods_search_component_1.GoodsSearchComponent,
    view_pager_component_1.ViewPagerComponent,
    lines_label_component_1.LinesLabelDirective,
    goods_filter_component_1.GoodsFilterComponent,
    brand_list_componemt_1.BrandListComponent,
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule],
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1QztBQUN2QyxzREFBcUU7QUFHckUsMkRBQXVEO0FBQ3ZELDhEQUEwRDtBQUMxRCxrRUFBK0Q7QUFDL0QsMkRBQXVEO0FBQ3ZELDJEQUF1RDtBQUN2RCxpRUFBNkQ7QUFDN0QsOERBQTBEO0FBQzFELDhEQUEwRDtBQUMxRCx3REFBb0Q7QUFDcEQsdUVBQWtFO0FBQ2xFLHVFQUFrRTtBQUNsRSxnRkFBNkU7QUFDN0UsaUVBQStEO0FBQy9ELGtHQUErRjtBQUMvRix1RUFBcUU7QUFDckUsc0ZBQWlGO0FBQ2pGLGdGQUEyRTtBQUMzRSxtRkFBOEU7QUFDOUUsc0ZBQWlGO0FBQ2pGLGdGQUEyRTtBQUUzRSxTQUFTO0FBQ1QsSUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxPQUFPO1FBQ25CLFNBQVMsRUFBRSxNQUFNO0tBQ2xCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSw4QkFBYTtRQUN4QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsNEJBQVk7Z0JBQ3ZCLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsRUFBRTt3QkFDUixTQUFTLEVBQUUsbUNBQWU7cUJBQzNCO29CQUNEO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLFNBQVMsRUFBRSxnQ0FBYztxQkFDMUI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLGFBQWE7d0JBQ25CLFNBQVMsRUFBRSw2Q0FBb0I7cUJBQ2hDO29CQUNEO3dCQUNFLElBQUksRUFBRSxXQUFXO3dCQUNqQixTQUFTLEVBQUUseUNBQWtCO3FCQUM5QjtpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsU0FBUyxFQUFFLDRCQUFZO2FBQ3hCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsU0FBUyxFQUFFLGlEQUFzQjthQUNsQztZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSxnQ0FBYzthQUMxQjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFNBQVMsRUFBRSw4QkFBYTthQUN6QjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFNBQVMsRUFBRSw4QkFBYTthQUN6QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQUc7SUFDM0IsNEJBQVk7SUFDWiw4QkFBYTtJQUNiLGlDQUFlO0lBQ2YsNEJBQVk7SUFDWiw0QkFBWTtJQUNaLGdDQUFjO0lBQ2QsOEJBQWE7SUFDYiw4QkFBYTtJQUNiLDhCQUFhO0lBQ2IsbUNBQWU7SUFDZixtQ0FBZTtJQUNmLDJDQUFvQjtJQUNwQixnQ0FBYztJQUNkLG9DQUFnQjtJQUNoQixpREFBc0I7SUFDdEIsNkNBQW9CO0lBQ3BCLHlDQUFrQjtJQUNsQiwyQ0FBbUI7SUFDbkIsNkNBQW9CO0lBQ3BCLHlDQUFrQjtDQUNuQixDQUFDO0FBTUYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFDQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLGdCQUFnQjtJQUo1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDcEMsQ0FBQztHQUNXLGdCQUFnQixDQUM1QjtBQURZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtUYWJDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3RhYi90YWIuY29tcG9uZW50XCI7XG5pbXBvcnQge0xpc3RDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7VGFiYmFyQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy90YWJiYXIvaW5kZXguY29tcG9uZW50XCI7XG5pbXBvcnQge09uZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvb25lL29uZS5jb21wb25lbnRcIjtcbmltcG9ydCB7VHdvQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy90d28vdHdvLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUaHJlZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvdGhyZWUvdGhyZWUuY29tcG9uZW50XCI7XG5pbXBvcnQge0ZvdXJDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2ZvdXIvZm91ci5jb21wb25lbnRcIjtcbmltcG9ydCB7Rml2ZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvZml2ZS9maXZlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge09uZU9uZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvb25lLW9uZS9vbmUtb25lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtPbmVUd29Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL29uZS10d28vb25lLXR3by5jb21wb25lbnRcIjtcbmltcG9ydCB7TXlBY3Rpb25CYXJDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFN0b3JlQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3RvcmUvc3RvcmUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTdG9yZUNsYXNzaWZ5Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3RvcmUvc3RvcmUtY2xhc3NpZnkvc3RvcmUtY2xhc3NpZnkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtHb29kc1NlYXJjaENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvZ29vZHMtc2VhcmNoL2dvb2RzLXNlYXJjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7Vmlld1BhZ2VyQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy92aWV3LXBhZ2VyL3ZpZXctcGFnZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0xpbmVzTGFiZWxEaXJlY3RpdmV9IGZyb20gXCIuL3BhZ2VzL2xpbmVzLWxhYmVsL2xpbmVzLWxhYmVsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtHb29kc0ZpbHRlckNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvZ29vZHMtZmlsdGVyL2dvb2RzLWZpbHRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7QnJhbmRMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9icmFuZC1saXN0L2JyYW5kLWxpc3QuY29tcG9uZW10XCI7XG5cbi8vIOimgei3s+i9rOeahOmhtemdolxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBcIlwiLFxuICAgIHJlZGlyZWN0VG86IFwiL2hvbWVcIixcbiAgICBwYXRoTWF0Y2g6IFwiZnVsbFwiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCJob21lXCIsXG4gICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgIGNvbXBvbmVudDogT25lQ29tcG9uZW50LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgICAgICBjb21wb25lbnQ6IE9uZU9uZUNvbXBvbmVudCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwib25ldHdvXCIsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFN0b3JlQ29tcG9uZW50LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCJnb29kc1NlYXJjaFwiLFxuICAgICAgICAgICAgY29tcG9uZW50OiBHb29kc1NlYXJjaENvbXBvbmVudCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiYnJhbmRMaXN0XCIsXG4gICAgICAgICAgICBjb21wb25lbnQ6IEJyYW5kTGlzdENvbXBvbmVudCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJvbmVcIixcbiAgICAgICAgY29tcG9uZW50OiBPbmVDb21wb25lbnQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInR3b1wiLFxuICAgICAgICBjb21wb25lbnQ6IFN0b3JlQ2xhc3NpZnlDb21wb25lbnQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInRocmVlXCIsXG4gICAgICAgIGNvbXBvbmVudDogU3RvcmVDb21wb25lbnQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcImZvdXJcIixcbiAgICAgICAgY29tcG9uZW50OiBGb3VyQ29tcG9uZW50LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJmaXZlXCIsXG4gICAgICAgIGNvbXBvbmVudDogRml2ZUNvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBhbGxDb21wb25lbnRzID0gW1xuICBUYWJDb21wb25lbnQsXG4gIExpc3RDb21wb25lbnQsXG4gIFRhYmJhckNvbXBvbmVudCxcbiAgT25lQ29tcG9uZW50LFxuICBUd29Db21wb25lbnQsXG4gIFRocmVlQ29tcG9uZW50LFxuICBGb3VyQ29tcG9uZW50LFxuICBGaXZlQ29tcG9uZW50LFxuICBIb21lQ29tcG9uZW50LFxuICBPbmVPbmVDb21wb25lbnQsXG4gIE9uZVR3b0NvbXBvbmVudCxcbiAgTXlBY3Rpb25CYXJDb21wb25lbnQsXG4gIFN0b3JlQ29tcG9uZW50LFxuICBNZXNzYWdlQ29tcG9uZW50LFxuICBTdG9yZUNsYXNzaWZ5Q29tcG9uZW50LFxuICBHb29kc1NlYXJjaENvbXBvbmVudCxcbiAgVmlld1BhZ2VyQ29tcG9uZW50LFxuICBMaW5lc0xhYmVsRGlyZWN0aXZlLFxuICBHb29kc0ZpbHRlckNvbXBvbmVudCxcbiAgQnJhbmRMaXN0Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7XG59XG4iXX0=