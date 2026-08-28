/**
 * UniCute Dividers - A clipboard utility for Unicode dividers
 */

// ============================================================================
// DATA
// ============================================================================

/**
 * Collection of Unicode and ASCII dividers
 * Each string represents a decorative text divider
 * Sorted by length (shortest to longest)
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

/**
 * Dynamically render all dividers as clickable cards
 */
function renderDividers() {
    // Clear any existing content
    dividersContainer.innerHTML = '';
    
    // Create a card for each divider
    DIVIDERS.forEach((divider) => {
        const card = createDividerCard(divider);
        dividersContainer.appendChild(card);
    });
}

/**
 * Create a single divider card element
 * @param {string} divider - The divider text
 * @returns {HTMLElement} The created card element
 */
function createDividerCard(divider) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'divider-card';
    card.textContent = divider;
    card.setAttribute('aria-label', `Copy divider: ${divider}`);
    
    // Add click handler
    card.addEventListener('click', () => handleCopy(divider));
    
    return card;
}

/**
 * Handle copying a divider to the clipboard
 * @param {string} text - The text to copy
 */
function handleCopy(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => showStatus('Copied to clipboard! ✓', 'success'))
            .catch(() => copyTextFallback(text));
    } else {
        copyTextFallback(text);
    }
}

/**
 * Fallback method for copying text in older browsers
 * @param {string} text - The text to copy
 */
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
        showStatus('Could not copy automatically. Please copy manually.', 'error');
    } finally {
        // Clean up
        document.body.removeChild(textarea);
    }
}

/**
 * Display a status message to the user
 * @param {string} message - The message to display
 * @param {string} type - The type of message ('success' or 'error')
 */
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
