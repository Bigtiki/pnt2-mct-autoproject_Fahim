$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/AllTestFeatures/Validation_FotterLinks.feature");
formatter.feature({
  "name": "Footer Links",
  "description": "User can go to the footer links",
  "keyword": "Feature"
});
formatter.background({
  "name": "User on HOme Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on MCT home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Mct_login_steps.user_is_on_MCT_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can got to links in the footer section",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User can go to footer links",
  "keyword": "And "
});
formatter.match({
  "location": "Mct_ValidateFooter_steps.user_can_go_to_footer_links()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});