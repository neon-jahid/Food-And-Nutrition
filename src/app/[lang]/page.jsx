import View from "@/views/HomePage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/", <View />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
