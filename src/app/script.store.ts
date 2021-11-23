interface Script {
    name: string;
    src: string;
}
export const ScriptStore: Array<Script> = [
    { name: 'jquery', src: 'https://code.jquery.com/jquery-3.6.0.min.js' },
    { name: 'popper', src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js' },
    { name: 'bootstrap', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js' },
    { name: 'fontawesome', src: 'https://kit.fontawesome.com/a364978c1f.js' },
    { name: 'fancybox', src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js' },
    { name: 'aos', src: 'https://unpkg.com/aos@2.3.1/dist/aos.js' }
];