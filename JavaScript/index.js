/******************************************************************************/
/******************************************************************************/
/**                                                                          **/
/**   Name: Eric Lin                                                         **/
/**   Last Modified: September 4th, 2017                                     **/
/**   File Name: index.js                                                    **/
/**   Description: JavaScript file for 'index.html'. Contains the backend    **/
/**   code.                                                                  **/
/**                                                                          **/
/******************************************************************************/
/******************************************************************************/


function index_expand(type)
{
  switch(type)
  {
    case 'Lifestyle':
      $("#index_lifestyle_box" ).slideDown(500); //.css('overflow', 'visible');
      $("#index_dropdown_arrow").toggleClass('flip');
      var dropdown_button = document.getElementById('index_lifestyle_dropdown');
      dropdown_button.onclick = function()
      {
        $( "#index_lifestyle_box" ).slideUp( 500); //.css('overflow', 'visible');
        dropdown_button.onclick = function()
        {
          index_expand(type);
        }
      }
      break;
    case 'Furniture':
      $( "#index_furniture_box" ).slideDown(500); //.css('overflow', 'visible');
      var dropdown_button = document.getElementById('index_furniture_dropdown');
      dropdown_button.onclick = function()
      {
        $( "#index_furniture_box" ).slideUp( 500); //.css('overflow', 'visible')
        dropdown_button.onclick = function()
        {
          index_expand(type);
        }
      }
      break;
    case 'Accessories':
      $( "#index_accessories_box" ).slideDown(500); //.css('overflow', 'visible');
      var dropdown_button = document.getElementById('index_accessories_dropdown');
      dropdown_button.onclick = function()
      {
        $( "#index_accessories_box" ).slideUp( 500); //.css('overflow', 'visible')
        dropdown_button.onclick = function()
        {
          index_expand(type);
        }
      }
      break;
    case 'Settings':
      $( "#index_settings_box" ).slideDown(500); //.css('overflow', 'visible');
      var dropdown_button = document.getElementById('index_settings_dropdown');
      dropdown_button.onclick = function()
      {
        $( "#index_settings_box" ).slideUp( 500); //.css('overflow', 'visible');
        dropdown_button.onclick = function()
        {
          index_expand(type);
        }
      }
      break;
    default:
      break;
  }
}

function index_save(type)
{
  var element = document.getElementById('settings_name');
  var element_button = document.getElementById('settings_name_button');
  change_successful_helper(element, element_button);
}

function change_successful_helper(element, element_button)
{
  element.style.transition = "0.5s";
  element.value = "Saved";
  element.style.width = "83.75%";
  element_button.style.display = "none";
  element.onclick = function()
  {
    element.style.transition = "0s";
    element.style.width = "80%";
    element.value = "";
    element_button.style.display = "block";
  }
}

$(window).load(function(){
  var random_id = Math.random().toString(36).slice(-8);
  var id = document.getElementById('index_password_title');
  id.innerHTML= "Unique ID: " + random_id;
});
