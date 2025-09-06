// Estado do mapa
let zoom = 1;
let currentOcean = null;
let isSidebarOpen = false;

// Elementos DOM
const earthImage = document.getElementById('earth-image');
const sidebar = document.getElementById('ocean-sidebar');
const overlay = document.getElementById('sidebar-overlay');
const closeSidebarBtn = document.getElementById('close-sidebar');
const zoomInBtn = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');
const zoomResetBtn = document.getElementById('zoom-reset');

// Imagens dos oceanos
const oceanImages = {
    pacific: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
    atlantic: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
    indian: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
    arctic: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
    southern: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600'
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
});

// Configurar event listeners
function setupEventListeners() {
    // Regiões dos oceanos
    const oceanRegions = document.querySelectorAll('.ocean-region');
    oceanRegions.forEach(region => {
        region.addEventListener('click', function() {
            const oceanId = this.dataset.ocean;
            handleOceanClick(oceanId);
        });
    });

    // Fechar sidebar
    closeSidebarBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Controles de zoom
    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);
    zoomResetBtn.addEventListener('click', resetZoom);

    // Tecla ESC para fechar sidebar
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isSidebarOpen) {
            closeSidebar();
        }
    });
}

// Lidar com clique no oceano
async function handleOceanClick(oceanId) {
    try {
        const response = await fetch(`/api/oceano/${oceanId}`);
        if (!response.ok) {
            throw new Error('Oceano não encontrado');
        }
        
        const oceanData = await response.json();
        currentOcean = oceanData;
        showSidebar(oceanData);
    } catch (error) {
        console.error('Erro ao carregar dados do oceano:', error);
        alert('Erro ao carregar informações do oceano');
    }
}

// Mostrar sidebar com informações do oceano
function showSidebar(ocean) {
    // Preencher dados na sidebar
    document.getElementById('sidebar-title').textContent = ocean.name;
    document.getElementById('sidebar-image').src = oceanImages[ocean.id];
    document.getElementById('sidebar-image').alt = `${ocean.name} marine ecosystem`;
    document.getElementById('sidebar-description').textContent = ocean.description;
    document.getElementById('sidebar-link').href = `/oceano/${ocean.id}`;

    // Preencher estatísticas
    const statsContainer = document.getElementById('sidebar-stats');
    statsContainer.innerHTML = `
        <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-ocean-blue rounded-full"></div>
            <span><strong>Área:</strong> ${ocean.area}</span>
        </div>
        <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-ocean-blue rounded-full"></div>
            <span><strong>Profundidade máxima:</strong> ${ocean.maxDepth}</span>
        </div>
        <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-ocean-blue rounded-full"></div>
            <span><strong>Temperatura média:</strong> ${ocean.avgTemp}</span>
        </div>
    `;

    // Mostrar sidebar
    sidebar.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    isSidebarOpen = true;
}

// Fechar sidebar
function closeSidebar() {
    sidebar.classList.add('translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    isSidebarOpen = false;
    currentOcean = null;
}

// Controles de zoom
function zoomIn() {
    zoom = Math.min(zoom + 0.2, 2);
    updateZoom();
}

function zoomOut() {
    zoom = Math.max(zoom - 0.2, 0.5);
    updateZoom();
}

function resetZoom() {
    zoom = 1;
    updateZoom();
}

function updateZoom() {
    earthImage.style.transform = `scale(${zoom})`;
}