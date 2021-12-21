//---------------CONFIGURATION--------------------------------------------------------------

var firebaseConfig = {
    apiKey: "AIzaSyDsjw3x-FMxKApp0nCQapKZ9tfpjFb9_Xg",
    authDomain: "weathermet-95dde.firebaseapp.com",
    databaseURL: "https://weathermet-95dde-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "weathermet-95dde",
    storageBucket: "weathermet-95dde.appspot.com",
    messagingSenderId: "654974521929",
    appId: "1:654974521929:web:8b345377bd0b2bf670e598"
};

firebase.initializeApp(firebaseConfig);

//---------------GET ALL DATA---------------------------------------------------------------

function SelectAllData() {
    firebase.database().ref('IoT').once('value',
        function(AllRecords){
            AllRecords.forEach(
                function(CurrentRecord){
                    var humid = CurrentRecord.val().humidity;
                    var press = CurrentRecord.val().pressure;
                    var solor = CurrentRecord.val().solorld;
                    var temp = CurrentRecord.val().temperature;
                    var windD = CurrentRecord.val().windDirection;
                    var windS = CurrentRecord.val().windSpeed;
                    AddItemsToTable(humid, press, solor, temp, windD, windS);
                }
            );
        });
}

window.onload = SelectAllData;

//---------------FILL TABLE---------------------------------------------------------------

var dtNo = 0;

function AddItemsToTable(humid, press, solor, temp, windD, windS){
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');

    td1.innerHTML = ++dtNo;
    td2.innerHTML = humid;
    td3.innerHTML = press;
    td4.innerHTML = solor;
    td5.innerHTML = temp;
    td6.innerHTML = windD;
    td7.innerHTML = windS;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    tbody.appendChild(trow);
}
