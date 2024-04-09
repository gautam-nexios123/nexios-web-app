// import ScrollAnimation from "react-animate-on-scroll";

import { useEffect } from "react";

// export const Zoom_In_Animation = ({ children }) => {
//   return (
//     <ScrollAnimation
//       animateIn="animate__zoomIn"
//       // animateOut="animate__zoomIn"
//       // initiallyVisible={true}
//       animateOnce={true}
//       duration={2}
//     >
//       {children}
//     </ScrollAnimation>
//   );
// };
// export const Fade_Left_Animation = ({ children }) => {
//   return (
//     <ScrollAnimation
//       animateIn="animate__fadeInLeft"
//       animateOut="animate__fadeInLeft"
//       // initiallyVisible={true}
//       animateOnce={true}
//       duration={2}
//     >
//       {children}
//     </ScrollAnimation>
//   );
// };
// export const Fade_Right_Animation = ({ children }) => {
//   return (
//     <ScrollAnimation
//       animateIn="animate__fadeInRight"
//       animateOut="animate__fadeInRight"
//       // initiallyVisible={true}
//       animateOnce={true}
//       duration={2}
//     >
//       {children}
//     </ScrollAnimation>
//   );
// };

export const AnimationOnScroll = ({ children, id, setIsVisible }) => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.75) {
          // Adjust this value as per your requirement
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div id={id}>{children}</div>;
};
