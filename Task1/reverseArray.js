class ReverseArray {
    constructor() {
        this._array = ["n", "2", "&", "a", "l", "9", "$", "q", "47", "i", "a", "j", "b", "z", "%", "8"];
        this.keep_items = [this._array[2], this._array[6], this._array[14]];
        this.new_array = [];
        new Container({
            parent: window.body,
            className: "container exercise-1",
            children: [
                new Label({
                    className: "title",
                    text: "Reverse Array",
                }),
                new Container({
                    id: "arr",
                    children: this.arrayHTML(this._array)
                }),
                new Container({
                    id: "reversed_arr",
                    // children: 
                }),
                new Button({
                    text: "Reverse it",
                    fontSize: "1.2rem",
                    events: { onclick: this.reverse }
                })
            ]
        });

    }
    reverse = () => {
        this.new_array = Array.from(this._array).reverse()
        this.new_array.map((elm) => this.keep_items.includes(elm) && this.new_array.splice(this.new_array.indexOf(elm), 1));
        this._array.map((elm) => this.keep_items.includes(elm) && this.new_array.splice(this._array.indexOf(elm), 0, elm))
        this.arrayHTML(this.new_array).map(elm => window.reversed_arr.appendChild(elm))
    }

    arrayHTML = (arr) => {
        return [
            new Container({
                text: "["
            }),
            ...arr.map((elm, i) =>
                new Container({
                    fontSize: "1.3rem",
                    color: this.keep_items.includes(elm) ? "#0FF4C6" : "",
                    margin: "0 0.2rem",
                    text: elm + (i == arr.length - 1 ? "" : ",")
                })),
            new Container({
                text: "]"
            }),
        ]
    }
}