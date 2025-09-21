    document.addEventListener('DOMContentLoaded', function() {
      const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
      const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
      const alternaContraste = document.getElementById('alterna-contraste');
      const aumentaFonteBotao = document.getElementById('aumentar-fonte');
      const diminuiFonteBotao = document.getElementById('diminuir-fonte');
      let tamanhoAtualFonte = 1;
      let temaAtual = "branco";
      
      botaoDeAcessibilidade.addEventListener('click', function() {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
        const aberto = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', String(!aberto));
      });
      
      aumentaFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte = Math.min(1.6, tamanhoAtualFonte + 0.1);
        document.body.style.fontSize = tamanhoAtualFonte + 'rem';
      });
      
      diminuiFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte = Math.max(0.8, tamanhoAtualFonte - 0.1);
        document.body.style.fontSize = tamanhoAtualFonte + 'rem';
      });
      
      alternaContraste.addEventListener('click', function() {
        if (temaAtual === "branco") {
          document.body.classList.remove('tema-branco');
          document.body.classList.add('alto-contraste');
          temaAtual = "contraste";
        } else if (temaAtual === "contraste") {
          document.body.classList.remove('alto-contraste');
          document.body.classList.add('tema-branco');
          temaAtual = "branco";
        } else {
          document.body.classList.remove('tema-branco');
          temaAtual = "branco";
        }
      });
      
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
          e.preventDefault();
          const sections = document.querySelectorAll('section');
          const currentSection = document.activeElement.closest('section');
          let currentIndex = 0;
          
          if (currentSection) {
            sections.forEach((section, index) => {
              if (section === currentSection) {
                currentIndex = index;
              }
            });
          }
          
          const nextIndex = (currentIndex + 1) % sections.length;
          sections[nextIndex].setAttribute('tabindex', '-1');
          sections[nextIndex].focus();
        }
      });
      
      document.querySelectorAll('section').forEach(sec => {
        sec.setAttribute('tabindex','0');
      });

      if (window.ScrollReveal) {
        const sr = ScrollReveal({
          distance: '40px',
          duration: 800,
          easing: 'ease-out',
          origin: 'bottom',
          reset: false
        });

        sr.reveal('.hero h1', {origin: 'left', delay:100});
        sr.reveal('.hero .lead', {origin: 'left', delay:200});
        sr.reveal('.hero .hero-actions', {origin: 'left', delay:300});
        sr.reveal('.hero-img', {origin: 'right', delay:400});
        sr.reveal('#sobre .card', {interval:150, origin:'bottom'});
        sr.reveal('#discografia .card', {interval:150, origin:'bottom'});
        sr.reveal('#timeline .timeline-item', {interval:150, origin:'bottom'});
        sr.reveal('#estilo .card-decorator', {origin:'bottom', delay:150});
        sr.reveal('#galeria h2', {origin:'left', delay:100});
        sr.reveal('#galeria .section-sub', {origin:'left', delay:200});
        sr.reveal('#galeria .card', {interval:150, origin:'bottom'});
        sr.reveal('.lyrics-card', {origin:'bottom', delay:300});
        sr.reveal('#contato h2', {origin:'left', delay:100});
        sr.reveal('#contato .section-sub', {origin:'left', delay:200});
        sr.reveal('#contato .formulario', {origin:'bottom', delay:300});
        sr.reveal('footer p, footer div', {interval:120, origin:'bottom'});
      }
    });