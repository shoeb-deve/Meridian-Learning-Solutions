const loginElement = document.querySelector('#login-form');
const contentElement = document.querySelector("#content-sign-in");
const userDetailsElement = document.querySelector('#user-details');
const authBarElement = document.querySelector("#authentication-bar");

// Elements for sensor readings
const tempElement = document.getElementById("temp");
const humElement = document.getElementById("hum");
const presElement = document.getElementById("pres");

// MANAGE LOGIN/LOGOUT UI
const setupUI = (user) => {
  if (user) {
    //toggle UI elements
    loginElement.style.display = 'none';
    contentElement.style.display = 'block';
    authBarElement.style.display ='block';
    userDetailsElement.style.display ='block';
    userDetailsElement.innerHTML = user.email;

    // get user UID to get data from database
    var uid = user.uid;
    console.log(uid);

    // Database paths (with user UID)
    var dbPathTemp = 'UsersData/' + uid.toString() + '/temperature';
    var dbPathHum = 'UsersData/' + uid.toString() + '/humidity';
    var dbPathPres = 'UsersData/' + uid.toString() + '/pressure';

    // Database references
    var dbRefTemp = firebase.database().ref().child(dbPathTemp);
    var dbRefHum = firebase.database().ref().child(dbPathHum);
    var dbRefPres = firebase.database().ref().child(dbPathPres);

    // Update page with new readings
    dbRefTemp.on('value', snap => {
      tempElement.innerText = snap.val().toFixed(2);
    });

    dbRefHum.on('value', snap => {
      humElement.innerText = snap.val().toFixed(2);
    });

    dbRefPres.on('value', snap => {
      presElement.innerText = snap.val().toFixed(2);
    });

  // if user is logged out
  } else{
    // toggle UI elements
    loginElement.style.display = 'block';
    authBarElement.style.display ='none';
    userDetailsElement.style.display ='none';
    contentElement.style.display = 'none';
  }
}

// Load and inject SVG logo for rotation animation
window.addEventListener('DOMContentLoaded', () => {
  const svgWrapper = document.getElementById('logo-svg-wrapper');
  if (!svgWrapper) return;
  fetch('./public/MSL-App/meridian-logo.svg')
    .then(res => res.text())
    .then(svgText => {
      svgWrapper.innerHTML = svgText;
      const svgEl = svgWrapper.querySelector('svg');
      if (svgEl) {
        svgEl.classList.add('loader-svg');
      }
    })
    .catch(err => {
      console.error('Failed to load SVG loader:', err);
      svgWrapper.innerHTML = '<div style="color:#fff;font-size:14px;">MERIDIAN</div>';
    });
});

// Hide logo loader after page has loaded
window.addEventListener('load', () => {
  const loader = document.getElementById('logo-loader');
  if (loader) {
    loader.classList.add('done');
    setTimeout(() => loader.style.display = 'none', 600);
  }
});
