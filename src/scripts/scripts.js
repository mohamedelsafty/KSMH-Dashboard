if (document.getElementById('news-slider')) {
    const newsSlider = new Swiper('#news-slider', {
        slidesPerView: 1,
        // spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '#news-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#news-slider .swiper-button-next',
            prevEl: '#news-slider .swiper-button-prev',
        },
    });
}

if (document.querySelector('.mySwiper')) {
    var swiperSlider = new Swiper('.mySwiper', {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 6,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        autoplay: {
            delay: 5000,
        },
    });
    var swiper2 = new Swiper('.mySwiper2', {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: swiperSlider,
        },
        autoplay: {
            delay: 5000,
        },
    });
}

if (document.getElementById('KPiChart')) {
    var ctx = document.getElementById('KPiChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line', // also try bar or other graph types

        // The data for our dataset
        data: {
            labels: [
                'Jun 2016',
                'Jul 2016',
                'Aug 2016',
                'Sep 2016',
                'Oct 2016',
                'Nov 2016',
                'Dec 2016',
                'Jan 2017',
                'Feb 2017',
                'Mar 2017',
                'Apr 2017',
                'May 2017',
            ],
            // Information about the dataset
            datasets: [
                {
                    label: 'title1',
                    backgroundColor: 'transparent',
                    borderColor: '#00838d',
                    data: [
                        26.4, 39.8, 51.55, 6.14, 20.33, 15.11, 127.54, 19.235,
                        117.148, 176, 11, 14.6,
                    ],
                },
                {
                    label: 'title2',
                    backgroundColor: 'transparent',
                    borderColor: '#9B945F',
                    data: [
                        26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8, 57.8,
                        76, 110.8, 142.6,
                    ],
                },
                {
                    label: 'title3',
                    backgroundColor: 'transparent',
                    borderColor: '#ccc',
                    data: [
                        126.4, 59.8, 176.8, 226.4, 240.6, 95.2, 277.4, 169.8,
                        57.8, 76, 10.8, 42.6,
                    ],
                },
            ],
        },

        // Configuration options
        options: {
            layout: {
                padding: 10,
            },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'KPI Title',
            },
            scales: {
                yAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: 'Precipitation in mm',
                        },
                    },
                ],
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: 'Month of the Year',
                        },
                    },
                ],
            },
        },
    });
}

if (document.getElementById('KPiChart2')) {
    var ctx2 = document.getElementById('KPiChart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'pie', // also try bar or other graph types

        // The data for our dataset
        data: {
            labels: ['title1', 'title2', 'title3'],
            datasets: [
                {
                    label: 'My First Dataset',
                    data: [120, 50, 100],
                    backgroundColor: ['#00838d', '#9B945F', '#ccc'],
                    hoverOffset: 4,
                },
            ],
        },
        options: {
            layout: {
                padding: 10,
            },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'KPI Title',
            },
        },

        // Configuration options
    });
}

$('#animated-thumbnails-gallery').lightGallery();
$('#animated-video-gallery').lightGallery();

// AOS.init({
//     once: true,
// });
