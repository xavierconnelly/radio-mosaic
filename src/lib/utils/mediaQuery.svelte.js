export function mediaQuery(query) {
    let matches = $state(false);

    $effect(() => {
        const mql = window.matchMedia(query);
        matches = mql.matches;

        const onChange = e => matches = e.matches;
        mql.addEventListener('change', onChange);
        return () => mql.removeEventListener('change', onChange);
    });

    return {
        get matches() { return matches; }
    };
}