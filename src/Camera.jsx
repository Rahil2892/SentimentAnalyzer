import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

const Camera = () => {
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.loadSsdMobilenetv1Model('/models');
      await faceapi.loadFaceLandmarkModel('/models');
      await faceapi.loadFaceExpressionModel('/models');
    };

    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error(err);
      }
    };

    const detectFacialExpressions = async () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const displaySize = { width: video.offsetWidth, height: video.offsetHeight };
      faceapi.matchDimensions(canvas, displaySize);

      setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceExpressions();
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      }, 100);
    };

    loadModels();
    startVideo();
    detectFacialExpressions();
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay muted />
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Camera;
