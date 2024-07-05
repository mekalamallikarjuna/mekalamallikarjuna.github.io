import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function AngularJSConcepts() {
  return (
    <div className="content">
      <h1>AngularJS Programming Concepts</h1>
      
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header><b>1. Introduction to AngularJS</b></Accordion.Header>
          <Accordion.Body>
            <strong>Definition:</strong> AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header><b>2. Directives</b></Accordion.Header>
          <Accordion.Body>
            <p>Directives are one of the core features of AngularJS, allowing you to invent new HTML syntax specific to your application.</p>
            <p><strong>Example:</strong></p>
            <pre>{`<div ng-app="myApp">
  <div ng-controller="myCtrl">
    <p>{{ message }}</p>
  </div>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.message = "Hello, World!";
});
</script>`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header><b>3. Modules</b></Accordion.Header>
          <Accordion.Body>
            <p>Modules are containers for the different parts of your application – controllers, services, filters, directives, etc.</p>
            <p><strong>Example:</strong></p>
            <pre>{`var app = angular.module('myApp', []);`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header><b>4. Controllers</b></Accordion.Header>
          <Accordion.Body>
            <p>Controllers are JavaScript functions that are used to build a model for the view.</p>
            <p><strong>Example:</strong></p>
            <pre>{`app.controller('myCtrl', function($scope) {
  $scope.message = "Hello, World!";
});`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header><b>5. Services</b></Accordion.Header>
          <Accordion.Body>
            <p>Services are singletons that are instantiated only once during the lifetime of an application. They are used to share data and functions across the application.</p>
            <p><strong>Example:</strong></p>
            <pre>{`app.service('myService', function() {
  this.sayHello = function() {
    return "Hello, World!";
  };
});

app.controller('myCtrl', function($scope, myService) {
  $scope.message = myService.sayHello();
});`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header><b>6. Dependency Injection</b></Accordion.Header>
          <Accordion.Body>
            <p>AngularJS has a built-in dependency injection subsystem that helps the developer to build, understand, and test the application easily.</p>
            <p><strong>Example:</strong></p>
            <pre>{`app.controller('myCtrl', function($scope, $http) {
  $http.get('https://api.example.com/data')
    .then(function(response) {
      $scope.data = response.data;
    });
});`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header><b>7. Filters</b></Accordion.Header>
          <Accordion.Body>
            <p>Filters allow you to format data displayed to the user.</p>
            <p><strong>Example:</strong></p>
            <pre>{`<div ng-app="myApp">
  <div ng-controller="myCtrl">
    <p>{{ message | uppercase }}</p>
  </div>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.message = "hello, world!";
});
</script>`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header><b>8. Routing</b></Accordion.Header>
          <Accordion.Body>
            <p>Routing allows you to create different URLs for different content in your application. The <code>ngRoute</code> module is used for this purpose.</p>
            <p><strong>Example:</strong></p>
            <pre>{`var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'main.html'
  })
  .when('/about', {
    templateUrl : 'about.html'
  });
});`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header><b>9. Two-Way Data Binding</b></Accordion.Header>
          <Accordion.Body>
            <p>Two-way data binding ensures that any change in the model updates the view and vice versa.</p>
            <p><strong>Example:</strong></p>
            <pre>{`<div ng-app="myApp">
  <div ng-controller="myCtrl">
    <input ng-model="message">
    <p>{{ message }}</p>
  </div>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.message = "Hello, World!";
});
</script>`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header><b>10. Custom Directives</b></Accordion.Header>
          <Accordion.Body>
            <p>Custom directives extend HTML by creating custom tags and attributes.</p>
            <p><strong>Example:</strong></p>
            <pre>{`var app = angular.module('myApp', []);

app.directive('myDirective', function() {
  return {
    template : "Hello, World!"
  };
});`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10">
          <Accordion.Header><b>11. Forms and Validation</b></Accordion.Header>
          <Accordion.Body>
            <p>AngularJS provides form validation out of the box.</p>
            <p><strong>Example:</strong></p>
            <pre>{`<div ng-app="myApp">
  <div ng-controller="myCtrl">
    <form name="myForm">
      <input type="text" name="username" ng-model="username" required>
      <span ng-show="myForm.username.$touched && myForm.username.$invalid">The username is required.</span>
    </form>
  </div>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  // Controller code here
});
</script>`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="11">
          <Accordion.Header><b>12. Testing</b></Accordion.Header>
          <Accordion.Body>
            <p>AngularJS is designed with testability in mind. There are several ways to test AngularJS applications, such as unit testing with Jasmine and end-to-end testing with Protractor.</p>
            <p><strong>Example:</strong></p>
            <pre>{`describe('myApp', function() {
  beforeEach(module('myApp'));

  describe('myCtrl', function() {
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('myCtrl', {$scope: scope});
    }));

    it('should create "message" model with "Hello, World!"', function() {
      expect(scope.message).toBe('Hello, World!');
    });
  });
});`}</pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AngularJSConcepts;
