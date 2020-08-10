// TODO: Replace the following with your app's Firebase project configuration
//const message = this.$store.state.alarm.message

const firebaseModule = (function () {
    async function init() {
        // Your web app's Firebase configuration
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/firebase-messaging-sw.js')
                    .then(registration => {
                        var firebaseConfig = {
                            apiKey: "AIzaSyATmFdaPOSwwDfanhZIJfWXx-gITyxuL4c",
                            authDomain: "ddait-8a835.firebaseapp.com",
                            databaseURL: "https://ddait-8a835.firebaseio.com",
                            projectId: "ddait-8a835",
                            storageBucket: "ddait-8a835.appspot.com",
                            messagingSenderId: "856344602476",
                            appId: "1:856344602476:web:da0b586b9ed1d41ccb7549",
                            measurementId: "G-XGQWY7ETN7"
                          };
                        // Initialize Firebase
                        firebase.initializeApp(firebaseConfig);


                        // Show Notificaiton Dialog
                        const messaging = firebase.messaging();
                        messaging.requestPermission()
                        .then(function() {
                            
                            return messaging.getToken();
                        })
                        .then(async function(token) {
                            await fetch('/registerToken', { method: 'post', body: token })
                            messaging.onMessage(payload => {
                                const title = payload.notification.title
                                const options = {
                                    body : payload.notification.body
                                }
                                navigator.serviceWorker.ready.then(registration => {
                                    registration.showNotification(title, options);
                                })
                            })
                        })
                        .catch(function(err) {
                            console.log("Error Occured");
                        })
                    })
            })
        }
    }      

    return {
        init: function () {
            init()
        }
    }
})()

firebaseModule.init()
