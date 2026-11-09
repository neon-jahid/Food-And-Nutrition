import View from "@/views/StoragePage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/food-guide/food-storage", <View />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
