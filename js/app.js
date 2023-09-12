$(document).ready(function() {
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
  
});

