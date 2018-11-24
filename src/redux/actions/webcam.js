export const WEBCAM_INIT = 'WEBCAM_INIT';
export const SHOW_QR_WEBCAM = 'SHOW_QR_WEBCAM';
export const HIDE_QR_WEBCAM = 'HIDE_QR_WEBCAM';


function showCamera() {
  return {
    type: SHOW_QR_WEBCAM,
    isVisible: true,
  };
}

function hideCamera() {
  return {
    type: HIDE_QR_WEBCAM,
    isVisible: false,
  };
}

export {
  showCamera,
  hideCamera,
};
