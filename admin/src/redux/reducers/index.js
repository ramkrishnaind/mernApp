import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";
import PropertyReducer from "./PropertyReducer";
import SideMenuListReducer from "./SideMenuListReducer";
import menu from "./MenuReducer";
import ModuleReducer from "./ModuleRightsReducer";
import user from "./UserReducer";
import enquiry from "./EnquiryReducer";
import callback from "./CallbackReducer";
import snackbar from "./snackbarReducer";
import review from "./reviewReducer";
import career from "./CareerReducer";
import blog from "./blogReducer";
import role from "./RoleReducer";
import booking from "./BookingReducer";
import contactus from "./ContactUsReducer";
import sitevisit from "./SitevisitReducer";
import verification from "./VerificationReducer";
import Aboutus from "./aboutUsReducer";
import Slider from "./homeSliderReducer";
import Dealing from "./dealingReducer";
import DealingItem from "./dealingItemReducer";
import Service from "./serviceReducer";
import ServiceItem from "./serviceItemReducer";
import Building from "./buildingReducer";
import Team from "./teamReducer";
import Address from "./addressReducer";
import Social from "./socialReducer";
import Loader from "./loaderReducer";
import Feedback from "./feedbackReducer";
import Director from "./directorReducer";
import Construction from "./constructionReducer";
import Investwithus from "./investwithusReducer";
import Newsletter from "./NewsletterReducer";
import Aboutpage from "./aboutpageReducer";
const reducers = {
  Login: LoginReducer,
  Register: RegisterReducer,
  property: PropertyReducer,
  SideMenuList: SideMenuListReducer,
  menu: menu,
  ModuleReducer: ModuleReducer,
  user: user,
  enquiry: enquiry,
  callback: callback,
  snackbar: snackbar,
  review: review,
  career: career,
  blog: blog,
  role: role,
  booking: booking,
  contactus: contactus,
  sitevisit: sitevisit,
  verification: verification,
  aboutus: Aboutus,
  slider: Slider,
  dealing: Dealing,
  dealingItem: DealingItem,
  service: Service,
  serviceItem: ServiceItem,
  building: Building,
  team: Team,
  address: Address,
  social: Social,
  loader: Loader,
  feedback: Feedback,
  director: Director,
  construction: Construction,
  investwithus: Investwithus,
  newsletter: Newsletter,
  aboutpage: Aboutpage,
};

export default reducers;
