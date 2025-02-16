// Configuration object
 const galleryConfig = {
    folders: [
        {
            name: "Explore the Zakinn difference ...",
            path: "img/rooms/",
            imageCount: 23,
            altPrefix: " Zakinn photo "
        },
        {
            name: "Authentic Hospitality ...",
            path: "img/new_rooms/",
            imageCount: 25,
            altPrefix: "Zakinn photo "
        }
    ]
};

// Gallery creation function
function createGallery() {
    const container = document.querySelector('.gallery-container');

    galleryConfig.folders.forEach(folder => {
        // Create section elements
        const section = document.createElement('section');
        section.className = 'gallery-section';
        
        // steal the styles from that cool italic statement ...
        const title = document.createElement('p');
        const italic = document.createElement('em');
        italic.className = 'text-success'
        title.className = 'intro ';
        title.appendChild(italic);
        italic.textContent = folder.name;
        
        const grid = document.createElement('div');
        grid.className = 'image-grid';

        // Generate images
        for (let i = 1; i <= folder.imageCount; i++) {
            const imageWrapper = document.createElement('div');
            imageWrapper.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.className = 'gallery-image';
            img.loading = 'lazy';
            img.src = `${folder.path}room${i}.jpg`; // Adjust naming pattern if needed
            img.alt = `${folder.altPrefix} ${i}`;
            
            imageWrapper.appendChild(img);
            grid.appendChild(imageWrapper);
        }

        // Assemble section
        section.appendChild(title);
        section.appendChild(grid);
        container.appendChild(section);
    });
}

// Initialize gallery when DOM loads
document.addEventListener('DOMContentLoaded', createGallery);