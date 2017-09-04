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
      $("#index_lifestyle_box" ).slideDown(500);
      $("#index_dropdown_arrow").toggleClass('flip');
      var dropdown_button = document.getElementById('index_lifestyle_dropdown');
      dropdown_button.onclick = function()
      {
        $( "#index_lifestyle_box" ).slideUp( 500, function() {
          dropdown_button.onclick = function()
          {
            index_expand(type);
          }
        });
      }
      break;
    case 'Furniture':
      $( "#index_furniture_box" ).slideDown(500);
      var dropdown_button = document.getElementById('index_furniture_dropdown');
      dropdown_button.onclick = function()
      {
        $( "#index_furniture_box" ).slideUp( 500, function() {
          dropdown_button.onclick = function()
          {
            index_expand(type);
          }
        });
      }
      break;
    case 'Accessories':
      $( "#index_accessories_box" ).slideDown(500);
      var dropdown_button = document.getElementById('index_accessories_dropdown');
      dropdown_button.onclick = function()
      {
        $( "#index_accessories_box" ).slideUp( 500, function() {
          dropdown_button.onclick = function()
          {
            index_expand(type);
          }
        });
      }
      break;
    case 'Settings':
      $( "#index_settings_box" ).slideDown(500);
      var dropdown_button = document.getElementById('index_settings_dropdown');
      dropdown_button.onclick = function()
      {
        $( "#index_settings_box" ).slideUp( 500, function() {
          dropdown_button.onclick = function()
          {
            index_expand(type);
          }
        });
      }
      break;
    default:
      break;
  }
}

function index_generate_password()
{
}
