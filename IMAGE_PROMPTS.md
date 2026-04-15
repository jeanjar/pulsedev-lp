# Prompts para Geração de Imagens — Landing Page

Abaixo estão os prompts para cada imagem da landing page. Use em ferramentas como Midjourney, DALL-E, Leonardo AI, Ideogram ou similar.

**Direção visual geral**: Estilo clean, corporativo-moderno, tons de azul escuro (#0F1B2D, #1E3A5F, #2563EB) com acentos de verde (#10B981). Sem pessoas genéricas sorrindo. Sem stock photo. Visual de consultoria premium de tecnologia.

---

## 1. hero-dashboard.png

**Seção**: Hero (lado direito)
**Dimensões**: 1200 x 900 px
**Formato**: PNG com fundo transparente ou escuro

### Prompt

```
A sleek, modern dashboard UI mockup floating at a slight 3D perspective angle on a dark navy background (#0F1B2D). The dashboard shows software engineering delivery metrics: a velocity chart trending upward, a donut chart for sprint completion rate, a kanban-style progress bar, and small KPI cards showing "Lead Time", "Rework Rate", and "Predictability Score" with green positive indicators. The design is minimal, clean, with a glassmorphism style — frosted glass panels with subtle white borders. Color palette: dark navy background, blue (#2563EB) accent for charts, green (#10B981) for positive indicators, white text. No real data, just realistic-looking placeholder metrics. Ultra-clean UI design, Figma quality, no people, no logos. High resolution, sharp details.
```

### Variação alternativa (mais abstrata)

```
Abstract 3D visualization of an optimized workflow pipeline. Glowing blue (#2563EB) and green (#10B981) nodes connected by smooth flowing lines on a deep dark navy (#0F1B2D) background. The flow transitions from chaotic tangled connections on the left to clean, organized parallel streams on the right — representing the transformation from operational friction to delivery clarity. Minimal, futuristic, clean aesthetic. Soft ambient lighting, subtle depth of field. No text, no people. High resolution digital art.
```

---

## 2. solution-clarity.png

**Seção**: Solução (lado esquerdo)
**Dimensões**: 1000 x 750 px
**Formato**: PNG

### Prompt

```
A split-composition digital illustration showing transformation in a software engineering operation. Left side: a tangled, foggy network of gray nodes and crossed lines representing operational chaos — blurred, low contrast, muted colors. Right side: the same network now organized into a clear, flowing system with glowing blue (#2563EB) connections and green (#10B981) checkpoints, sharp and well-lit. A subtle dividing line or gradient separates both sides. Dark navy (#0F1B2D) background. Abstract, no people, no text. Clean, modern, premium feel. Suitable for a consulting landing page. High resolution.
```

### Variação alternativa (mais concreta)

```
Isometric illustration of a software development workflow being optimized. Shows a stylized board with tasks flowing through stages: backlog, in progress, review, done. Some lanes have bottleneck indicators (red/orange) being resolved — turning into smooth green flows. Small abstract icons represent code review, testing, deployment. Color palette: dark navy base, blue (#2563EB) primary, green (#10B981) success states, subtle gray for inactive elements. Clean flat design with subtle shadows. No people, no text. Modern SaaS aesthetic.
```

---

## 3. deliverables-report.png

**Seção**: Entregáveis (lado direito)
**Dimensões**: 1000 x 750 px
**Formato**: PNG

### Prompt

```
A realistic mockup of professional consulting deliverables displayed on a clean desk or floating in space. Shows: a tablet displaying an executive report with charts and prioritized action items, a printed document with a "Diagnóstico Operacional" cover page in dark navy and blue design, and a laptop showing a metrics dashboard. All items are arranged in a layered, editorial composition with slight depth. The documents have a premium design feel — clean typography, blue (#2563EB) accent colors, dark navy (#0F1B2D) headers, green (#10B981) highlights for positive metrics. Soft shadows, light gray or white background. No readable text needed, just realistic-looking layouts. Professional, corporate, modern. High resolution product photography style.
```

### Variação alternativa (mais flat/ilustrada)

```
Flat illustration of stacked consulting deliverables: a diagnostic report with bar charts, an action plan checklist with green checkmarks, a bottleneck map showing a flowchart, and a metrics dashboard card. All documents overlap slightly in an organized fan layout. Clean design with dark navy (#0F1B2D) document headers, blue (#2563EB) chart elements, green (#10B981) check indicators, white card backgrounds. Light gray (#F8FAFC) overall background. No real text, just visual placeholders suggesting structure. Premium, minimal, editorial feel. High resolution.
```

---

## 4. differentials-advisor.png

**Seção**: Diferenciais (lado esquerdo)
**Dimensões**: 1000 x 750 px
**Formato**: PNG

### Prompt

```
A professional, candid-style photograph of a tech advisor in a modern office environment during a strategic meeting. The advisor (seen from behind or in profile, not facing camera directly) is pointing at a whiteboard that shows a simplified engineering workflow diagram with blue markers. Across the table, a laptop shows code or a Jira-like board. The environment is a clean, well-lit modern office with minimal decoration — glass walls, warm neutral tones, natural light. The mood conveys competence, strategy, and collaboration. Not staged or overly corporate. Real, genuine, focused. Shallow depth of field. Color temperature: slightly cool with warm accents. High resolution editorial photography.
```

### Variação alternativa (abstrata, sem pessoas)

```
A modern glass whiteboard in a clean office space showing a hand-drawn engineering process diagram — boxes connected by arrows labeled with abstract symbols, some highlighted in blue (#2563EB), bottleneck areas circled in red being crossed out, and improved paths drawn in green (#10B981). A laptop sits open nearby showing a dark-themed code editor. The scene is shot from a slight angle with natural window light. Shallow depth of field, focused on the whiteboard. Minimalist office, no clutter. Conveys strategy, analysis, and pragmatic improvement. High resolution photography.
```

---

## Dicas de Geração

1. **Midjourney**: Adicione `--ar 4:3` para manter a proporção. Use `--style raw` para resultados mais limpos. Adicione `--v 6.1` ou superior.

2. **DALL-E 3**: Funciona melhor com prompts descritivos longos. Especifique "no text on the image" se não quiser texto renderizado.

3. **Leonardo AI**: Use o modelo "PhotoReal" para a imagem 4, e "DreamShaper" para as imagens mais abstratas (1, 2).

4. **Ideogram**: Bom para mockups de UI (imagem 1 e 3). Use modo "Design".

5. **Geral**: Gere 3-4 variações de cada e escolha a que melhor se encaixa no tom da página. Priorize imagens que transmitam: clareza, método, sofisticação, tecnologia.

---

## Checklist de Qualidade

Antes de usar a imagem na landing page, verifique:

- [ ] Resolução mínima de 1000px no lado menor
- [ ] Cores alinhadas com a paleta (navy, blue, green, white)
- [ ] Sem texto legível que possa conter erros de IA
- [ ] Sem artefatos visuais ou distorções
- [ ] Boa aparência em fundo claro E escuro (hero = fundo escuro, demais = fundo claro)
- [ ] Otimizada para web (< 300KB se possível, usar WebP ou PNG comprimido)

## Onde colocar

Salve as imagens em `images/` com os nomes exatos:

```
images/
├── hero-dashboard.png
├── solution-clarity.png
├── deliverables-report.png
└── differentials-advisor.png
```
