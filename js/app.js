$(document).ready(function() {
  // Navegação de tabs

  $('[data-grupo]').each(function() {
    const $tabs = $(this).find('[data-tab]'),
          $conteudos = $(this).find('[data-conteudo]'),
          classAtivoTab = 'tab-ativo',
          classAtivo = 'ativo';
    
    $tabs.first().addClass(classAtivoTab);
    $conteudos.first().addClass(classAtivo);
    
    $tabs.click(function(event) {
      event.preventDefault();

      const $tab = $(this).data('tab'),
            $conteudo = $(`[data-conteudo="${$tab}"]`);

      $tabs.removeClass(classAtivoTab);
      $conteudos.removeClass(classAtivo);
    
      $(this).addClass(classAtivoTab);
      $conteudo.addClass(classAtivo);
    })
  })

  // Scroll suave

  $('[data-nav]').click(function(event) {
    event.preventDefault();
    const $nav = $(this).data('nav'),
          $secao = $(`[data-grupo="${$nav}"]`),
          $distanciaSecao = $($secao).offset().top,
          $tamanhoMenu = $('[data-menu="nav"]').innerHeight();
 
    $('html, body').animate({
      scrollTop: $distanciaSecao - $tamanhoMenu
    }, 500)
  });

  $('[data-logo="nav"]').click(function(event) {
    event.preventDefault
    $('html, body').animate({
      scrollTop: 0
    },500)
  })

  // Nav ativo

  $('[data-grupo]').each(function() {
    const alturaSecao = $(this).innerHeight(),
          distanciaSecao = $(this).offset().top,
          $navs = $('[data-menu]').find('[data-nav]'),
          $id = $(this).data('grupo'),
          $nav = $(`[data-nav="${$id}"]`),
          $tamanhoMenu = $('[data-menu="nav"]').innerHeight();

    $(window).scroll(function() {
      const windowTop = $(window).scrollTop();
      if(distanciaSecao - $tamanhoMenu - 10 < windowTop) {
        $navs.removeClass('ativo')
        $nav.addClass('ativo');
      }
    })
  });

  // Menu mobile

  $('[data-mobile="btn"]').click(function() {
    $(this).toggleClass('ativo');
    $('[data-mobile="menu"]').toggleClass('ativo')
  })

  // Slide

  function slide(nomeSlide, velocidade) {
    const seletorSlide = nomeSlide,
          classeAtivo = 'ativo';
    let rotacao = setInterval(rodaSlide, velocidade);
    
    $(`${seletorSlide} > :first`).addClass(classeAtivo);

    $(seletorSlide).hover(function() {
      clearInterval(rotacao);
    }, function() {
      rotacao = setInterval(rodaSlide, velocidade);
    });
  
    function rodaSlide() {
      const slideAtivo = $(`${seletorSlide} > .${classeAtivo}`);
      let proximoSlide = slideAtivo.next();
  
      if(proximoSlide.length === 0) {
        proximoSlide = $(`${seletorSlide} > :first`);
      }
  
      slideAtivo.removeClass(classeAtivo);
      proximoSlide.addClass(classeAtivo);
    }
  }
  slide('[data-slide="1"]', 3000);

});

