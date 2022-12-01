const ssid = document.querySelector('#ssid');
const password = document.querySelector('#password');
const encription = document.querySelector('#encription');
const status = document.querySelector('#status');
const submitBtn = document.querySelector('#submit');
const hiddenNet = document.querySelector('#hidden');
const qrImg = document.querySelector('#qrImg');

const downloadFile = (url) => {
  const element = document.createElement('a');
  element.setAttribute('href', 'Download Btn');
  element.setAttribute('download', file);

  element.style.display = 'none';

  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
}

// adding a event listener to the submitBtn...
submitBtn.addEventListener('click', (e) => {
	e.preventDefault();

	// create 2 links, one if hiddenNet is true and the other if hiddenNet is false...
	if (hiddenNet.checked === true) {
		url = `https://api.qrserver.com/v1/create-qr-code/?data=WIFI:S:${ssid.value};T:${encription.value};P:${password.value};H:true;&size=1000x1000`
	}else {
		url = `https://api.qrserver.com/v1/create-qr-code/?data=WIFI:S:${ssid.value};T:${encription.value};P:${password.value};H:false;&size=1000x1000`;
	}

	// here will display the QR-code image in the web-page....
	qrImg.setAttribute('src', url)

	// create a link to automatically download the 1000px QR-code image to your pc...
	const a = document.createElement('a');
	a.setAttribute('href', url);
	a.setAttribute('download', true);
	a.textContent = 'QR-code!';

	console.log(a.getAttribute('href'));

	status.textContent = 'Click this link to download: ';
	status.appendChild(a);

	console.log(status);
})


// to connect to my own network, the data must be: WIFI:S:RANSOMWARE.EXE;T:WPA;P:trenora2020;;

