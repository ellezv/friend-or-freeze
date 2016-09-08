(function(module) {
  var resultsController = {};

  resultsController.reveal = function() {
    $('.page-content').hide();

    console.log('Positive Vibes: ' + tweetObj.positives + ' , Negative Vibes: ' + tweetObj.negatives + ' , and Neutral Vibes: ' + tweetObj.neutrals);
    chartView.vibes.push(tweetObj.positives, tweetObj.negatives, tweetObj.neutrals);

    if (tweetObj.positives > tweetObj.negatives) {
      $('#positive-results').fadeIn(500);
      $('#positive-pic').fadeIn(500);
    } else if (tweetObj.negatives > tweetObj.positives) {
      $('#negative-results').fadeIn();
      $('#negative-pic').fadeIn();
    } else {
      $('#neutral-results').fadeIn();
      $('#neutral-pic').fadeIn();
    }
  };

  module.resultsController = resultsController;

})(window);
