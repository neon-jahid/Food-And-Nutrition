import View from "@/views/AntiAgingPage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/anti-aging", <View />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
