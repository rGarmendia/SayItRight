

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

.controller('CourseCtrl', function($scope, $stateParams, $http, $sce) {

/*function play(index) {
    var audio = document.getElementById("audio_play");
    audio.play();
};*/

 $scope.playAudio = function(index) {
       var audio = document.getElementById("audio_play"+index);
    audio.load();
    audio.play();
    };





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

})



.controller('UploadCtrl', function($scope, $stateParams, $http, $sce) {



})


.controller('SettingsCtrl', function($cordovaCapture, userService,$scope, $cordovaDevice, $cordovaFile, $ionicPlatform, $cordovaEmailComposer, $ionicActionSheet, ImageService, FileService) {
    $scope.user = userService.userData;
     
    $scope.play = function () {
            var src = "audio/music.mp3";
            var media = $cordovaMedia.newMedia(src).then(function() {
                media.play();
            }, function () {
                // error
            });
    }
// Image picker
    $ionicPlatform.ready(function() {
    $scope.images = FileService.images();
    if(!$scope.$$phase) {
    $scope.$apply();
  }
  });
 
  $scope.urlForImage = function(imageName) {
    var trueOrigin = cordova.file.dataDirectory + imageName;
    return trueOrigin;
  }
 
  $scope.addMedia = function() {
    $scope.hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: 'Take photo' },
        { text: 'Photo from library' }
      ],
      titleText: 'Add images',
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        $scope.addImage(index);
      }
    });
  }
 
  $scope.addImage = function(type) {
    $scope.hideSheet();
    ImageService.handleMediaDialog(type).then(function() {
      $scope.$apply();
    });
  }

// Audio Recorder
  $scope.captureAudio = function() {
    var options = { limit: 1, duration: 10 };

    $cordovaCapture.captureAudio(options).then(function(audioData) {
      // Success! Audio data is here
      console.log(audioData[0].fullPath);
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

// // capture callback
// var captureSuccess = function(mediaFiles) {
//     var i, path, len;
//     for (i = 0, len = mediaFiles.length; i < len; i += 1) {
//         path = mediaFiles[i].fullPath;
//         // do something interesting with the file
//         console.log(path);
//         console.log(mediaFiles);
//     }
// };

// // capture error callback
// var captureError = function(error) {
//     navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
// };
// var record = function(){
// // start audio capture
// navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
// };

});
