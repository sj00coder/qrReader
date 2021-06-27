function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    console.log(`Scan result: ${decodedText}`);
    if(decodedText.length === 32){
        callVerifyVaccine(decodedText,"21315656145");
    }
    else {
        var a = decodedText.split('-');
        callVerifyUser(a[0],a[1]);
    }

}

function onScanError(errorMessage) {
    alert(`There is an alert! ${errorMessage}`)
}
function callVerifyUser(aadhar,hospitalId){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ aadhar:aadhar, hospitalId:hospitalId, scannerId:hospitalId })
    };
    fetch('https://glassy-vaccination-1qkvv6zaa-kushal-khare-official.vercel.app/api/verifyUser', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                alert(`User is not Authenticated`);
                return Promise.reject(error);
            }
            else{
                alert(`User is Authenticated`);

            }
        })
        .catch(error => {
            alert(`There is an error ${error}`)
        });
}
function callVerifyVaccine(vaccineId,hospitalId){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vaccineId, hospitalId })
    };
    fetch('https://glassy-vaccination-1qkvv6zaa-kushal-khare-official.vercel.app/api/verifyVaccine', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                alert(`Vaccine is not Authenticated`);
               
                return Promise.reject(error);
            }
            else{
                alert(`Vaccine is Authenticated`);

            }

            
        })
        .catch(error => {
            alert(`There is an error ${error}`)
            
        });
}
var html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);