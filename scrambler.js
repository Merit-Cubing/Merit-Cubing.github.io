 function generateScramble(length = 20) {
          const moves = ["R", "L", "U", "D", "F", "B"];
          const modifiers = ["", "'", "2"];
          let scramble = [];
          let lastMove = "";

          for (let i = 0; i < length; i++) {
              let move, modifier;

              do {
                  move = moves[Math.floor(Math.random() * moves.length)];
              } while (move === lastMove);

              if (Math.random() < 0.2) {
                  move = move.toLowerCase();
              }

              modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
              scramble.push(move + modifier);

              lastMove = move;
          }

          return scramble.join(", ");
      }

      function genScramble() {
          const scramble = generateScramble();
          document.getElementById("scramble").textContent = scramble;
      }
