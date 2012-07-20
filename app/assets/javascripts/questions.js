
$(function() {
  $("a[data-action='upvote']").click(function() {
    var id = $(this).attr("data-id");

    var voteEl = $(this).siblings("[data-action='votes']");

    $.get("/questions/" + id + "/upvote")
    .success(function(data) {
      voteEl.html(data.votes);
    })
    .error(function() {
      // Do something with error
    })
  })

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
