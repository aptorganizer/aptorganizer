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

var current_id;
var name;

var lifestyle_value; //= new Array();
var furniture_value;// = new Array();
var bedroom_value; //= new Array();
var accessories_value; //= new Array();
var miscellaneous_value; //= new Array();

var lifestyle_bool;
var furniture_bool;
var bedroom_bool;
var accessories_bool;
var miscellaneous_bool;

function index_expand(type)
{
  switch(type)
  {
    case 'Lifestyle':

      $(".slide_element_lifestyle" ).slideDown(500).css('overflow', 'visible');
      var dropdown_button = document.getElementById('index_lifestyle_dropdown');
      dropdown_button.onclick = function()
      {
        $(".slide_element_lifestyle" ).slideUp(500).css('overflow', 'visible');
        dropdown_button.onclick = function()
        {
          index_expand(type);
        }
      }
      break;
    case 'Furniture':
      $( ".slide_element_furniture" ).slideDown(500).css('overflow', 'visible');
      var dropdown_button = document.getElementById('index_furniture_dropdown');
      dropdown_button.onclick = function()
      {
        $( ".slide_element_furniture" ).slideUp( 500).css('overflow', 'visible')
        dropdown_button.onclick = function()
        {
          index_expand(type);
        }
      }
      break;
    case 'Bedroom':
      $( ".slide_element_bedroom" ).slideDown(500).css('overflow', 'visible');
      var dropdown_button = document.getElementById('index_bedroom_dropdown');
      dropdown_button.onclick = function()
      {
        $( ".slide_element_bedroom" ).slideUp( 500).css('overflow', 'visible')
        dropdown_button.onclick = function()
        {
          index_expand(type);
        }
      }
      break;
    case 'Accessories':
      $( ".slide_element_accessories" ).slideDown(500).css('overflow', 'visible');
      var dropdown_button = document.getElementById('index_accessories_dropdown');
      dropdown_button.onclick = function()
      {
        $( ".slide_element_accessories" ).slideUp( 500).css('overflow', 'visible')
        dropdown_button.onclick = function()
        {
          index_expand(type);
        }
      }
      break;
    case 'Miscellaneous':
      $( ".slide_element_miscellaneous" ).slideDown(500).css('overflow', 'visible');
      var dropdown_button = document.getElementById('index_miscellaneous_dropdown');
      dropdown_button.onclick = function()
      {
        $( ".slide_element_miscellaneous" ).slideUp( 500).css('overflow', 'visible')
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
/*
function creating_room_2()
{
  var ind = document.getElementById('index_password_title');
  var room_id = window.location.hash.substring(1)
  ind.innerHTML = "Room ID: " + room_id;
}*/

function show_input()
{
  $("#index_join_existing_room").animate({width:'toggle'},1000);
  var input = document.getElementById('index_join_existing_room');
  var button = document.getElementById('index_join_existing_room_button');
  button.onclick = function()
  {
    if (input.value == "")
    {
      input.style.display = "none";
      button.onclick = function()
      {
        show_input();
      }
    }
    else
    {
      firebase.database().ref('rooms/' + input.value).once("value", snapshot => {
        const value = snapshot.val();
        if (value)
        {
         window.location.href = "index.html" + '#' + input.value;
         location.reload();
        }
      });
    }
  }
//  $("#index_join_existing_room" ).slideDown(500); //.css('overflow', 'visible');
}

function add(type)
{

  var new_minus = document.createElement("IMG");
  new_minus.src = "../Images/minus.png";
  new_minus.className += " slide_element";
  new_minus.className += " minus_button";
  new_minus.className += " hover_transparent";
  new_minus.style.display = "block";

  var new_input = document.createElement("INPUT");
  new_input.className += " box_input";
  new_input.className += " slide_element";
  new_input.style.display = "block";
/*
  var new_select = document.createElement("IMG");
  new_select.src = "../Images/select.png";
  new_select.className += " slide_element";
  new_select.className += " select_button";
  new_select.className += " hover_transparent";
  new_select.className += " input_checkbox_select";
  new_select.style.display = "block";
*/
  var new_check = document.createElement("IMG");
  new_check.src = "../Images/check.png";
  new_check.className += " input_checkbox";
  new_check.className += " slide_element";
  new_check.className += " hover_transparent";
  new_check.title = "Save";
  new_check.style.display = "block";

  switch(type)
  {
    case 'lifestyle':
      new_minus.className += " slide_element_lifestyle";
      new_input.className += " slide_element_lifestyle";
      new_check.className += " slide_element_lifestyle";
    //  new_select.className += " slide_element_lifestyle";
      var box = document.getElementById('index_lifestyle_box');
      $('#index_lifestyle_box').height( $("#index_lifestyle_box").height() + 79 );
      break;
    case 'furniture':
      new_minus.className += " slide_element_furniture";
      new_input.className += " slide_element_furniture";
  //    new_select.className += " slide_element_furniture";
      new_check.className += " slide_element_furniture";
      var box = document.getElementById('index_furniture_box');
      $('#index_furniture_box').height( $("#index_furniture_box").height() + 79 );
      break;
    case 'bedroom':
      new_minus.className += " slide_element_bedroom";
      new_input.className += " slide_element_bedroom";
  //    new_select.className += " slide_element_bedroom";
      new_check.className += " slide_element_bedroom";
      var box = document.getElementById('index_bedroom_box');
      $('#index_bedroom_box').height( $("#index_bedroom_box").height() + 79 );
      break;
    case 'accessories':
      new_minus.className += " slide_element_accessories";
      new_input.className += " slide_element_accessories";
  //    new_select.className += " slide_element_accessories";
      new_check.className += " slide_element_accessories";
      var box = document.getElementById('index_accessories_box');
      $('#index_accessories_box').height( $("#index_accessories_box").height() + 79 );
      break;
    case 'miscellaneous':
      new_minus.className += " slide_element_miscellaneous";
      new_input.className += " slide_element_miscellaneous";
    //   new_select.className += " slide_element_miscellaneous";
      new_check.className += " slide_element_miscellaneous";
      var box = document.getElementById('index_miscellaneous_box');
      $('#index_miscellaneous_box').height( $("#index_miscellaneous_box").height() + 79 );
      break;
    default:
      break;
  }
  box.appendChild(new_minus);
  box.appendChild(new_input);
  box.appendChild(new_check);
  //box.appendChild(new_select);

  var to_remove = new_input;

  new_check.onclick = function()
  {
    if (new_input.value != "")
    {
      var new_div = document.createElement("DIV");
      new_div.className += " box_div";
      new_div.className += " slide_element";
      new_div.style.display = "block";
      new_div.className += " slide_element_lifestyle";
      new_div.innerHTML = new_input.value;
      box.removeChild(new_input);
      box.insertBefore(new_div, new_check);

      save_firebase(type, new_div, new_div.innerHTML);

      new_check.src = "../Images/select.png";
      to_remove = new_div;

      new_check.onclick = function()
      {
        check_helper(new_check, new_div);
      }
    }
  }
//#5c7598
  new_minus.onclick = function()
  {
    remove_element(new_minus, to_remove, new_check, box, type);
  }

}

function check_helper(new_check, new_div)
{
  new_check.src = "../Images/selected.png";
  new_div.style.backgroundColor = "#5c7598";
  new_div.style.fontWeight = "bolder";
  new_div.innerHTML = new_div.innerHTML + " - " + name;

  new_check.onclick = function()
  {
    new_check.src = "../Images/select.png";
    new_div.style.backgroundColor = "#abb7c8";
    new_div.innerHTML= new_div.innerHTML.substring(0, new_div.innerHTML.length - name.length - 3);
    new_div.style.fontWeight = "normal";
    new_check.onclick = function()
    {
      check_helper(new_check, new_div, new_div.innerHTML);
    }
  }
}

function remove_element(minus, input, check, box, type)
{
  box.removeChild(minus);
  box.removeChild(input);
  box.removeChild(check);
  switch(type)
  {
    case 'lifestyle':
      $('#index_lifestyle_box').height( $("#index_lifestyle_box").height() - 79 );
      break;
    case 'furniture':
      $('#index_furniture_box').height( $("#index_furniture_box").height() - 79 );
      break;
    case 'bedroom':
      $('#index_bedroom_box').height( $("#index_bedroom_box").height() - 79 );
      break;
    case 'accessories':
      $('#index_accessories_box').height( $("#index_accessories_box").height() - 79 );
      break;
    case 'miscellaneous':
      $('#index_miscellaneous_box').height( $("#index_miscellaneous_box").height() - 79 );
      break;
    default:
      break;
  }
}

function save_selected(select, input, type)
{
  switch(type)
  {
    case 'select':
      select.src = "../Images/selected.png";
      input.value = input.value + " - " + name;
      select.onclick = function()
      {
        save_selected(select, input, 'unselect');
      }
      break;
    case 'unselect':
      select.src = "../Images/select.png";
      input.value = input.value.substring(0, input.value.length - name.length - 3);
      select.onclick = function()
      {
        save_selected(select, input, 'select');
      }
      break;
    default:
      break;
  }
}

function clear_top(type)
{
  switch(type)
  {
    case 'lifestyle':
      var input = document.getElementById('lifestyle_input');
      break;
    case 'furniture':
      var input = document.getElementById('furniture_input');
      break;
    case 'bedroom':
      var input = document.getElementById('bedroom_input');
      break;
    case 'accessories':
      var input = document.getElementById('accessories_input');
      break;
    case 'miscellaneous':
      var input = document.getElementById('miscellaneous_input');
      break;
    default:
      break;
  }
  input.placeholder = "";
  input.value = "";
}

/************/

function save_top(type, index_input, index_check)
{
  var input;
  var check;

  switch(type)
  {
    case 'lifestyle':
      var fresh_input =  document.getElementById('lifestyle_input');
      var fresh_check = document.getElementById('lifestyle_top_check');
      var minus = document.getElementById('lifestyle_top_minus');
      var box = document.getElementById('index_lifestyle_box');
      break;
    case 'furniture':
      var fresh_input =  document.getElementById('furniture_input');
      var fresh_check = document.getElementById('furniture_top_check');
      var minus = document.getElementById('furniture_top_minus');
      var box = document.getElementById('index_furniture_box');
      break;
    case 'bedroom':
      var fresh_input =  document.getElementById('bedroom_input');
      var fresh_check = document.getElementById('bedroom_top_check');
      var minus = document.getElementById('bedroom_top_minus');
      var box = document.getElementById('index_bedroom_box');
      break;
    case 'accessories':
      var fresh_input =  document.getElementById('accessories_input');
      var fresh_check = document.getElementById('accessories_top_check');
      var minus = document.getElementById('accessories_top_minus');
      var box = document.getElementById('index_accessories_box');
      break;
    case 'miscellaneous':
      var fresh_input =  document.getElementById('miscellaneous_input');
      var fresh_check = document.getElementById('miscellaneous_top_check');
      var minus = document.getElementById('miscellaneous_top_minus');
      var box = document.getElementById('index_miscellaneous_box');
      break;
    default:
      break;
  }

  if (!index_input)
  {
    input = fresh_input;
  }
  else
  {
    input = index_input;
  }
  if (!index_check)
  {
    check = fresh_check;
  }
  else
  {
    check = index_check;
  }

  if (input.value != "")
  {
    var new_div = document.createElement("DIV");
    new_div.className += " box_div";
    new_div.className += " slide_element";
    new_div.style.display = "block";
    new_div.innerHTML = input.value;

    switch(type)
    {
      case 'lifestyle':
        new_div.className += " slide_element_lifestyle";
        break;
      case 'furniture':
        new_div.className += " slide_element_furniture";
        break;
      case 'bedroom':
        new_div.className += " slide_element_bedroom";
        break;
      case 'accessories':
        new_div.className += " slide_element_accessories";
        break;
      case 'miscellaneous':
        new_div.className += " slide_element_miscellaneous";
        break;
      default:
        break;
    }
    box.removeChild(input);
    box.insertBefore(new_div, check);

    save_firebase(type, new_div);

    check.src = "../Images/select.png";
    check.onclick = function()
    {
      check_helper(check, new_div);
    }
  }

  minus.onclick = function()
  {
    var new_input = document.createElement("INPUT");
    new_input.className += " box_input";
    new_input.className += " slide_element";
    new_input.style.display = "block";
    new_input.innerHTML = input.value;
    switch(type)
    {
      case 'lifestyle':
        new_input.className += " slide_element_lifestyle";
        new_input.placeholder = "e.g. Microwave";
        break;
      case 'furniture':
        new_input.className += " slide_element_furniture";
        new_input.placeholder = "e.g. Couch";
        break;
      case 'bedroom':
        new_input.className += " slide_element_bedroom";
        new_input.placeholder = "e.g. Mattress";
        break;
      case 'accessories':
        new_input.className += " slide_element_accessories";
        new_input.placeholder = "e.g. Trash Can";
        break;
      case 'miscellaneous':
        new_input.className += " slide_element_miscellaneous";
        new_input.placeholder = "e.g. Cards against Humanity!";
        break;
      default:
        break;
    }
    box.removeChild(new_div);
    box.insertBefore(new_input, check);
    check.src = "../Images/check.png";
    check.onclick = function()
    {
      save_top(type, new_input, check);
    }
  }
}

function save_firebase(type, element, value)
{
  var arr;
  var to_change_array;

  switch(type)
  {
    case 'lifestyle':
      arr = 'lifestyle_value';
      to_change_array = lifestyle_value;
      break;
    case 'furniture':
      arr = 'furniture_value';
      to_change_array = furniture_value;
      break;
    case 'bedroom':
      arr = 'bedroom_value';
      to_change_array = bedroom_value;
      break;
    case 'accessories':
      arr = 'accessories_value';
      to_change_array = accessories_value;
      break;
    case 'miscellaneous':
      arr = 'miscellaneous_value';
      to_change_array = miscellaneous_value;
      break;
    default:
      break;
  }
  var counter = 0;

  while (box.firstChild != element)
  {
    counter++;
  }

  var updates = {};
  to_change_array[counter] = value;
  updates['/rooms/' + current_id + '/' + arr] = to_change_array;
  database.ref().update(updates);
}
/////


function add_from_load(type, value, bool, num, box)
{

  var new_minus = document.createElement("IMG");
  new_minus.src = "../Images/minus.png";
  new_minus.className += " slide_element";
  new_minus.className += " minus_button";
  new_minus.className += " hover_transparent";

  var new_div;

  new_div = document.createElement("DIV");
  new_div.className += " box_div";
  new_div.className += " slide_element";
  new_div.innerHTML = value;

  var new_check = document.createElement("IMG");
  new_check.className += " input_checkbox";
  new_check.className += " slide_element";
  new_check.className += " hover_transparent";

  var str;

  switch(type)
  {
    case 'lifestyle':
      str = " slide_element_lifestyle";
      var box = document.getElementById('index_lifestyle_box');
      $('#index_lifestyle_box').height( $("#index_lifestyle_box").height() + 79 );
      break;
    case 'furniture':
      str = " slide_element_furniture";
      var box = document.getElementById('index_furniture_box');
      $('#index_furniture_box').height( $("#index_furniture_box").height() + 79 );
      break;
    case 'bedroom':
      str = " slide_element_bedroom";
      var box = document.getElementById('index_bedroom_box');
      $('#index_bedroom_box').height( $("#index_bedroom_box").height() + 79 );
      break;
    case 'accessories':
      str = " slide_element_accessories";
      var box = document.getElementById('index_accessories_box');
      $('#index_accessories_box').height( $("#index_accessories_box").height() + 79 );
      break;
    case 'miscellaneous':
      str = " slide_element_miscellaneous";
      var box = document.getElementById('index_miscellaneous_box');
      $('#index_miscellaneous_box').height( $("#index_miscellaneous_box").height() + 79 );
      break;
    default:
      break;
  }
  new_minus.className += str;
  new_div.className += str;
  new_check.className += str;

  if (bool == "true")
  {
    new_check.src = "../Images/selected.png";
    new_div.style.backgroundColor = "#5c7598";
  }
  else
  {
    new_check.src = "../Images/select.png";
    new_div.style.backgroundColor = "#abb7c8";
  }

  box.appendChild(new_minus);
  box.appendChild(new_div);
  box.appendChild(new_check);

  var to_remove = new_div;


    new_check.onclick = function()
    {
      check_helper(new_check, new_div);
    }


  new_minus.onclick = function()
  {
    remove_element(new_minus, to_remove, new_check, box, type);
  }
}

////

function populate_boxes(values, bools, type)
{
  var box;

  switch(type)
  {
    case 'lifestyle':
      box = document.getElementById('index_lifestyle_box')
      break;
    case 'furniture':
      box = document.getElementById('index_furniture_box');
      break;
    case 'bedroom':
      box = document.getElementById('index_bedroom_box');
      break;
    case 'accessories':
      box = document.getElementById('index_accessories_box');
      break;
    case 'miscellaneous':
      box = document.getElementById('index_miscellaneous_box');
      break;
    default:
      break;
  }
  if (values[0] == "" || bools[0] == "")
  {
    while(box.firstChild.firstChild)
    {
      box.removeChild(box.firstChild());
    }
    return;
  }
  else
  {
    while (box.firstChild) {
      box.removeChild(box.firstChild);
    }
    box.style.height = "31px";
  }
  for (var i = 0; i < values.length; i++)
  {
    add_from_load(type, values[i], bools[i], i, box);
  }
}

window.onload = function ()
{
  var ind = document.getElementById('index_password_title');
  var room_id = window.location.hash.substring(1, 9);
  name = window.location.hash.substring(10);
  ind.innerHTML = "Room ID: " + room_id;
  current_id = room_id;

  database.ref('rooms/' + room_id + '/lifestyle_value').on('value', function(snapshot)
  {
    lifestyle_value = snapshot.val();
    database.ref('rooms/' + room_id + '/lifestyle_bool').on('value', function(snapshot)
    {
      lifestyle_bool = snapshot.val();
      populate_boxes(lifestyle_value, lifestyle_bool, 'lifestyle');
    });
  });

  database.ref('rooms/' + room_id + '/furniture_value').on('value', function(snapshot)
  {
    furniture_value = snapshot.val();
    database.ref('rooms/' + room_id + '/furniture_bool').on('value', function(snapshot)
    {
      furniture_bool = snapshot.val();
    //  populate_boxes(furniture_value, furniture_bool, 'furniture');
    });
  });

  database.ref('rooms/' + room_id + '/bedroom_value').on('value', function(snapshot)
  {
    bedroom_value = snapshot.val();
    database.ref('rooms/' + room_id + '/bedroom_bool').on('value', function(snapshot)
    {
      bedroom_bool = snapshot.val();
  //    populate_boxes(bedroom_value, bedroom_bool, 'bedroom');
    });
  });

  database.ref('rooms/' + room_id + '/accessories_value').on('value', function(snapshot)
  {
    accessories_value = snapshot.val();
    database.ref('rooms/' + room_id + '/accessories_bool').on('value', function(snapshot)
    {
      accessories_bool = snapshot.val();
//      populate_boxes(accessories_value, accessories_bool, 'accessories');
    });
  });

  database.ref('rooms/' + room_id + '/miscellaneous_value').on('value', function(snapshot)
  {
    miscellaneous_value = snapshot.val();
    database.ref('rooms/' + room_id + '/miscellaneous_bool').on('value', function(snapshot)
    {
      miscellaneous_bool = snapshot.val();
  //    populate_boxes(miscellaneous_value, miscellaneous_bool, 'miscellaneous');
    });
  });

}
