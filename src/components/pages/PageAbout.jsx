import About from "../home/about/About";
import IntroPage from "../common/intro_page/IntroPage";
import image from "../images/breadcrumb_section.jpg";
import Achievements from "../home/achievements/Achievements";
import Feature from "../home/feature/Feature";

// راح اسوي كوموبنت للصفحات بخلفية ثاتبة مع تغير عنوان الصفحة حسب الصفحة المطلوبة
const PageAbout = () => {
  return (
    <>
      <IntroPage title={"من نحن"} page={""} />
      <About />
      <Achievements />
      <Feature />
    </>
  );
};

export default PageAbout;
