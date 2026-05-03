// automation.js - 5 Minute Idle Clearing Logic
// Add <script src="automation.js"></script> just before </body> in pos.html

let lastInteractionTimeAuto = Date.now();
document.addEventListener('mousemove', () => lastInteractionTimeAuto = Date.now());
document.addEventListener('keydown', () => lastInteractionTimeAuto = Date.now());
document.addEventListener('click', () => lastInteractionTimeAuto = Date.now());

setInterval(() => {
    const now = Date.now();
    const idleLimit = 5 * 60 * 1000; // 5 minutes in milliseconds
    
    if (now - lastInteractionTimeAuto > idleLimit) {
        // Find if there's any table that is not minimized and has an active order
        if (typeof activeTableId !== 'undefined' && activeTableId && !activeTableId.startsWith('edit_')) {
            const order = orders[activeTableId];
            if (order && order.items && order.items.length > 0) {
                // Clear the table without syncing because no bill was printed
                orders[activeTableId] = { items: [], notes: '', minimized: false, discount: 0 };
                
                if (typeof renderOrderWindow === 'function') renderOrderWindow(activeTableId);
                if (typeof updateSidebarButton === 'function') updateSidebarButton(activeTableId);
                if (typeof saveState === 'function') saveState();
                if (typeof showToast === 'function') showToast('Session idle for 5 mins - active order cleared');
            }
        }
    }
}, 30000); // Check every 30s
