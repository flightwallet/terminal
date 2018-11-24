import Qrcode from 'qrcode';


export const GENERATE_QR_CODE = 'GENERATE_QR_CODE';
export const SHOW_QR_CODE = 'SHOW_QR_CODE';
export const HIDE_QR_CODE = 'HIDE_QR_CODE';


export function generateQr(string, options, linkElement) {
  Qrcode.toCanvas(linkElement, string, options, (error) => {
    if (error) {
      throw Error(error);
    }
  });

  return {
    type: GENERATE_QR_CODE,
  };
}

export function showQr() {
  return {
    type: SHOW_QR_CODE,
  };
}

export function hideQr() {
  return {
    type: HIDE_QR_CODE,
  };
}
