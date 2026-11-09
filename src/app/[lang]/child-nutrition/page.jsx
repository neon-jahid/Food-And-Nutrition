import View from "@/views/ChildNutritionPage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/child-nutrition", <View />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
