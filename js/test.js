var clndr = {};


if(!window.console) {
  window.console = {
    log: function(whatever) {
      // sad face.
    }
  }
}

$( function() {

  var eventsArray = [
    { date: moment().format('YYYY-MM-') + '07', title: 'This is an Event' },
    { date: moment().format('YYYY-MM-') + '23', title: 'Another Event' }
  ];

  // default
  // ================================================================================
  clndr.defaultSetup = $('#default').clndr();


  // test showAdjacentMonths and adjacentDaysChangeMonth.
  // edges of other months should be visible & clicking them should switch the month.
  // ================================================================================
  clndr.adjacent = $('#adjacent').clndr({
    daysOfTheWeek: ['日', '月', '火', '水', '木', '金', '土'],
    weekOffset: 0,
    interval: 7,
    showAdjacentMonths: true,
    adjacentDaysChangeMonth: false,
    lengthOfTime: {
      days: 70,
      startDate: moment().add(0, 'weeks').weekday(0)
    }
  });

}); 