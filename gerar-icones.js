#!/usr/bin/env node
// Gera icon-192.png e icon-512.png para o PWA
// Execute: node gerar-icones.js
// Requer: npm install canvas

const { createCanvas } = require('canvas');
const fs = require('fs');

function gerarIcone(tamanho, arquivo) {
  const canvas = createCanvas(tamanho, tamanho);
  const ctx = canvas.getContext('2d');

  // Fundo escuro
  ctx.fillStyle = '#0e0e10';
  ctx.fillRect(0, 0, tamanho, tamanho);

  // Círculo dourado
  const cx = tamanho / 2;
  const cy = tamanho / 2;
  const r  = tamanho * 0.38;

  const grad = ctx.createRadialGradient(cx - r*0.2, cy - r*0.2, r*0.1, cx, cy, r);
  grad.addColorStop(0, '#d4ba80');
  grad.addColorStop(1, '#a07840');

  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();

  // Letra "P" — Persona
  const fontSize = tamanho * 0.35;
  ctx.fillStyle = '#1a1008';
  ctx.font = `${fontSize}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('P', cx, cy + fontSize * 0.05);

  fs.writeFileSync(arquivo, canvas.toBuffer('image/png'));
  console.log(`✓ ${arquivo} criado (${tamanho}x${tamanho})`);
}

try {
  gerarIcone(192, 'icon-192.png');
  gerarIcone(512, 'icon-512.png');
  console.log('\n✅ Ícones gerados com sucesso!');
} catch(e) {
  console.error('\n❌ Erro:', e.message);
  console.log('\nSe "canvas" não estiver instalado, rode:');
  console.log('  npm install canvas');
  console.log('\nAlternativamente, crie os ícones manualmente ou use um gerador online.');
}
