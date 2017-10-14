

angular.module('starter.controllers', ['ngCordova'] )



.service('userService', function() {
  this.userData = {};

  this.user = function() {
    return this.userData;
  };

  this.setId = function(id) {
    this.userData.id = id;
  };

  this.getId = function() {
    return this.userData.id;
  };

  this.setEmail = function(email) {
    this.userData.email = email;
  };

  this.getEmail = function() {
    return this.userData.email;
  };

  this.setIdRol = function(id_rol) {
    this.userData.id_rol = id_rol;
  };

  this.getIdRol = function() {
    return this.userData.id_rol;
  };

  this.setPicture = function(picture) {
    this.userData.picture = picture;
  };

  this.getPicture = function() {
    return this.userData.picture;
  };

  this.setSound = function(sound) {
    this.userData.sound = sound;
  };

  this.getSound = function() {
    return this.userData.sound;
  };

  this.setStatus = function(status) {
    this.userData.status = status;
  };

  this.getStatus = function() {
    return this.userData.status;
  };

  this.setPassword = function(password) {
    this.userData.password = password;
  };

  this.getPassword = function() {
    return this.userData.password;
  };

})

.service('professorService', function() {
  this.professorData = {};

  this.professor = function() {
    return this.professorData;
  };

  this.setId = function(id) {
    this.professorData.id = id;
  };

  this.getId = function() {
    return this.professorData.id;
  };


  this.setFirstname = function(first_name) {
    this.professorData.first_name = first_name;
  };

  this.getFirstname = function() {
    return this.professorData.first_name;
  };

  this.setLastname = function(last_name) {
    this.professorData.last_name = last_name;
  };

  this.getLastname = function() {
    return this.professorData.last_name;
  };


  this.setAddress = function(address) {
    this.professorData.address = address;
  };

  this.getAddress = function() {
    return this.professorData.address;
  };


  this.setCountry = function(country) {
    this.professorData.country = country;
  };

  this.getCountry = function() {
    return this.professorData.country;
  };

  this.setState = function(state) {
    this.professorData.state = state;
  };

  this.getState = function() {
    return this.professorData.state;
  };


  this.setCity = function(city) {
    this.professorData.city = city;
  };

  this.getCity = function() {
    return this.professorData.city;
  };

  this.setPostalCode = function(postal_code) {
    this.professorData.postal_code = postal_code;
  };

  this.getPostalCode = function() {
    return this.professorData.postal_code;
  };


})

.service('studentService', function() {
  this.studentData = {};

  this.student = function() {
    return this.professorData;
  };

  this.setId = function(id) {
    this.studentData.id = id;
  };

  this.getId = function() {
    return this.studentData.id;
  };


  this.setFirstname = function(first_name) {
    this.studentData.first_name = first_name;
  };

  this.getFirstname = function() {
    return this.studentData.first_name;
  };

  this.setLastname = function(last_name) {
    this.studentData.last_name = last_name;
  };

  this.getLastname = function() {
    return this.studentData.last_name;
  };


  this.setAddress = function(address) {
    this.studentData.address = address;
  };

  this.getAddress = function() {
    return this.studentData.address;
  };


  this.setCountry = function(country) {
    this.studentData.country = country;
  };

  this.getCountry = function() {
    return this.studentData.country;
  };

  this.setState = function(state) {
    this.studentData.state = state;
  };

  this.getState = function() {
    return this.studentData.state;
  };


  this.setCity = function(city) {
    this.studentData.city = city;
  };

  this.getCity = function() {
    return this.studentData.city;
  };

  this.setPostalCode = function(postal_code) {
    this.studentData.postal_code = postal_code;
  };

  this.getPostalCode = function() {
    return this.studentData.postal_code;
  };


})

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, userService, professorService, studentService) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  $scope.toggleSelection = function toggleSelection(event) {
          // how to check if checkbox is selected or not
          alert(event.target.checked);
        };



        $scope.check = {};



  // Form data for the login modal
  $scope.loginData = {};
  

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
/*    console.log('Doing login', $scope.loginData);
*/

var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};
$http.post('http://www.diazapps.com/login_angular.php',{
  user_name:$scope.loginData.username,
  user_pass:$scope.loginData.password
},{
  headers : headers 
} ).then(function(response){
  $scope.id = response.data.id_user;

  userService.setId(response.data.id_user);
  userService.setEmail(response.data.email);
  userService.setIdRol(response.data.id_rol);
  userService.setPicture(response.data.picture);
  userService.setSound(response.data.sound);
  userService.setStatus(response.data.status);

  alert(userService.userData.email);


},function errorCallback(response) {
  alert(response);
})



    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('LoginCtrl', function($scope, $ionicModal, $timeout, $http, userService, professorService, $state,$location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.cucumber;
  $scope.check = {};
  $scope.check.val = false;


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
/*    console.log('Doing login', $scope.loginData);
*/
if(  $scope.check.val == true){

 var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};


 $http.post('http://www.diazapps.com/login_angular.php',{
  user_name:$scope.loginData.username,
  user_pass:$scope.loginData.password
},{
  headers : headers 
} ).then(function(response){
  $scope.id = response.data.id_user;

  if(angular.isString($scope.id) === true){
    userService.setId(response.data.id_user);
    userService.setEmail(response.data.email);
    userService.setIdRol(response.data.id_rol);
    userService.setPassword(response.data.password);
    userService.setPicture(response.data.picture);
    userService.setSound(response.data.sound);
    userService.setStatus(response.data.status);
    /*alert(userService.userData.email);*/
    /*$location.path('/app/courses');*/
    $state.go('app.courses');
  } else{
    alert('Incorrect Credentials. Please try again');
  }
},function errorCallback(response) {
  alert(response);
})
} else{
  alert('Please accept ther terms and conditions');

}

} 

})






.controller('CoursesCtrl', function($scope, $http, userService, professorService) {
  $scope.id_courses = [];
  $scope.courses_name = [];
  $scope.id_sections = [];
  $scope.sections = [];
  /* alert('acabas de entrar aca');*/



  var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};
  /*alert(userService.userData.id+'ESTE ES EL ID QUE TRAE EL SERVICIO');*/

  if(userService.userData.id_rol == 1){
//Get Student
$http.post('http://www.diazapps.com/get_user_info_angular.php',{
  id_user: userService.userData.id 
},{
  headers : headers 
} ).then(function(response2){
  /*alert(JSON.stringify(response2.data.id_professor)+'id del prof');*/
  $scope.id_student= response2.data.id_student;

  studentService.setId(response2.data.id_student);
  studentService.setFirstname(response2.data.first_name);
  studentService.setLastname(response2.data.last_name);
  studentService.setAddress(response2.data.address);
  studentService.setCountry(response2.data.country);
  studentService.setState(response2.data.state);
  studentService.setCity(response2.data.city);
  studentService.setPostalCode(response2.data.postal_code);



//

//Get Enrollment

$http.post('http://www.diazapps.com/get_enrolled_students_angular.php',{
  id_professor: $scope.id_student
},{
  headers : headers 
} ).then(function(response3){
 /*alert(JSON.stringify(response3.data.instructors));*/
 angular.forEach(response3.data.students, function(student){
  $scope.id_sections.push(student.id_section);
});
 /*alert('Id de Secciones'+$scope.id_sections);*/





//Get Section

$http.post('http://www.diazapps.com/get_section_angular.php',{
  id_sections: $scope.id_sections
},{
  headers : headers 
} ).then(function(response4){
 /*alert('secciones'+JSON.stringify(response4.data.sections));*/
 $scope.sections= response4.data.sections;
 console.log($scope.sections);
 angular.forEach(response4.data.sections, function(section){
  $scope.id_courses.push(section.id_course);
});
 /*alert('Estos son los id de los cursos'+$scope.id_courses)*/




//Get Courses-Student 

$http.post('http://www.diazapps.com/get_student_courses_angular.php',{
  id_user: userService.userData.id,
  rol: userService.userData.id_rol,
  id_period: $scope.sections[0].id_period
},{
  headers : headers 
} ).then(function(response5){
 /*alert('ESTA ES CURSO PROFESOR'+JSON.stringify(response5));*/
},function errorCallback(response5) {
  alert(response)
})



//


},function errorCallback(response4) {
  alert(response)
})


},function errorCallback(response3) {
  alert(response)
})


},function errorCallback(response2) {
  alert(response)
})


};

if(userService.userData.id_rol == 2){
//Get Professor
$http.post('http://www.diazapps.com/get_user_info_angular.php',{
  id_user: userService.userData.id 
},{
  headers : headers 
} ).then(function(response2){
  /*alert(JSON.stringify(response2.data.id_professor)+'id del prof');*/
  $scope.id_professor= response2.data.id_professor;

  professorService.setId(response2.data.id_professor);
  professorService.setFirstname(response2.data.first_name);
  professorService.setLastname(response2.data.last_name);
  professorService.setAddress(response2.data.address);
  professorService.setCountry(response2.data.country);
  professorService.setState(response2.data.state);
  professorService.setCity(response2.data.city);
  professorService.setPostalCode(response2.data.postal_code);



//shawn.gieser@mavs.uta.edu

//Get Instructor

$http.post('http://www.diazapps.com/get_instructor_angular.php',{
  id_professor: $scope.id_professor
},{
  headers : headers 
} ).then(function(response3){
 /*alert(JSON.stringify(response3.data.instructors));*/
 console.log(JSON.stringify(response3.data.instructors));
 angular.forEach(response3.data.instructors, function(instructor){
  $scope.id_sections.push(instructor.id_section);


});
 /*alert('Id de Secciones'+$scope.id_sections);*/



//Get Section

$http.post('http://www.diazapps.com/get_section_angular.php',{
  id_sections: $scope.id_sections
},{
  headers : headers 
} ).then(function(response4){
 console.log('secciones'+JSON.stringify(response4.data.sections));
 $scope.sections= response4.data.sections;
 console.log($scope.sections);
 angular.forEach(response4.data.sections, function(section){
  $scope.id_courses.push(section.id_course);
});
 /* console.log('Estos son los id de los cursos'+$scope.id_courses);*/



//Get Courses-name


$http.post('http://www.diazapps.com/get_course_names_angular.php',{
  id_courses: $scope.id_courses
},{
  headers : headers 
} ).then(function(response9){
  console.log(response9.data);
  $scope.courses_name = response9.data.courses;

})

//Get Courses-Professors

$http.post('http://www.diazapps.com/get_professor_courses_angular.php',{
  id_user: userService.userData.id,
  rol: userService.userData.id_rol,
  id_period: $scope.sections[0].id_period
},{
  headers : headers 
} ).then(function(response5){
  console.log('ESTA ES CURSO PROFESOR'+JSON.stringify(response5.data));
},function errorCallback(response5) {
  alert(response)
})



//


},function errorCallback(response4) {
  alert(response)
})


},function errorCallback(response3) {
  alert(response)
})


},function errorCallback(response2) {
  alert(response)
})


};


})



.filter('diazapps', function ($sce) {
  return function(sound) {
    return $sce.trustAsResourceUrl('http://www.diazapps.com/' + sound);
  };
})

.controller('CourseCtrl', function($scope, $stateParams, $http, $sce, $cordovaMedia) {







  //Get Section Professor
  var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};
  $http.post('http://www.diazapps.com/get_section_professor_angular.php',{
    id_section: $stateParams.id
  },{
    headers : headers 
  } ).then(function(response5){
   $scope.professor = response5.data;
   console.log($scope.professor);

   $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);

    alert($scope.trustSrc);
  }

/*
$scope.getIframeSrc = function (videoId) {
  return 'src:"http://www.diazapps.com/ ' + videoId;
};*/

/*$scope.chivo = $sce.trustAsResourceUrl("http://www.diazapps.com/sound_rec/rec_1494927517698_46.3gp");*/
/*  $scope.movie = {src:"http://www.diazapps.com/sound_rec/rec_1494927517698_46.3gp"};*/



})

  //Get Section Teaching Assistant
  var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};
  $http.post('http://www.diazapps.com/get_section_teaching_assistant_angular.php',{
    id_section: $stateParams.id
  },{
    headers : headers 
  } ).then(function(response6){
   $scope.assistant = response6.data;
   console.log($scope.assistant);
 })

  //Get Section Enrolled Students
  var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};
  $http.post('http://www.diazapps.com/get_enrolled_students_angular.php',{
    id_section: $stateParams.id
  },{
    headers : headers 
  } ).then(function(response7){
   $scope.students = response7.data.students;
   console.log($scope.students);


 })


  $http.post('http://www.diazapps.com/get_one_section_angular.php',{
    id_sections: $stateParams.id
  },{
    headers : headers 
  } ).then(function(response8){
    $scope.section = response8.data.sections[0];
    console.log($scope.section); 

    $http.post('http://www.diazapps.com/get_course_name_angular.php',{
      id_courses: $scope.section.id_course
    },{
      headers : headers 
    } ).then(function(response9){
      $scope.courses_name = response9.data.sections[0];


    })

  })

$scope.play = function(path){

  alert(path);

  var src = "http://www.diazapps.com/sound_rec/"+path;
  alert(src);

  var media = $cordovaMedia.newMedia(src);

  console.log(media);
  // File for download
/*  var url = "http://www.diazapps.com/sound_rec/"+path;

      // File name only
      var filename = url.split("/").pop();

      // Save location
      var targetPath = cordova.file.documentsDirectory + filename;

      $cordovaFileTransfer.download(url, targetPath, {}, true).then(function (result) {
        console.log('Success');
        alert("Success");
      }, function (error) {
        console.log('Error');
      }, function (progress) {
          // PROGRESS HANDLING GOES HERE
        });*/
    }



})



.controller('UploadCtrl', function($scope, $cordovaCapture, $stateParams, $http, $sce) {

$scope.captureAudio = function() {
    // capture callback
var captureSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
    }
};

// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

// start audio capture
navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
  }


})


.controller('SettingsCtrl', function( $timeout, $window,$cordovaMedia, $cordovaProgress,$ionicPopup, $cordovaCapture, $state, $cordovaCamera, $ionicPopover, $ionicPlatform, $ionicActionSheet, userService, $scope, $http, $cordovaImagePicker, $cordovaFileTransfer) {



 
if(localStorage.getItem('val') === 'true'){
        window.localStorage['val'] = false;

 $scope.$parent.$on('$ionicView.enter', function(e) {
    $timeout(function() {
      showHeader();
    }, 1000);
    
    function showHeader() { 
      // Having the nav-bar in your template, set an ID to it.
      var header = document.getElementById("nav-button");
      if (header.classList) {
        if (header.classList.contains('hide')) {
          header.classList.remove('hide');
        }
      }
    }

  });
}

  var headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};

    
$scope.back = function(){

  $state.go('app.courses')
} 
console.log(localStorage.getItem('logSet'));
console.log(localStorage.getItem('passwordSet'));
console.log(localStorage.getItem('check2'));





if(localStorage.getItem('check2') === 'true'){
  console.log("entro con datos");
}else{
console.log("entro sin datos");
window.localStorage['logSet'] = '';
window.localStorage['passwordSet'] = '';
}



  if (localStorage.getItem('logSet') !== '' && localStorage.getItem('passwordSet') !== '') {
    console.log('cumple la condicion SETTINGS');
    $http.post('http://www.diazapps.com/login_settings.php',{
      user_name:localStorage.getItem('logSet'),
      user_pass:localStorage.getItem('passwordSet')
    },{
      headers : headers 
    } ).then(function(response){
      $scope.id = response.data.id_user;
      console.log($scope.id);
      console.log(angular.isString($scope.id));
      window.localStorage['logSet'] = '';
      window.localStorage['passwordSet'] = '';
      window.localStorage['check2'] = false;

      if(angular.isString($scope.id) === true){
       /*  alert(JSON.stringify(response));*/

       userService.setId(response.data.id_user);
       userService.setEmail(response.data.email);
       userService.setIdRol(response.data.role_id);
       userService.setStatus(response.data.status);
       userService.setPassword(response.data.password);
       userService.setPicture(response.data.picture);
       userService.setSound(response.data.sound);

       $scope.user = userService.userData;
       
//AUDIO
  $ionicPlatform.ready(function(){
    $scope.play = function(src) {
        var media = $cordovaMedia.newMedia(src);
        //var media = new Media(src, null, null, mediaStatusCallback);
        media.play();
        //$cordovaMedia.play(media);
    };
 
        // Triggered on a button click, or some other target
        $scope.showPopup = function() {
          $scope.alertPopup = $ionicPopup.show({
            title: 'Grabando...'
            //templateUrl: 'templates/saveSoundModal.html'
          });
         $scope.alertPopup.then(function(res) {
            console.log('Pasó');
          });
//          setTimeout(function() {
//            $scope.alertPopup.close();
//          }, 2000)
;        };
   
    
    
    $scope.recordStart = function(value){
        
        var random = 0;
        var src = null; //var tempSrc = null;
        random = Math.round(Math.random()*1000000);
        
        
        //$scope.tempSrc = cordova.file.dataDirectory+'custom_'+value+'_'+random+'.wav';
        $scope.tempSrc = ''+random+'.amr';
        //$scope.tempSrc = 'cdvfile://localhost/persistent/custom_'+value+'_'+random+'.wav';
        //src = '/android_asset/www/raw/custom_'+value+'.amr';
        var media = $cordovaMedia.newMedia($scope.tempSrc);
        media.startRecord();
        console.log('Comenzó la Grabación...');  
        $scope.showPopup();
        createFile($scope.tempSrc);
        console.log(cordova.file.applicationStorageDirectory);
        console.log(cordova.file.dataDirectory);
        
        //        Creando Directorio tentativo
//        $cordovaFile.createDir(cordova.file.dataDirectory,"simples", true)
//            .then(function (success) {
//              
//              $scope.tempNew = cordova.file.dataDirectory + 'simples/custom_'+value+'_'+random+'.wav';
//              console.log(success + 'Se creo el directorio:' + $scope.tempNew);
//            }, function (error) {
//              console.log(error);
//            });
//
//        $cordovaFile.checkDir(cordova.file.dataDirectory, "simples")
//            .then(function (success) {
//              console.log('Si existe: ' + cordova.file.dataDirectory + 'simples');
//            }, function (error) {
//              console.log('No existe' + cordova.file.dataDirectory + 'simples' + error);
//            });
//       
        $scope.salvo = false;
        
        $scope.recordEnd = function(){
            
            media.stopRecord();
            console.log('Terminó la Grabación...');
            $scope.alertPopup.close();
            media.release();

            };
        
       
       
       
        
        function createFile(src){
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
                fileSystem.root.getFile(
                                    src, { create: true, exclusive: false }, getFileWin, getFileFail
                                );
                            }, getFSFail); //of requestFileSystem
          }

                // getFile Success & Fail Methods
                function getFileWin(fileEntry){
                    console.log("File created at " + fileEntry.fullPath);
                }

                function getFileFail(error){
                    console.log("Failed to retrieve file");
                }

                // requestFileSystem Fail Method
                function getFSFail(evt) {
                    console.log(evt.target.error.code);
                }
                
          

    };
    
   
    /*$scope.playing = function(src,srcdos){
        
        if (src == null){
            $scope.play(srcdos);

        }else{
            $scope.play(src);
            
       
              } 
       
     };*/
                
        $scope.savedPopup = function() {
          $scope.saved = $ionicPopup.show({
            title: 'Guardado'
            //templateUrl: 'templates/saveSoundModal.html'
          });
         
          setTimeout(function() {
            $scope.saved.close();
          }, 2000);
        };
    $scope.noSavedPopup = function() {
          $scope.nosaved = $ionicPopup.show({
            title: 'Mensaje',
            template: '<p style="text-align: justify !important;">Debe realizar una operaci&oacuten antes de guardar</p>',
            buttons: [
                    { text: 'Cerrar',
                      type: 'button-assertive'
                      
                    }
                  ]
            
          });
         
          
        };
   /* $scope.getEditSimpleValue = function(value) {
            Sounds.getEditSimple(value).then(function(single){
              $scope.editsimpleValue = single;  
              //$scope.editsimpleRow.custom_sound_path  = $scope.editsimpleValue.custom_sound_path; 

            });

          };
  /*  $scope.save = function(value){
            //$scope.count = true;
            var src = null;
            if ($scope.salvo == true ){
                $scope.noSavedPopup();
            }else{
                src = $scope.tempSrc;
                Sounds.updateSound(value , src);
                //deleteFile($scope.tempSrc);
                
                //$scope.newSound = src;
                console.log('Guardó: '+src);
                //$scope.getEditSimpleValue(value);
                $scope.editsimpleRow.custom_sound_path = src;
                $scope.savedPopup();
                $scope.salvo = true;
//                $scope.clean();
               
    //            $scope.getEditSimpleRow($scope.editsimpleValue);
                
             }
             
            
         };*/
     
   });
//////// Fin Audio
      $scope.addMedia = function() {
        $scope.hideSheet = $ionicActionSheet.show({
          buttons: [
          { text: 'Take photo' },
          { text: 'Photo from library' }
          ],
          titleText: 'Add Photo',
          cancelText: 'Cancel',
          buttonClicked: function(index) {
            $scope.addImage(index);
        // alert(index);

      }
    });
      }

 $scope.edit = false;
   $scope.save = false;
   $scope.editar = function(){
    $scope.edit = true;
    $scope.save = true;
  }

      $scope.addImage = function(type){

        var platform = ionic.Platform.device().platform; 

        if(type == 1){
          if(platform == 'Android'){
            var options = {
              sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: Camera.DestinationType.FILE_URI

            }

            $cordovaCamera.getPicture(options)
            .then(function (results) {
             console.log(results);


             window.FilePath.resolveNativePath(results, function(result) {
    // onSuccess code
    console.log(result + "Window FilePath");


    var url = "http://www.diazapps.com/upload_angular_profile.php";
     //target path may be local or url
     var targetPath = result;
     console.log(targetPath + "Target Path");

     var filename = targetPath.split("/").pop();
     console.log(filename + "filename" );



     var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "image/jpg",
      params: {'id_user': userService.userData.id}   

    };

$cordovaProgress.showSimpleWithLabel(true, "Uploading, please wait") // .hide()


$cordovaFileTransfer.upload(url,targetPath, options, true).then(function(result) {
  console.log("SUCCESS: " + JSON.stringify(result.response));
  alert("success");
  $cordovaProgress.hide()

  window.localStorage['logSet'] = userService.userData.email;
  window.localStorage['passwordSet'] = userService.userData.password;
  window.localStorage['check2'] = 'true';
  $timeout(function () {
$window.location.reload(); 
})

  


//$window.location.reload(); 

      // alert(JSON.stringify(result.response));
    }, function(err) {
/*       console.log("ERROR: " + JSON.stringify(err));
*/      alert(JSON.stringify(err));
}, function (progress) {
            // constant progress updates

            $timeout(function () {

              $scope.downloadProgress = (progress.loaded / progress.total) * 100;
            })
          });
})
           }, function (error) {
    // onError code here
  })
          }else{

            var options = {
             maximumImagesCount: 1,
             width: 500,
             height: 500,
             quality: 50
           }

           $cordovaImagePicker.getPictures(options)
           .then(function (results) {
      // console.log(results[0]);


      var url = "http://www.diazapps.com/upload_angular_profile.php";
     //target path may be local or url
     var targetPath = results[0];
     var filename = targetPath.split("/").pop();



     var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "image/jpg",
      params: {'id_user': userService.userData.id}   


    };

  $cordovaProgress.showSimpleWithLabel(true, "Uploading, please wait") // .hide()
  

  $cordovaFileTransfer.upload(url,targetPath, options, true).then(function(result) {
/*      console.log("SUCCESS: " + JSON.stringify(result.response));
*/      alert("success");
$cordovaProgress.hide()

window.localStorage['logSet'] = userService.userData.email;
window.localStorage['passwordSet'] = userService.userData.password;
  window.localStorage['check2'] = 'true';



  $timeout(function () {
$window.location.reload(); 
})

//$window.location.reload(); 

      // alert(JSON.stringify(result.response));
    }, function(err) {
/*       console.log("ERROR: " + JSON.stringify(err));
*/      alert(JSON.stringify(err));
}, function (progress) {
            // constant progress updates
            $timeout(function () {   
              $cordovaProgress.showBarWithLabel(false, 100000, "Loading")
              $scope.downloadProgress = (progress.loaded / progress.total) * 100;
            })
          });
})
         } 
       }else if (type == 0){

        var options = { limit: 1 };

        $cordovaCapture.captureImage(options).then(function(imageData) {


         var url = "http://www.diazapps.com/upload_angular_profile.php";
     //target path may be local or url
     var targetPath = imageData[0].fullPath;
     var filename = targetPath.split("/").pop();

     console.log(filename);
 
     
     var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "image/jpeg",
      params: {'id_user': userService.userData.id}   

    };
$cordovaProgress.showSimpleWithLabel(true, "Uploading, please wait") // .hide()


$cordovaFileTransfer.upload(url,targetPath, options, true).then(function(result) {
 console.log("SUCCESS: " + JSON.stringify(result.response));
 alert("success");
 $cordovaProgress.hide()

 console.log("success");
 window.localStorage['logSet'] = userService.userData.email;
 window.localStorage['passwordSet'] = userService.userData.password;
  window.localStorage['check2'] = 'true';

  $timeout(function () {
$window.location.reload(); 
})


      // alert(JSON.stringify(result.response));
    }, function(err) {
     console.log("ERROR: " + JSON.stringify(err));
     alert(JSON.stringify(err));
   }, function (progress) {
            // constant progress updates
            $timeout(function () {
              console.log(progress);

              $scope.downloadProgress = (progress.loaded / progress.total) * 100;
            })
          });



}, function(err) {
      // An error occurred. Show a message to the user
    });





      }
    }

   /* $scope.update = function(){

      alert('Profile updated');

      window.localStorage['logSet'] = userService.userData.email;
 window.localStorage['passwordSet'] = userService.userData.password;
     $http.post('http://www.diazapps.com/update_angular.php',{
      name: $scope.employee.name,
      job: $scope.employee.job,
      hire_date: $scope.employee.date_of_hired,
      address: $scope.employee.address,
      phone: $scope.employee.phone,
      id_employee: userService.userData.id_employee
    },{
      headers : headers 
    } ).then(function(respon){

$timeout(function () {
$window.location.reload(); 
})

    }
    ,function errorCallback(respon) {

    })

 
  }*/


  } else{
  alert('Incorrect Credentials. Please try again');
}
},function errorCallback(response) {
  console.log(JSON.stringify(response));
})
}



else{ 

 $ionicPlatform.ready(function() {  

      

       console.log(cordova.file.applicationStorageDirectory);
        console.log(cordova.file.dataDirectory);
var my_media;




  $scope.play = function(){
 if (my_media == null) {
  var src = "http://www.diazapps.com/sound_rec/rec_1506121538411_46.mp4";
                // Create Media object from src
                my_media = $cordovaMedia.newMedia(src);
            } // else play current audio
            // Play audio
            my_media.play();
  };
});

 $scope.recordStart = function(){
 my_media.recordStart(); 
}





            // create media promise
        
             function onSuccess(success){
                  console.log(success);
              };

              function onError(err){
                console.log(err)
              };
   

/*
          $scope.recordStart = function(){
        media.startRecord();
        console.log(typeof media.startRecord);

  $scope.recordEnd = function(){
        media.stopRecord();
        media.release();
  window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory + "recording/prueba.amr", onSuccess, onError);
    console.log(typeof window.resolveLocalFileSystemURL);
      console.log(media);
        console.log(window.location.pathname);
      };
}
        );

    $scope.play = function(){
        console.log(cordova.file.externalRootDirectory);
         media.play().then(function(response5){
 console.log(response5);
},function errorCallback(response5) {
  alert(response)
});
    };
    $scope.pause = function(){
        media.pause();
    };


      

     */






  






/*//AUDIO
  $ionicPlatform.ready(function(){
   
 
        // Triggered on a button click, or some other target
        $scope.showPopup = function() {
          $scope.alertPopup = $ionicPopup.show({
            title: 'Grabando...'
            //templateUrl: 'templates/saveSoundModal.html'
          });
         $scope.alertPopup.then(function(res) {
            console.log('Pasó');
          });
//          setTimeout(function() {
//            $scope.alertPopup.close();
//          }, 2000)
;        };

    
    
    
    $scope.recordStart = function(value){
        var random = 0;
        var src = null; //var tempSrc = null;
        random = Math.round(Math.random()*1000000);
        
        
        //$scope.tempSrc = cordova.file.dataDirectory+'custom_'+value+'_'+random+'.wav';
        $scope.tempSrc = 'file:///data/user/0/com.ionicframework.sayitright630125/files/custom_'+value+'_'+random+'.wav';
        //$scope.tempSrc = 'cdvfile://localhost/persistent/custom_'+value+'_'+random+'.wav';
        //src = '/android_asset/www/raw/custom_'+value+'.amr';
        var media = $cordovaMedia.newMedia($scope.tempSrc);
        media.startRecord();
        console.log('Comenzó la Grabación...');  
        $scope.showPopup();
        //createFile($scope.tempSrc);
        console.log(cordova.file.applicationStorageDirectory);
        console.log(cordova.file.dataDirectory);
        console.log(media);
         $scope.play = function() {
       
        //$cordovaMedia.play(media);
    };
        
        //        Creando Directorio tentativo
//        $cordovaFile.createDir(cordova.file.dataDirectory,"simples", true)
//            .then(function (success) {
//              
//              $scope.tempNew = cordova.file.dataDirectory + 'simples/custom_'+value+'_'+random+'.wav';
//              console.log(success + 'Se creo el directorio:' + $scope.tempNew);
//            }, function (error) {
//              console.log(error);
//            });
//
//        $cordovaFile.checkDir(cordova.file.dataDirectory, "simples")
//            .then(function (success) {
//              console.log('Si existe: ' + cordova.file.dataDirectory + 'simples');
//            }, function (error) {
//              console.log('No existe' + cordova.file.dataDirectory + 'simples' + error);
//            });
//       
        $scope.salvo = false;
        
        $scope.recordEnd = function(){
            media.stopRecord();
            console.log('Terminó la Grabación...');
            $scope.alertPopup.close();
            media.release();
            media.getCurrentPosition().then(function(response){
              alert(response);

            },function errorCallback(response) {
              alert(response);
            });

            };
        
       
       
       
        
        function createFile(src){
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
                fileSystem.root.getFile(
                                    src, { create: true, exclusive: false }, getFileWin, getFileFail
                                );
                            }, getFSFail); //of requestFileSystem
          }

                // getFile Success & Fail Methods
                function getFileWin(fileEntry){
                    console.log("File created at " + fileEntry.fullPath);
                }

                function getFileFail(error){
                    console.log("Failed to retrieve file");
                }

                // requestFileSystem Fail Method
                function getFSFail(evt) {
                    console.log(evt.target.error.code);
                }
                
          

    };
    
   
    /*$scope.playing = function(src,srcdos){
        
        if (src == null){
            $scope.play(srcdos);

        }else{
            $scope.play(src);
            
       
              } 
       
     };
                
        $scope.savedPopup = function() {
          $scope.saved = $ionicPopup.show({
            title: 'Guardado'
            //templateUrl: 'templates/saveSoundModal.html'
          });
         
          setTimeout(function() {
            $scope.saved.close();
          }, 2000);
        };
    $scope.noSavedPopup = function() {
          $scope.nosaved = $ionicPopup.show({
            title: 'Mensaje',
            template: '<p style="text-align: justify !important;">Debe realizar una operaci&oacuten antes de guardar</p>',
            buttons: [
                    { text: 'Cerrar',
                      type: 'button-assertive'
                      
                    }
                  ]
            
          });
         
          
        };
   /* $scope.getEditSimpleValue = function(value) {
            Sounds.getEditSimple(value).then(function(single){
              $scope.editsimpleValue = single;  
              //$scope.editsimpleRow.custom_sound_path  = $scope.editsimpleValue.custom_sound_path; 

            });

          };
  /*  $scope.save = function(value){
            //$scope.count = true;
            var src = null;
            if ($scope.salvo == true ){
                $scope.noSavedPopup();
            }else{
                src = $scope.tempSrc;
                Sounds.updateSound(value , src);
                //deleteFile($scope.tempSrc);
                
                //$scope.newSound = src;
                console.log('Guardó: '+src);
                //$scope.getEditSimpleValue(value);
                $scope.editsimpleRow.custom_sound_path = src;
                $scope.savedPopup();
                $scope.salvo = true;
//                $scope.clean();
               
    //            $scope.getEditSimpleRow($scope.editsimpleValue);
                
             }
             
            
         };*/
     
  // });
//////// Fin Audio*/


console.log(userService.userData.id + "userService fuera");




$ionicPopover.fromTemplateUrl('templates/popover.html', {
  scope: $scope
}).then(function(popover) {
  $scope.popover = popover;
});

$scope.openPopover = function($event) {
  $scope.popover.show($event);
};

$scope.closePopover = function() {
  $scope.popover.hide();
};

   //Cleanup the popover when we're done with it!
   $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });

   // Execute action on hide popover
   $scope.$on('popover.hidden', function() {
      // Execute action
    });

   // Execute action on remove popover
   $scope.$on('popover.removed', function() {
      // Execute action
    });





   $scope.edit = false;
   $scope.save = false;
   $scope.editar = function(){
    $scope.edit = true;
    $scope.save = true;
  }



  $scope.user = userService.userData;


 


  $scope.addMedia = function() {
    $scope.hideSheet = $ionicActionSheet.show({
      buttons: [
      { text: 'Take photo' },
      { text: 'Photo from library' }
      ],
      titleText: 'Add Photo',
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        $scope.addImage(index);
        // alert(index);

      }
    });
  }


  $scope.addImage = function(type){

    var platform = ionic.Platform.device().platform; 

    if(type == 1){
      if(platform == 'Android'){
        var options = {
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          destinationType: Camera.DestinationType.FILE_URI

        }

        $cordovaCamera.getPicture(options)
        .then(function (results) {
         console.log(results);


         window.FilePath.resolveNativePath(results, function(result) {
    // onSuccess code
    console.log(result + "Window FilePath");


    var url = "http://www.diazapps.com/upload_angular_profile.php";
     //target path may be local or url
     var targetPath = result;
     console.log(targetPath + "Target Path");

     var filename = targetPath.split("/").pop();
     console.log(filename + "filename" );



     var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "image/jpg",
      params: {'id_user': userService.userData.id}   

    };
   $cordovaProgress.showSimpleWithLabel(true, "Uploading, please wait") // .hide()


   $cordovaFileTransfer.upload(url,targetPath, options, true).then(function(result) {
    console.log("SUCCESS: " + JSON.stringify(result.response));
    alert("success");
    $cordovaProgress.hide()

    window.localStorage['logSet'] = userService.userData.email;
    window.localStorage['passwordSet'] = userService.userData.password;
  window.localStorage['check2'] = 'true';


 window.localStorage['val'] = true;

   $timeout(function () {
$window.location.reload(); 
})
       


      // alert(JSON.stringify(result.response));
    }, function(err) {
/*       console.log("ERROR: " + JSON.stringify(err));
*/      alert(JSON.stringify(err));
}, function (progress) {
            // constant progress updates
            console.log(progress);

            $timeout(function () {
              $scope.downloadProgress = (progress.loaded / progress.total) * 100;
            })
          });
 })
       }, function (error) {
    // onError code here
  })
      }else{

        var options = {
         maximumImagesCount: 1,
         width: 800,
         height: 800,
         quality: 80
       }

       $cordovaImagePicker.getPictures(options)
       .then(function (results) {
      // console.log(results[0]);


      var url = "http://www.diazapps.com/upload_angular_profile.php";
     //target path may be local or url
     var targetPath = results[0];
     var filename = targetPath.split("/").pop();



     var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "image/jpg",
      params: {'id_user': userService.userData.id}   

    };

    $cordovaProgress.showSimpleWithLabel(true, "Uploading, please wait") // .hide()

    
    $cordovaFileTransfer.upload(url,targetPath, options, true).then(function(result) {
/*      console.log("SUCCESS: " + JSON.stringify(result.response));
*/      alert("success");
$cordovaProgress.hide()

window.localStorage['logSet'] = userService.userData.email;
window.localStorage['passwordSet'] = userService.userData.password;
  window.localStorage['check2'] = 'true';


  $timeout(function () {
$window.location.reload(); 
})


      // alert(JSON.stringify(result.response));
    }, function(err) {
/*       console.log("ERROR: " + JSON.stringify(err));
*/      alert(JSON.stringify(err));
}, function (progress) {
            // constant progress updates
            $timeout(function () {
              console.log(progress);

              $scope.downloadProgress = (progress.loaded / progress.total) * 100;
            })
          });
  })
     } 
   }else if (type == 0){

    var options = { limit: 1 };

    $cordovaCapture.captureImage(options).then(function(imageData) {


     var url = "http://www.diazapps.com/upload_angular_profile.php";
     //target path may be local or url
     var targetPath = imageData[0].fullPath;
     var filename = targetPath.split("/").pop();

     
     var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "image/jpeg",
      params: {'id_user': userService.userData.id}   

    };

$cordovaProgress.showSimpleWithLabel(true, "Uploading, please wait") // .hide()


$cordovaFileTransfer.upload(url,targetPath, options, true).then(function(result) {
 console.log("SUCCESS: " + JSON.stringify(result.response));
 alert("success");
 console.log("success");
 $cordovaProgress.hide()

 window.localStorage['logSet'] = userService.userData.email;
 window.localStorage['passwordSet'] = userService.userData.password;
  window.localStorage['check2'] = 'true';


  $timeout(function () {
$window.location.reload(); 
})
//$window.location.reload(); 

      // alert(JSON.stringify(result.response));
    }, function(err) {
     console.log("ERROR: " + JSON.stringify(err));
     alert(JSON.stringify(err));
   }, function (progress) {
            // constant progress updates
            $timeout(function () {
              console.log(progress);

              $scope.downloadProgress = (progress.loaded / progress.total) * 100;
            })
          });



}, function(err) {
      // An error occurred. Show a message to the user
    });





  }
}

/*$scope.update = function(){
      alert('Profile updated');
window.localStorage['logSet'] = userService.userData.email;
 window.localStorage['passwordSet'] = userService.userData.password;

 $http.post('http://www.diazapps.com/update_angular.php',{
  name: $scope.employee.name,
  job: $scope.employee.job,
  hire_date: $scope.employee.date_of_hired,
  address: $scope.employee.address,
  phone: $scope.employee.phone,
  id_employee: userService.userData.id_employee
},{
  headers : headers 
} ).then(function(respon){

$timeout(function () {
$window.location.reload(); 
})

}
,function errorCallback(respon) {

})

}*/


}
});

