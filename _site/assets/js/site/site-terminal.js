// Responsible for the functionality of the site's pseudo-terminal.

// Class name for any terminal object
var terminalClassName = 'navTerminalChild';

$(document).ready(function(){
  function updateTerminal(update) {
    $('.navTerminalChild').terminal().echo(update);
  }
  
  jQuery(function($, undefined) {
    $('.navTerminalChild').terminal(function(command) {
      function randomizeEcho(obj, items, multi = 300) {
        // Echo the first item.
        obj.echo(items[0]);
        // If there are any other items...
        if (items[1]) {
          // Recursively echo this with the first item stripped out,
          setTimeout(function() {
            randomizeEcho(obj, items.slice(1), multi); 
            // With the delay equal to a slight variation on multiplier.
          }, Math.floor(Math.random() * multi));
        }
      }
      if (command !== '') {

        var cmd = command.toUpperCase().split(" ");

        // If you are looking here, shame on you because this is a lame way of finding the commands
        // but all the power to you <3
        if (cmd[0] == 'ECHO') {
          var output = '';
          for (var i = 1; i < cmd.length; i++) {
            output += cmd[i];
            output += ' ';
          }
          this.echo(String(output));
        }
        else if (cmd[0] == 'LYDD') {
          if (cmd[1]) {
            if (cmd[1] == 'START') {
              if (cmd[2]) {
                if (cmd[2] == '') {

                }
              }
            }
          }
          else {
            randomizeEcho(this, [
              '***************************************',
              '** Application [[b;#00ffff;]LOW YIELD DAEMON] v2.3 **',
              '** developed by [[b;#ff00ff;]metakun technologies] **',
              '***************************************',
              'used to host decentralized kaizen',
            ], 300);
          }
        }
        else if (cmd[0] == 'READ') {
          randomizeEcho(this, [
              '// Application 9m [[b;#00ffff;]SECUREADER] 4tb //',
              'for all your file-reading needs',
              'comes standard with [[b;#00ffff;]NUT] since 3.01',
            ], 300);
        }
        else if (cmd[0] == 'HELP') {
          randomizeEcho(this, ['Locating [[b;#00ff36;]help] file...',
            'message found: >Fuck off<',
            'File path corrupted. Please consult an administrator.',
            '[[b;#ff00ff;]Help file not found]'], 500);
        }
        else if (cmd[0] == 'PING') {
          randomizeEcho(this, ['To use this application',
            '---'], 500);
        }
        else if (cmd[0] == 'CHAT') {
          randomizeEcho(this, ['This kaizen is currently offline.',
            'Exiting application.'], 800);
        }
        else if (cmd[0] == 'SWEDUS') {
          randomizeEcho(this, ['GAME VER 5.2',
            'This application is currently in development.'], 800);
        }
        else if (cmd[0] == 'SAXX') {
          $('<video preload="preload" class="cheekyVideo" autoplay="autoplay" loop="loop" muted><source src="/assets/video/saxx.mp4" type="video/mp4"></source></video>').appendTo( "div" );
          $('<video preload="preload" class="cheekyVideo" autoplay="autoplay" loop="loop"><source src="/assets/video/saxx.mp4" type="video/mp4"></source></video>').appendTo( "body" );
        }
        else if (cmd[0] == 'HOWARD') {
          $('<video preload="preload" class="cheekyVideo" autoplay="autoplay" loop="loop" muted><source src="/assets/video/howard.mp4" type="video/mp4"></source></video>').appendTo( "div" );
          $('<video preload="preload" class="cheekyVideo" autoplay="autoplay" loop="loop"><source src="/assets/video/howard.mp4" type="video/mp4"></source></video>').appendTo( "body" );
        }

      }
    }, {
      greetings: '*** Welcome to [[b;#00ffff;]NUT] 3.88 ***',
      name: 'terminal',
      prompt: '//> ',
      onFocus: function(terminal){ $('.navTerminalChild').addClass('activeTerminal'); },
      onBlur: function(terminal){ $('.navTerminalChild').removeClass('activeTerminal'); },
      onInit: function(terminal){
        this.echo('LOADING organizational_matrix...');
        this.echo('[[b;#ff00ff;]WARNING]: TERMINAL UNSTABLE');
      },
      outputLimit: 30
    });
  });
  
});