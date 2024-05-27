$(document).ready(function() {
    // AJAX request to local data file (testimonials.json)
    $.ajax({
        url: '../json_file/testimonials.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            $('#testimonialsSection1').empty();
            data.testimonials.forEach(function(testimonial) {
                $('#testimonialsSection1').append(
                    '<div class="testimonial">' +
                    '<p>"' + testimonial.text + '"</p>' +
                    '<p>- ' + testimonial.author + '</p>' +
                    '</div>'
                );
            });

            // Initialize the slider after the testimonials are loaded
            $('#testimonialsSection1').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1700,
                arrows: true,
                dots: true,
                centerMode: true,
                centerPadding: '0'
            });
        },
        error: function(error) {
            console.log('Error fetching testimonials:', error);
        }
    });

    // AJAX request to an external website (JSONPlaceholder API)
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            $('#testimonialsSection2').empty();
            data.slice(0, 5).forEach(function(post) {
                $('#testimonialsSection2').append(
                    '<div class="external-post">' +
                    '<h3>' + post.title + '</h3>' +
                    '<p>' + post.body + '</p>' +
                    '</div>'
                );
            });

            // Initialize the slider after the external data is loaded
            $('#testimonialsSection2').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                dots: true,
                centerMode: true,
                centerPadding: '0'
            });
        },
        error: function(error) {
            console.log('Error fetching external data:', error);
        }
    });
});
