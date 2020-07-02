import React from "react";
import {
  FreeCamera,
  Vector3,
  HemisphericLight,
  SceneLoader,
} from "@babylonjs/core";
import SceneComponent from "./SceneComponent"; // ^^ point to file we created above or 'babylonjs-hook' NPM.
// import * as BABYLON from '@babylonjs/core'
import "@babylonjs/loaders";

import "./Viewer.css";

const onSceneReady = scene => {
  // This creates and positions a free camera (non-mesh)
  var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  SceneLoader.ImportMesh("", "./scenes/", "Zebra.gltf", scene, meshes => {
    scene.createDefaultCameraOrLight(true, true, true);
    scene.createDefaultEnvironment();
  });
};


export default () => (
  <div className="Viewer">
    <SceneComponent
      antialias
      onSceneReady={onSceneReady}
      id="my-canvas"
    />
  </div>
);
