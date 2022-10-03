const download = (link,namefile) => {
    // Create a new link
    const anchor = document.createElement('a');

    anchor.href = link;
    anchor.download = namefile;

    // Append to the DOM
    document.body.appendChild(anchor);

    // Trigger `click` event
    anchor.click();

    // Remove element from DOM
    document.body.removeChild(anchor);
};

export default download