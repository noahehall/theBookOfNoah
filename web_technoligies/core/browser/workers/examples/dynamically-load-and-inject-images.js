// implementation
// @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
const imgLoad = (url) => {
  return new Promise((resolve, reject) => {      
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';

    request.onload = () => {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
      }
    };

    request.onerror = () => {
      reject(Error('There was a network error.'));
    };

    request.send();
  });
}

// example usage 
let body = document.querySelector('body');
let myImage = new Image();

imgLoad('myLittleVader.jpg').then((response) => {
  var imageURL = window.URL.createObjectURL(response);
  myImage.src = imageURL;
  body.appendChild(myImage);
}, (Error) => {
  console.log(Error);
});