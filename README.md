# awsmBox

> Awesome JavaScript popups

## Methods

All methods are under the `awsmBox` global.

+ `create(options)`
    + `Object options`
        + `String title` - default `"awsmBox"`
        + `String body` - default `"Sample text, lens flare"`
        + `Array buttons` - default `[{text: "OK", closeOnClick: true}]`
            + `Object`
                + `String text`
                + `Function onClick`
                + `Boolean closeOnClick`
    + Example
    ```javascript
    awsmBox.create({
        title: "Hello, awsmBox!",
        body: "I like waffles, don't you?",
        buttons: [{
            text: "Okey-dokey",
            closeOnClick: true
        }, {
            text: "Ugh, scrub",
            onClick: function(){ alert("UGHHHHHH") }
        }]
    })
    ```

+ `close(box)`
    + `HTMLDivElement box`
    + Example
    ```javascript
    awsmBox.close(document.getElementsByClassName("awsmBox")[0]);
    ```
