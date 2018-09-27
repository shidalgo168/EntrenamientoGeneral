// Mustache template for the agents
var TEMPLATE = '{{#companies}}\
<div class="agent">\
  <p class="agent__name">{{name}}</p>\
  {{#isCertified}}\
  <img src="images/certified.png" alt="ribbon" class="agent__ribbon">\
  {{/isCertified}}\
  <div class="agent__separator"></div>\
  <img class="agent__photo" src="{{image}}">\
  <div class="agent__description">{{description}}</div>\
  <div class="agent__price">Desde: ${{rate}} / {{hours}} horas</div>\
  <div class="agent__button">\
    <div class="agent__button-text">Contratar</div>\
  </div>\
</div>\
{{/companies}}';