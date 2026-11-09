import View from "@/views/MythsPage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/food-myths", <View />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
