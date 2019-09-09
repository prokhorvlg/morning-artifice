$(document).ready(function() {

  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/collection.json',
    limit: 10,
    searchResultTemplate: '<div><a href="{url}"><h2>{title}</h2></a><span>{date}</span></div>',
  });

  var fakeCaretInput = '#search-input',
    fakeCaretInputGhost = '.search-input__caret-container span',
    fakeCaret = '.search-input__caret';

  fakeCaretInit();

  $(".searchFocus").click(function() {
    $("#search-input").focus(); 
  });

  $("#search-input").on('change input', function() {
    var $input = $(this);
    if ($input.val() == "") {
      // If empty, then show original list.
      $("#results-container").css("display", "none");
      $("#full-container").css("display", "block");
    } else {
      // If something is typed, show the search results.
      $("#results-container").css("display", "block");
      $("#full-container").css("display", "none");
    }
  });

  $(".colTag").on("click", function() {
    var tagText = $(this).text();
    $("#search-input").val(tagText).change();
  }).on('keypress',function(e) {
    if (e.which == 13) {
      $(this).click();
    }
  });

  setTimeout(function(){ $("#search-input").focus(); }, 200);

  function fakeCaretInit() {
    if ($(fakeCaretInput).length) {

      // Inject required markup before input
      $('<div class="search-input__caret-container"><span id="search-input__ghost" class="search-input__ghost"></span></div><div class="search-input__caret"></div>').insertBefore($(fakeCaretInput));

      // Be sure the fake caret is in the right starting position
      var fakeInputOffset = $(fakeCaretInput).offset(),
          fakeCaretInputGhostOffset = $(fakeCaretInputGhost).offset(),
          fakeCaretOffset = (fakeCaretInputGhostOffset.left - fakeInputOffset.left);

      function setCaretXY(elem, real_element, caret) {
        var rects = document.getElementById("search-input__ghost").getClientRects();
        var lastRect = rects[rects.length - 1];
        var realElementOffset = $(real_element).offset();

        var x = lastRect.left + lastRect.width - realElementOffset.left + document.body.scrollLeft;
        $(caret).css('left',x);
      }

      function moveCaret() {
        $(fakeCaretInputGhost).text($(fakeCaretInput).val().substring(0, $(fakeCaretInput)[0].selectionStart).replace(/\n$/, '\n\u0001'));
        setCaretXY(fakeCaretInputGhost, fakeCaretInput, fakeCaret);
      }

      $(fakeCaretInput).on("input keydown keyup propertychange click paste cut copy mousedown mouseup change", function () {
        moveCaret();
      });

    }
  }

});