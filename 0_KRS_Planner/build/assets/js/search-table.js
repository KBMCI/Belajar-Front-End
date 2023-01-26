function myFunction() {
    var input, filter, table, tr, td, i;
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    
    var table = document.getElementById("example");
    var trList = table.getElementsByTagName("tr");
    
    for (i = 0; i < trList.length; i++)
    {
      //don't initiate search unless user types at least 3 characters. This will greatly improve performance and usability especially with large tables.
      if (filter.length >= 3)
      {
        var match = false;
        var tdList = trList[i].getElementsByTagName("td");
  
        //loop through every td
        for (j = 0; j < tdList.length; j++)
        {
          var td = tdList[j];
  
          if (td)
          {
            if (td.innerText.toUpperCase().indexOf(filter) > -1) {
              match = true;
            }
          }
        }
        
        if (match == true)
        {
          trList[i].style.display = "";
        }
        else
        {
          trList[i].style.display = "none";
        }
      }
      else
      {
        trList[i].style.display = "";
      }
    }
  }