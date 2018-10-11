var friends = [
    { name: "Monty",   favcolor: "blue",   favnumber: 42   },
    { name: "Joel",    favcolor: "green",  favnumber: 7576 },
    { name: "Andrew",  favcolor: "purple", favnumber: 13   },
    { name: "Strang",  favcolor: "purple", favnumber: 13   },
    { name: "Steven",  favcolor: "orange", favnumber: 10   },
    { name: "Lance",   favcolor: "blue",   favnumber: 21   },
    { name: "Angie",   favcolor: "pink",   favnumber: 7    },
    { name: "Mike",    favcolor: "green",  favnumber: 23   },
    { name: "Nick",    favcolor: "blue",   favnumber: 6    },
    { name: "Emilie",  favcolor: "sage",   favnumber: 13   },
    { name: "Robert",  favcolor: "purple", favnumber: 31   },
    { name: "Phil",    favcolor: "green",  favnumber: 13   },
    { name: "Sheila",  favcolor: "purple", favnumber: 17   },
    { name: "Rachael", favcolor: "black",  favnumber: 666  }
];

$().ready(function() {

    var tbody = $("#tb"); // gets a reference to the tbody tag so we can add the new lines into HTML dynamically
    tbody.empty(); // clears any HTML tags within tbody

    for(var friend of friends) { // just like an enhanced for loop
        var row = "<tr>";
        row += "<td>" + friend.name          + "</td>";
        row += "<td>" + friend.favcolor      + "</td>";
        row += "<td>" + friend.favnumber     + "</td>";
        row += "</tr>";

        // put row in tbody tag
        tbody.append(row);
    }
})