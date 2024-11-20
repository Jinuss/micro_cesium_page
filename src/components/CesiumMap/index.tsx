import { useEffect } from "react";
import { CESIUM_VIEWER_OPTIONS, ACCESS_TOKEN } from "../../const";

function CesiumMap() {
  useEffect(() => {
    Cesium.Ion.defaultAccessToken = ACCESS_TOKEN;

    const viewer = new Cesium.Viewer("map", {
      ...CESIUM_VIEWER_OPTIONS,
    });

    viewer.cesiumWidget.creditContainer.style.display = "none";
    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(104.1954, 35.8617, 40000000) // 中国中心坐标和缩放级别
    });
  }, []);

  return <div id="map"></div>;
}

export default CesiumMap;
