import View from "@/views/GuidePage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/food-guide", <View />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
