import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { BannerTop } from "./Banner";
import "./style.css";

export default function App() {
  return (
    <ParallaxProvider>
      <BannerTop/>
      <div className="center full">
        <Parallax speed={10}>
          <p className="headline gray">Penmayo</p>
        </Parallax>
        <Parallax speed={-10}>
          <p className="headline gray">Lalalala</p>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}