const bodyScrollService = (bool) => {
    if (bool) {
        document.body.classList.add('no-scrolling')
    } else {
        document.body.classList.remove('no-scrolling')
    }
}
export default bodyScrollService;