const cacheName = 'SPA-salon-v3';
const filesToCache = 
[
    '/',
    '/offline.html',
    '/index.html',
    '/Service_1.html',
    '/Service_2.html',
    '/Service_3.html',
    '/Service_4.html',
    '/Service_5.html',
    '/Service_6.html',
    '/Service_7.html',
    '/Service_8.html',
    '/Service_9.html',
    '/Eng_1.html',
    '/Eng_2.html',
    '/Eng_3.html',
    '/Eng_4.html',
    '/Eng_5.html',
    '/Eng_6.html',
    '/Eng_7.html',
    '/Eng_8.html',
    '/Eng_9.html',
    '/ENG.html',
    '/assets/css/flex-slider.css',
    '/assets/css/fontawesome.css',
    '/assets/css/owl.css',
    '/assets/css/templatemo-sixteen.css',
    '/assets/fonts/Flaticon.woff',
    '/assets/fonts/flexslider-icon.eot',
    '/assets/fonts/flexslider-icon.svg',
    '/assets/fonts/flexslider-icon.ttf',
    '/assets/fonts/flexslider-icon.woff',
    '/assets/fonts/FontAwesome.otf',
    '/assets/fonts/fontawesome-webfont.eot',
    '/assets/fonts/fontawesome-webfont.svg',
    '/assets/fonts/fontawesome-webfont.ttf',
    '/assets/fonts/fontawesome-webfont.woff',
    '/assets/fonts/fontawesome-webfont.woff2',
    '/assets/fonts/slick.eot',
    '/assets/fonts/slick.svg',
    '/assets/fonts/slick.ttf',
    '/assets/fonts/slick.woff',
    '/assets/images/bg_image.jpg',
    '/assets/images/SPA.png',
    '/assets/js/accordions.js',
    '/assets/js/custom.js',    
    '/assets/js/isotope.js',
    '/assets/js/owl.js',
    '/assets/js/slick.js',
    'assets/videos/1/buccal.mp4',
    'assets/videos/1/classic.mp4',
    'assets/videos/1/khmer.mp4',
    'assets/videos/1/sculpture.mp4',
    'assets/videos/2/apparat.mp4',
    'assets/videos/2/mechanic.mp4',
    'assets/videos/3/SPA-face.mp4',
    'assets/videos/3/Alginate.mp4',
    'assets/videos/3/farfor.mp4',
    'assets/videos/4/piling.mp4',
    'assets/videos/5/screenrec.mp4',
    'assets/videos/5/glazirowanie.mp4',
    'assets/videos/5/kofeyniy.mp4',
    'assets/videos/5/cistka.mp4',
    'assets/videos/6/diagnostika.mp4',
    'assets/videos/7/smas.mp4',
    'assets/videos/7/rflifting.mp4',
    'assets/videos/8/smaslifting.mp4',
    'assets/videos/8/infrared.mp4',
    'assets/videos/9/manicure.mp4',
    'assets/videos/9/pedicure.mp4',
    'vendor/bootstrap/css/bootstrap.css',
    'vendor/bootstrap/css/bootstrap.min.css',
    'vendor/bootstrap/css/bootstrap.css.map',
    'vendor/bootstrap/css/bootstrap.min.css.map',
    'vendor/bootstrap/js/bootstrap.bundle.js',
    'vendor/bootstrap/js/bootstrap.bundle.js.map',
    'vendor/bootstrap/js/bootstrap.bundle.min.js',
    'vendor/bootstrap/js/bootstrap.bundle.min.js.map',
    'vendor/bootstrap/js/bootstrap.js',
    'vendor/bootstrap/js/bootstrap.js.map',
    'vendor/bootstrap/js/bootstrap.min.js',
    'vendor/bootstrap/js/bootstrap.min.js.map',
    'vendor/jquery/jquery.js',
    'vendor/jquery/jquery.min.js',
    'vendor/jquery/jquery.min.js.map',
    'vendor/jquery/jquery.slim.js',
    'vendor/jquery/jquery.slim.min.js',
    'vendor/jquery/jquery.slim.min.js.map',
    'service-worker.js'
];
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Proveryaem, est' li otvet v keshi
        if (response) {
          return response; // Esli est', vozvratim ego
        }
        // Esli otveta net v keishe, zagruzim offline.html
        return fetch(event.request)
          .catch(function() {
            return caches.match('offline.html'); // vozvrashchaem offline.html v sluchae oshibki zagruzki
          });
      })
  );
});
