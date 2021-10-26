class Widget {
    constructor({
        // arguments for items
        element,
        text,
        animate,
        animateIn,
        animateOut,
        children,
        parent,
        className,
        src,
        style,
        events,
        hoverColor,
        hoverTextColor,
        id,
        // arguments for css 
        alignContent,
        alignItems,
        alignSelf,
        animation,
        animationDelay,
        animationDirection,
        animationDuration,
        animationFillMode,
        animationIterationCount,
        animationName,
        animationTimingFunction,
        animationPlayState,
        background,
        backgroundAttachment,
        backgroundColor,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundClip,
        backgroundOrigin,
        backgroundSize,
        backfaceVisibility,
        border,
        borderBottom,
        borderBottomColor,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderBottomStyle,
        borderBottomWidth,
        borderCollapse,
        borderColor,
        borderImage,
        borderImageOutset,
        borderImageRepeat,
        borderImageSlice,
        borderImageSource,
        borderImageWidth,
        borderLeft,
        borderLeftColor,
        borderLeftStyle,
        borderLeftWidth,
        borderRadius,
        borderRight,
        borderRightColor,
        borderRightStyle,
        borderRightWidth,
        borderSpacing,
        borderStyle,
        borderTop,
        borderTopColor,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderTopStyle,
        borderTopWidth,
        borderWidth,
        bottom,
        boxShadow,
        boxSizing,
        captionSide,
        clear,
        clip,
        color,
        columnCount,
        columnFill,
        columnGap,
        columnRule,
        columnRuleColor,
        columnRuleStyle,
        columnRuleWidth,
        columns,
        columnSpan,
        columnWidth,
        counterIncrement,
        counterReset,
        cursor,
        direction,
        display,
        emptyCells,
        filter,
        flex,
        flexBasis,
        flexDirection,
        flexFlow,
        flexGrow,
        flexShrink,
        flexWrap,
        cssFloat,
        font,
        fontFamily,
        fontSize,
        fontStyle,
        fontVariant,
        fontWeight,
        fontSizeAdjust,
        height,
        isolation,
        justifyContent,
        left,
        letterSpacing,
        lineHeight,
        listStyle,
        listStyleImage,
        listStylePosition,
        listStyleType,
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        objectFit,
        objectPosition,
        opacity,
        order,
        orphans,
        outline,
        outlineColor,
        outlineOffset,
        outlineStyle,
        outlineWidth,
        overflow,
        overflowX,
        overflowY,
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        pageBreakAfter,
        pageBreakBefore,
        pageBreakInside,
        perspective,
        perspectiveOrigin,
        position,
        quotes,
        resize,
        right,
        tableLayout,
        tabSize,
        textAlign,
        textAlignLast,
        textDecoration,
        textDecorationColor,
        textDecorationLine,
        textDecorationStyle,
        textIndent,
        textOverflow,
        textShadow,
        textTransform,
        top,
        transform,
        transformOrigin,
        transformStyle,
        transition,
        transitionProperty,
        transitionDuration,
        transitionTimingFunction,
        transitionDelay,
        unicodeBidi,
        userSelect,
        verticalAlign,
        visibility,
        whiteSpace,
        width,
        wordBreak,
        wordSpacing,
        wordWrap,
        widows,
        zIndex,
        mixBlendMode
    }) {}
}

function dilemaSelect(e) { return document.querySelector(e) };

function dilemaSelectAll(e) { return document.querySelectorAll(e) };

class App {
    constructor({ hashRoute, appBody, appBar }) {
        if (appBar) document.body.appendChild(appBar())
        let body = document.createElement('div');
        if (appBody) body.appendChild(appBody())

        if (body) {
            if (body.childNodes[0]) {
                body.childNodes[0].remove()
            }
            loadPage()
        }

        // window.addEventListener('‎DOMContentLoaded', function(){
        //   console.log('asdasds')
        // })
        window.onhashchange = () => {
            if (body.childNodes[0]) {
                body.childNodes[0].remove()
            }
            loadPage()
        }

        async function loadPage() {
            if (window.location.hash == '') {
                window.location.hash = hashRoute.initialRoute.toLowerCase()
            }

            Object.keys(hashRoute.routes).forEach((hash, i) => {
                if ('#' + hash.toLowerCase() == window.location.hash) {
                    if (hashRoute.routes[hash].animateIn || hashRoute.routes[hash].animateOut) {
                        if (body.childNodes[0]) {
                            body.children[0] ? animateCSS(body.childNodes[0], hashRoute.routes[hash].animateOut) : ''
                            body.addEventListener('animationend', function animateOUT() {
                                body.innerHTML = ''
                                    // if()
                                body.appendChild(hashRoute.routes[hash].page() || document.createElement('div'))
                                body.childNodes[0].style.opacity = 0
                                body.removeEventListener('animationend', animateOUT)
                                animateCSS(body.childNodes[0], hashRoute.routes[hash].animateIn)
                            })
                        } else {
                            body.innerHTML = ''
                            body.appendChild(hashRoute.routes[hash].page() || document.createElement('div'))
                            animateCSS(body.childNodes[0], hashRoute.routes[hash].animateIn)
                        }
                    } else {
                        body.innerHTML = ''
                        body.appendChild(hashRoute[hash]())
                    }
                } else if (window.location.hash == '#' + undefined) {
                    window.location.hash = '#/404'
                }
            })
        }
        document.body.appendChild(body)
    }

}

function navigateTo(params) {
    if (!params) return
    window.location.hash = "#" + params;
}

class AppOption extends Widget {
    constructor({ style, route }) {
        super(...arguments);
        let arg = arguments[0]
        if (Object.keys(arg) == '') {
            arg.text = 'Empty Container'
            arg.padding = '10px'
            arg.background = '#fff'
        }

        // !event || console.log(event[1])
        arg.display ? arg.display : arg.display = 'flex'
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        arg.cursor = 'pointer'
        var t = dilema.div(arg.text, ['#DashBoardOption', arg.className, arg], arg.parent);

        arg.route ? t.route = arg.route : '';

        // !event || t.addEventListener(event[0], event[1])
        if (arg.children && !arg.parent) {
            Array.from(arg.children).forEach((elm, i) => {
                t.appendChild(elm);
                // !event || childrens.addEventListener(event[0],event[1])
            });
        }

        // Set Events
        // console.log(arg.event)
        if (arg.events) Object.assign(t, arg.events);



        // , arg.animateTime || 0, arg.animateDelay || 0,arg.animateHover,arg.animateHover
        arg.animate ? animateCSS(t, arg.animate) : '';
        return t;
    }
}

class AppBody extends Widget {
    constructor({ body, IsRouteable }) {

        super(...arguments, body);
        let arg = arguments[0]
        let t = dilema.div('', ['#DashboardBody', { width: '100%', height: '100vh', position: 'relative', overflow: 'auto' }], arg.parent);

        if (body) {
            t.appendChild(body)
        }
        // if (DashboardApp) {
        //   t.children[0].remove()
        // }
        if (arg.children) {
            Array.from(arg.children).forEach(elm => {
                t.appendChild(elm)
            })
        }
        return t;
    }
}

class dataBuilder extends Widget {
    constructor({ data, builder }) {
        super(...arguments);
        let arg = arguments[0]
        arg.display ? arg.display : arg.display = 'flex'
        arg.flexFlow ? arg.flexFlow : arg.flexFlow = 'column'
        let t = dilema.div('', [arg.className, arg])
        Object.keys(data).forEach((elm, i) => {
            t.appendChild(builder(data[elm], i).cloneNode(true))
        });
        return t
    }
}

class DashboardBody extends Widget {
    constructor({ body, IsRouteable }) {

        super(...arguments, body);
        let arg = arguments[0]
        let t = dilema.div('', ['#DashboardBody', { width: '100%', height: '100vh', position: 'relative', overflow: 'auto' }], arg.parent);

        if (body) {
            t.appendChild(body)
        }
        // if (DashboardApp) {
        //   t.children[0].remove()
        // }
        if (arg.children) {
            Array.from(arg.children).forEach(elm => {
                t.appendChild(elm)
            })
        }
        return t;
    }
}

class Container extends Widget {
    constructor({ style }) {
        super(...arguments);
        let arg = arguments[0]
        if (Object.keys(arg) == '') {
            arg.text = 'Empty Container'
            arg.padding = '10px'
            arg.background = '#fff'
        }

        // !event || console.log(event[1])
        arg.display = arg.display ? arg.display : arg.notFlex ? "" : 'flex'
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        var t = dilema.div(arg.text, [arg.className, arg], arg.parent);

        arg.id ? t.setAttribute('id', arg.id) : '';

        // !event || t.addEventListener(event[0], event[1])
        if (arg.children && !arg.parent) {
            Array.from(arg.children).forEach((elm, i) => {
                t.appendChild(elm);
                // !event || childrens.addEventListener(event[0],event[1])
            });
        }

        /* hover */
        if (arg.hoverColor || arg.hoverTextColor) {
            t.addEventListener('mouseover', function(evt) {
                if (arg.hoverColor) {
                    Array.from(t.children).forEach(element => {
                        element.style.pointerEvents = 'none'
                    });
                    evt.target.style.background = arg.hoverColor
                }
                if (arg.hoverTextColor) {
                    evt.target.style.color = arg.hoverTextColor
                }
            })

            t.addEventListener('mouseout', function(evt) {
                if (arg.hoverColor) {
                    t.style.background = !arg.background ? 'transparent' : arg.background
                }
                if (arg.hoverTextColor) {
                    t.style.color = !arg.color ? 'black' : arg.color
                }
            })
        }
        // Set Events
        // console.log(arg.event)

        if (arg.events) Object.assign(t, arg.events);


        // , arg.animateTime || 0, arg.animateDelay || 0,arg.animateHover,arg.animateHover
        arg.animate ? animateCSS(t, arg.animate) : '';
        return t;
    }
}


class Link extends Widget {
    constructor({ style }) {
        super(...arguments);
        let arg = arguments[0]
        if (Object.keys(arg) == '') {
            arg.text = 'Empty Link'
            arg.padding = '10px'
            arg.background = '#fff'
        }

        // !event || console.log(event[1])
        arg.display = arg.display ? arg.display : arg.notFlex ? "" : 'flex'
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        var t = dilema.a(arg.text, arg.link, [arg.className, arg], arg.parent);
        arg.id ? t.setAttribute('id', arg.id) : '';

        // !event || t.addEventListener(event[0], event[1])
        if (arg.children && !arg.parent) {
            Array.from(arg.children).forEach((elm, i) => {
                t.appendChild(elm);
                // !event || childrens.addEventListener(event[0],event[1])
            });
        }

        /* hover */
        if (arg.hoverColor || arg.hoverTextColor) {
            t.addEventListener('mouseover', function(evt) {
                if (arg.hoverColor) {
                    Array.from(t.children).forEach(element => {
                        element.style.pointerEvents = 'none'
                    });
                    evt.target.style.background = arg.hoverColor
                }
                if (arg.hoverTextColor) {
                    evt.target.style.color = arg.hoverTextColor
                }
            })

            t.addEventListener('mouseout', function(evt) {
                if (arg.hoverColor) {
                    t.style.background = !arg.background ? 'transparent' : arg.background
                }
                if (arg.hoverTextColor) {
                    t.style.color = !arg.color ? 'black' : arg.color
                }
            })
        }
        // Set Events
        // console.log(arg.event)

        if (arg.events) Object.assign(t, arg.events);


        // , arg.animateTime || 0, arg.animateDelay || 0,arg.animateHover,arg.animateHover
        arg.animate ? animateCSS(t, arg.animate) : '';
        return t;
    }
}


class Modal extends Widget {
    constructor({ style, modalBg, modalAnimate, modalTitle, modalBody, buttons, Orientation, close }) {
        super(...arguments);

        let arg = arguments[0]
        modalBg ? modalBg : modalBg = '#00000080'
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        arg.background ? arg.background : arg.background = '#fff'
        arg.display ? arg.display : arg.display = 'flex'
        arg.width ? arg.width : arg.width = '40vw'
        arg.height ? arg.height : arg.height = '40vh'
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;

        var mContainer = dilema.div('', [, {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: '9998',
            left: '0',
            top: '0',
            background: modalBg,
        }]);

        if (Orientation == 'left') arg.left = 0, arg.height = '100%', arg.top = 0;
        if (Orientation == 'right') arg.right = 0, arg.height = '100%', arg.top = 0;
        if (Orientation == 'center') arg.left = 0, arg.right = 0, arg.top = 0, arg.bottom = 0;
        if (Orientation == 'top') arg.width = '100%', arg.top = 0;
        if (Orientation == 'bottom') arg.width = '100%', arg.bottom = 0;

        var mCard = dilema.div(arg.text, ['', {
            ...arg,
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            zIndex: '9999',
            margin: 'auto',
        }]);


        arg.id ? mCardid = arg.id : '';
        // !event || mCardaddEventListener(event[0], event[1])
        if (arg.children && !arg.parent) {
            Array.from(arg.children).forEach((elm, i) => {
                mCard.appendChild(elm);
                // !event || childrens.addEventListener(event[0],event[1])
            });
        }

        if (close) {
            close.fontawesomeIcon ? close.fontawesomeIcon : close.fontawesomeIcon = 'fas fa-times'
            close.position ? close.position : close.position = 'absolute'
            close.right ? close.right : close.right = '10px'
            close.top ? close.top : close.top = '10px'
            close.color ? close.color : close.color = '#000'
            let closeBtn = dilema.div('', [close.fontawesomeIcon, close], mCard);
            closeBtn.onclick = () => {
                closeModal()
            }
        }

        if (modalTitle) {
            modalTitle.width ? modalTitle.width : modalTitle.width = '100%';
            modalTitle.padding ? modalTitle.padding : modalTitle.padding = '20px'
            dilema.div(modalTitle.text, [modalTitle.className, modalTitle], mCard)
        }


        if (modalBody) {
            dilema.div(modalBody.text, [modalBody.className, modalBody], mCard)
            if (modalBody.children) {
                Array.from(modalBody.children).forEach(elm => {
                    dilema.last.appendChild(elm);
                })
            }
        }

        if (buttons) {
            if (buttons.orientation == 'left') buttons.justifyContent = 'flex-start', buttons.alignItems = 'center';
            if (buttons.orientation == 'right') buttons.justifyContent = 'flex-end', buttons.alignItems = 'center';
            if (buttons.orientation == 'center') buttons.justifyContent = 'center', buttons.alignItems = 'center';
            buttons.width ? buttons.width : buttons.width = '100%'
            buttons.background ? buttons.background : buttons.background = ''
            buttons.display ? buttons.display : buttons.display = 'flex'

            let mbuttons = dilema.div('', [buttons.className, buttons], mCard)

            if (buttons.cancel) {
                buttons.cancel.cursor ? buttons.cancel.cursor : buttons.cancel.cursor = 'pointer'
                buttons.cancel.padding ? buttons.cancel.padding : buttons.cancel.padding = '15px 30px'
                buttons.cancel.margin ? buttons.cancel.margin : buttons.cancel.margin = '10px'
                let cBtns = dilema.button(buttons.cancel.text, [buttons.cancel.className, buttons.cancel], mbuttons)
                if (buttons.cancel.events) Object.assign(cBtns, buttons.cancel.events);
                cBtns.onclick = () => {
                    closeModal()
                }
            }
            if (buttons.submit) {
                buttons.submit.cursor ? buttons.submit.cursor : buttons.submit.cursor = 'pointer'
                buttons.submit.padding ? buttons.submit.padding : buttons.submit.padding = '15px 30px'
                buttons.submit.margin ? buttons.submit.margin : buttons.submit.margin = '10px'
                let sbtn = dilema.button(buttons.submit.text, [buttons.submit.className, buttons.submit], mbuttons)
                if (buttons.submit.events) Object.assign(sbtn, buttons.submit.events);
            }
        }

        /* hover */
        if (arg.hoverColor || arg.hoverTextColor) {
            mCard.addEventListener('mouseover', function(evt) {
                if (arg.hoverColor) {
                    Array.from(mCardchildren).forEach(element => {
                        element.style.pointerEvents = 'none'
                    });
                    evt.target.style.background = arg.hoverColor
                }
                if (arg.hoverTextColor) {
                    evt.target.style.color = arg.hoverTextColor
                }
            })

            mCard.addEventListener('mouseout', function(evt) {
                if (arg.hoverColor) {
                    mCardstyle.background = !arg.background ? 'transparent' : arg.background
                }
                if (arg.hoverTextColor) {
                    mCardstyle.color = !arg.color ? 'black' : arg.color
                }
            })
        }

        if (arg.events) Object.assign(mCard, arg.events);

        modalAnimate.in ? animateCSS(mCard, modalAnimate.in) : '';
        modalAnimate.in.bg ? animateCSS(mContainer, modalAnimate.in.bg) : ''

        function closeModal() {
            if (modalAnimate.out) {
                animateCSS(mCard, modalAnimate.out)
                mCard.addEventListener('animationend', f => {
                    mCard.removeEventListener('animationend', f)
                    mCard.remove()
                    if (modalAnimate.out.bg) {
                        animateCSS(mContainer, modalAnimate.out.bg)
                        mContainer.addEventListener('animationend', a => {
                            mContainer.removeEventListener('animationend', a)
                            mContainer.remove()
                        })
                    } else {
                        mContainer.remove()
                    }
                })
            } else {
                mCard.remove()
                mContainer.remove()
            }
        }
        return mCard;

    }
}

class LeftMenu extends Widget {
    constructor({ style, options }) {
        super(...arguments);
        let arg = arguments[0]

        arg.display ? arg.display : arg.display = 'flex'
        arg.width ? arg.width : arg.width = '20%'
        arg.height ? arg.height : arg.height = '100vh'
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        // if()
        var t = dilema.div(arg.text, [arg.className, arg], arg.parent);
        arg.id ? t.setAttribute('id', arg.id) : '';

        if (arg.children) {
            Array.from(arg.children).forEach((elm, i) => {
                t.appendChild(elm);
            });
        }

        window.addEventListener('resize', () => {
                verifyMobile()
            })
            // Set arg.events
        if (arg.events) Object.assign(t, arg.events);

        // , arg.animateTime || 0, arg.animateDelay || 0,arg.animateHover,arg.animateHover
        arg.animate ? animateCSS(t, arg.animate) : '';
        let _LeftMenuOptions = document.querySelectorAll('#DashBoardOption')

        //actions
        _LeftMenuOptions.forEach((opt, i) => {
            let optRoute = '#' + opt.route;
            let hash = window.location.hash;

            function klkconklk() {
                Array.from(_LeftMenuOptions).map(a => a.isActive = false);
                Array.from(_LeftMenuOptions).map(a => a.style.background = options.background);
                options.activeBackground ? opt.style.background = options.activeBackground : '';
                window.location.hash = optRoute.toLowerCase();
                opt.isActive = true;
            };

            opt.onclick = () => {
                klkconklk();
            };

            if (optRoute.toLowerCase() == hash.toLowerCase()) {
                klkconklk();
            };



            /* hover */
            opt.addEventListener('mouseover', function(evt) {
                if (opt.isActive == false) {
                    if (options.hoverBackground) {
                        Array.from(opt.childNodes).find(a => a.style.pointerEvents = 'none')
                        opt.style.background = options.hoverBackground
                    }
                    if (options.hoverColor) {
                        evt.target.style.color = options.hoverColor
                    }
                }
            })

            opt.addEventListener('mouseout', function() {
                if (opt.isActive == false) {
                    Array.from(opt.childNodes).find(a => a.style.pointerEvents = 'none')
                    opt.style.background = 'transparent'
                        // if (options.background) {
                        // }
                        // if (options.color) {
                        //   evt.target.style.color = options.color
                        // }
                }

            })

        })
        verifyMobile()

        function verifyMobile() {
            if (window.innerWidth <= 768) t.style.display = 'none'
            else t.style.display = arg.display
        }
        return t;
    }
}

class DashboardApp {
    constructor() {}
    static hashRoute({ app, initialRoute, routes }) {
        app()
        let t = document.querySelector('#DashboardBody')
        if (t.childNodes[0]) {
            t.childNodes[0].remove()
        }
        loadPage()
        window.onhashchange = () => {
            loadPage()
        }

        function loadPage() {
            if (window.location.hash == '') {
                window.location.hash = initialRoute.toLowerCase()
            }
            Object.keys(routes).forEach((hash, i) => {
                if ('#' + hash.toLowerCase() == window.location.hash) {
                    if (routes[hash].animateIn || routes[hash].animateOut) {
                        if (t.childNodes[0]) {
                            t.children[0] ? animateCSS(t.childNodes[0], routes[hash].animateOut) : ''
                            t.addEventListener('animationend', function animateOUT() {
                                t.innerHTML = ''
                                t.appendChild(routes[hash].page())
                                t.childNodes[0].style.opacity = 0
                                t.removeEventListener('animationend', animateOUT)
                                animateCSS(t.childNodes[0], routes[hash].animateIn)
                            })
                        } else {
                            t.innerHTML = ''
                            t.appendChild(routes[hash].page())
                            animateCSS(t.childNodes[0], routes[hash].animateIn)
                        }
                    } else {
                        t.innerHTML = ''
                        t.appendChild(routes[hash]())
                    }
                } else if (window.location.hash == '#' + undefined) {
                    window.location.hash = '#/404'
                }
            })
        }
    }
}

class DashBoardOption extends Widget {
    constructor({ style, route }) {
        super(...arguments);
        let arg = arguments[0]
        if (Object.keys(arg) == '') {
            arg.text = 'Empty Container'
            arg.padding = '10px'
            arg.background = '#fff'
        }

        // !event || console.log(event[1])
        arg.display ? arg.display : arg.display = 'flex'
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        arg.cursor = 'pointer'
        var t = dilema.div(arg.text, ['#DashBoardOption', arg.className, arg], arg.parent);

        arg.route ? t.route = arg.route : '';

        // !event || t.addEventListener(event[0], event[1])
        if (arg.children && !arg.parent) {
            Array.from(arg.children).forEach((elm, i) => {
                t.appendChild(elm);
                // !event || childrens.addEventListener(event[0],event[1])
            });
        }

        // Set Events
        // console.log(arg.event)
        if (arg.events) Object.assign(t, arg.events);



        // , arg.animateTime || 0, arg.animateDelay || 0,arg.animateHover,arg.animateHover
        arg.animate ? animateCSS(t, arg.animate) : '';
        return t;
    }
}

class LeftMenuOptions extends Widget {
    constructor({ style }) {
        super(...arguments);
        let arg = arguments[0]
        if (Object.keys(arg) == '') {
            arg.text = 'Empty Container'
            arg.padding = '10px'
            arg.background = '#fff'
        }
        // !event || console.log(event[1])
        arg.display ? arg.display : arg.display = 'flex'
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        var t = dilema.div(arg.text, [arg.className, arg], arg.parent);
        arg.id ? t.setAttribute('id', arg.id) : '';

        // !event || t.addEventListener(event[0], event[1])
        if (arg.children && !arg.parent) {
            Array.from(arg.children).forEach((elm, i) => {
                t.appendChild(elm);
                // !event || childrens.addEventListener(event[0],event[1])
            });
        }

        /* hover */
        if (arg.hoverColor || arg.hoverTextColor) {
            t.addEventListener('mouseover', function(evt) {
                if (arg.hoverColor) {
                    Array.from(t.children).forEach(element => {
                        element.style.pointerEvents = 'none'
                    });
                    evt.target.style.background = arg.hoverColor
                }
                if (arg.hoverTextColor) {
                    evt.target.style.color = arg.hoverTextColor
                }
            })

            t.addEventListener('mouseout', function(evt) {
                if (arg.hoverColor) {
                    t.style.background = !arg.background ? 'transparent' : arg.background
                }
                if (arg.hoverTextColor) {
                    t.style.color = !arg.color ? 'black' : arg.color
                }
            })

        }
        // Set Events
        if (arg.events) Object.assign(t, arg.events);


        // , arg.animateTime || 0, arg.animateDelay || 0,arg.animateHover,arg.animateHover
        arg.animate ? animateCSS(t, arg.animate) : '';
        return t;
    }
}

class TopHeaderBar extends Widget {
    constructor({ style }) {
        super(...arguments);
        let arg = arguments[0]
        arg.display ? arg.display : arg.display = 'flex'
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        var t = dilema.div(arg.text, [arg.className, arg], arg.parent);
        arg.id ? t.setAttribute('id', arg.id) : '';

        if (arg.children) {
            Array.from(arg.children).forEach((elm, i) => {
                t.appendChild(elm);
            });
        }

        if (style == 'style one') {
            t.style.transition = 'background .5s ease'
            t.style.background = 'transparent'
            t.style.boxShadow = 'none'
            t.children[0].style.color = '#fff'
            t.children[0].children[0].style.filter = 'invert(100%)'
            window.onscroll = () => {
                if (window.pageYOffset == 0) {
                    t.style.background = 'transparent'
                    t.style.boxShadow = 'none'
                    t.children[0].children[0].style.filter = 'invert(100%)'
                    t.children[0].style.color = '#fff'
                } else {
                    t.style.background = arg.background
                    t.style.boxShadow = arg.boxShadow
                    t.children[0].children[0].style.filter = 'invert(0%)'
                    t.children[0].style.color = '#000'

                }
            }
        }

        // Set arg.events
        if (arg.events) Object.assign(t, arg.events);

        // , arg.animateTime || 0, arg.animateDelay || 0,arg.animateHover,arg.animateHover
        arg.animate ? animateCSS(t, arg.animate) : '';
        return t;
    }
}

class Row extends Widget {
    constructor() {
        super(...arguments);
        let arg = arguments[0]

        arg.display = 'flex'
        arg.flexDirection = 'row'
        arg.width ? arg.width : arg.width = "100%"
        arg.height ? arg.height : arg.height = "100%"
        arg.justifyContent ? arg.justifyContent : arg.justifyContent = "center"
        arg.alignItems ? arg.alignItems : arg.alignItems = "center"
        arg.padding ? arg.padding : arg.padding = "10px"
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        var t = dilema.div(arg.text, [arg.className, arg], arg.parent);
        arg.id ? t.setAttribute('id', arg.id) : '';

        if (arg.children) {
            Array.from(arg.children).forEach((elm, i) => {
                t.appendChild(elm);
            });
        }

        // Set arg.events
        if (arg.events) Object.assign(t, arg.events);

        // , arg.animateTime || 0, arg.animateDelay || 0,arg.animateHover,arg.animateHover
        arg.animate ? animateCSS(t, arg.animate) : '';
        return t;
    }
}

class Column extends Widget {
    constructor() {
        super(...arguments);
        let arg = arguments[0]

        arg.display = 'flex'
        arg.flexDirection = 'column'
        arg.width ? arg.width : arg.width = "100%"
            // arg.display = arg.display || 'flex'
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        var t = dilema.div(arg.text, [arg.className, arg], arg.parent);
        arg.id ? t.setAttribute('id', arg.id) : '';

        if (arg.children) {
            Array.from(arg.children).forEach((elm, i) => {
                console.log()
                t.appendChild(elm);
            });
        }

        // Set arg.events
        if (arg.events) Object.assign(t, arg.events);

        // , arg.animateTime || 0, arg.animateDelay || 0,arg.animateHover,arg.animateHover
        arg.animate ? animateCSS(t, arg.animate) : '';
        return t;
    }
}

class Image extends Widget {
    constructor() {
        super(...arguments);
        let arg = arguments[0]
        arg.display ? arg.display : arg.display = 'flex'
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        var t = dilema.img(arg.source || arg.src, [arg.className, arg], arg.parent);
        arg.id ? t.setAttribute('id', arg.id) : '';

        if (arg.children) {
            return
            Array.from(arg.children).forEach((elm, i) => {
                t.appendChild(elm);
            });
        }

        // Set arg.events
        if (arg.events) Object.assign(t, arg.events);

        // , arg.animateTime || 0, arg.animateDelay || 0,arg.animateHover,arg.animateHover
        arg.animate ? animateCSS(t, arg.animate) : '';
        return t;
    }
}

class FontAwesomeIcon extends Widget {
    constructor({ icon, size, margin, link, callback, pointerEvents }) {
        super(...arguments);
        let arg = arguments[0]
        try {
            arg.fontSize = size
            arg.margin = margin
            arg.display ? arg.display : arg.display = 'flex'
            arg.animate ? arg.opacity = 0 : arg.opacity = 1;
            if (callback || link) arg.cursor = 'pointer';
            var t = dilema.span('', [icon, arg], arg.parent);
            arg.id ? t.setAttribute('id', arg.id) : '';

            if (arg.children) {
                return console.error("This element can't be contain children")
            }

            // Set arg.events
            if (arg.events) Object.assign(t, arg.events);
            if (!callback && link) t.onclick = () => window.open(link);
            // , arg.animateTime || 0, arg.animateDelay || 0,arg.animateHover,arg.animateHover
            arg.animate ? animateCSS(t, arg.animate) : '';
            return t;
        } catch (error) {
            console.error('Error', error)
        }

    }
}

class Text extends Widget {
    constructor({ text }) {
        super(...arguments)
        let arg = arguments[0]
        arg.overflow ? arg.overflow : arg.overflow = 'hidden'
        arg.wordWrap ? arg.wordWrap : arg.wordWrap = 'break-word'
            // arg.display ? arg.display : arg.display = 'flex'
            // arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        arg.margin ? arg.margin : arg.margin = 0
        var t = dilema.p(text, [arg.className, arg]);
        arg.id ? t.setAttribute('id', arg.id) : '';

        // if (arg.children) {
        //   return console.error("This element can't be contain children")
        // }

        // // Set arg.events
        // if (arg.events) Object.assign(t, arg.events);

        // // , arg.animateTime || 0, arg.animateDelay || 0,arg.animateHover,arg.animateHover
        // arg.animate ? animateCSS(t, arg.animate) : '';
        return t;
    }
}

class Form extends Widget {
    constructor({ style }) {
        super(...arguments);
        let arg = arguments[0]

        if (Object.keys(arg) == '') {
            arg.title.text = 'Empty Form'
            arg.padding = '10px'
            arg.background = '#fff'
        }

        // !event || console.log(event[1])
        arg.display ? arg.display : arg.display = 'flex'
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        arg.flexDirection ? arg.flexDirection : arg.flexDirection = 'column';
        arg.width ? arg.width : arg.width = '100%';
        var t = dilema.form(arg.action, [arg.className, arg], arg.parent);
        arg.id ? t.setAttribute('id', arg.id) : '';
        t.target = arg.target
            // t.action = arg.action
        t.method = arg.method

        if (arg.title) {
            arg.title.animate ? arg.title.opacity = 0 : arg.title.opacity = 1;
            arg.title.padding ? arg.title.padding : arg.title.padding = '20px';
            arg.title.border || arg.title.borderBottom ? arg.title.borderBottom : arg.title.borderBottom = '1px solid #999';
            arg.title.fontWeight ? arg.title.fontWeight : arg.title.fontWeight = '600';
            arg.title.margin ? arg.title.margin : arg.title.margin = '0px';
            arg.title ? dilema.span(arg.title.text, [arg.title.className, arg.title], dilema.last) : ''
            arg.title.id ? t.title.id = arg.title.id : '';
        }

        // !event || t.addEventListener(event[0], event[1])
        if (arg.children && !arg.parent) {
            Array.from(arg.children).forEach((elm, i) => {
                t.appendChild(elm);
                // !event || childrens.addEventListener(event[0],event[1])
            });
        }


        /* hover */
        if (arg.hoverColor || arg.hoverTextColor) {
            t.addEventListener('mouseover', function(evt) {
                if (arg.hoverColor) {
                    Array.from(t.children).forEach(element => {
                        element.style.pointerEvents = 'none'
                    });
                    evt.target.style.background = arg.hoverColor
                }
                if (arg.hoverTextColor) {
                    evt.target.style.color = arg.hoverTextColor
                }
            })

            t.addEventListener('mouseout', function(evt) {
                if (arg.hoverColor) {
                    t.style.background = !arg.background ? 'transparent' : arg.background
                }
                if (arg.hoverTextColor) {
                    t.style.color = !arg.color ? 'black' : arg.color
                }
            })
        }
        // Set Events
        // console.log(arg.event)

        if (arg.events) Object.assign(t, arg.events);


        // , arg.animateTime || 0, arg.animateDelay || 0,arg.animateHover,arg.animateHover
        // arg.animate ? animateCSS(t, arg.animate) : '';
        return t;
    }
}

class Input extends Widget {
    constructor({ type, cols, rows }) {
        super(...arguments);
        let arg = arguments[0]
        arg.display ? arg.display = 0 : arg.display = 'flex';
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        arg.padding ? arg.padding = 0 : arg.padding = '10px';
        arg.margin ? arg.margin = 0 : arg.margin = '10px';
        var t = dilema.input('', [arg.className, arg], arg.parent);

        if (arg.id) t.id = arg.id
        if (arg.children) {
            console.error("Input can't be contains")
        }
        // t.placeholder = arg.placeholder
        // arg.required && t.setAttribute('required ', arg.required)
        arg.name && t.setAttribute('name', arg.name)
        arg.minLength && t.setAttribute('min-length', arg.minLength)
        arg.maxLength && t.setAttribute('max-length', arg.maxLength)
        arg.placeholder && t.setAttribute('placeholder', arg.placeholder)
        type && t.setAttribute('type', type)
        cols && t.setAttribute('cols', cols)
        rows && t.setAttribute('rows', rows)
        arg.animate ? animateCSS(t, arg.animate) : '';
        t.required = arg.required
        return t;
    }
}
class TextArea extends Widget {
    constructor({ type, cols, rows }) {
        super(...arguments);
        let arg = arguments[0]
        arg.display ? arg.display = 0 : arg.display = 'flex';
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        arg.padding ? arg.padding = 0 : arg.padding = '10px';
        arg.margin ? arg.margin = 0 : arg.margin = '10px';
        var t = dilema.textarea('', [arg.className, arg], arg.parent);

        if (arg.id) t.id = arg.id
        if (arg.children) {
            console.error("Input can't be contains")
        }
        // t.placeholder = arg.placeholder
        // arg.required && t.setAttribute('required ', arg.required)
        arg.name && t.setAttribute('name', arg.name)
        arg.minLength && t.setAttribute('min-length', arg.minLength)
        arg.maxLength && t.setAttribute('max-length', arg.maxLength)
        arg.placeholder && t.setAttribute('placeholder', arg.placeholder)
        type && t.setAttribute('type', type)
        cols && t.setAttribute('cols', cols)
        rows && t.setAttribute('rows', rows)
        arg.animate ? animateCSS(t, arg.animate) : '';
        t.required = arg.required
        return t;
    }
}

// class TextArea extends Widget {
//     constructor({ type, cols, rows }) {
//         super(...arguments);
//         let arg = arguments[0]
//         arg.display ? arg.display = 0 : arg.display = 'flex';
//         arg.animate ? arg.opacity = 0 : arg.opacity = 1;
//         arg.padding ? arg.padding = 0 : arg.padding = '20px';
//         arg.margin ? arg.margin = 0 : arg.margin = '10px';
//         var t = dilema.textarea('', [arg.className, arg], arg.parent);
//         if (arg.id) t.id = arg.id
//         if (arg.children) {
//             console.error("Input can't be contains")
//         }

//         if (type) t.setAttribute('type', type)
//         if (cols) t.setAttribute('cols', cols)
//         if (rows) t.setAttribute('rows', rows)
//         arg.animate ? animateCSS(t, arg.animate) : '';
//         return t;
//     }
// }

class Label extends Widget {
    constructor() {
        super(...arguments);
        let arg = arguments[0]
        arg.display ? arg.display = 0 : arg.display = 'flex';
        arg.animate ? arg.opacity = 0 : arg.opacity = 1;
        arg.margin ? arg.margin = 0 : arg.margin = '10px';

        var t = dilema.label(arg.text, [arg.className, arg], arg.parent);

        if (arg.children) {
            console.error("Input can't be contains")
        }

        arg.animate ? animateCSS(t, arg.animate) : '';
        return t;
    }
}

class Button extends Widget {
    constructor({ style }) {
        super(...arguments);
        let arg = arguments[0]
        arg.text ? arg.text : arg.text = 'Empty Button';
        if (arg && arg.theme == "default") { // change to css
            arg.padding ? arg.padding : arg.padding = '12px 20px';
            arg.margin ? arg.margin : arg.margin = '10px';
            arg.background ? arg.background : arg.background = '#fff';
            arg.color ? arg.color : arg.color = '#333'
            arg.border ? arg.border : arg.border = '2px solid'
            arg.borderRadius ? arg.borderRadius : arg.borderRadius = '50px'
            arg.cursor ? arg.cursor : arg.cursor = 'pointer'
            arg.display ? arg.display : arg.display = 'flex'
            arg.animate ? arg.opacity = 0 : arg.opacity = 1;
            arg.transition ? arg.transition : arg.transition = 'all .6s';
        }

        var t = dilema.button(arg.text, [arg.className, arg], arg.parent);
        arg.type && t.setAttribute('type', arg.type);
        arg.id && t.setAttribute('id', arg.id);

        // !event || t.addEventListener(event[0], event[1])
        if (arg.children && !arg.parent) {
            Array.from(arg.children).forEach((elm, i) => {
                t.appendChild(elm);
                // !event || childrens.addEventListener(event[0],event[1])
            });
        }

        /* hover */
        if (arg.hoverColor || arg.hoverTextColor) {
            t.addEventListener('mouseover', function(evt) {
                if (arg.hoverColor) {
                    Array.from(t.children).forEach(element => {
                        element.style.pointerEvents = 'none'
                    });
                    evt.target.style.background = arg.hoverColor
                }
                if (arg.hoverTextColor) {
                    evt.target.style.color = arg.hoverTextColor
                }
            })

            t.addEventListener('mouseout', function(evt) {
                if (arg.hoverColor) {
                    t.style.background = !arg.background ? 'transparent' : arg.background
                }
                if (arg.hoverTextColor) {
                    t.style.color = !arg.color ? 'black' : arg.color
                }
            })
        }
        // if (arg.callback){

        // }
        // Set Events
        // console.log(arg.event)
        if (arg.events) Object.assign(t, arg.events);

        // , arg.animateTime || 0, arg.animateDelay || 0,arg.animateHover,arg.animateHover
        arg.animate ? animateCSS(t, arg.animate) : '';
        return t;
    }
}

class Wrap extends Widget {}

class HeaderMenu extends Widget {}

class VerticalMenu extends Widget {}

class Footer extends Widget {}


function animateCSS(element, animate, callback) {
    const node = element
    setTimeout(() => {
        node.classList.add('animated', animate.name)
        node.style.opacity = !animate.hover ||
            node.classList.add('dilema-' + animate.hover.name)
        node.style.animationDuration = animate.duration
        node.style.transitionTimingFunction = animate.duration
    }, animate.delay || 0);

    function handleAnimationEnd() {
        node.classList.remove('animated', animate.name)
        node.removeEventListener('animationend', handleAnimationEnd)
        if (typeof callback === 'function') callback()
    }
    node.addEventListener('animationend', handleAnimationEnd)
}