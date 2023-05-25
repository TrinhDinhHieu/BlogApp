import routesConfig from "../config/routes";

//Layouts
import HomeComponent from "../layouts/Home/Home";
import BlogComponent from "../layouts/Blog/Blog";
import CousesComponent from "../layouts/Couses/Couses";
import DiscordComponent from "../layouts/Discord/Discord";
import ChatComponent from "../layouts/Chats/Chat";
import CallComponent from "../layouts/Calls/Call";
import WorkShopComponent from "../layouts/WorkShops/WorkShop";
import AboutComponent from "../layouts/About/About";

// Public Routes
// layout: HourlyComponent thêm layout sẽ bị chuyển sang tab mới
const publicRoutes = [
  { path: routesConfig.home, component: HomeComponent },
  { path: routesConfig.blog, component: BlogComponent },
  { path: routesConfig.couses, component: CousesComponent },
  { path: routesConfig.discord, component: DiscordComponent },
  { path: routesConfig.chat, component: ChatComponent },
  { path: routesConfig.call, component: CallComponent },
  { path: routesConfig.workshop, component: WorkShopComponent },
  { path: routesConfig.about, component: AboutComponent },
  
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
