import { useEffect, useState } from "react";

function App() {
  const [volume, setVolume] = useState(0.3);

  const pad = [
    {
      keyPad: "Q",
      name: "Heater 1",
      audioSrc:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    },
    {
      keyPad: "W",
      name: "Heater 2",
      audioSrc:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    },
    {
      keyPad: "E",
      name: "Heater 3",
      audioSrc:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    },
    {
      keyPad: "A",
      name: "Heater 4",
      audioSrc:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    },
    {
      keyPad: "S",
      name: "Clap",
      audioSrc:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    },
    {
      keyPad: "D",
      name: "Open-HH",
      audioSrc:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    },
    {
      keyPad: "Z",
      name: "Kick-n'-Hat",
      audioSrc:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    },
    {
      keyPad: "X",
      name: "Kick",
      audioSrc:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    },
    {
      keyPad: "C",
      name: "Closed-HH",
      audioSrc:
        "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    },
  ];

  const playDrum = (pad) => {
    const audio = document.getElementById(pad.keyPad);
    document.getElementById("drum-" + pad.keyPad).blur();
    document.getElementById("drum-" + pad.keyPad).focus();
    if (audio) {
      audio.currentTime = 0;
      audio.volume = volume;
      audio.play();
    }
    document.getElementById("display").innerText = pad.name;
  };

  const loadKey = () => {
    window.addEventListener("keydown", (e) => {
      let target = document.getElementById("drum-" + e.key.toUpperCase());
      if (target) {
        target.click();
      }
    });
  };

  useEffect(() => {
    loadKey();
  }, [0]);

  return (
    <div id="drum-machine">
      <div className="wrapper">
        <div id="display">-</div>
        <div id="control">
          <input
            type="range"
            id="volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            max="1"
            min="0"
            step="0.01"
          />
        </div>
        <div className="pads">
          {pad.map((data, i) => {
            return (
              <button
                key={i}
                id={`drum-${data.keyPad}`}
                className="drum-pad"
                onClick={() => playDrum(data)}
              >
                <audio
                  src={data.audioSrc}
                  id={data.keyPad}
                  className="clip"
                ></audio>
                {data.keyPad}
              </button>
            );
          })}
        </div>
      </div>
      <div className="name-tag">
        <p>
          By{" "}
          <a href="https://github.com/arisirvandiansyah" target="_blank">
            Aris Irvandiansyah
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
