//Created by Frank 07.02.2016 on (1:14). FOR PROJECT Green COPYLEFT 2016 (��??)
//FILE NAME: states __ (IDE PhpStorm) �����
//?????????????????????????????????????????????????????????????????????????????????
import app from "../application";

import TodoListCtrl from "../templates/todo/todo.html";

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('front', {
      url: "/todo",
      templateUrl: "partials/state1.html"
    })

    .state('front.list', {
      url: "/list",
      templateUrl: TodoListCtrl,
      controller: "TodoListController"
    })
});