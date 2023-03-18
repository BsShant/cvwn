import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./styles.css";
const ParticlesComponent = () => {
  const particlesInit = async (main) => {
    ""

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    ""
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      canvasClassName="myLoveCanvas"
      className="particles"
      style={{ position: "absolute" }}
      options={{
        background: {
          color: {
            value: "#fff",
          },
        },
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "bottom",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 25,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "image",
            image: {
              src: "/heart.png",
              height: "25",
              width: "30",
            },
            // stroke: {
            //   width: 0,
            //   color: "#000000",
            // },
          },

          size: {
            value: { min: 20, max: 40 },
            
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;
