/*
 $ is the jQuery function. If you pass a function into the jQuery function, then
 jQuery will be sure to run it after everything has been loaded on your page, which
 is preferable.
 */
$(function() {
  /*
   We can search for all a tags with the data-action attribute equal to upvote using
   the following selector. You could also use css selectors:

      $("a.special")

   would grap all the a tags with class="special". Make sense?
   */
  $("a[data-action='upvote']").click(function() {

    /* 
     We need to get the id of the question being upvoted, so we can construct
     the url. Since we click on the 'a' tag, 'this' refers to that 'a' tag (I HATE how
     the 'this' keyword works in javascript, but that's for another day). We can get
     the value of the data-id attribute by calling the attr method.
     */
    var id = $(this).attr("data-id");

    /*
     While we're at this, we're also going to grab the DOM span tag where we will update
     the vote count. We gave it a data-action='votes' attribute inside our HTML, so that's
     the selector we can use. We use siblings of 'this', because we don't want it finding
     any ol' data-action='votes' because there's several on this page. We want the one that's
     next to 'this' (the Upvote/Downvote tag)
     */
    var voteEl = $(this).siblings("[data-action='votes']");

    /*
     jQuery makes it SUPER easy to make get/post/put/delete requests. Just $.get and
     pass in the url. You can then call .success and .error functions, passing in your
     own function to be executed if the request succeeds/fails

     See the jQuery documentation here: http://api.jquery.com/jQuery.get/

     There is similarly a $.post method.
     */
    $.get("/questions/" + id + "/upvote")
    .success(function(data) {
      // If it was successful, update the html of our votes span with the new vote count
      // which we got back from our JSON
      voteEl.html(data.votes);
    })
    .error(function() {
      // Do something with error
    })
  })

  // Same as above but with downvoting instead
  $("a[data-action='downvote']").click(function() {
    var id = $(this).attr("data-id");

    var voteEl = $(this).siblings("[data-action='votes']");

    $.get("/questions/" + id + "/downvote")
    .success(function(data) {
      voteEl.html(data.votes);
    })
    .error(function() {
      // Do something with error
    })
  })
})

// You're done!
