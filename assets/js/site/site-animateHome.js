function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 

$(document).ready( function() {

  // SCROLLDOWN ICON ANIMATION
  // Changes the colors of the little scroll down icons on the home page.
  var $iconHolder = $(".ma-scroll-down");
  $iconHolder.each(function() {
    var animationStepTime = 100;

    var $this = $(this);

    var $icon1 = $this.find(".ma-scroll-down-1");
    var $icon2 = $this.find(".ma-scroll-down-2");
    var $icon3 = $this.find(".ma-scroll-down-3");
    var $icon4 = $this.find(".ma-scroll-down-4");

    function cycleAnimation1() {
      $icon1.css("background-color","#f0f");
      $icon4.css("background-color","#f0f");

      $icon2.css("background-color","#0ff");
      $icon3.css("background-color","#0ff");

      setTimeout(function() {
        cycleAnimation2();
      }, animationStepTime);
    }

    function cycleAnimation2() {
      $icon1.css("background-color","#0ff");
      $icon4.css("background-color","#0ff");

      $icon2.css("background-color","#fff");
      $icon3.css("background-color","#fff");

      setTimeout(function() {
        cycleAnimation3();
      }, animationStepTime);
    }

    function cycleAnimation3() {
      $icon1.css("background-color","#fff");
      $icon4.css("background-color","#fff");

      $icon2.css("background-color","#fff");
      $icon3.css("background-color","#fff");

      setTimeout(function() {
        cycleAnimation4();
      }, animationStepTime*5);
    }

    function cycleAnimation4() {
      $icon1.css("background-color","#fff");
      $icon4.css("background-color","#fff");

      $icon2.css("background-color","#f0f");
      $icon3.css("background-color","#f0f");

      setTimeout(function() {
        cycleAnimation1();
      }, animationStepTime);
    }

    cycleAnimation1();
  });


  // QUOTESHUFFLE ANIMATIONS (streaming lines of code inside given div)
    
  // Quoteshuffle (reads through pre-existing variable)
  // Given the proper div class, this will automatically fill that div with the animation.
  var $quoteshuffle = $(".quoteshuffle");

  $quoteshuffle.each(function() {
    // First, create an absolutely positioned div to contain the code itself, inside the given container.
    var $codeDiv = $('<div class="quoteshuffleTarget" style="position: absolute; user-select: none; left: 0; right: 0; top: 0; opacity: 0.2;"></div>');
    if ($(this).hasClass("quoteBright")) {
      $codeDiv.css("opacity", "0.3");
    }
    $(this).append($codeDiv);

    // Second, make sure this div has the relative positioning attribute to properly position the code div.
    $(this).css("position", "relative");
    $(this).css("overflow", "hidden");

    // Then, initiate quoteShuffle on this div.
    quoteShuffle($(this).find(".quoteshuffleTarget"), $(this), window.codelines);
  });

  // Quote bubbles: generates randomly positioned circles inside the div, animated to grow and shrink one after the other.
  var $quotebubbles = $(".quotebubbles");

  $quotebubbles.each(function() {
    // First, create an absolutely positioned div to contain the code itself, inside the given container.
    var codeDiv = $('<div class="quotebubblesTarget" style="position: absolute; user-select: none; left: 0; right: 0; top: 0; opacity: 0.2;"></div>');
    $(this).append(codeDiv);

    // Second, make sure this div has the relative positioning attribute to properly position the code div.
    $(this).css("position", "relative");
    $(this).css("overflow", "hidden");

    var $quotebubblesTarget = $(this).find(".quotebubblesTarget");

    // Generate some randomly positioned circle bubble divs inside this container.

    function appendRandomBubble(isFirst = false) {
      var height = getRandomInt(60, 300);
      var width = height;

      var xPos = getRandomInt(0, $quotebubblesTarget.parent().outerWidth()) - 100;
      var yPos = getRandomInt(0, $quotebubblesTarget.parent().outerHeight()) - 100;

      var $randomBubble = $('<div class="quoteBubble" style="position: absolute; user-select: none; border-width: 2px; border-radius: 50%; border-style: solid;"></div>');
      $randomBubble.css("left", xPos + "px");
      $randomBubble.css("top", yPos + "px");

      $randomBubble.css("height", height + "px");
      $randomBubble.css("width", width + "px");

      if (isFirst) {
        $randomBubble.addClass("activeBubble");
      }

      $quotebubblesTarget.append($randomBubble);
    }

    appendRandomBubble(true);
    for (var i = 0; i < 5; i++) {
      appendRandomBubble();
    }

    // Then, initiate quoteShuffle on this div. 
    quoteBubbles($quotebubblesTarget, $(this));
  });

  

  // quoteShuffle($spinBootupShuffle.first(), $spinContainer, window.codelines);
  // Generate set of random 'machine learning' data for RIGHT quoteshuffle
  /* var generatedCodelines = [];
  for (var i = 0; i < 100; i++) {
    var randomNumberOfLines = Math.floor(Math.random() * 6);
    var randomLogLine = "";
    for (var y = 0; y < randomNumberOfLines; y++) {
      randomLogLine = randomLogLine.concat(Math.random().toString(36).substring(3) + ";0 ");
    }
    if (randomLogLine !== "") {
      generatedCodelines.push(randomLogLine);
    } else {
      generatedCodelines.push("&nbsp;");
    }
  }*/

  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // Mobile code
  } else {
    // Desktop code

    // SPINFLOAT ANIMATIONS (square selectors appearing inside banner at top of home page)
    // Activate random timing, sizing, location
    /*spinFloatRandomAnim('spin-float-1');
    spinFloatRandomAnim('spin-float-2');*/

    // SPINBANNER ANIMATIONS (giant spinning elements at top of home page)
    // Clockwise spinner
    /*TweenMax.to('.spinRightBig', 200, {rotation:"360", ease:Linear.easeNone, repeat:-1, transformOrigin:'50% 50%'}, {timeScale:0}
    );
    // Counterclockwise spinner
    TweenMax.to('.spinLeftBig', 200, {rotation:"-360", ease:Linear.easeNone, repeat:-1, transformOrigin:'50% 50%'}, {timeScale:0}
    );*/

    // SPINTEXT ANIMATIONS (randomized quotes appearing around square inside banner at top of home page)
    // Activate random text
    /*var $spinText = $('.spinText');
    $spinText.each(function() {
      randomizeEcho(this, window.phrases);
    });*/

    // STREAKER ANIMATIONS (small spaceships moving horizontally across screen in body)
    // Activate streaker image-swap animations
    window.streakers = [];
    window.streakersClasses = [];

    function streakerSwap() {
      for (var i = 0; i < window.streakers.length; i++) {
        if (window.streakers[i].classList.contains(window.streakersClasses[i][0])) {
          window.streakers[i].classList.remove(window.streakersClasses[i][0]);
          window.streakers[i].classList.add(window.streakersClasses[i][1]);
        } else {
          window.streakers[i].classList.remove(window.streakersClasses[i][1]);
          window.streakers[i].classList.add(window.streakersClasses[i][0]);
        }
      }
      setTimeout(function() {
        window.requestAnimationFrame(streakerSwap);
      }, 500);
    }

    for (var i = 0; i < 7; i++) {
      $('.streaker_sp' + i + ' .hcdStreakerImage').each(function() {
        window.streakers.push(this);
        window.streakersClasses.push([$(this).data('first-streaker'),$(this).data('second-streaker')]);
      });
    }
    window.requestAnimationFrame(streakerSwap);

    // Activate streaker randomized movement animations
    streakerRandomAnim('streaker-left-to-right', 'streaker_sp');
    streakerRandomAnim('streaker-right-to-left', 'streaker_spr');

    cycleThroughImageBackgrounds($('.hcd-reset-points'), ["hcd-reset-points-1", "hcd-reset-points-2", "hcd-reset-points-3", "hcd-reset-points-4", "hcd-reset-points-5", "hcd-reset-points-6", "hcd-reset-points-2", "hcd-reset-points-3", "hcd-reset-points-4", "hcd-reset-points-5", "hcd-reset-points-6", "hcd-reset-points-1"], 80, 2000);
    cycleThroughImageBackgrounds($('.hcd-attrition-codelines'), ["hcd-attrition-codelines-1", "hcd-attrition-codelines-2", "hcd-attrition-codelines-3"], 200);
    //cycleThroughSpinner($('.hcd-pravo-icons-container'), ["hcd-pravo-1", "hcd-pravo-2", "hcd-pravo-3", "hcd-pravo-4"], 5000, 100);
    cycleThroughSpinnerColor($('.hcd-pravo-icons-container'), "hcd-pravo-icon-selected", 2000);

    $spinContainer = $('.spinContainer').first();
    $spinBootupShuffle = $('.spinBootupShuffle');

    // Activate RIGHT quoteshuffle (reads through newly generated data)
    quoteShuffleSecond($spinBootupShuffle.first().next(), $spinContainer, generatedCodelines);

    // CODELINEPARA ANIMATIONS (animated codelines at the top of each home page 'dialog')
    // Activate randomized code generation
    $('.hcdCodelinePara').each(function() {
      hcdCodelinePara(this);
    });

    // QUOTESHUFFLE ANIMATIONS (streaming lines of code inside banner at top of home page)
    
    // Activate LEFT quoteshuffle (reads through pre-existing variable)
    quoteShuffle($spinBootupShuffle.first(), $spinContainer, window.codelines);
    // Generate set of random 'machine learning' data for RIGHT quoteshuffle
    var generatedCodelines = [];
    for (var i = 0; i < 100; i++) {
      var randomNumberOfLines = Math.floor(Math.random() * 6);
      var randomLogLine = "";
      for (var y = 0; y < randomNumberOfLines; y++) {
        randomLogLine = randomLogLine.concat(Math.random().toString(36).substring(3) + ";0 ");
      }
      if (randomLogLine !== "") {
        generatedCodelines.push(randomLogLine);
      } else {
        generatedCodelines.push("&nbsp;");
      }
    }

  } // End desktop code

  

  
  

  

  // Handles click of little close button on the top right of home page 'dialogs'.
  var hcdIconIterator = 0;
  $('.hcdIcon_interactive').click(function() {
    var $target = $('.' + $(this).data('hcd'));
    var $header = $target.find('.hcdHeader');
    var $body = $target.find('.hcdBody');
    var $replace = $target.find('.hcdReplace');
    var $replaceChild = $replace.find('.hcdReplaceContent');
    var $replacePara = $replaceChild.find('p');

    var height = $body.height() + $header.height();

    $body.hide();
    $header.hide();

    var timeStretch = 50;
    var scaleStretch = 50;

    // Set paragraph contents to string.
    $replacePara.text(window.dialogContents[hcdIconIterator]);
    $replacePara.attr("data-text", window.dialogContents[hcdIconIterator]);
    hcdIconIterator += 1;

    setTimeout(function() {
      $replace.css('display','flex');
      $replace.css('border','2px solid white');
      $target.css('height', height + 'px');

      $replace.css('margin', (scaleStretch * 1) + 'px auto');
      // $replace.css('width', ($target.width() - (scaleStretch * 1)) + 'px');
      $replace.css('width', ($replace.innerHeight() * 1.5) + 'px');
    }, (timeStretch * 1));

    setTimeout(function() {
      $replace.css('margin', (scaleStretch * 2) + 'px auto');
      // $replace.css('width', ($target.width() - (scaleStretch * 2)) + 'px');
      $replace.css('width', ($replace.innerHeight() * 1.5) + 'px');
    }, (timeStretch * 2));

    setTimeout(function() {
      $replace.css('margin', (scaleStretch * 3) + 'px auto');
      // $replace.css('width', ($target.width() - (scaleStretch * 3)) + 'px');
      $replace.css('width', ($replace.innerHeight() * 1.5) + 'px');
    }, (timeStretch * 3));

    setTimeout(function() {
      $replace.css('margin', (scaleStretch * 4) + 'px auto');
      // $replace.css('width', ($target.width() - (scaleStretch * 4)) + 'px');
      $replace.css('width', ($replace.innerHeight() * 1.5) + 'px');
    }, (timeStretch * 4));

    setTimeout(function() {
      $replace.css('border','none');
      $replace.css('margin', '0px');
      $replaceChild.css('opacity', '1');
      $replace.css('width', "90%");
    }, (timeStretch * 5));
    
  }).on("keydown", function(event) {
    if (event.which == 13) {
      $(this).trigger( "click" );
    }
  });

});

function spinFloatRandomAnim(elClass) {
  $('.' + elClass).each(function () {
    var $el = $(this);
    setTimeout(function() {
      spinFloatRandomize($el);
    }, (Math.floor(Math.random() * 20)));
  });
}

function spinFloatRandomize(el) {
  var $spinContainer = $('.spinContainer').first();
  var randomTime = Math.floor(Math.random() * 5) + 1; // Time in milliseconds. Multiple is max
  var randomMarginTop = Math.floor(Math.random() * $spinContainer.outerHeight()); // Multiple is max
  var randomMarginLeft = Math.floor(Math.random() * $spinContainer.outerWidth()); // Multiple is max
  var randomDimension = Math.floor(Math.random() * 40) + 30; // Multiple is max
  $(el).css('margin-top', randomMarginTop + 'px');
  $(el).css('margin-left', randomMarginLeft + 'px');

  $(el).css('height', randomDimension + 'px');
  $(el).css('width', randomDimension + 'px');

  setTimeout(function() {
    spinFloatRandomize(el);
  }, (randomTime * 1000) );
}

function streakerRandomAnim(animation = 'streaker-left-to-right', elClass) {
  $('.' + elClass).each(function () {
    var $el = $(this);
    setTimeout(function() {
      streakerGenerateRandomAnim($el, animation);
    }, (Math.floor(Math.random() * 200)));
  });
}

function streakerGenerateRandomAnim(el, animation) {
  $(el).css('display','block');
  var randomTime = Math.floor(Math.random() * 70) + 20; // Time in milliseconds. Multiple is max
  var randomMargin = Math.floor(Math.random() * $('.homeContentContainer').outerHeight()); // Multiple is max
  $(el).css('margin-top', randomMargin + 'px');

  $(el).children('.hcdStreakerMover').css('transition', '0s');

  if (animation == 'streaker-left-to-right') {
    $(el).children('.hcdStreakerMover').css('margin-left', '-10vw');

    setTimeout(function() {
      $(el).children('.hcdStreakerMover').css('transition', randomTime + 's linear');
      $(el).children('.hcdStreakerMover').css('margin-left', '110vw');
    }, 10);
  } else if (animation == 'streaker-right-to-left') {
    $(el).children('.hcdStreakerMover').css('margin-right', '-10vw');

    setTimeout(function() {
      $(el).children('.hcdStreakerMover').css('transition', randomTime + 's linear');
      $(el).children('.hcdStreakerMover').css('margin-right', '110vw');
    }, 10);
  }

  setTimeout(function() {
    streakerGenerateRandomAnim(el, animation);
  }, ((randomTime*1000)+100));
}

function hcdCodelinePara(o, multi = 300){
  $(o).html(Math.random().toString(36).substring(2));
  setTimeout(function() { 
    hcdCodelinePara($(o), multi);
  }, Math.floor(Math.random() * multi));
}

// Handles the animation for the LEFT codelines quoteshuffle element.
function quoteShuffle(codeContainer, container, codelines, numberOfLines = 0, lineNumber = 0) {
  if ($(codeContainer).outerHeight() > $(container).outerHeight() + 10) {
    $(codeContainer).find('div').first().remove();
  } else {
    numberOfLines++;
  }

  if (lineNumber >= window.codelines.length){
    lineNumber = 0;
  }

  $(codeContainer).append('<div style="pointer-events: none; overflow-anchor: none; user-select:none;">' + window.codelines[lineNumber++] + '</div>');

  setTimeout(function() { 
    quoteShuffle($(codeContainer), $(container), codelines, numberOfLines, lineNumber); 
  }, Math.floor(Math.random() * 300));
}

function quoteBubbles(bubbleContainer, container, interval = 3000) {
  // First, find the first bubble with the activeBubble class. Find the next bubble, remove the class from all bubbles, and finally add the active class to the next bubble.

  var $activeBubble = $(bubbleContainer).find(".activeBubble");

  var $nextBubble;
  if ($activeBubble.next().length != 0) {
    $nextBubble = $activeBubble.next();
  } else {
    $nextBubble = $(bubbleContainer).children().first();
  }

  $(bubbleContainer).children().removeClass("activeBubble");
  $(bubbleContainer).children().css("transform", "scale(1)");
  $nextBubble.addClass("activeBubble");
  $nextBubble.css("transform", "scale(1.2)");

  setTimeout(function() { 
    quoteBubbles($(bubbleContainer), $(container), interval); 
  }, Math.floor(Math.random() * interval));
}

// Handles the animation for the LEFT codelines quoteshuffle element.
/*function quoteShuffle(spinBootupShuffle, spinContainer, codelines, numberOfLines = 0, lineNumber = 0) {
  if ($(spinBootupShuffle).outerHeight() > $(spinContainer).outerHeight() + 10) {
    $(spinBootupShuffle).find('div').first().remove();
  } else {
    numberOfLines++;
  }

  if (lineNumber >= window.codelines.length){
    lineNumber = 0;
  }

  $(spinBootupShuffle).append('<div style="pointer-events: none; overflow-anchor: none; user-select:none;">' + window.codelines[lineNumber++] + '</div>');

  setTimeout(function() { 
    quoteShuffle($(spinBootupShuffle), $(spinContainer), codelines, numberOfLines, lineNumber); 
  }, Math.floor(Math.random() * 300));
}*/

// Handles the animation for the RIGHT codelines quoteshuffle element.
function quoteShuffleSecond(spinBootupShuffle, spinContainer, codelines, numberOfLines = 0, lineNumber = 0) {
  if ($(spinBootupShuffle).outerHeight() > $(spinContainer).outerHeight() + 10) {
    $(spinBootupShuffle).find('div').first().remove();
  } else {
    numberOfLines++;
  }

  if (lineNumber >= window.codelines.length){
    lineNumber = 0;
  }

  $(spinBootupShuffle).append('<div style="pointer-events: none; overflow-anchor: none; user-select:none;">' + window.codelines[lineNumber++] + '</div>');

  setTimeout(function() { 
    quoteShuffleSecond($(spinBootupShuffle), $(spinContainer), codelines, numberOfLines, lineNumber); 
  }, Math.floor(Math.random() * 300));
}

// Animates text element by element (code style)
function recursiveCodeIn(o, multi = 300) {
  $(o).css('opacity', '1');
  setTimeout(function() { 
    recursiveCodeIn($(o).next(), multi);
  }, Math.floor(Math.random() * multi));
}

function cycleThroughImageBackgrounds(el, backgrounds, timing = 300, delay = 0, iterator = 0) {
  var $el = $(el);
  if ($el.hasClass(backgrounds[iterator])) {
    $el.removeClass(backgrounds[iterator]);
    if ((iterator+1) === backgrounds.length) {
      iterator = 0;
    } else {
      iterator++;
    }
    $el.addClass(backgrounds[iterator]);
  } else {
    $el.addClass(backgrounds[iterator]);
  }
  if (iterator === 0) {
    setTimeout(function() {
      cycleThroughImageBackgrounds(el, backgrounds, timing, delay, iterator);
    }, delay);
  } else {
    setTimeout(function() {
      cycleThroughImageBackgrounds(el, backgrounds, timing, delay, iterator);
    }, timing);
  }
}

function cycleThroughSpinner(el, backgrounds, timing = 200, fadeTimer = 100) {
  var $el = $(el);
  var $first = $el.find('.hcd-pravo-icons-1');
  var $second = $el.find('.hcd-pravo-icons-2');
  var $third = $el.find('.hcd-pravo-icons-3');
  var $fourth = $el.find('.hcd-pravo-icons-4');

  $first.hide();
  $first.removeClass(backgrounds[2]);
  $first.addClass(backgrounds[1]);
  $first.show();

  $second.hide();
  $second.removeClass(backgrounds[3]);
  $second.addClass(backgrounds[2]);
  $second.show();

  $third.hide();
  $third.removeClass(backgrounds[0]);
  $third.addClass(backgrounds[3]);
  $third.show();

  $fourth.hide();
  $fourth.removeClass(backgrounds[1]);
  $fourth.addClass(backgrounds[0]);
  $fourth.show();

  backgrounds.unshift(backgrounds.pop());

  setTimeout(function() {
    cycleThroughSpinner(el, backgrounds, timing, fadeTimer);
  }, timing);
}

function cycleThroughSpinnerColor(el, colorClass, timing = 200, iterator = 0) {
  var $el = $(el);
  var $children = $el.children();

  $children.removeClass(colorClass);
  
  if ((iterator+1) === $children.length) {
    iterator = 0;
  } else {
    iterator++;
  }
  $el.find(':eq(' + iterator + ')').addClass(colorClass);

  setTimeout(function() {
    cycleThroughSpinnerColor(el, colorClass, timing, iterator);
  }, timing);
}

function checkInView(container, element, partial) {
    //Get container properties
    let cTop = container.scrollTop;
    let cBottom = cTop + container.clientHeight;

    //Get element properties
    let eTop = element.offsetTop + 300;
    let eBottom = eTop + element.clientHeight;

    //Check if in view    
    let isTotal = (eTop >= cTop && eBottom <= cBottom);
    let isPartial = partial && (
      (eTop < cTop && eBottom > cTop) ||
      (eBottom > cBottom && eTop < cBottom)
    );

    //Return outcome
    return  (isTotal  || isPartial);
}