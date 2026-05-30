/**
 * UniCute Dividers - Clipboard utility for Unicode dividers
 */

const DIVIDERS = [
    "꧁ ༺─────༺ ☆ ༻─────༻ ꧂",
    "⋆ ˚｡ ˗ˏˋ ★ ˎˊ˗ ˚⋆｡˚ ⋆ ˗ˏˋ ★ ˎˊ˗ ⋆ ˚｡⋆˚ ˗ˏˋ ★ ˎˊ˗ ｡˚ ⋆",
    "◇─◇──◇───◇───◇──◇─◇",
    "⋆⁺₊⋆ ☾ ⋆⁺₊⋆ ☽ ⋆⁺₊⋆ ✦ ⋆⁺₊⋆ ☽ ⋆⁺₊⋆ ☾ ⋆⁺₊⋆",
    "♡──────── ♡ ────────♡",
    "⟡ ⟡ ⟡ ─ ⟡ ⟡ ─── ⟡ ─── ⟡ ⟡ ─ ⟡ ⟡ ⟡",
    "·:*¨༺ ♡ ༻¨*:·◦─♡─◦·:*¨༺ ♡ ༻¨*:·",
    "◦ ━━━━ ◦ ❖ ◦ ━━━━ ◦ ❖ ◦ ━━━━ ◦",
    "°  •  ⋆⁺₊⋆ ✦ ⋆⁺₊⋆  •  °  •  ⋆⁺₊⋆ ✦ ⋆⁺₊⋆  •  °  •  ⋆⁺₊⋆ ✦ ⋆⁺₊⋆  •  °",
    "⋆｡°✩ ˗ˏˋ ✩°｡⋆ ⋆｡°✩ ˗ˏˋ ★ ˎˊ˗ ✩°｡⋆ ⋆｡°✩ ˎˊ˗ ✩°｡⋆",
    "⋆｡‧˚ʚ♡ɞ˚‧｡⋆｡‧˚ʚ♡ɞ˚‧｡⋆⋆｡‧˚ʚ♡ɞ˚‧｡",
    "⋆ ˗ˏˋ◇────── ⋆⋅☆⋅⋆ ──────◇ˎˊ˗ ⋆",
    "✿───────────────────✿",
    "♡─♡─♡─♡─♡─♡─♡─♡─♡─♡─♡",
    "✩ ⋆ ✩ ⋆ ✩ ⋆ ✩ ⋆ ✩ ⋆ ✩ ⋆ ✩ ⋆ ✩",
    "✦•⋆⁺₊⋆┈┈┈┈┈┈⋆⁺₊⋆⋆ ✩ ⋆⋆⁺₊⋆┈┈┈┈┈┈⋆⁺₊⋆•✦",
    "｡◦°:*:◦°★✧｡◦°:*:◦°☆｡◦°:*:◦°☆｡◦°",
    "✿──•°•✿•°•──✿──•°•✿•°•──✿",
    "✧◦°: *✧◦°:* *:◦°✧ *:◦°✧*:◦°✧",
    "~•♡•~ ~•♡•~ ~•♡•~ ~•♡•~ ~•♡•~"
];

let statusElement;
let dividersContainer;
let statusTimeout = null;

function init() {
    statusElement = document.getElementById('status');
    dividersContainer = document.getElementById('dividers-container');
    renderDividers();
}

function renderDividers() {
    dividersContainer.innerHTML = '';
    DIVIDERS.forEach((divider, index) => {
        const card = createDividerCard(divider, index);
        dividersContainer.appendChild(card);
    });
}

function createDividerCard(divider, index) {
    const card = document.createElement('div');
    card.className = 'divider-card';
    card.textContent = divider;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Copy divider: ${divider}`);
    
    card.addEventListener('click', () => handleCopy(divider));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCopy(divider);
        }
    });
    
    return card;
}

function handleCopy(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => showStatus('Copied to clipboard! ✓', 'success'))
            .catch(() => copyTextFallback(text));
    } else {
        copyTextFallback(text);
    }
}

function copyTextFallback(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.pointerEvents = 'none';
    
    document.body.appendChild(textarea);
    
    try {
        textarea.select();
        textarea.setSelectionRange(0, text.length);
        
        const successful = document.execCommand('copy');
        if (successful) {
            showStatus('Copied to clipboard! ✓', 'success');
        } else {
            showStatus('Could not copy automatically. Please copy manually.', 'error');
        }
    } catch (error) {
        showStatus('Could not copy automatically. Please copy manually.', 'error');
    } finally {
        document.body.removeChild(textarea);
    }
}

function showStatus(message, type = 'success') {
    if (statusTimeout) {
        clearTimeout(statusTimeout);
    }
    
    statusElement.textContent = message;
    statusElement.className = `status ${type} visible`;
    
    statusTimeout = setTimeout(() => {
        statusElement.className = 'status';
        statusElement.textContent = '';
    }, 2000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
