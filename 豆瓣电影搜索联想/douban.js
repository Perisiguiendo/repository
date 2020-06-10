var search = {
    init: function (options) {
        this.iniData(options);
        this.handle();
    },
    iniData: function (options) {
        this.oInput = options.el.document.getElementByTagName('input')[0];
    },
    handle: function () {
        this.handleInput();
        this.handleBlur();
        this.handleFocus();
    },
    handleInput: function () {
        this.oInput.oninput = function (e) { 
            var inputText = e.target.value.trim();
            getData(inputText, function () { 
                
            });
        };
    },
    handleBlur: function () {

    },
    handleFocus: function () {

    }

};