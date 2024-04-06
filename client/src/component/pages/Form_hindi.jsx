import React, { useState, useRef, useEffect } from "react";
import { BASE_URL } from "../../../url";
import { Loader } from "../Loader";
import Confirmation from "../Confirmation";
import { barakhdi } from "../../data/barakhadi_eng";
import { words } from "../../data/words_sans";
import { shlok } from "../../data/shlok_sans";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AudioRecorder = () => {
  const [category, setCategory] = useState("barakhdi");
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audioURL, setAudioURL] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [response, setResponse] = useState("No Data");
  const [modelLoaded, setModelLoaded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [currentCardId, setCurrentCardId] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const mediaStreamRef = useRef(null);

  let categoryData;
  switch (category) {
    case "barakhdi":
      categoryData = barakhdi;
      break;
    case "words":
      categoryData = words;
      break;
    case "shlok":
      categoryData = shlok;
      break;
    default:
      categoryData = barakhdi;
  }

  useEffect(() => {
    // Simulating the Sanskrit model loading
    const modelLoadingTimeout = setTimeout(() => {
      setModelLoaded(true);
    }, 20000);

    return () => clearTimeout(modelLoadingTimeout);
  }, []);

  const startRecording = async () => {
    setAudioChunks([]);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      mediaStreamRef.current = mediaStream;
      const mediaRecorder = new MediaRecorder(mediaStream);
      mediaRecorder.ondataavailable = handleDataAvailable;
      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      setRecording(false);
    }
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setAudioChunks([...audioChunks, event.data]);
    }
  };

  const handlePlay = () => {
    if (audioChunks.length === 0) {
      console.warn("No audio data recorded.");
      return;
    }

    const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
    const url = URL.createObjectURL(audioBlob);
    setAudioURL(url);

    const audio = new Audio(url);
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  };

  const uploadBlob = async () => {
    console.log(barakhdi[currentCardIndex].id);
    if (audioChunks.length === 0) {
      console.warn("No audio data recorded.");
      return;
    }

    setUploading(true);

    const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
    const formData = new FormData();
    formData.append("audio_data", audioBlob, "recorded_audio.wav");
    formData.append("type", "wav");

    try {
      const apiUrl = `${BASE_URL}/upload`;
      const response = await fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: formData,
      });
      const responseData = await response.json();
      console.log("Audio uploaded successfully:", responseData);

      const stringToCheck = JSON.stringify(
        responseData.text.replace(/<s>/g, "")
      )
        .replace(/\s/g, "")
        .replace(/^"(.*)"$/, "$1");

      setResponse(stringToCheck);
      console.log("Outside ", stringToCheck);
      console.log("Outside ", categoryData[currentCardIndex].sanskrit);
      console.log(
        "Outside ",
        stringToCheck == categoryData[currentCardIndex].sanskrit
      );

      if (stringToCheck == categoryData[currentCardIndex].english) {
        console.log("Inside ", stringToCheck);
        console.log(stringToCheck);
        toast.success("Great Job!");
        setTimeout(() => {
          setCurrentCardIndex(currentCardIndex + 1);
          resetState();
        }, 3000);
      } else {
        toast.error("Please try again");
        resetState();
      }

      setUploaded(true);
    } catch (error) {
      console.error("Error uploading audio:", error);
      setAudioChunks([]);
    } finally {
      setUploading(false);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setCurrentCardIndex(0);
  };

  const resetState = () => {
    setRecording(false);
    setAudioChunks([]);
    setAudioURL(null);
    setUploaded(false);
    setResponse("No Data");
    setModelLoaded(false);
    setUploading(false);
    setShowConfirmationDialog(false);
    setCurrentCardId(null);
  };

  return (
    <div>
      <h1 style={{ marginBottom: "2rem" }}>Hindi Sikhe</h1>
      <ToastContainer />
      <div>
        <label htmlFor="category">Choose a category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="barakhdi">Basic</option>
          <option value="words">Intermediate</option>
          <option value="shlok">Advance</option>
        </select>
      </div>
      <div className="card">
        <div>
          <h1>{categoryData[currentCardIndex].english}</h1>
        </div>
        <div className="list_sub_data">
          <div className="pronunciation">
            <span>Pronunciation:</span>{" "}
            {categoryData[currentCardIndex].pronunciation}
          </div>
          {categoryData[currentCardIndex].meaning ? (
            <div className="meaning">
              <span>Meaning:</span> {categoryData[currentCardIndex].meaning}
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
      <div className="button_container">
        <button
          onClick={startRecording}
          disabled={recording || uploaded}
          className="mb-1 xl:mr-2"
        >
          Start Recording
        </button>
        <button
          onClick={stopRecording}
          disabled={!recording || uploaded}
          className="mb-1 xl:mr-2"
        >
          Stop Recording
        </button>
        <button
          onClick={uploadBlob}
          disabled={audioChunks.length === 0 || uploaded || recording}
          className="mb-1 xl:mr-2"
        >
          Upload Audio
        </button>
        <button
          onClick={handlePlay}
          disabled={!uploaded || recording}
          className="mb-1 xl:mr-2"
        >
          Play Recorded Audio
        </button>

        <button
          onClick={resetState}
          disabled={!uploaded || recording}
          className="mb-1"
        >
          Reset
        </button>
      </div>
      {uploaded && <p>Audio uploaded successfully!</p>}
      {audioURL && <audio controls src={audioURL}></audio>}
      <h2 style={{ textWrap: "wrap" }}>{response}</h2>

      {showConfirmationDialog && (
        <Confirmation
          handleConfirmation={handleConfirmation}
          setShowConfirmationDialog={setShowConfirmationDialog}
        />
      )}
      {uploading && <Loader />}
    </div>
  );
};

export default AudioRecorder;
