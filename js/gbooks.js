$(document).ready(function () {
    $('form').submit(function (event) {

        event.preventDefault();
        let $searchField = $('#search');
        let $submitButton = $('#submit');
        //Making validation if the search field is empty and generating placeholder
        if ($('#search').val().length == 0) {
            $('#search').attr('placeholder','Enter search term');
           return false;
      } 
        //Disabling search field and search button while searching
        $searchField.prop("disabled", true);
        $submitButton.attr("disabled", true).val("searching......");
        let bookTerm = $searchField.val();
        let gBooksAPI = 'https://www.googleapis.com/books/v1/volumes?q=' + bookTerm + '';
        //function that displays found books in the table
        function displayBooks(data) {
            //the start of the table starting with header
            let booksHTML = '<table class="table"><thead><tr><th>Cover</th><th>Title</th><th>Description</th><th>Pages</th><th>PDF</th></thead><tbody>';
            //jQuery .each method to loop through returned books from API
            $.each(data.items, function (i, book) {
              if ((book["accessInfo"]["pdf"]).hasOwnProperty('downloadLink')) {
                booksHTML += "<tr style='background-color:rgb(250,252,250);'><td><img src='" +
                (book["volumeInfo"]["imageLinks"]["smallThumbnail"]) + 
                "'></td><td>" +
                "<span style='color:rgb(36,23,162); font-weight: bold;'>" +
                (book["volumeInfo"]["title"]) + 
                "</span><br>by<br>" +
                (book["volumeInfo"]["authors"]) + 
                "</td><td>" +
                (book["volumeInfo"]["description"]) + 
                "</td><td>" +
                (book["volumeInfo"]["pageCount"]) + 
                "</td><td nowrap>" + "<a href='" +
                (book["accessInfo"]["pdf"]["downloadLink"]) + 
                "'>Download Link</td></tr>";
              } else if ((book["accessInfo"]["pdf"]).hasOwnProperty('acsTokenLink')) {
                booksHTML += "<tr><td><img src='" +
                (book["volumeInfo"]["imageLinks"]["smallThumbnail"]) + 
                "'></td><td>" +
                "<span style='color:rgb(39,66,77); font-weight: bold;'>" +
                (book["volumeInfo"]["title"]) + 
                "</span><br>by<br>" +
                (book["volumeInfo"]["authors"]) + 
                "</td><td>" +
                (book["volumeInfo"]["description"]) + 
                "</td><td>" +
                (book["volumeInfo"]["pageCount"]) + 
                "</td><td nowrap>" + "<a href='" +
                (book["accessInfo"]["pdf"]["acsTokenLink"]) + 
                "'>ACS Token Link</td></tr>";
              }  else {
                 //returning books that don't have downloadable files into console
                console.log(book["volumeInfo"]["title"] + ' by ' + (book["volumeInfo"]["authors"]));
              }
            });
            //the last bit of code for the table - closing the table
            booksHTML += "</tbody></table>";
            //writing generated HTML into the div on the page
            $('#tos').html(booksHTML);
            //re-enabling search field and search button after the search finished
            $searchField.prop("disabled", false);
            $submitButton.attr("disabled", false).val("Search");
            //removing placeholder after the search term is entered
            $('#search').attr('placeholder','');
            //replacing 'undefined' with 'Not available'
            $("td").filter(function() {
                return $(this).text() === "undefined";
                }).text("Not available");

        }
        //sending generated API url - gBooksAPI and a function displayBooks to the API using .getJSON
        $.getJSON(gBooksAPI, displayBooks);
    });
});