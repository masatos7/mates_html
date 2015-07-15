

// draw calender
var clndr = {};
if(!window.console) {
  window.console = {
    log: function(whatever) {
      // sad face.
    }
  }
}


$( function() {
	var day = ['日', '月', '火', '水', '木', '金', '土'];
  var eventsArray = [
    { date: moment().format('YYYY-MM-') + '07', category: 'student', title: 'This is an Event' },
    { date: moment().format('YYYY-MM-') + '07', category: 'lesson', title: 'This is an Event2' },
    { date: moment().format('YYYY-MM-') + '23', category: 'lesson', title: 'Another Event' }
  ];

  var CalenderSetting = {
	  events: eventsArray,
    daysOfTheWeek: day,
    weekOffset: 0,
    showAdjacentMonths: false,
    adjacentDaysChangeMonth: false,
  	clickEvents: {
	    click: function(target){
	    	var month = target.date.month()+1;
	    	var dotcolor;
	    	console.log(target);
	    	$('#date h3').html(target.date.year()+'年'+month+'月'+target.date.date()+'日');
	    	//console.log(target.events.length);
    		$('#date ul').empty();
    		$('#date .button_area').empty();
    		if(target.events.length){
	    		for ( var i = 0; i < target.events.length; i ++){
	    			if (target.events[i].category == 'lesson'){
	     				dotcolor = '#00AD6D';
	    			}else{
	    				dotcolor = '#FF0000';
	    			}
	  				$('#date ul').append('<li><svg height="10" width="10"><circle cx="5" cy="5" r="5" fill="' + dotcolor + '" /></svg>'+target.events[i].title + '</li>');
					}
					var ButtonHtml = "<form action='lesson.html' role='form'>" +
						"<button type='submit' class='btn btn-success btn-lg'>詳細</button>" +
						"</form>";
	  			$('#date .button_area').append(ButtonHtml);
  			}
	    },
	    onMonthChange: function(month){
  			$('#cal2').show();
  			$('#cal1').hide();
   			clndr.cal2.setYear(moment(month).year());
  			clndr.cal2.setMonth(moment(month).month());
   			Drawevent();
	    }
	   }
  };

	if (window.matchMedia( '(min-width: 769px)' ).matches) {
		CalenderSetting.template = $('#template-calendar2').html();
		//console.log(moment(this.month));
		CalenderSetting.onMonthChange = function(month){ Drawevent() };
		clndr.cal2 = $('#cal2').clndr( CalenderSetting );
		Drawevent();
	} else {
		// Small Calender
		CalenderSetting.template = $('#template-calendar1').html();
		clndr.cal1 = $('#cal1').clndr( CalenderSetting );
		//display events' dots
		Drawevent();
		//setting big calender
		CalenderSetting.template = $('#template-calendar2').html();
		//console.log(moment(this.month));
		CalenderSetting.onMonthChange = function(month){ Drawevent() };
		clndr.cal2 = $('#cal2').clndr( CalenderSetting );
		//hide big calender
		$('#cal2').hide();
	};

  //display today's events
	$('#date h3').html(
			moment(this.month).year()+'年'
			+(moment(this.month).month()+1)+'月'
			+moment(this.month).date()+'日'
			+'（'+day[moment(this.month).day()]+'）'
		);
}); 

function Drawevent(){
		var eventStudent = '<svg height="6" width="6"><circle cx="3" cy="3" r="3" fill="#FF0000" /></svg>';
		var eventLesson = '<svg height="6" width="6"><circle cx="3" cy="3" r="3" fill="#00AD6D" /></svg>';
	  $('.student').append(eventStudent);
	  $('.lesson').append(eventLesson);
}


// Carousel
$(document).ready(function() {
    $('.single-item').slick({
    		initialSlide: Math.ceil((moment().date() - moment().day()) / 7),
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});


// Draw Graph
var myStyles01 = [{
	subject: '英語',
	point: '180',
	total: '200',
	link: 'index'},{
	subject: '数学',
	point: '120',
	total: '200',
	link: 'index'},{
	subject: '理科',
	point: '90',
	total: '200',
	link: 'index'},
	];

var myStyles02 = [{
	subject: '英語',
	point: '180',
	total: '200',
	link: 'index'},{
	subject: '数学',
	point: '120',
	total: '200',
	link: 'index'},{
	subject: '理科',
	point: '90',
	total: '200',
	link: 'index'},
	];

var myStyles03 = [{
	subject: '英語',
	point: '180',
	total: '200',
	link: 'index'},{
	subject: '数学',
	point: '120',
	total: '200',
	link: 'index'},{
	subject: '理科',
	point: '90',
	total: '200',
	link: 'index'},
	];

drawChart('.category01', '#20BC59', myStyles01);
drawChart('.category02', '#997D87', myStyles02);
drawChart('.category03', '#18ADFD', myStyles03);

function drawChart(category, color, data){
	d3.selectAll(category)
		.selectAll('.subject a')
		.data(data)
		.attr('href', function(d){
				return d.link;
			}
		)

	d3.selectAll(category)
		.selectAll('h3')
		.data(data)
		.html(
			function(d){
				return d.subject;
			}
		)

	d3.selectAll(category)
		.selectAll('svg')
		.data(data)
		.append('rect')
		.attr('width', '100%')
		.attr('height', '6')
		.style('fill', '#E9E9E9')

	d3.selectAll(category)
		.selectAll('svg')
		.data(data)
		.append('rect')
		.attr('width', '0')
		.attr('height', '6')
		.style('fill', color)
		.transition()
		.delay(300)
		.attr('width', function(d){
			return d.point / d.total * 100 + '%';
			}
		)
};






