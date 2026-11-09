import View from "@/views/MealsPage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/food-guide/meal-times", <View />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
