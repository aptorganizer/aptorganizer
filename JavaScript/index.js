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
var name = "Guest";
var unique_id;

var lifestyle; //= new Array();
var furniture;// = new Array();
var bedroom; //= new Array();
var accessories; //= new Array();
var miscellaneous; //= new Array();

function index_expand(type)
{
  switch(type)
  {
    case 'lifestyle':
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
    case 'furniture':
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
    case 'bedroom':
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
    case 'accessories':
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
    case 'miscellaneous':
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

/*
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
         console.log("here");
         window.location.href = "index.html" + '#' + input.value;
         location.reload();
        }
      });
    }
  }
//  $("#index_join_existing_room" ).slideDown(500); //.css('overflow', 'visible');
}

function add(type, num)
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

  var to_remove = new_input;
  var item_id = "" + Math.random().toString(36).slice(-8);

  new_check.onclick = function()
  {
    if (new_input.value != "")
    {
      console.log("here");
      var new_div = document.createElement("DIV");
      new_div.className += " box_div";
      new_div.className += " slide_element";
      new_div.style.display = "block";
      new_div.className += " slide_element_lifestyle";
      new_div.innerHTML = new_input.value;
      var firebase_value = new_input.value;
      box.removeChild(new_input);
      box.insertBefore(new_div, new_check);
      new_check.src = "../Images/select.png";
      to_remove = new_div;
      var len = 0;
      switch(type)
      {
        case 'lifestyle':
          len = lifestyle[0].length;
          break;
        case 'furniture':
          len = furniture[0].length;
          break;
        case 'bedroom':
          len = bedroom[0].length;
          break;
        case 'accessories':
          len = accessories[0].length;
          break;
        case 'miscellaneous':
          len = miscellaneous[0].length;
          break;
        default:
          break;
      }
      save_firebase(type, firebase_value, "false", "", item_id);
      new_check.onclick = function()
      {
        check_helper(new_check, new_div, item_id, type);
        save_firebase(type, firebase_value, "true", name, item_id);
      }
    }
  }
  new_minus.onclick = function()
  {
    remove_element(new_minus, to_remove, new_check, box, type);
    remove_firebase(type, item_id);
  }
}

function check_helper(new_check, new_div, num, type)
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
    var firebase_value = new_div.innerHTML;
    save_firebase(type, firebase_value, "false", "", num);

    new_check.onclick = function()
    {
      check_helper(new_check, new_div, num, type);
      save_firebase(type, firebase_value, "true", name, num);
    }
  }
}

function check_helper_selected(new_check, new_div, num, type)
{
  new_check.src = "../Images/select.png";
  new_div.style.backgroundColor = "#abb7c8";
  new_div.style.fontWeight = "normal";
  new_div.innerHTML= new_div.innerHTML.substring(0, new_div.innerHTML.length - name.length - 3);
  var value = new_div.innerHTML;

  new_check.onclick = function()
  {
    new_check.src = "../Images/selected.png";
    new_div.style.backgroundColor = "#5c7598";
    new_div.style.fontWeight = "bolder";
    new_div.innerHTML = new_div.innerHTML + " - " + name;
    save_firebase(type, value, "true", name, num);
    var new_value = new_div.innerHTML.substring(0, new_div.innerHTML.length - name.length - 3);

    new_check.onclick = function()
    {
      check_helper_selected(new_check, new_div, num, type);
      save_firebase(type, new_value, "false", "", num);
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
/*
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

*/

function remove_firebase(type, num)
{
  var updates = {};
  var position = 0;

  switch(type)
  {
    case 'lifestyle':
      var values = lifestyle[0];
      var bools = lifestyle[1];
      var names = lifestyle[2];
      var ids = lifestyle[3];
      var item_ids = lifestyle[4];
      break;
    case 'furniture':
      var values = furniture[0];
      var bools = furniture[1];
      var names = furniture[2];
      var ids = furniture[3];
      var item_ids = furniture[4];
      break;
    case 'bedroom':
      var values = bedroom[0];
      var bools = bedroom[1];
      var names = bedroom[2];
      var ids = bedroom[3];
      var item_ids = bedroom[4];
      break;
    case 'accessories':
      var values = accessories[0];
      var bools = accessories[1];
      var names = accessories[2];
      var ids = accessories[3];
      var item_ids = accessories[4];
      break;
    case 'miscellaneous':
      var values = miscellaneous[0];
      var bools = miscellaneous[1];
      var names = miscellaneous[2];
      var ids = miscellaneous[3];
      var item_ids = miscellaneous[4];
      break;
    default:
      break;
  }
  for (var i = 0; i < item_ids.length; i++)
  {
    if (item_ids[i] == num)
    {
      position = i;
    }
  }
  if (position == 0)
  {
    values[position] = "";
    bools[position] = "";
    names[position] = "";
    ids[position] = "";
    item_ids[position] = "";
    switch(type)
    {
      case 'lifestyle':
        updates['/rooms/' + current_id + '/lifestyle/'] = lifestyle;
        break;
      case 'furniture':
        updates['/rooms/' + current_id + '/furniture/'] = furniture;
        break;
      case 'bedroom':
        updates['/rooms/' + current_id + '/bedroom/'] = bedroom;
        break;
      case 'accessories':
        updates['/rooms/' + current_id + '/accessories/'] = accessories;
        break;
      case 'miscellaneous':
        updates['/rooms/' + current_id + '/miscellaneous/'] = miscellaneous;
        break;
      default:
        break;
    }

    return database.ref().update(updates);
  }
  for (var i = position; i < values.length - 1; i++)
  {
    values[i] = values[i + 1];
    bools[i] = bools[i + 1];
    names[i] = names[i + 1];
    ids[i] = ids[i + 1];
    item_ids[i] = item_ids[i + 1];
  }
  values.pop();
  bools.pop();
  names.pop();
  ids.pop();
  item_ids.pop();

  switch(type)
  {
    case 'lifestyle':
      updates['/rooms/' + current_id + '/lifestyle/'] = lifestyle;
      break;
    case 'furniture':
      updates['/rooms/' + current_id + '/furniture/'] = furniture;
      break;
    case 'bedroom':
      updates['/rooms/' + current_id + '/bedroom/'] = bedroom;
      break;
    case 'accessories':
      updates['/rooms/' + current_id + '/accessories/'] = accessories;
      break;
    case 'miscellaneous':
      updates['/rooms/' + current_id + '/miscellaneous/'] = miscellaneous;
      break;
    default:
      break;
  }

  return database.ref().update(updates);
}

function save_firebase(type, value, bool, name, item_id)
{
  var updates = {};

  switch(type)
  {
    case 'lifestyle':
      var position = 0;
      if (lifestyle[0][0] != "")
      {
        var position = lifestyle[0].length;
      }
      var values = lifestyle[0];
      var bools = lifestyle[1];
      var names = lifestyle[2];
      var ids = lifestyle[3];
      var item_ids = lifestyle[4];
      for (var i = 0; i < item_ids.length; i++)
      {
        if (item_ids[i] == item_id)
        {
          position = i;
        }
      }
      values[position] = value;
      bools[position] = bool;
      names[position] = name;
      ids[position] = unique_id;
      item_ids[position] = item_id;
      updates['/rooms/' + current_id + '/lifestyle/'] = lifestyle;
      break;
    case 'furniture':
      var position = 0;
      if (furniture[0][0] != "")
      {
        var position = furniture[0].length;
      }
      var values = furniture[0];
      var bools = furniture[1];
      var names = furniture[2];
      var ids = furniture[3];
      var item_ids = furniture[4];
      for (var i = 0; i < item_ids.length; i++)
      {
        if (item_ids[i] == item_id)
        {
          position = i;
        }
      }
      values[position] = value;
      bools[position] = bool;
      names[position] = name;
      ids[position] = unique_id;
      item_ids[position] = item_id;
      updates['/rooms/' + current_id + '/furniture/'] = furniture;
      break;
    case 'bedroom':
      var position = 0;
      if (bedroom[0][0] != "")
      {
        var position = bedroom[0].length;
      }
      var values = bedroom[0];
      var bools = bedroom[1];
      var names = bedroom[2];
      var ids = bedroom[3];
      var item_ids = bedroom[4];
      for (var i = 0; i < item_ids.length; i++)
      {
        if (item_ids[i] == item_id)
        {
          position = i;
        }
      }
      values[position] = value;
      bools[position] = bool;
      names[position] = name;
      ids[position] = unique_id;
      item_ids[position] = item_id;
      updates['/rooms/' + current_id + '/bedroom/'] = bedroom;
      break;
    case 'accessories':
      var position = 0;
      if (accessories[0][0] != "")
      {
        var position = accessories[0].length;
      }
      var position = accessories[0].length;
      var values = accessories[0];
      var bools = accessories[1];
      var names = accessories[2];
      var ids = accessories[3];
      var item_ids = accessories[4];
      for (var i = 0; i < item_ids.length; i++)
      {
        if (item_ids[i] == item_id)
        {
          position = i;
        }
      }
      values[position] = value;
      bools[position] = bool;
      names[position] = name;
      ids[position] = unique_id;
      item_ids[position] = item_id;
      updates['/rooms/' + current_id + '/accessories/'] = accessories;
      break;
    case 'miscellaneous':
      var position = 0;
      if (miscellaneous[0][0] != "")
      {
        var position = miscellaneous[0].length;
      }
      var position = miscellaneous[0].length;
      var values = miscellaneous[0];
      var bools = miscellaneous[1];
      var names = miscellaneous[2];
      var ids = miscellaneous[3];
      var item_ids = miscellaneous[4];
      for (var i = 0; i < item_ids.length; i++)
      {
        if (item_ids[i] == item_id)
        {
          position = i;
        }
      }
      values[position] = value;
      bools[position] = bool;
      names[position] = name;
      ids[position] = unique_id;
      item_ids[position] = item_id;
      updates['/rooms/' + current_id + '/miscellaneous/'] = miscellaneous;
      break;
    default:
      break;
  }
  return database.ref().update(updates);
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
  var item_id = "" + Math.random().toString(36).slice(-8);

  if (input.value != "")
  {
    var new_div = document.createElement("DIV");
    new_div.className += " box_div";
    new_div.className += " slide_element";
    new_div.style.display = "block";
    new_div.innerHTML = input.value;
    var firebase_value = input.value;

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
    save_firebase(type, firebase_value, "false", "", item_id);

    check.src = "../Images/select.png";
    check.onclick = function()
    {
      check_helper(check, new_div, item_id, type);
      save_firebase(type, firebase_value, "true", name, item_id);
    }
  }

  minus.onclick = function()
  {
    remove_firebase(type, item_id);
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
      //var new_item_id = "" + Math.random().toString(36).slice(-8);
      //save_firebase(type, "", "false", "", item_id);
    }
  }
}

function add_from_load(type, value, bool, id, item_name, num, idx, box)
{
  var new_minus = document.createElement("IMG");
  new_minus.src = "../Images/minus.png";
  new_minus.className += " slide_element";
  new_minus.className += " minus_button";
  new_minus.className += " hover_transparent";

  var new_div = document.createElement("DIV");
  new_div.className += " box_div";
  new_div.className += " slide_element";

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
    new_div.innerHTML = value + " - " + item_name;
    if (id == unique_id)
    {
      new_check.src = "../Images/selected.png";
      new_check.onclick = function()
      {
        check_helper_selected(new_check, new_div, num, type);
        save_firebase(type, value, "false", "", num);
      }
    }
    else
    {
      new_check.src = "../Images/selected_other.png";
      new_check.classList.remove("hover_transparent");
    }
    new_div.style.backgroundColor = "#5c7598";
    new_div.style.fontWeight = "bolder";
  }
  else if (bool == "false")
  {
    new_div.innerHTML = value;
    new_check.src = "../Images/select.png";
    new_div.style.backgroundColor = "#abb7c8";
    new_check.onclick = function()
    {
      check_helper(new_check, new_div, num, type);
      save_firebase(type, value, "true", name, num);
    }
  }

  box.appendChild(new_minus);
  box.appendChild(new_div);
  box.appendChild(new_check);

  if (idx == 0)
  {
    var new_plus = document.createElement("IMG");
    new_plus.src = "../Images/plus.png";
    new_plus.className += " slide_element";
    new_plus.className += " plus_button";
    new_plus.className += " hover_transparent";
    new_plus.className += str;
    new_plus.onclick = function()
    {
      add(type, idx);
    }
    box.appendChild(new_plus);
  }

  var to_remove = new_div;

  new_minus.onclick = function()
  {
    remove_firebase(type, num);
    if (idx == 0)
    {
      var new_elem = document.createElement("INPUT");
      new_elem.className += " box_input"
      new_elem.className += " slide_element";
      new_elem.className += " slide_element_lifestyle";
      new_elem.placeholder = "e.g. Microwave";
      new_elem.value = "";
      new_check.src = "../Images/check.png";
      new_elem.style.display = "block";
      box.removeChild(new_div);
      box.insertBefore(new_elem, new_check);
      if (bool == "true" && id != unique_id)
      {
        new_check.className += " hover_transparent";
      }
      new_check.onclick = function()
      {
        if (new_elem.value != "")
        {
          var firebase_value = new_elem.value;
          // TODO:
          save_top('lifestyle', new_elem, new_check);
          //save_firebase(type, firebase_value, "false", "", 0);
        }
      }
    }
    else
    {
      remove_element(new_minus, to_remove, new_check, box, type);
    }
  }

  if (bool == "")
  {
    var new_elem = document.createElement("INPUT");
    new_elem.className += " box_input"
    new_elem.className += " slide_element";
    new_elem.className += " slide_element_lifestyle";
    new_elem.placeholder = "e.g. Microwave";
    new_elem.value = "";
    new_check.src = "../Images/check.png";
    box.removeChild(new_div);
    box.insertBefore(new_elem, new_check);
    if (bool == "true" && id != unique_id)
    {
      new_check.className += " hover_transparent";
    }
    new_check.onclick = function()
    {
      if (new_elem.value != "")
      {
        var firebase_value = new_elem.value;
        save_top('lifestyle', new_elem, new_check);
        //save_firebase(type, firebase_value, "false", "", 0);
      }
    }
  }

  return;
}

function populate_boxes(arr, type)
{
  var box;
  var header;

  var values = arr[0];
  var bools = arr[1];
  var name = arr[2];
  var unique_ids = arr[3];
  var item_ids = arr[4];

  switch(type)
  {
    case 'lifestyle':
      box = document.getElementById('index_lifestyle_box')
      header = document.getElementById('index_lifestyle_dropdown');
      break;
    case 'furniture':
      box = document.getElementById('index_furniture_box');
      header = document.getElementById('index_furniture_dropdown');
      break;
    case 'bedroom':
      box = document.getElementById('index_bedroom_box');
      header = document.getElementById('index_bedroom_dropdown');
      break;
    case 'accessories':
      box = document.getElementById('index_accessories_box');
      header = document.getElementById('index_accessories_dropdown');
      break;
    case 'miscellaneous':
      box = document.getElementById('index_miscellaneous_box');
      header = document.getElementById('index_miscellaneous_dropdown');
      break;
    default:
      break;
  }
  if (values.length == 1 && values[0] == "")
  {
    header.className += " hover_transparent";
    header.onclick = function()
    {
      index_expand(type);
    }
    return;
  }
  while (box.hasChildNodes())
  {
    box.removeChild(box.lastChild);
  }

  box.style.height = "31px";

  for (var i = 0; i < values.length; i++)
  {
    add_from_load(type, values[i], bools[i], unique_ids[i], name[i], item_ids[i], i, box);
  }
  header.className += " hover_transparent";
  header.onclick = function()
  {
    index_expand(type);
  }
  return;
}

window.onload = function ()
{
  var ind = document.getElementById('index_password_title');
  var room_id = window.location.hash.substring(1, 11);
  if (!localStorage.getItem('name'))
  {
    prompt("Name", "");
  }
  else
  {
    name = localStorage.getItem('name');
  }
  if (!localStorage.getItem('unique_id'))
  {
    unique_id = "guest";
  }
  else
  {
    unique_id = localStorage.getItem('unique_id');
  }
  console.log(unique_id);

  ind.innerHTML = "Room ID: " + room_id;
  current_id = room_id;

  database.ref('rooms/' + room_id + '/lifestyle').once('value').then(function(snapshot)
  {
    lifestyle = snapshot.val();
    populate_boxes(lifestyle, 'lifestyle');
  });

  database.ref('rooms/' + room_id + '/furniture').once('value').then(function(snapshot)
  {
    furniture = snapshot.val();
    populate_boxes(furniture, 'furniture');
  });

  database.ref('rooms/' + room_id + '/bedroom').once('value').then(function(snapshot)
  {
    bedroom = snapshot.val();
    populate_boxes(bedroom, 'bedroom');
  });

  database.ref('rooms/' + room_id + '/accessories').once('value').then(function(snapshot)
  {
    accessories = snapshot.val();
    populate_boxes(accessories, 'accessories');
  });

  database.ref('rooms/' + room_id + '/miscellaneous').once('value').then(function(snapshot)
  {
    miscellaneous = snapshot.val();
    populate_boxes(miscellaneous, 'miscellaneous');
  });
}
