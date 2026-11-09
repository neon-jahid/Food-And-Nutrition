import View from "@/views/PregnancyPage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/pregnancy", <View />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
