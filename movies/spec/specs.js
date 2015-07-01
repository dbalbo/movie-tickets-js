describe("MovieTicket", function() {
  it('begins at a certain price and changes depending on circumstances', function(){
    var testTicket = new MovieTicket("testmovie", "matinee", "senior");
    expect(testTicket.movieName).to.equal("testmovie");
    expect(testTicket.showing).to.equal("matinee");
    expect(testTicket.age).to.equal("senior");
  });

  it('prices a ticket based on the user\'s age', function() {
    var testTicket = new MovieTicket("testmovie", "matinee", "senior");
    testTicket.price();
    expect(testTicket.cost).to.equal(5);
  });
});
