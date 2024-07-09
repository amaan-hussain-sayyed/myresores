const codeReader = new ZXing.BrowserQRCodeReader();
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

codeReader.getVideoInputDevices()
    .then(videoInputDevices => {
        if (videoInputDevices.length > 0) {
            codeReader.decodeFromVideoDevice(videoInputDevices[0].deviceId, 'video', (result, err) => {
                if (result) {
                    // Handle the scanned QR code result

                    console.log(result.text);

                }
                if (err && !(err instanceof ZXing.NotFoundException)) {
                    // Handle errors
                    console.error(err);
                }
            });
        }
    })
    .catch(err => {
        // Handle errors
        console.error(err);
    });


l