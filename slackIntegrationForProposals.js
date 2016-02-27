// Google Forms Slack Notification for Portland ReactJS
// Ben Carr <github.com/carrbs>
// Graciously borrowed from:
// Andy Chase <github.com/andychase>
// License: CC0 1.0 Universal <creativecommons.org/publicdomain/zero/1.0>

var POST_URL ="";
function onSubmit(e) {
  var responseUrl = e.response.toPrefilledUrl();
  var seeAll = "https://docs.google.com/forms/d/19sFHEF22Bv6CsgwVClf3LoO1d4kCkGKja8a6ue2NiVQ/edit"
  var response = e.response.getItemResponses();

  var proposal = {
    "name" : response[0].getResponse(),
    "email": response[1].getResponse(),
    "proposal": response[2].getResponse(),
    "github": response[3].getResponse()
  }

  response[0].getResponse();


  var payload = { "payload": '{ "text": "New Proposal Submission", ' +
    '"attachments":[{"title": " ' + proposal['name'] + ' (github.com/' + 'proposal['github'] +
    ') submitted a proposal: ", "text": "' + proposal['proposal'] +
    '\n <'+ responseUrl + '|View this proposal in google forms>\n <' + seeAll +
    '|View all responses in google forms>" }] }' };

  var options =
  {
     "method" : "post",
     "payload" : payload
  };

   UrlFetchApp.fetch(POST_URL, options);
};

