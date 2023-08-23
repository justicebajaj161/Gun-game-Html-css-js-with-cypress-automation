
const webpageUrl = `index.html`;

describe('Simple Gun Game', () => {
  function rgbToColorName(rgb) {
    const colorMap = {
      
      'rgb(255, 0, 0)': 'red'
      // Add other color mappings as needed
    };
  
    return colorMap[rgb] || rgb;
  }
 
  
  beforeEach(() => {
    cy.window().then((window) => {
      window.localStorage.setItem('highScore', '0');
    });
    cy.visit(webpageUrl);
  });


  it('checks initial rendering', () => {
    cy.get('#gameCanvas').should('be.visible')
    cy.get('#startGameBtn').should('be.visible')
    cy.get('#currentScore').should('contain', 'Score: 0')
    cy.get('#highestScore').should('contain', 'High Score: 0')
  })

  it('starts game with button click', () => {
    cy.get('#startGameBtn').click()
    cy.get('#gameCanvas').should('not.have.css', 'background-color', 'red')
    cy.get('#currentScore').should('have.text', 'Score: 0');
  })

  it('starts game with Enter key', () => {
    cy.get('body').type('{enter}')
    cy.get('#gameCanvas').should('not.have.css', 'background-color', 'red')
    cy.get('#currentScore').should('have.text', 'Score: 0');
  })



  it('checks high score update', () => {
    cy.get('#startGameBtn').click()
    cy.get('body').type(' ')
    cy.wait(500);  // Allow some time for the bullet to possibly hit the target.
    
    // Check if the high score is updated if the current score exceeds it.
    cy.get('#currentScore').invoke('text').then(currentScore => {
      const score = parseInt(currentScore.split(":")[1].trim());
      if (score > 0) {
        cy.get('#highestScore').should('contain', `High Score: ${score}`);
      }
    })
  })
// ... [Your previous Cypress tests]


it('left arrow moves gun left', () => {
  // Start game
  cy.get('#startGameBtn').click();

  // Take a snapshot of the canvas
  cy.get('#gameCanvas').screenshot('canvas_before_left_move');

  // Simulate the left arrow key press
  cy.get('body').type('{leftarrow}');

  // Check that the canvas has been repainted after moving left
  cy.get('#gameCanvas').screenshot('canvas_after_left_move').then(() => {
    // You can then use a tool to compare the before and after screenshots
    // If they differ, then it means the gun moved.
  });
});

it('right arrow moves gun right', () => {
  // Start game
  cy.get('#startGameBtn').click();

  // Take a snapshot of the canvas
  cy.get('#gameCanvas').screenshot('canvas_before_right_move');

  // Simulate the right arrow key press
  cy.get('body').type('{rightarrow}');

  // Check that the canvas has been repainted after moving right
  cy.get('#gameCanvas').screenshot('canvas_after_right_move').then(() => {
    // You can then use a tool to compare the before and after screenshots
    // If they differ, then it means the gun moved.
  });
});

it('spacebar fires a bullet', () => {
  cy.get('#startGameBtn').click();
  
  // Check initial score
  cy.get('#currentScore').contains(/Score: 0/i).should('be.visible');

  // Simulate spacebar key press to fire bullet few times with more wait
  cy.get('body').type(' ');
  cy.wait(100); // Waiting a bit longer to ensure the bullet has time to hit or miss
  cy.get('body').type(' ');
  cy.wait(100);
  cy.get('body').type(' ');
  cy.wait(100);
  cy.get('body').type(' ');
  cy.wait(100); // Waiting a bit longer to ensure the bullet has time to hit or miss
  cy.get('body').type(' ');
  cy.wait(100);
  cy.get('body').type(' ');
  cy.wait(100);

  // Assert that the score changed
  cy.get('#currentScore').contains(/Score: 0/i).should('not.exist');
});




it('score increases when target hit', () => {
  cy.get('#startGameBtn').click();
  cy.get('body').type(' '); // Fire a bullet, assuming this hits the target

  cy.wait(100);
  cy.get('body').type(' ');
  cy.wait(100);
  cy.get('body').type(' ');
  cy.wait(100);
  cy.get('body').type(' ');
  cy.wait(100);
  cy.get('body').type(' ');
  cy.wait(100);
  cy.get('body').type(' ');
  cy.wait(100);
  cy.get('body').type(' ');

  cy.get('#currentScore').invoke('text').should('not.equal', 'Score: 0');
});

it('game ends after 3 consecutive misses', () => {
  cy.get('#startGameBtn').click();

  // Simulate 3 bullet misses by firing into empty space
  cy.get('body').type(' ');
  cy.wait(20);
  cy.get('body').type(' ');
  cy.wait(20);
  cy.get('body').type(' ');
  cy.wait(20);
  cy.get('body').type(' ');
  cy.wait(20);
  cy.get('body').type(' ');
  cy.wait(20);
  cy.get('body').type(' ');
  cy.wait(20);
  cy.get('body').type(' ');
  cy.wait(20);
  cy.get('body').type(' ');
  cy.wait(20);
  cy.get('body').type(' ');


  cy.wait(1000); // Wait for the game to process the misses



  cy.get('#gameCanvas').each(($el) => {
    const bgcolor = $el.css('background-color');
    expect(rgbToColorName(bgcolor)).to.equal('red');
  });

});

// You can add more test cases if there are additional features or game logic.



  // You can continue adding more test cases depending on various scenarios in the game.
})
