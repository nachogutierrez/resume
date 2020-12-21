const App = (function() {

    let bindings

    function start() {
        // initA4()
    }

    function initA4() {
        document.querySelectorAll('.a4').forEach(el => {
            const h = `${a4Height(el.getBoundingClientRect().width)}px`
            el.style['min-height'] = h
        })
    }

    const width = () => document.body.getBoundingClientRect().width
    const a4Height = w => Math.round(Math.sqrt(2) * w)

    return {
        start
    }
})()

window.addEventListener('load', App.start)