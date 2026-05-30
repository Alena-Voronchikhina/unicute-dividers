/**
 * UniCute Dividers - Clipboard utility for Unicode dividers
 */

// ============================================================================
// DATA
// ============================================================================

// Decorative text dividers (Unicode + ASCII)
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

// ============================================================================
// DOM ELEMENTS
// ============================================================================

let statusElement;
let dividersContainer;
let statusTimeout = null;

// ============================================================================
// CORE FUNCTIONS
// ============================================================================

/**
 * Initialize the application when DOM is ready
 */
function init() {
    // Get references to DOM elements
    statusElement = document.getElementById('status');
    dividersContainer = document.getElementById('dividers-container');
    
    // Render all dividers
    renderDividers();
}

// Render all divider cards
function renderDividers() {
    // Clear any existing content
    dividersContainer.innerHTML = '';
    
    // Create a card for each divider
    DIVIDERS.forEach((divider, index) => {
        const card = createDividerCard(divider, index);
        dividersContainer.appendChild(card);
    });
}

// Create a single divider card element
function createDividerCard(divider, index) {
    const card = document.createElement('div');
    card.className = 'divider-card';
    card.textContent = divider;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Copy divider: ${divider}`);
    
    // Add click handler
    card.addEventListener('click', () => handleCopy(divider));
    
    // Add keyboard support (Enter or Space)
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCopy(divider);
        }
    });
    
    return card;
}

// Copy divider to clipboard with fallback for older browsers
function handleCopy(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => showStatus('Copied to clipboard! ✓', 'success'))
            .catch(() => copyTextFallback(text));
    } else {
        // Fallback for older browsers
        copyTextFallback(text);
    }
}

// Fallback copy using document.execCommand for older browsers
function copyTextFallback(text) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.pointerEvents = 'none';
    
    document.body.appendChild(textarea);
    
    try {
        // Select and copy the text
        textarea.select();
        textarea.setSelectionRange(0, text.length);
        
        const successful = document.execCommand('copy');
        
        if (successful) {
            showStatus('Copied to clipboard! ✓', 'success');
        } else {
            showStatus('Could not copy automatically. Please copy manually.', 'error');
        }
    } catch (error) {
        console.error('Fallback copy failed:', error);
        showStatus('Could not copy automatically. Please copy manually.', 'error');
    } finally {
        // Clean up
        document.body.removeChild(textarea);
    }
}

// Show status message for 2 seconds with fade animation
function showStatus(message, type = 'success') {
    // Clear any existing timeout
    if (statusTimeout) {
        clearTimeout(statusTimeout);
    }
    
    // Update status element
    statusElement.textContent = message;
    statusElement.className = `status ${type} visible`;
    
    // Hide after 2 seconds
    statusTimeout = setTimeout(() => {
        statusElement.className = 'status';
        statusElement.textContent = '';
    }, 2000);
}

// ============================================================================
// INITIALIZATION
// ============================================================================

// Wait for DOM to be ready, then initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM is already ready
    init();
}
