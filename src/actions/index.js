import * as userActions from "./userActions";
import * as citiesActions from "./citiesActions";
import * as excursionActions from "./excursionActions";

export default { ...userActions, ...citiesActions, ...excursionActions };
