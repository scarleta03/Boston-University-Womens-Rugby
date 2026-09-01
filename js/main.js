(function(){
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', function(){
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ links.classList.remove('open'); });
    });
  }

  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[href]').forEach(function(a){
    var href = a.getAttribute('href');
    if(href === here || (here === '' && href === 'index.html')){
      a.classList.add('current');
      a.setAttribute('aria-current', 'page');
    }
  });
})();

(function(){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('[data-reveal]');
  if(!targets.length) return;
  if(reduceMotion || !('IntersectionObserver' in window)){
    targets.forEach(function(t){ t.classList.add('in-view'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(function(t){ io.observe(t); });
})();

(function(){
  var slides = document.querySelectorAll('.t-slide');
  var dotsWrap = document.getElementById('t-dots');
  if(!slides.length || !dotsWrap) return;
  var current = 0;
  var timer;

  slides.forEach(function(_, i){
    var b = document.createElement('button');
    if(i === 0) b.className = 'active';
    b.setAttribute('aria-label', 'Go to quote ' + (i + 1));
    b.addEventListener('click', function(){ show(i); resetTimer(); });
    dotsWrap.appendChild(b);
  });
  var dots = dotsWrap.querySelectorAll('button');

  function show(i){
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }
  function resetTimer(){
    clearInterval(timer);
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!reduceMotion){ timer = setInterval(function(){ show(current + 1); }, 7000); }
  }

  var prevBtn = document.getElementById('t-prev');
  var nextBtn = document.getElementById('t-next');
  if(prevBtn) prevBtn.addEventListener('click', function(){ show(current - 1); resetTimer(); });
  if(nextBtn) nextBtn.addEventListener('click', function(){ show(current + 1); resetTimer(); });
  resetTimer();
})();

(function(){
  var triggers = document.querySelectorAll('.eboard-trigger');
  if(!triggers.length) return;
  triggers.forEach(function(btn){
    var card = btn.closest('.eboard-card');
    if(!card || card.classList.contains('tba')) return;
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function(){
      var open = card.classList.toggle('expanded');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();

(function(){
  var buttons = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.news-card');
  if(!buttons.length || !cards.length) return;

  buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
      buttons.forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      cards.forEach(function(card){
        var show = filter === 'all' || card.getAttribute('data-category') === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
})();
