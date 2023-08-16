const charizardMock = require('./charizardMock.json');

describe('Test api pokemon', function() {
  this.timeout(10000);

  it('Enter to pokeapi and search charizard', function(browser) {
    browser
      .url('https://pokeapi.co/')
      .mockNetworkResponse('https://pokeapi.co/api/v2/pokemon/charizard', {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(charizardMock)
      })
      .waitForElementVisible('body')
      .assert.textContains('body', 'Try it now!')
      .assert.visible('input[id=url-input]')
      .setValue('input[id=url-input]', 'pokemon/charizard')
      .click('button[type=submit]')
      .pause(100) 
      .assert.textContains('body', 'Resource for nightwatch')
      .end();
  });
})
