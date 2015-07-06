$(document).ready(function() {
    $('.single-item').slick({
        dots: false,
        infinite: true,
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

chart('.category01', '#20BC59', myStyles01);
chart('.category02', '#997D87', myStyles02);
chart('.category03', '#18ADFD', myStyles03);

function chart(category, color, data){
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

}




