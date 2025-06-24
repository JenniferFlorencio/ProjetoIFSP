# Documentação das Variáveis CSS - Projeto IFSP

## 📋 Visão Geral
Este documento lista todas as variáveis CSS globais definidas no projeto, organizadas por categoria para facilitar o uso e manutenção.

## 🎨 Cores Principais
```css
--cor-verde-principal: #015D12;      /* Verde institucional principal */
--cor-verde-secundario: #329A45;     /* Verde secundário */
--cor-verde-claro: #4FC417;          /* Verde claro para destaques */
--cor-verde-muito-claro: #82FB48;    /* Verde muito claro */
--cor-verde-suave: #80A887;          /* Verde suave para textos secundários */
```

## 🖼️ Cores de Fundo
```css
--cor-body-background: #FFFFFF;      /* Fundo principal branco */
--cor-fundo-escuro: #001815;         /* Fundo escuro (rodapé) */
--cor-fundo-medio: #192F2C;          /* Fundo médio */
--cor-fundo-claro: #D4DAD4;          /* Fundo claro (endereço) */
--cor-fundo-cinza: #F8F8F8;          /* Fundo cinza claro */
```

## ✍️ Tipografia - Cores
```css
--cor-tipografia-geral: #2B4430;     /* Cor principal do texto */
--cor-tipografia-clara: #FFFFFF;     /* Texto branco */
--cor-tipografia-escura: #083410;    /* Texto escuro */
--cor-tipografia-verde: #015C12;     /* Texto verde */
--cor-tipografia-verde-claro: #185924; /* Texto verde claro */
```

## 📝 Tipografia - Famílias de Fontes
```css
--fonte-principal: "Poppins", Arial, Helvetica, sans-serif;
--fonte-secundaria: "Roboto", Arial, Helvetica, sans-serif;
--fonte-terciaria: "Inter", Arial, Helvetica, sans-serif;
--fonte-especial: "Josefin Sans", Arial, Helvetica, sans-serif;
--fonte-display: "Press Start 2P", monospace;
```

## 📏 Tipografia - Tamanhos
```css
--fonte-pequena: 14px;               /* Botões, textos pequenos */
--fonte-normal: 16px;                /* Texto padrão */
--fonte-media: 20px;                 /* Texto médio */
--fonte-grande: 24px;                /* Texto grande */
--fonte-titulo-pequeno: 28px;        /* Títulos pequenos */
--fonte-titulo-medio: 30px;          /* Títulos médios */
--fonte-titulo-grande: 40px;         /* Títulos principais */
```

## ⚖️ Tipografia - Pesos
```css
--peso-leve: 300;                    /* Texto leve */
--peso-normal: 400;                  /* Peso normal */
--peso-medio: 500;                   /* Peso médio */
--peso-semi-bold: 600;               /* Semi-negrito */
--peso-bold: 700;                    /* Negrito */
--peso-extra-bold: 900;              /* Extra negrito */
```

## 🎯 Cores de Interação
```css
--cor-hover: #e0e0e0;                /* Cor de hover */
--cor-ativo: #185924;                /* Estado ativo */
--cor-desabilitado: #646464;         /* Estado desabilitado */
--cor-borda: #e0e0e0;                /* Bordas padrão */
--cor-borda-escura: #2B4430;         /* Bordas escuras */
```

## 🌫️ Sombras
```css
--sombra-leve: 0 2px 6px rgba(0, 0, 0, 0.15);      /* Sombra sutil */
--sombra-media: 0 4px 10px rgba(0, 0, 0, 0.2);     /* Sombra média */
--sombra-forte: 0 4px 16px rgba(12, 12, 12, 0.75); /* Sombra forte */
--sombra-texto: 0px 4px 4px rgba(0, 0, 0, 0.25);   /* Sombra de texto */
--sombra-caixa: 0 2px 12px rgba(0, 0, 0, 0.1);     /* Sombra de caixas */
```

## 🎨 Cores Adicionais
```css
--cor-cinza-claro: #474747;          /* Cinza claro */
--cor-cinza-medio: #646464;          /* Cinza médio */
--cor-verde-escuro-ativo: #185924;   /* Verde escuro para estados ativos */
--cor-verde-medio: #39A108;          /* Verde médio */
```

## 📖 Como Usar

### Exemplo de uso em CSS:
```css
.meu-elemento {
  color: var(--cor-tipografia-geral);
  font-family: var(--fonte-principal);
  font-size: var(--fonte-media);
  font-weight: var(--peso-semi-bold);
  background-color: var(--cor-body-background);
  box-shadow: var(--sombra-leve);
}
```

### Exemplo de botão:
```css
.botao {
  background-color: var(--cor-verde-principal);
  color: var(--cor-tipografia-clara);
  font-family: var(--fonte-secundaria);
  font-size: var(--fonte-pequena);
  font-weight: var(--peso-medio);
  border: 1px solid var(--cor-borda-escura);
  box-shadow: var(--sombra-media);
}

.botao:hover {
  background-color: var(--cor-verde-escuro-ativo);
}
```

## 🔧 Manutenção

Para alterar uma cor ou fonte em todo o projeto, basta modificar a variável correspondente no arquivo `assets/style/main.css` na seção `:root`.

### Exemplo:
```css
:root {
  --cor-verde-principal: #015D12; /* Altere aqui para mudar em todo o projeto */
}
```

## ✅ Benefícios

1. **Consistência**: Todas as cores e fontes seguem o mesmo padrão
2. **Manutenibilidade**: Mudanças centralizadas em um local
3. **Escalabilidade**: Fácil adição de novas variáveis
4. **Legibilidade**: Nomes descritivos facilitam o entendimento
5. **Temas**: Possibilidade futura de criar temas alternativos

---

*Última atualização: Dezembro 2024*