import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { setStatusBarColors } from "./utils/status-bar-util";
import {registerElement} from "nativescript-angular/element-registry";

registerElement("Carousel", () => require("nativescript-carousel").Carousel);
registerElement("CarouselItem", () => require("nativescript-carousel").CarouselItem);

setStatusBarColors();
platformNativeScriptDynamic().bootstrapModule(AppModule);
