import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';

const RealTimeFacialExpressionDetection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';

      try {
        await Promise.all([
          faceapi.loadSsdMobilenetv1Model(MODEL_URL),
          faceapi.loadFaceLandmarkModel(MODEL_URL),
          faceapi.loadFaceExpressionModel(MODEL_URL)
        ]);
        setIsLoaded(true);
      } catch (err) {
        console.error('Error loading models:', err);
      }
    };

    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error('Error starting video:', err);
      }
    };

    const detectFacialExpressions = async () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const displaySize = { width: video.offsetWidth, height: video.offsetHeight };
      faceapi.matchDimensions(canvas, displaySize);

      if (isLoaded) {
        setInterval(async () => {
          try {
            const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceExpressions();
            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
            faceapi.draw.drawDetections(canvas, resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
            faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
          } catch (err) {
            console.error('Error detecting facial expressions:', err);
          }
        }, 100);
      }
    };

    loadModels();
    startVideo();
    detectFacialExpressions();
  }, []);

  return (
    <div className="">
      <video className=" " ref={videoRef} autoPlay muted />
      <canvas ref={canvasRef} />
    </div>
  );
};

export default RealTimeFacialExpressionDetection;