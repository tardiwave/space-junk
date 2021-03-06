import styles from "./Home.module.scss";
import logo from "../../assets/designElements/logo.svg";
import { useRef } from "react";
import gsap from "gsap";

interface IHome {
  isReady: boolean;
}

const Home: React.FC<IHome> = ({ isReady }) => {
  const homeRef = useRef<HTMLDivElement>(null);

  const handleLauch = () => {
    gsap.to(homeRef.current, {
      opacity: "0",
      duration: 0.7,
      ease: "power2.out",
    });
    if (homeRef != null && homeRef.current)
      homeRef.current.style.pointerEvents = "none";
  };

  return (
    <div className={styles.HomeContainer} ref={homeRef}>
      <img src={logo} alt="" className={styles.HomeLogo} />
      <div className={styles.HomeCentered}>
        {isReady && (
          <button
            className={styles.cornerButtonContainer}
            onClick={() => handleLauch()}
          >
            <div className={styles.cornerButtonInner}>Enter Space</div>
          </button>
        )}
      </div>
    </div>
  );
};
export default Home;
