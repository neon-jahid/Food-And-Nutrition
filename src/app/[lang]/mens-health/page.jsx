import View from "@/views/GenderHealthPage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/mens-health", <View who="men" />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
