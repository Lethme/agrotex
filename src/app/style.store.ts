interface Style {
    name: string;
    src: string;
}
export const StyleStore: Array<Style> = [
    { name: 'bootstrap', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' },
    { name: 'fontawesome', src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css' },
    { name: 'fancybox', src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css' },
    { name: 'aos', src: 'https://unpkg.com/aos@2.3.1/dist/aos.css' }
];