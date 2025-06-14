
// ESTES SÃO JAVA SCRIPT SÓ PRA ME AJUDAR A FAZER O HTML E CSS, VCS TEM QUE CONSERTAR


document.addEventListener('DOMContentLoaded', function() {
    // --- Botões de navegação do menu ---
    const botoes = document.querySelectorAll('.botoes a');
    botoes.forEach(function(botao) {
        botao.addEventListener('click', function(event) {
            event.preventDefault();
            botoes.forEach(function(b) { b.classList.remove('ativo'); });
            this.classList.add('ativo');
        });
    });
    if (botoes.length > 0) {
        botoes[0].classList.add('ativo');
    }








    // --- Carrossel de responsabilidades ---
    
    const container = document.querySelector('.caixas-responsabilidades');
    const caixas = document.querySelectorAll('.caixa-responsabilidade');
    const visible = 3; // Quantas caixas aparecem ao mesmo tempo
    let currentIndex = 0;

    // Cria botões de navegação
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '◀';
    prevBtn.className = 'carousel-btn carousel-prev';
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '▶';
    nextBtn.className = 'carousel-btn carousel-next';

    // Cria container para os botões
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

    // Wrapper para as caixas (para facilitar o translateX)
    let wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.transition = 'transform 0.5s';
    wrapper.style.width = `${caixas.length * 243}px`; // 223 + 2*10px margin
    while (container.firstChild) {
        wrapper.appendChild(container.firstChild);
    }
    container.appendChild(wrapper);

    function updateCarousel() {
        const offset = -(currentIndex * 243); // 223 + 2*10px margin
        wrapper.style.transform = `translateX(${offset}px)`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= caixas.length - visible;
    }

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

    updateCarousel();
});


/*
// Exemplo de importação de módulo JavaScript

import nome-do-modulo from "./modules/nome-do-modulo.js";

nome-do-modulo();

*/
