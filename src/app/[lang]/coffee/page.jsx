import View from "@/views/CoffeePage.jsx";
import { staticRoute } from "@/routeKit.jsx";
import siteImages from "@/data/siteImages.json";

const route = staticRoute("/coffee", <View />, { image: siteImages["coffee-cup"].src });

export const generateMetadata = route.generateMetadata;
export default route.Page;
