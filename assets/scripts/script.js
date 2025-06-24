// ===============================
// JAVASCRIPT DO PROJETO IFSP
// ===============================

// --- BOTÕES DE NAVEGAÇÃO DO MENU PRINCIPAL ---
// Ativa/desativa a classe 'ativo' nos botões do menu principal (topo da página)
document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.botoes a');
    
    // Detecta qual página está ativa baseado na URL atual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    botoes.forEach(function(botao) {
        const href = botao.getAttribute('href');
        
        // Remove classe ativo de todos os botões
        botao.classList.remove('ativo');
        
        // Adiciona classe ativo ao botão correspondente à página atual
        if ((currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === 'dae.html' && href === 'dae.html') ||
            (currentPage === 'daa.html' && href === 'daa.html') ||
            (currentPage === '' && href === 'index.html')) {
            botao.classList.add('ativo');
        }
        
        // Adiciona evento de clique para navegação
        botao.addEventListener('click', function(event) {
            // Permite navegação normal (não previne o default)
            botoes.forEach(function(b) { b.classList.remove('ativo'); });
            this.classList.add('ativo');
        });
    });
    
    // Se nenhum botão foi marcado como ativo, ativa o primeiro (DRG)
    const activeButton = document.querySelector('.botoes a.ativo');
    if (!activeButton && botoes.length > 0) {
        botoes[0].classList.add('ativo');
    }

    // --- CARROSSEL DE RESPONSABILIDADES ---
    // Controla o carrossel das caixas de responsabilidade na seção "PRINCIPAIS RESPONSABILIDADES"
    const container = document.querySelector('.caixas-responsabilidades');
    const caixas = document.querySelectorAll('.caixa-responsabilidade');
    
    // Função para determinar quantas caixas mostrar baseado no tamanho da tela
    function getVisibleCount() {
        if (window.innerWidth <= 480) return 1; // Mobile
        if (window.innerWidth <= 768) return 2; // Tablet
        return 3; // Desktop
    }
    
    let visible = getVisibleCount();
    let currentIndex = 0;

    // Cria botões de navegação do carrossel (setas)
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '<';
    prevBtn.className = 'carousel-btn carousel-prev';
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '>';
    nextBtn.className = 'carousel-btn carousel-next';

    // Cria container para os botões do carrossel
    const controls = document.createElement('div');
    controls.className = 'carousel-controls';
    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);

    // Adiciona o container das setas ao final da principais-responsabilidades
    const principais = container.closest('.principais-responsabilidades');
    principais.appendChild(controls);

    // Estiliza o container para carrossel
    container.style.display = 'flex';
    container.style.overflow = 'hidden';
    container.style.transition = 'transform 0.5s';

    // Cria um wrapper para as caixas (para facilitar o translateX)
    let wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.transition = 'transform 0.5s';
    wrapper.style.width = `${caixas.length * 243}px`; // 223 + 2*10px margin
    while (container.firstChild) {
        wrapper.appendChild(container.firstChild);
    }
    container.appendChild(wrapper);

    // Função para atualizar o carrossel ao navegar
    function updateCarousel() {
        visible = getVisibleCount(); // Atualiza o número de caixas visíveis
        const offset = -(currentIndex * 243); // 223 + 2*10px margin
        wrapper.style.transform = `translateX(${offset}px)`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= caixas.length - visible;
        
        // Esconde controles em mobile se necessário
        if (window.innerWidth <= 768) {
            controls.style.display = 'none';
        } else {
            controls.style.display = 'flex';
        }
    }

    // Eventos dos botões do carrossel
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentIndex < caixas.length - visible) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Inicializa o carrossel na posição correta
    updateCarousel();
    
    // Atualiza o carrossel quando a tela é redimensionada
    window.addEventListener('resize', function() {
        updateCarousel();
    });
});

// --- FAQ (PERGUNTAS FREQUENTES) ---
// Controla o abrir/fechar das perguntas do FAQ (em todas as páginas que usam .faq-toggle)
document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        // Se quiser fechar outros ao abrir um, descomente abaixo:
        // document.querySelectorAll('.faq-toggle').forEach(b => {
        //     if (b !== this) b.setAttribute('aria-expanded', false);
        // });
        this.querySelector('.faq-icon').textContent = expanded ? '+' : '−';
    });
});

// FAQ (PERGUNTAS FREQUENTES) - versão simplificada
var faqToggles = document.querySelectorAll('.faq-toggle');
for (var i = 0; i < faqToggles.length; i++) {
    faqToggles[i].addEventListener('click', function() {
        var answer = this.nextElementSibling;
        var isOpen = answer.classList.contains('open');
        if (isOpen) {
            answer.classList.remove('open');
            this.setAttribute('aria-expanded', 'false');
            this.querySelector('.faq-icon').textContent = '+';
        } else {
            answer.classList.add('open');
            this.setAttribute('aria-expanded', 'true');
            this.querySelector('.faq-icon').textContent = '−';
        }
    });
}

/*
// Exemplo de importação de módulo JavaScript (não utilizado no momento)
// import nome-do-modulo from "./modules/nome-do-modulo.js";
// nome-do-modulo();
*/
