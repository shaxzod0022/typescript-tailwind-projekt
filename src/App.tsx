import { styles } from "./util/styles";
import {
  Billing,
  Busines,
  Contract,
  Cta,
  Footer,
  Home,
  Navbar,
  Statistics,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div className={`bg-primary overflow-hidden w-full`}>
      {/* Navbat */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>

      {/* Home */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract />
          <Billing />
          <Busines />
          <Testimonials />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
