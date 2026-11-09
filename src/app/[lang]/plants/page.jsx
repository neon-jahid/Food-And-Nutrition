import View from "@/views/PlantsPage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/plants", <View />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
