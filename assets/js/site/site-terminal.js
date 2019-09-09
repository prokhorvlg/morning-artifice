// Responsible for the functionality of the site's pseudo-terminal.

// Class name for any terminal object
var terminalClassName = 'navTerminalChild';
/*
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
        else if (cmd[0] == 'MINKE') {
          randomizeEcho(this, ['[[b;#0f0;]ENTRY FOUND...]',
            '> Shortly after falling into disrepair, the Minke seemed to grow a mind of its own.',
            '> Perhaps it was a rogue program escaping the data vaults, or the spirits themselves came to posess the craft.',
            '> It would eventually leave without a crew, leaving just one cryptic message for people to find:',
            '> [[b;#3498DB;]"TOO DA LOO"]'], 800);
        }
        else if (cmd[0] == 'VELVET' || cmd[0] == 'CURATOR') {
          randomizeEcho(this, ['> [[b;#ff0000;]Stop] trying to look that up.',
            '> You won\'t find anything about the Curator here.'], 800);
        }
        else if (cmd[0] == 'MORNING' || cmd[0] == 'ARTIFICE' || cmd[0] == 'MUSEUM') {
          randomizeEcho(this, ['[[b;#0f0;]LOCATION FOUND...]',
            '> INFORMATION: this cyberspace construct is currently registered to CIH Corporation. Please contact [[b;#AF7AC5;]AEI-566] for more information.'], 800);
        }

        else if (cmd[0] == 'STARSHIP' || cmd[0] == 'SPACESHIP') {
          randomizeEcho(this, ['[[b;#3498DB;]Do you mean "starscraper"?]'], 800);
        }

        else if (cmd[0] == 'FEATURED' || cmd[1] == 'UPDATE') {
          randomizeEcho(this, ['[[b;#0f0;]ENTRY FOUND...]', 
            '> Yeah. It\'s a button. Nothing special.'], 800);
        }

        else if (cmd[0] == 'MESSAGE' || cmd[0] == 'HIDDEN' || cmd[0] == 'DISCERN' || cmd[0] == 'PURPOSE') {
          randomizeEcho(this, ['[[b;#0f0;]ENTRY FOUND...]', 
            '> It won\'t be quite that simple, but I commend your efforts.',
            '> Try looking for certain key phrases on the [[b;#0ff;]everyware] page...'], 800);
        }

        else if (cmd[0] == 'REVOLUTION!') {
          randomizeEcho(this, ['...or so they thought.',
            'The citizens of the Empire would, hundreds of years later, recognize the cruel irony of their past before joining their fellows.',
            'Maybe it was too late. But they would recognize it, and I believe that is what is important.',
            'What do you think?'], 800);
        }
        else if (cmd[0] == 'SAXX') {
          $('<video preload="preload" class="cheekyVideo" autoplay="autoplay" loop="loop"><source src="/assets/video/saxx.mp4" type="video/mp4"></source></video>').appendTo( "body" );
          $('<video preload="preload" class="cheekyVideo" autoplay="autoplay" loop="loop" muted><source src="/assets/video/saxx.mp4" type="video/mp4"></source></video>').appendTo( "div" );
          
        }
        else if (cmd[0] == 'HOWARD') {
          $('<video preload="preload" class="cheekyVideo" autoplay="autoplay" loop="loop"><source src="/assets/video/howard.mp4" type="video/mp4"></source></video>').appendTo( "body" );
          $('<video preload="preload" class="cheekyVideo" autoplay="autoplay" loop="loop" muted><source src="/assets/video/howard.mp4" type="video/mp4"></source></video>').appendTo( "div" );
          
        } else {
          randomizeEcho(this, ['[[b;#f00;]> INVALID COMMAND <]'], 800);
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
  
});*/