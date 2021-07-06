/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 996:
/***/ ((module) => {

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
}

function genericTouchHandler(f) {
    return function (e) {
        if (e.touches.length == 1) {
            if (f(e.touches[0])) {
                e.preventDefault();
                return false;
            }
        }
    }
}

CanvasRenderingContext2D.prototype.fillEllipse = function (x, y, r) {
    this.beginPath();
    this.ellipse(x, y, r, r, 0, 0, Math.PI * 2);
    this.fill();
}

CanvasRenderingContext2D.prototype.strokeEllipse = function (x, y, r) {
    this.beginPath();
    this.ellipse(x, y, r, r, 0, 0, Math.PI * 2);
    this.stroke();
}

function genericTouchHandler(f) {
    return function (e) {
        if (e.touches.length == 1) {
            if (f(e.touches[0])) {
                e.preventDefault();
                return false;
            }
        }
    }
}

CanvasRenderingContext2D.prototype.arrow = function (x0, y0, x1, y1, w, arrw, arrh) {

    var dx = x1 - x0;
    var dy = y1 - y0;

    var l = 1.0 / Math.sqrt(dx * dx + dy * dy);
    dx *= l;
    dy *= l;

    this.beginPath();
    this.moveTo(x0 - dy * w / 2, y0 + dx * w / 2);
    this.lineTo(x1 - dy * w / 2 - dx * arrh, y1 + dx * w / 2 - dy * arrh);
    this.lineTo(x1 - dy * arrw / 2 - dx * arrh, y1 + dx * arrw / 2 - dy * arrh);
    this.lineTo(x1, y1);
    this.lineTo(x1 + dy * arrw / 2 - dx * arrh, y1 - dx * arrw / 2 - dy * arrh);
    this.lineTo(x1 + dy * w / 2 - dx * arrh, y1 - dx * w / 2 - dy * arrh);
    this.lineTo(x0 + dy * w / 2, y0 - dx * w / 2);

    this.closePath();
    return this;
}

function genericTouchHandler(f) {
    return function (e) {
        if (e.touches.length == 1) {
            if (f(e.touches[0])) {
                e.preventDefault();
                return false;
            }
        }
    }
}

/* Mat 4 */

function mat4_transpose(a) {

    var res = [a[0], a[4], a[8], a[12],
    a[1], a[5], a[9], a[13],
    a[2], a[6], a[10], a[14],
    a[3], a[7], a[11], a[15]];
    return res;
}


function mat4_mul(a, b) {
    /* 0  1  2  3
       4  5  6  7
       8  9 10 11
      12 13 14 15 */

    var res = [];
    res[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12];
    res[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13];
    res[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14];
    res[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15];

    res[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12];
    res[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13];
    res[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14];
    res[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15];

    res[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12];
    res[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13];
    res[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14];
    res[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15];

    res[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];
    res[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13];
    res[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];
    res[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];

    return res;
}

function mat4_mul_vec3(a, b) {
    var res = [];
    res[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3];
    res[1] = a[4] * b[0] + a[5] * b[1] + a[6] * b[2] + a[7];
    res[2] = a[8] * b[0] + a[9] * b[1] + a[10] * b[2] + a[11];
    res[3] = a[12] * b[0] + a[13] * b[1] + a[14] * b[2] + a[15];

    return res;
}

function mat4_mul_vec4(a, b) {
    var res = [];
    res[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    res[1] = a[4] * b[0] + a[5] * b[1] + a[6] * b[2] + a[7] * b[3];
    res[2] = a[8] * b[0] + a[9] * b[1] + a[10] * b[2] + a[11] * b[3];
    res[3] = a[12] * b[0] + a[13] * b[1] + a[14] * b[2] + a[15] * b[3];

    return res;
}


var ident_mat4 = (/* unused pure expression or super */ null && ([1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1]));


function scale_mat4(a) {
    if (a.constructor === Array) {
        return [a[0], 0, 0, 0,
            0, a[1], 0, 0,
            0, 0, a[2], 0,
            0, 0, 0, 1];
    }
    return [a, 0, 0, 0,
        0, a, 0, 0,
        0, 0, a, 0,
        0, 0, 0, 1];
}


function rot_x_mat4(a) {
    var c = Math.cos(a);
    var s = Math.sin(a);

    return [1, 0, 0, 0,
        0, c, -s, 0,
        0, s, c, 0,
        0, 0, 0, 1];
}

function rot_y_mat4(a) {
    var c = Math.cos(a);
    var s = Math.sin(a);

    return [c, 0, s, 0,
        0, 1, 0, 0,
        -s, 0, c, 0,
        0, 0, 0, 1];
}

function rot_z_mat4(a) {
    var c = Math.cos(a);
    var s = Math.sin(a);

    return [c, -s, 0, 0,
        s, c, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1];
}

function translation_mat4(t) {
    return [1, 0, 0, t[0],
        0, 1, 0, t[1],
        0, 0, 1, t[2],
        0, 0, 0, 1];
}

let x_flip_mat4 = (/* unused pure expression or super */ null && ([-1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1]));

let y_flip_mat4 = (/* unused pure expression or super */ null && ([1, 0, 0, 0,
    0, -1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1]));

let z_flip_mat4 = (/* unused pure expression or super */ null && ([1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, -1, 0,
    0, 0, 0, 1]));

let x_flip_mat3 = (/* unused pure expression or super */ null && ([-1, 0, 0, 0, 1, 0, 0, 0, 1]));
let y_flip_mat3 = (/* unused pure expression or super */ null && ([1, 0, 0, 0, -1, 0, 0, 0, 1]));
let z_flip_mat3 = (/* unused pure expression or super */ null && ([1, 0, 0, 0, 1, 0, 0, 0, -1]));


function mat3_to_mat4(mat) {
    return [mat[0], mat[1], mat[2], 0,
    mat[3], mat[4], mat[5], 0,
    mat[6], mat[7], mat[8], 0,
        0, 0, 0, 1];
}


/* Mat 3 */


function mat3_invert(a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2];
    var a10 = a[3],
        a11 = a[4],
        a12 = a[5];
    var a20 = a[6],
        a21 = a[7],
        a22 = a[8];
    var b01 = a22 * a11 - a12 * a21;
    var b11 = -a22 * a10 + a12 * a20;
    var b21 = a21 * a10 - a11 * a20;

    var det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) {
        return null;
    }

    det = 1.0 / det;
    var out = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
}

function mat3_mul(a, b) {
    /* 0 1 2
       3 4 5
       6 7 8 */

    var res = [];
    res[0] = a[0] * b[0] + a[1] * b[3] + a[2] * b[6];
    res[1] = a[0] * b[1] + a[1] * b[4] + a[2] * b[7];
    res[2] = a[0] * b[2] + a[1] * b[5] + a[2] * b[8];

    res[3] = a[3] * b[0] + a[4] * b[3] + a[5] * b[6];
    res[4] = a[3] * b[1] + a[4] * b[4] + a[5] * b[7];
    res[5] = a[3] * b[2] + a[4] * b[5] + a[5] * b[8];

    res[6] = a[6] * b[0] + a[7] * b[3] + a[8] * b[6];
    res[7] = a[6] * b[1] + a[7] * b[4] + a[8] * b[7];
    res[8] = a[6] * b[2] + a[7] * b[5] + a[8] * b[8];

    return res;
}


function mat3_mul_vec(a, b) {
    var res = [];
    res[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    res[1] = a[3] * b[0] + a[4] * b[1] + a[5] * b[2];
    res[2] = a[6] * b[0] + a[7] * b[1] + a[8] * b[2];

    return res;
}


function mat3_mul_vec(a, b) {
    var res = [];
    res[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    res[1] = a[3] * b[0] + a[4] * b[1] + a[5] * b[2];
    res[2] = a[6] * b[0] + a[7] * b[1] + a[8] * b[2];

    return res;
}

function mat3_transpose(a) {

    var res = [a[0], a[3], a[6],
    a[1], a[4], a[7],
    a[2], a[5], a[8]];
    return res;
}



function scale_mat3(a) {
    return [a, 0, 0, 0, a, 0, 0, 0, a];
}

function rot_x_mat3(a) {
    var c = Math.cos(a);
    var s = Math.sin(a);

    return [1, 0, 0, 0, c, -s, 0, s, c];
}

function rot_y_mat3(a) {
    var c = Math.cos(a);
    var s = Math.sin(a);

    return [c, 0, s, 0, 1, 0, -s, 0, c];
}

function rot_z_mat3(a) {
    var c = Math.cos(a);
    var s = Math.sin(a);

    return [c, -s, 0, s, c, 0, 0, 0, 1];
}

var ident_matrix = (/* unused pure expression or super */ null && ([1, 0, 0, 0, 1, 0, 0, 0, 1]));
var ident_mat3 = (/* unused pure expression or super */ null && (ident_matrix));


function vec_add(a, b) {
    var r = [];
    for (var i = 0; i < a.length; i++)
        r.push(a[i] + b[i]);
    return r;
}

function vec_sub(a, b) {
    var r = [];
    for (var i = 0; i < a.length; i++)
        r.push(a[i] - b[i]);
    return r;
}

function vec_scale(a, x) {
    var r = [];
    for (var i = 0; i < a.length; i++)
        r.push(a[i] * x);
    return r;
}


function vec_dot(a, b) {
    var r = 0
    for (var i = 0; i < a.length; i++)
        r += a[i] * b[i];
    return r;
}


function vec_cross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], -a[0] * b[2] + a[2] * b[0], a[0] * b[1] - a[1] * b[0]];
}

function vec_len_sq(a) {

    return vec_dot(a, a);
}

function vec_len(a) {
    var d = 0;
    for (var i = 0; i < a.length; i++)
        d += a[i] * a[i];

    return Math.sqrt(d);
}

function vec_eq(a, b) {
    for (var i = 0; i < a.length; i++)
        if (a[i] != b[i])
            return false;

    return true;;
}

function vec_norm(a) {
    var d = 0;
    for (var i = 0; i < a.length; i++)
        d += a[i] * a[i];

    d = 1.0 / Math.sqrt(d);
    var r = [];
    if (d < 0.00000001) {
        for (var i = 0; i < a.length; i++)
            r.push(0);
        return r;
    }

    for (var i = 0; i < a.length; i++)
        r.push(a[i] * d);
    return r;
}

function vec_lerp(a, b, f) {
    var r = [];
    for (var i = 0; i < a.length; i++)
        r[i] = lerp(a[i], b[i], f);
    return r;
}


function lerp(a, b, f) {
    if (f == 0)
        return a;
    else if (f == 1)
        return b;

    return a * (1 - f) + b * f;
}

function smooth_lerp(a, b, f) {
    if (f == 0)
        return a;
    else if (f == 1)
        return b;

    f = f * f * (3.0 - 2.0 * f);

    return a * (1 - f) + b * f;
}

function saturate(x) {
    return Math.max(0.0, Math.min(x, 1.0));
}


function step(edge0, x) {
    return x > edge0 ? 1 : 0;
}

function sharp_step(edge0, edge1, x) {
    return saturate((x - edge0) / (edge1 - edge0));
}
function smooth_step(edge0, edge1, x) {
    x = sharp_step(edge0, edge1, x);
    return x * x * (3.0 - 2.0 * x);
}


document.addEventListener("DOMContentLoaded", function () {
    if (window.bc_touch_down_state === undefined) {
        window.bc_touch_down_state = false;
        document.addEventListener("touchstart", function (e) {
            window.bc_touch_down_state = true;
        }, false);
        document.addEventListener("touchend", function (e) {
            window.bc_touch_down_state = false;
        }, false);

        document.addEventListener("touchcancel", function (e) {
            window.bc_touch_down_state = false;
        }, false);
    }

});


window.TouchHandler = function (target, begin, move, end) {



    target.onmousedown = mouse_down;
    target.ontouchstart = genericTouchHandler(mouse_down);

    var move_handler = genericTouchHandler(mouse_move);

    function mouse_down(e) {
        window.addEventListener("mousemove", mouse_move, false);
        window.addEventListener("mouseup", mouse_up, false);

        window.addEventListener("touchmove", move_handler, false);
        window.addEventListener("touchend", mouse_up, false);
        window.addEventListener("touchcancel", mouse_up, false);

        let res = begin ? begin(e) : true;

        if (res && e.preventDefault)
            e.preventDefault();
        return res;
    }

    function mouse_move(e) {
        return move ? move(e) : true;
    }

    function mouse_up(e) {
        window.removeEventListener("mousemove", mouse_move, false);
        window.removeEventListener("mouseup", mouse_up, false);

        window.removeEventListener("touchmove", move_handler, false);
        window.removeEventListener("touchend", mouse_up, false);
        window.removeEventListener("touchcancel", mouse_up, false);

        return end ? end(e) : true;
    }
}


window.Dragger = function (target, callback) {

    target.onmousedown = mouse_down;
    target.ontouchstart = genericTouchHandler(mouse_down);

    var move_handler = genericTouchHandler(mouse_move);

    var prev_mouse_x, prev_mouse_y;

    function mouse_down(e) {

        prev_mouse_x = e.clientX;
        prev_mouse_y = e.clientY;


        window.addEventListener("mousemove", mouse_move, false);
        window.addEventListener("mouseup", mouse_up, false);

        window.addEventListener("touchmove", move_handler, false);
        window.addEventListener("touchend", mouse_up, false);
        window.addEventListener("touchcancel", mouse_up, false);

        if (e.preventDefault)
            e.preventDefault();

        return true;
    }

    function mouse_move(e) {
        callback(e.clientX - prev_mouse_x, e.clientY - prev_mouse_y);

        prev_mouse_x = e.clientX;
        prev_mouse_y = e.clientY;

        return true;
    }
    function mouse_up(e) {
        window.removeEventListener("mousemove", mouse_move, false);
        window.removeEventListener("mouseup", mouse_up, false);

        window.removeEventListener("touchmove", move_handler, false);
        window.removeEventListener("touchend", mouse_up, false);
        window.removeEventListener("touchcancel", mouse_up, false);
    }
}

window.SegmentedControl = function (container_div, callback, values) {
    var container = document.createElement("div");
    container.style.position = "relative";
    container.classList.add("segmented_control_container");

    container.onclick = mouse_click;

    container_div.classList.add('segmented_container')
    container_div.appendChild(container);

    var segments = [];
    var option = 0;
    var pad = 2.0;

    for (var i = 0; i < values.length; i++) {
        var el = document.createElement("div");
        el.style.top = pad + "px";
        el.classList.add("segmented_control_off");
        el.innerHTML = values[i];
        container.appendChild(el);
        segments.push(el);
    }

    segments[option].classList.remove("segmented_control_off");
    segments[option].classList.add("segmented_control_on");

    window.addEventListener("resize", layout, true);


    layout();
    callback(option);

    this.set_selection = function (o) {

        if (option != o) {

            segments[option].classList.remove("segmented_control_on");
            segments[option].classList.add("segmented_control_off");
            option = o;

            segments[option].classList.remove("segmented_control_off");
            segments[option].classList.add("segmented_control_on");

            callback(option);
        }
    }


    function layout() {
        var width = container.getBoundingClientRect().width;
        var w = Math.floor((width - (values.length + 1) * pad) / values.length);

        container.style.width = ((w + pad) * values.length + pad) + "px";

        for (var i = 0; i < values.length; i++) {
            var el = segments[i];
            el.style.left = (pad + (w + pad) * i) + "px";
            el.style.width = (w) + "px";
        }
    }

    function mouse_click(e) {

        var rect = container.getBoundingClientRect();
        var o = e.clientX - rect.left;
        o = Math.min(Math.max(0, Math.floor(o * values.length / rect.width)), values.length - 1);

        if (o != option) {

            segments[option].classList.remove("segmented_control_on");
            segments[option].classList.add("segmented_control_off");
            option = o;

            segments[option].classList.remove("segmented_control_off");
            segments[option].classList.add("segmented_control_on");

            callback(option);
        }

        if (e.preventDefault)
            e.preventDefault();
        return true;
    }


}

window.Slider = function (container_div, callback, style_prefix, default_value, disable_click) {
    var container = document.createElement("div");
    container.style.width = "100%";
    container.style.height = "0";
    container.style.position = "relative";
    container.classList.add("slider_container");
    if (style_prefix)
        container.classList.add(style_prefix + "slider_container");

    var left_gutter = document.createElement("div");
    left_gutter.classList.add("slider_left_gutter");
    if (style_prefix)
        left_gutter.classList.add(style_prefix + "slider_left_gutter");

    var right_gutter = document.createElement("div");
    right_gutter.classList.add("slider_right_gutter");
    if (style_prefix)
        right_gutter.classList.add(style_prefix + "slider_right_gutter");

    if (!disable_click) {
        left_gutter.onclick = mouse_click;
        right_gutter.onclick = mouse_click;
    }

    var knob_container = document.createElement("div");
    knob_container.style.width = "0";
    knob_container.style.height = "0";
    knob_container.style.top = "0"
    knob_container.style.position = "absolute";

    var knob = document.createElement("div");
    knob.classList.add("slider_knob");
    if (style_prefix)
        knob.classList.add(style_prefix + "slider_knob");

    knob.onmousedown = mouse_down;
    knob.ontouchstart = genericTouchHandler(mouse_down);

    container_div.appendChild(container);
    container.appendChild(left_gutter);
    container.appendChild(right_gutter);
    container.appendChild(knob_container);
    knob_container.appendChild(knob);

    window.addEventListener("resize", layout, true);

    var percentage = default_value === undefined ? 0.5 : default_value;

    layout();
    callback(percentage);

    this.set_value = function (p) {
        percentage = p;
        layout();
    }

    this.knob_div = function () {
        return knob;
    }

    function layout() {
        var width = container.getBoundingClientRect().width;

        left_gutter.style.width = width * percentage + "px";
        left_gutter.style.left = "0";

        right_gutter.style.width = (width * (1.0 - percentage)) + "px";
        right_gutter.style.left = width * percentage + "px";

        knob_container.style.left = (width * percentage) + "px"
    }

    var selection_offset;

    var move_handler = genericTouchHandler(mouse_move);

    function mouse_down(e) {

        if (window.bc_touch_down_state)
            return false;

        e == e || window.event;
        var knob_rect = knob_container.getBoundingClientRect();
        selection_offset = e.clientX - knob_rect.left - knob_rect.width / 2;

        window.addEventListener("mousemove", mouse_move, false);
        window.addEventListener("mouseup", mouse_up, false);

        window.addEventListener("touchmove", move_handler, false);
        window.addEventListener("touchend", mouse_up, false);
        window.addEventListener("touchcancel", mouse_up, false);


        if (e.preventDefault)
            e.preventDefault();
        return true;
    }

    function mouse_move(e) {
        var container_rect = container.getBoundingClientRect();
        var x = e.clientX - selection_offset - container_rect.left;

        var p = Math.max(0, Math.min(1.0, x / container_rect.width));

        if (percentage != p) {
            percentage = p;
            layout();
            callback(p);
        }

        return true;
    }

    function mouse_up(e) {
        window.removeEventListener("mousemove", mouse_move, false);
        window.removeEventListener("mouseup", mouse_up, false);

        window.removeEventListener("touchmove", move_handler, false);
        window.removeEventListener("touchend", mouse_up, false);
        window.removeEventListener("touchcancel", mouse_up, false);
    }

    function mouse_click(e) {
        var container_rect = container.getBoundingClientRect();
        var x = e.clientX - container_rect.left;

        var p = Math.max(0, Math.min(1.0, x / container_rect.width));

        if (percentage != p) {
            percentage = p;
            layout();
            callback(p);
        }

        return true;
    }
}



window.Shader = function (gl, vert_src, frag_src, attributes_names, uniforms_names) {

    var vert = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vert, vert_src);
    gl.compileShader(vert);

    var frag = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(frag, frag_src);
    gl.compileShader(frag);

    var shader = gl.createProgram();
    gl.attachShader(shader, vert);
    gl.attachShader(shader, frag);
    gl.linkProgram(shader);

    this.shader = shader;

    this.attributes = {};
    this.uniforms = {};

    if (attributes_names) {
        for (var i = 0; i < attributes_names.length; i++)
            this.attributes[attributes_names[i]] = gl.getAttribLocation(shader, attributes_names[i]);
    }

    if (uniforms_names) {
        for (var i = 0; i < uniforms_names.length; i++)
            this.uniforms[uniforms_names[i]] = gl.getUniformLocation(shader, uniforms_names[i]);
    }
}


function ArcBall(matrix) {
    this.x_offset = 0;
    this.y_offset = 0;
    this.matrix = matrix ? matrix.slice() : [1, 0, 0, 0, 1, 0, 0, 0, 1];
}

ArcBall.prototype.set_viewport_size = function (width, height) {
    this.width = width;
    this.height = height;
}

ArcBall.prototype.set_viewport = function (x, y, width, height) {
    this.x_offset = x;
    this.y_offset = y;
    this.width = width;
    this.height = height;
}

ArcBall.prototype.start = function (x, y) {
    this.last_x = x;
    this.last_y = y;
}

ArcBall.prototype.vec = function (x, y) {

    var size = Math.min(this.width, this.height) * 0.5;
    var p = [(x - this.x_offset - this.width / 2) / size,
    (y - this.y_offset - this.height / 2) / size, 0];
    p[0] = -p[0];
    p[1] = -p[1];

    var d = p[0] * p[0] + p[1] * p[1];
    if (d <= 1) {
        p[2] = Math.sqrt(1 - d);
    }
    else {
        var s = 1.0 / Math.sqrt(d);
        p[0] *= s;
        p[1] *= s;
    }

    return p;
}

ArcBall.prototype.update = function (x, y) {


    function mat3_rot(a, angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);


        return [c + a[0] * a[0] * (1 - c), a[0] * a[1] * (1 - c) - a[2] * s, a[0] * a[2] * (1 - c) + a[1] * s,
        a[1] * a[0] * (1 - c) + a[2] * s, c + a[1] * a[1] * (1 - c), a[1] * a[2] * (1 - c) - a[0] * s,
        a[2] * a[0] * (1 - c) - a[1] * s, a[2] * a[1] * (1 - c) + a[0] * s, c + a[2] * a[2] * (1 - c)];
    }


    if (x == this.last_x && y == this.last_y)
        return;

    var va = this.vec(this.last_x, this.last_y);
    var vb = this.vec(x, y);
    var angle = Math.acos(Math.min(1.0, va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2]));

    var a = [va[1] * vb[2] - va[2] * vb[1], va[2] * vb[0] - va[0] * vb[2], va[0] * vb[1] - va[1] * vb[0]];

    var al = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
    if (al <= 0)
        return;

    al = 1 / Math.sqrt(al);

    a[0] *= al;
    a[1] *= al;
    a[2] *= al;


    var matrix = mat3_rot(a, angle);

    this.matrix = mat3_mul(matrix, this.matrix);

    this.last_x = x;
    this.last_y = y;
}

function compile_shader(gl, source, type) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw "could not compile shader:" + gl.getShaderInfoLog(shader);
    }

    return shader;
}

function create_program(gl, vertex, fragment) {
    var program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw ("program filed to link:" + gl.getProgramInfoLog(program));
    }

    return program;
}

module.exports = {
    vec_norm,
    vec_scale,
    vec_add,
    vec_len,
    vec_sub
}

/***/ }),

/***/ 52:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let {
    vec_norm,
    vec_scale,
    vec_add,
    vec_len,
    vec_sub
} = __webpack_require__(996)

var curve_normal;
var curve_normal_slider;

var petals;
var petals_slider;

var drawers;



var action_angle = 20;
let fill0 = "#FCD561";
let fill1 = "#78AD6C";
let fill2 = "#5EAAD4";
let fill3 = "#D45E5E";
let stroke0 = "#555";

let scale = Math.min(2, window.devicePixelRatio || 1);

let rand = [];
for (let i = 0; i < 40; i++) {
    rand.push(Math.random());
}

for (let i = 0; i < 40; i++) {
    rand.push(rand[i]);
}

function Drawer(scale, container, mode) {

    let self = this;

    let wrapper = document.createElement("div");
    wrapper.classList.add("canvas_container");
    wrapper.classList.add("non_selectable");

    let canvas = document.createElement("canvas");
    canvas.classList.add("non_selectable");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";

    let play = document.createElement("div");
    play.classList.add("play_pause_button");
    play.classList.add("playing");

    wrapper.appendChild(canvas);

    if (mode === "demo" ||
        mode === "angular_velocity" ||
        mode === "deg" ||
        mode === "rpm" ||
        mode === "linear_velocity" ||
        mode === "contact" ||
        mode === "resize" ||
        mode === "torque_rope" ||
        mode === "torque_rope0" ||
        mode === "dp" ||
        mode === "slip" ||
        mode === "gears" ||
        mode === "pitch" ||
        mode === "force_angle" ||
        mode === "force_offset" ||
        mode === "three" ||
        mode === "four" ||
        mode === "jam")
    {
        wrapper.appendChild(play);
    }

    container.classList.add('drawer_container')
    container.appendChild(wrapper);

    let paused = false;

    this.set_paused = function (p) {
        paused = p;

        if (paused) {
            play.classList.remove("playing");
        }
        else
        {
            play.classList.add("playing");
            window.requestAnimationFrame(tick);
        }
    }

    play.onclick = function () {
        self.set_paused(!paused);
    }

    let progress = 0;
    let progress2 = 0;
    let selection = 0;

    this.set_selection = function (x) {
        selection = x;
        this.repaint();
    }


    this.set_progress = function (x) {
        progress = x;
        this.repaint();
    }

    this.set_progress2 = function (x) {
        progress2 = x;
        this.repaint();
    }

    let width, height;

    let font_size = 19;

    let t = 0;
    let prev_timestamp;

    let a = 0;
    let a2 = 0;
    let omega_max = 1 * Math.PI * 2;

    if (mode === "gears")
        omega_max = 0.6;
    else if (mode === "force_angle" || mode === "force_offset" ||
    mode === "torque_rope0" ||
    mode === "jam")
        omega_max = 1.2;
    else if (mode === "pitch" || mode === "three")
        omega_max = Math.PI;

    function rpm_string(omega){
        return (omega * 30 / Math.PI).toFixed(1) + " tr/min";
    }

    function tick(timestamp) {


        let rect = canvas.getBoundingClientRect();

        let wh = window.innerHeight || document.documentElement.clientHeight;
        let ww = window.innerWidth || document.documentElement.clientWidth;
        if (!(rect.top > wh || rect.bottom < 0 || rect.left > ww || rect.right < 0))
        {



        let dt = 0;
        if (prev_timestamp)
            dt = (timestamp - prev_timestamp)/1000;
        t += dt;

        if (mode === "angular_velocity" ||
            mode === "linear_velocity" ||
            mode === "gears" ||
            mode === "pitch" ||
            mode === "rpm" ||
            mode === "three" ||
            mode === "four")
        {
            a += dt * progress * omega_max;
        }
        else if  (mode === "resize" || mode === "torque_rope")
        {
            let r1 = (0.25 + progress * 0.5);
            let r2 = 1 - r1;
            var w1 = omega_max * 0.25;
            a += dt * w1;
            a2 += dt * w1 * r1/r2
        }
        else if (mode === "slip")
        {
            a += dt * omega_max * 0.5;
            a2 += dt * omega_max * 0.5 * (0.3 + 0.7*0.5*(Math.sin(a*2) + 1));
        }
        else if (mode === "force_angle" || mode === "deg" ||
        mode === "torque_rope0")
        {
            a += dt * omega_max;
        }
        else if (mode === "jam")
        {
            if (selection != 1)
                a += dt * omega_max;
        }
        else if (mode === "force_offset")
        {
            a += dt * omega_max;

            var s1 = (progress - 0.5)*(Math.sqrt(2) - 1)*2 + 1.0;
            var s2 = 2 - s1;

            a2 += dt * omega_max * s1/s2;
        }

        self.repaint();
    }
        prev_timestamp = timestamp;

        if (paused)
            prev_timestamp = undefined;
        else
            window.requestAnimationFrame(tick);
    }

    window.requestAnimationFrame(tick);



    this.repaint = function () {



        var ctx = canvas.getContext("2d");

        ctx.resetTransform();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.scale(scale, scale);

        ctx.lineWidth = 1.5;
        ctx.strokeStyle = stroke0;

        font_size = 19;

        if (window.innerWidth < 500)
            font_size = 18;

        if (window.innerWidth < 400)
            font_size = 16;

        ctx.font = font_size + "px IBM Plex Sans";
        ctx.textAlign = "center";


        if (mode === "demo")
            d_demo ();
        else if (mode === "angular_velocity")

            d_angular_velocity();
        else if (mode === "deg")
            d_deg();
        else if (mode === "rpm")
            d_rpm();
        else if (mode === "arc_distance")
            d_arc_distance();
        else if (mode === "linear_velocity")
            d_linear_velocity();
        else if (mode === "contact")
            d_contact();
        else if (mode === "contact_small")
            d_contact_small();
        else if (mode === "resize")
            d_resize();
        else if (mode === "torque_rope0")
            d_torque_rope0();
        else if (mode === "torque_rope")
            d_torque_rope();
        else if (mode === "spanner")
            d_spanner();
        else if (mode === "tangent")
            d_tangent();
        else if (mode === "tangent_circle")
            d_tangent_circle();
        else if (mode === "dp")
            d_dp();
        else if (mode === "slip")
            d_slip();
        else if (mode === "gears")
            d_gears();
        else if (mode === "pitch")
            d_pitch();
        else if (mode === "normal")
            d_normal();
        else if (mode === "force_angle")
            d_force_angle();
        else if (mode === "force_offset")
            d_force_offset();
        else if (mode === "involute")
            d_involute();
        else if (mode === "involute_string")
            d_involute_string();
        else if (mode === "involute_petals")
            d_involute_petals();
        else if (mode === "radius_shape")
            d_radius_shape();
        else if (mode === "curve")
            d_curve();
        else if (mode === "curve_normal")
            d_curve_normal();
        else if (mode === "three")
            d_three();
        else if (mode === "four")
            d_four();
        else if (mode === "jam")
            d_jam();

        function d_demo() {

            ctx.translate(width * 0.5, height * 0.48);

            var size = width * 0.54;
            ctx.translate(-size*0.61, size*0.11);

            ctx.rotate(-Math.PI*0.13);
            // ctx.translate(0, size*0.18);

            var n1 = 20;
            var n2 = 12;
            var n3 = 20;
            var n4 = 28;

            var r1 = size * 0.26;
            var r2 = r1 * n2/n1;
            var r3 = r1 * n3/n1;
            var r4 = r1 * n4/n1;

            var a = -t ;

            // ctx.translate((r1+r1+r2-r3-r4-r4)/2, 0);

            var ang = Math.PI*0.25;

            var d1 = (r1+r2)*Math.cos(ang);
            var d2 = (r2 + r3);
            var d = Math.sqrt(d2*d2 - d1*d1);

            ctx.save();

            ctx.rotate(ang);
            ctx.translate((r1 + r2),0);
            ctx.rotate(-a*n1/n2 + Math.PI*(0.5));

            draw_gear(r2,n2, fill2);

            ctx.restore();

            ctx.save();

            ctx.rotate(-ang);
            ctx.translate((r1 + r2),0);
            ctx.rotate(-a*n1/n2 + Math.PI);

            draw_gear(r2,n2, fill2);


            ctx.restore();

            ctx.save();

            ctx.rotate(a + Math.PI/2);

            draw_gear(r1,n1, fill0);
            draw_driver();

            ctx.restore();

            ctx.translate((r1+r2)*Math.cos(ang) + d,0);



            ctx.save();

            ctx.rotate(a*n1/n3 + Math.PI/2);

            draw_gear(r3,n3, fill3);

            ctx.restore();

            ctx.save();

            ctx.rotate(Math.PI/4);

            ctx.translate((r3+r4),0);
            ctx.rotate(-a*n1/n4 + Math.PI/2);

            draw_gear(r4,n4, fill1);

            ctx.restore();


        }

        function d_angular_velocity() {
            ctx.translate(width * 0.5, height * 0.42);

            var size = width/100 * 0.32;

            ctx.scale (size, size);
            ctx.lineWidth = 1.5/size;


            draw_fan(-a, progress);
        }


        function d_deg() {
            ctx.translate(width * 0.5, height * 0.4);


            var size = width/100 * 0.09;
            var t1 = 240;
            var t2 = 280;

            if (width < 550)
            {
                ctx.translate (0, -height*0.1)
                t1 = 260;
                t2 = 330;
            }

            ctx.font = (font_size/size) + "px IBM Plex Sans";


            ctx.scale (size, size);
            ctx.lineWidth = 1.5/size;

            var r = 145;
            var d = 360;


            ctx.translate(-d, 0);


            ctx.save();


            draw_fan(-a/4, 0.25, true);

            ctx.setLineDash([3, 3]);
            ctx.strokeStyle = "rgba(0,0,0,0.2)";

            ctx.rotate(Math.PI/4);
            for (var i = 0; i < 4; i++)
            {
                ctx.beginPath();
                ctx.moveTo(0,0);
                ctx.lineTo(r,0);
                ctx.stroke();

                ctx.rotate(Math.PI*0.5);
            }

            ctx.restore();

            ctx.strokeStyle = "rgba(0,0,0,0.4)";

            ctx.strokeEllipse(0,0,r,r);
            ctx.strokeStyle = "#333";

            ctx.save();

            ctx.lineWidth = 5/size;
            ctx.rotate(Math.PI*(0.25 - 0.5*Math.floor((a/4) / (Math.PI*0.5))));
            ctx.beginPath();
            ctx.arc(0,0,r,0,-(a/4) % (Math.PI*0.5), true);
            ctx.stroke();

            ctx.restore();


            ctx.fillStyle = "#333";
            ctx.fillText("90°/s",0,t1);
            ctx.fillText("0.5π rad/s",0,t2);



            ctx.translate(d,0 );


            ctx.save();


            draw_fan(-a/2, 0.5, true);


            ctx.setLineDash([3, 3]);
            ctx.strokeStyle = "rgba(0,0,0,0.2)";

            ctx.rotate(Math.PI/4);
            for (var i = 0; i < 4; i++)
            {
                ctx.beginPath();
                ctx.moveTo(0,0);
                ctx.lineTo(r,0);
                ctx.stroke();

                ctx.rotate(Math.PI*0.5);
            }

            ctx.restore();
            ctx.strokeStyle = "rgba(0,0,0,0.4)";

            ctx.strokeEllipse(0,0,r,r);
            ctx.strokeStyle = "#333";
            ctx.save();

            ctx.lineWidth = 5/size;
            ctx.rotate(Math.PI*(0.25 - Math.floor((a/2) / (Math.PI))));
            ctx.beginPath();
            ctx.arc(0,0,r,0,-(a/2) % (Math.PI), true);
            ctx.stroke();

            ctx.restore();


            ctx.fillStyle = "#333";
            ctx.fillText("180°/s",0,t1);
            ctx.fillText("π rad/s",0,t2);


            ctx.translate(d,0 );

            ctx.save();


            draw_fan(-a,1, true);


            ctx.setLineDash([3, 3]);
            ctx.strokeStyle = "rgba(0,0,0,0.2)";

            ctx.rotate(Math.PI/4);
            for (var i = 0; i < 4; i++)
            {
                ctx.beginPath();
                ctx.moveTo(0,0);
                ctx.lineTo(r,0);
                ctx.stroke();

                ctx.rotate(Math.PI*0.5);
            }

            ctx.restore();
            ctx.strokeStyle = "rgba(0,0,0,0.4)";

            ctx.strokeEllipse(0,0,r,r);
            ctx.strokeStyle = "#333";
            ctx.save();

            ctx.lineWidth = 5/size;
            ctx.rotate(Math.PI*(0.25 - 2*Math.floor((a) / (2*Math.PI))));
            ctx.beginPath();
            ctx.arc(0,0,r,0,-(a) % (2*Math.PI), true);
            ctx.stroke();

            ctx.restore();




            ctx.fillStyle = "#333";
            ctx.fillText("360°/s",0,t1);
            ctx.fillText("2π rad/s",0,t2);


        }

        function d_rpm() {
            ctx.translate(width * 0.5, height * 0.5 - 20);

            var r = height*0.5 - 30;

            ctx.fillStyle = fill0;
            ctx.save();
            ctx.rotate(-a);
            draw_disc(r);

            var colors = [
                "#B71262",
                "#6F12B7",
                "#1220B7",
                "#1270B7",
                "#12B7A5",
                "#2CB712",
            ];

            ctx.rotate(-Math.PI*0.5);

            for (var i = 0; i < 6; i++)
            {
                ctx.fillStyle = colors[i];

                ctx.fillEllipse(0,0,4,4);

                ctx.translate(0, r  / (6 - 1));
            }


            ctx.restore();

            var sp = progress*omega_max*60*0.5/Math.PI;
            sp = Math.round(sp*10)/10;
            ctx.fillStyle = "#333";

            ctx.fillText(sp.toFixed(1) + " tr/min",0,height*0.52);

            ctx.rotate(-a);
            ctx.fillStyle = "#ddd";


            // ctx.stroke();
        }


        function d_arc_distance()
        {
            ctx.translate(width * 0.5, height * 0.35);

            var size = height * 0.6;

            var r = size * 0.5;

            ctx.lineJoin = "round";
            ctx.strokeStyle = stroke0;
            ctx.lineWidth = 1.5;
            ctx.fillStyle = fill0;

            ctx.save();
            ctx.rotate (-Math.PI*2*progress);
            draw_disc(r,fill0);
            ctx.restore();

            ctx.lineWidth = 4;
            ctx.lineCap = "round";
            ctx.fillStyle =  "black";

            var colors = [
                "#B71262",
                "#6F12B7",
                "#1220B7",
                "#1270B7",
                "#12B7A5",
                "#2CB712",
            ]

            var lines = 6;
            ctx.globalAlpha = 0.9;
            for (var i = 0; i < lines; i++)
            {
                ctx.strokeStyle = colors[i];
                ctx.beginPath();
                ctx.arc(0,0,r * i / (lines - 1), 0, -Math.PI*2*progress,true);
                ctx.stroke();
            }
            ctx.globalAlpha = 1.0;

            ctx.save();

            ctx.rotate (-Math.PI*2*progress - Math.PI * 0.5);

            for (var i = 0; i < lines; i++)
            {
                ctx.fillStyle = colors[i];

                ctx.beginPath();
                ctx.ellipse(0, 0, 3, 3, 0, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();

                ctx.translate(0, r  / (lines - 1));
            }

            ctx.restore();

            ctx.translate(0,size*0.5);


            for (var i = 0; i < lines; i++)
            {
                ctx.strokeStyle = colors[i];
                ctx.fillStyle = colors[i];

                ctx.globalAlpha = 0.8;

                ctx.beginPath();
                ctx.moveTo(-Math.PI*r,0);
                ctx.lineTo(Math.PI*r * (2 * progress * i / (lines - 1) - 1), 0);
                ctx.stroke();

                ctx.globalAlpha = 1.0;


                ctx.beginPath();
                ctx.ellipse(Math.PI*r * (2 * progress * i / (lines - 1) - 1), 0, 3, 3, 0, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();

                ctx.translate(0,r  / (lines - 1));
            }

            ctx.beginPath();
            ctx.moveTo(-Math.PI*r, 0);
            ctx.lineTo(Math.PI*r * (2 * progress - 1), 0);
            ctx.stroke();
        }

        function d_linear_velocity() {
            ctx.translate(width * 0.5, height * 0.5);


            var size = height * 0.63;

            var r = size * 0.53;


            ctx.lineJoin = "round";
            ctx.strokeStyle = stroke0;
            ctx.lineWidth = 1.5;
            ctx.fillStyle = fill0;

            ctx.rotate(-a);

            draw_disc(r, fill0);

            ctx.rotate(-Math.PI/2);


            ctx.fillStyle = "#333";

            var colors = [
                "#B71262",
                "#6F12B7",
                "#1220B7",
                "#1270B7",
                "#12B7A5",
                "#2CB712",
            ]

            ctx.save();
            ctx.lineWidth = 3;
            var lines = 6;
            for (var i = 0; i < lines; i++)
            {
                ctx.fillStyle = colors[i];



                // ctx.beginPath();
                // ctx.moveTo(0, r * i / (lines - 1));
                // ctx.lineTo(i / (lines - 1) * progress * 120, r * i / (lines - 1));
                // ctx.stroke();

                var l = i / (lines - 1) * progress * 120;

                ctx.arrow(0,r * i / (lines - 1),l,r * i / (lines - 1),4,4+Math.min(6,l),Math.min(14,l));

                ctx.fill();

                ctx.beginPath();
                ctx.ellipse(0, r * i / (lines - 1), 3, 3, 0, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();

            }

            ctx.restore();
        }

        function d_contact() {
            ctx.translate(width * 0.5, height * 0.33);

            var size = height * 0.6;

            var r = size * 0.5;

            function draw(s) {

                ctx.save();
            ctx.scale(s, s);
            ctx.translate(-r, 0);


            ctx.lineJoin = "round";
            ctx.strokeStyle = stroke0;
            ctx.lineWidth = 1.5/s;
            ctx.fillStyle = fill0;


            ctx.save();

            ctx.rotate(-t + Math.PI/2);

            draw_disc(r,fill0);

            draw_driver();
            ctx.restore();

            ctx.translate(r *2, 0);

            ctx.save();

            ctx.rotate(t - Math.PI/2);

            draw_disc(r,fill1);

            ctx.restore();

            ctx.restore();
            }

            draw (1);

            var zoom = 4;

            ctx.save();
            ctx.rotate(+Math.PI/6);

            ctx.translate(0, size*0.95);

            ctx.beginPath();
            ctx.ellipse(0, 0, r * 0.5, r * 0.5, 0, 0, Math.PI * 2);
            ctx.closePath();

            ctx.clip();

            ctx.rotate(-Math.PI/6);

            draw (zoom);

            ctx.restore();

            ctx.rotate(+Math.PI/6);


            draw_zoom(r * 0.5 / zoom,r * 0.5,size*0.95);

            ctx.translate(0,size*0.95);
            ctx.rotate(-Math.PI/6 - Math.PI/2);

            ctx.save();

            ctx.translate(0, size*0.95);
            ctx.beginPath();
            ctx.ellipse(0, 0, r * 0.5, r * 0.5, 0, 0, Math.PI * 2);
            ctx.closePath();

            ctx.clip();

            ctx.rotate(Math.PI*0.5);
            ctx.beginPath();
            var n = rand.length;
            var ddr = 700;

            ctx.moveTo(ddr,0);
            for (var i = 0; i <= n; i++)
            {
                var dr = ddr + (-5 + 10*rand[i]);
                var an = 0.4 * ((i/n)) -0.1 - (t*0.3 % 0.2);
                ctx.lineTo(ddr - dr*Math.cos(an), dr*Math.sin(an));
            }

            ctx.closePath();

            ctx.fillStyle = fill1;
            ctx.fill();
            ctx.stroke();

            ddr *= -1;
            ctx.beginPath();

            ctx.moveTo(ddr,0);
            for (var i = 0; i <= n; i++)
            {
                var dr = ddr + (-5 + 10*rand[n - i - 1]);
                var an = 0.4 * ((i/n)) -0.1 - (t*0.3 % 0.2);
                ctx.lineTo(ddr - dr*Math.cos(-an), dr*Math.sin(-an));
            }

            ctx.closePath();

            ctx.fillStyle = fill0;
            ctx.fill();
            ctx.stroke();

            ctx.restore();

            draw_zoom(3,r*0.5,size*0.95);

        }

        function d_contact_small()
        {
            ctx.translate(width * 0.5, height * 0.4);

            var size = width * 0.6;

            var r = size * 0.25;
            var r2 = r * 2;


            ctx.save();

            ctx.translate(-r*2, 0);

            ctx.rotate(-Math.PI*2*progress + Math.PI/2);
            draw_disc(r,fill0);
            draw_driver();


            ctx.restore();


            ctx.save();

            ctx.translate(r, 0);


            ctx.rotate(Math.PI*progress - Math.PI/2);
            draw_disc(r2,fill1);

            ctx.rotate(-Math.PI*progress + Math.PI/2);



            ctx.lineWidth = 4;
            ctx.lineCap = "round";

            ctx.strokeStyle = "#1F6AEA";
            ctx.fillStyle = "#1F6AEA";
            ctx.globalAlpha = 0.9;

            ctx.beginPath();
            ctx.arc(0,0,r2, Math.PI, Math.PI*(1+progress),false);
            ctx.stroke();
            ctx.globalAlpha = 1.0;


            ctx.rotate (Math.PI*progress + Math.PI * 0.5);


                ctx.beginPath();
                ctx.ellipse(0, r2, 3, 3, 0, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();

            ctx.restore();


            ctx.save();
            ctx.globalAlpha = 0.9;

            ctx.translate(-r*2, 0);


            ctx.lineWidth = 4;
            ctx.lineCap = "round";

            ctx.strokeStyle = "#EB2D2D";
            ctx.fillStyle = "#EB2D2D";

            ctx.globalAlpha = 0.9;

            ctx.beginPath();
            ctx.arc(0,0,r, 0, -Math.PI*2*progress,true);
            ctx.stroke();
            ctx.globalAlpha = 1.0;

            ctx.fillStyle = "#EB2D2D";


            ctx.rotate(-Math.PI*2*progress - Math.PI/2);


                ctx.beginPath();
                ctx.ellipse(0, r, 3, 3, 0, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();


            ctx.restore();


            ctx.translate(0,size * 0.64);

            ctx.lineWidth = 4;
            ctx.lineCap = "round";

            ctx.strokeStyle = "#EB2D2D";
            ctx.fillStyle = "#EB2D2D";



        ctx.beginPath();
        ctx.moveTo(-Math.PI*r,0);
        ctx.lineTo(Math.PI*r * (2 * progress - 1), 0);
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        ctx.beginPath();
        ctx.ellipse(Math.PI*r * (2 *progress - 1), 0, 3, 3, 0, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

        ctx.translate(0,size * 0.08);

        ctx.strokeStyle = "#1F6AEA";
        ctx.fillStyle = "#1F6AEA";

        ctx.globalAlpha = 0.9;

        ctx.beginPath();
        ctx.moveTo(-Math.PI*r,0);
        ctx.lineTo(Math.PI*r * (2 * progress - 1), 0);
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        ctx.beginPath();
        ctx.ellipse(Math.PI*r * (2 *progress - 1), 0, 3, 3, 0, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        }

        function d_resize()
        {
            ctx.translate(width * 0.5, height * 0.45);

            var size = height * 0.53;

            var rsum = size;
            var r = rsum * (0.25 + progress * 0.5);
            var r2 = rsum - r;

            ctx.save();

            ctx.translate(-rsum/2, 0);
            ctx.rotate (-a + Math.PI/2);


            draw_disc(r,fill0);
            draw_driver();


            ctx.restore();


            ctx.save();

            ctx.translate(rsum/2, 0);

            ctx.rotate (a2 -  Math.PI/2);

            draw_disc(r2,fill1);
            ctx.restore();

            var o = width < 550 ? 20 : 40
            // ctx.translate(0, height * 0.51);
            ctx.fillText(rpm_string(omega_max * 0.25),-rsum/2,r + o);
            ctx.fillText(rpm_string(omega_max * 0.25 * r/r2),rsum/2,r2 + o);

        }

        function d_torque_rope0()
        {
            ctx.translate(width * 0.5, height * 0.35);

            var size = width * 0.38;

            var r = size *1.2;

            ctx.save();

            ctx.rotate (-a + Math.PI/2);


            draw_disc(r,fill0);


            // var r1 = (0.25 + progress * 0.5);
            // var r2 = 1 - r1;

            var arm = r * (0.3 + 0.5 * progress);


            ctx.fillStyle = "#ccc";
            ctx.fillEllipse(0,0,arm,arm);
            ctx.strokeEllipse(0,0,arm,arm);

            ctx.fillStyle = "#555";

            ctx.fillEllipse(0,0,2,2);

            ctx.fillStyle = "#999";

            var d = r * 0.45;

            ctx.fillEllipse(d/2.5,0,3,3);
            ctx.strokeEllipse(d/2.5,0,3,3);
            ctx.fillEllipse(-d/2.5,0,3,3);
            ctx.strokeEllipse(-d/2.5,0,3,3);

            ctx.beginPath();
            ctx.moveTo(d/2.5 -2,-2);
            ctx.lineTo(d/2.5 +2,2);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(-d/2.5 -2,-2);
            ctx.lineTo(-d/2.5 +2,2);
            ctx.stroke();

            ctx.restore();


            var line = 5;



            var f = 0.3 * size / (0.3 + 0.5 * progress);

            var t = a * arm;

            arm += line/2 + 1;


            ctx.beginPath();
            ctx.arc(0, 0,arm,0 + -(t % 20)/arm,-Math.PI*1.95- (t % 20)/arm, true);

            ctx.lineWidth = line + 2;
            ctx.strokeStyle = "#9F6939";
            ctx.stroke();

            ctx.lineWidth = line;
            ctx.strokeStyle = "#E0AB5F";

            ctx.stroke();

            ctx.strokeStyle = "#C27B3D";
            ctx.save();


            ctx.setLineDash([10, 10]);
            ctx.stroke();
            ctx.restore()


            ctx.beginPath();
            ctx.moveTo(arm, Math.ceil(height/20)*20 - t%20);
            ctx.arc(0, 0,arm,0,0 + -(t % 20)/arm, true);

            ctx.lineWidth = line + 2;
            ctx.strokeStyle = "#9F6939";
            ctx.stroke();

            ctx.lineWidth = line;
            ctx.strokeStyle = "#E0AB5F";

            ctx.stroke();

            ctx.save();

            ctx.strokeStyle = "#C27B3D";

            ctx.setLineDash([10, 10]);
            ctx.stroke();
            ctx.restore()


            ctx.translate(arm, height*0.63);

            ctx.lineWidth = 1;


            ctx.fillStyle = "#E03232"
            ctx.strokeStyle = "#BE2A2A";
            ctx.arrow(-20,0 , -20, -f, 5, 12, Math.min(f, 18));
            ctx.fill();
            ctx.stroke();

            ctx.font = "500 " + (font_size) + "px IBM Plex Sans";

            ctx.fillStyle = "#333";
            ctx.fillText("F", -34,-f/2 + 10);


        }


        function d_torque_rope()
        {
            ctx.translate(width * 0.5, height * 0.42);

            var size = width * 0.38;

            var rsum = size;
            var r = rsum * (0.25 + progress * 0.5);
            var r2 = rsum - r;

            ctx.save();

            ctx.translate(-rsum/2, 0);
            ctx.rotate (-a + Math.PI/2);


            draw_disc(r,fill0);
            draw_driver();


            ctx.restore();


            ctx.save();

            ctx.translate(rsum/2, 0);

            ctx.rotate (a2 -  Math.PI/2);

            draw_disc(r2,fill1);

            var r1 = (0.25 + progress * 0.5);
            var r2 = 1 - r1;

            var arm = rsum * 0.1;


            ctx.fillStyle = "#ccc";
            ctx.fillEllipse(0,0,arm,arm);
            ctx.strokeEllipse(0,0,arm,arm);

            ctx.fillStyle = "#555";

            ctx.fillEllipse(0,0,2,2);

            ctx.fillStyle = "#999";

            ctx.fillEllipse(arm/2.5,0,3,3);
            ctx.strokeEllipse(arm/2.5,0,3,3);
            ctx.fillEllipse(-arm/2.5,0,3,3);
            ctx.strokeEllipse(-arm/2.5,0,3,3);

            ctx.beginPath();
            ctx.moveTo(arm/2.5 -2,-2);
            ctx.lineTo(arm/2.5 +2,2);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(-arm/2.5 -2,-2);
            ctx.lineTo(-arm/2.5 +2,2);
            ctx.stroke();

            ctx.restore();

            ctx.save();
            ctx.translate(rsum/2, 0);

            var line = 5;



            var v = 0.25 * size * r1 / r2;
            var f = 0.25 * size * r2/r1;

            var t = a2 * arm;

            arm += line/2 + 1;


            ctx.beginPath();
            ctx.arc(0, 0,arm,Math.PI + (t % 20)/arm,Math.PI*2.9+ (t % 20)/arm, false);

            ctx.lineWidth = line + 2;
            ctx.strokeStyle = "#9F6939";
            ctx.stroke();

            ctx.lineWidth = line;
            ctx.strokeStyle = "#E0AB5F";

            ctx.stroke();

            ctx.strokeStyle = "#C27B3D";
            ctx.save();


            ctx.setLineDash([10, 10]);
            ctx.stroke();
            ctx.restore()


            ctx.beginPath();
            ctx.moveTo(-arm, Math.ceil(height/20)*20 - t%20);
            ctx.arc(0, 0,arm,Math.PI,Math.PI + (t % 20)/arm, false);

            ctx.lineWidth = line + 2;
            ctx.strokeStyle = "#9F6939";
            ctx.stroke();

            ctx.lineWidth = line;
            ctx.strokeStyle = "#E0AB5F";

            ctx.stroke();

            ctx.save();

            ctx.strokeStyle = "#C27B3D";

            ctx.setLineDash([10, 10]);
            ctx.stroke();
            ctx.restore()


            ctx.translate(-arm, height*0.56);

            ctx.lineWidth = 1;
            ctx.fillStyle = "#6BAFDA"
            ctx.strokeStyle = "#5886A2";
            ctx.arrow(20,0 , 20, -v, 5, 12, Math.min(v, 18));
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#E03232"
            ctx.strokeStyle = "#BE2A2A";
            ctx.arrow(-20,0 , -20, -f, 5, 12, Math.min(f, 18));
            ctx.fill();
            ctx.stroke();


            ctx.font = "500 " + (font_size) + "px IBM Plex Sans";

            ctx.fillStyle = "#333";
            ctx.fillText("F", -34,-f/2 + 10);

            ctx.fillText("V", +34,-v/2 + 10);

            ctx.restore();
        }

        function draw_spanner()
        {
            ctx.save();
            ctx.fillStyle = "#E2E3E6";
            ctx.strokeStyle = "#888888";
            ctx.translate(- 224,-43);
            ctx.beginPath();
            ctx.moveTo(103.5,23.0000004);
            ctx.lineTo(363,23.0000002);
            ctx.bezierCurveTo(392,23.0000002,396.77,5.00000016,415,5.00000016);
            ctx.bezierCurveTo(433.225397,5.00000016,448,19.7746034,448,38.0000002);
            ctx.bezierCurveTo(448,56.2253969,433.225397,71.0000002,415,71.0000002);
            ctx.bezierCurveTo(396.774603,71.0000002,392,54.0000002,363,54.0000002);
            ctx.lineTo(363,54.0000002);
            ctx.lineTo(103.5,54.0000004);
            ctx.lineTo(103.5,54.0000004);
            ctx.bezierCurveTo(78.5000001,54.0000003,70.0000001,78.0000003,52.0000001,84.5000003);
            ctx.bezierCurveTo(42.1080769,88.1636753,33.2899551,84.5791918,12.5632394,73.3531437);
            ctx.lineTo(44.438773,64.8105821);
            ctx.bezierCurveTo(49.773434,63.381164,51.5487321,52.7082777,48.4040122,40.9720234);
            ctx.bezierCurveTo(45.2592924,29.2357692,38.385396,20.8804276,33.050735,22.3098457);
            ctx.lineTo(0.434993993,31.0487578);
            ctx.bezierCurveTo(10.2688822,14.1510123,15.8662409,5.37575322,24.7177576,2.80186055);
            ctx.bezierCurveTo(60.5000002,-7.49999956,50.5000002,23.0000004,103.5,23.0000004);
            ctx.closePath();
            ctx.moveTo(415.218496,13.0000003);
            ctx.lineTo(409.300994,16.4157316);
            ctx.lineTo(402.468496,16.4163525);
            ctx.lineTo(399.051994,22.3337316);
            ctx.lineTo(393.134848,25.7500003);
            ctx.lineTo(393.133994,32.5827316);
            ctx.lineTo(389.718496,38.5000003);
            ctx.lineTo(393.133994,44.4167316);
            ctx.lineTo(393.134848,51.2500003);
            ctx.lineTo(399.051994,54.6667316);
            ctx.lineTo(402.468496,60.5836481);
            ctx.lineTo(409.298994,60.5827316);
            ctx.lineTo(415.218496,64.0000003);
            ctx.lineTo(421.136994,60.5827316);
            ctx.lineTo(427.968496,60.5836481);
            ctx.lineTo(431.383994,54.6667316);
            ctx.lineTo(437.302143,51.2500003);
            ctx.lineTo(437.301994,44.4167316);
            ctx.lineTo(440.718496,38.5000003);
            ctx.lineTo(437.301994,32.5827316);
            ctx.lineTo(437.302143,25.7500003);
            ctx.lineTo(431.383994,22.3337316);
            ctx.lineTo(427.968496,16.4163525);
            ctx.lineTo(421.134994,16.4157316);
            ctx.lineTo(415.218496,13.0000003);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.roundRect(100,29.5,260,18,9);
            ctx.stroke();
            ctx.restore();
        }

        function draw_nut()
        {
            ctx.save();
            ctx.fillStyle = "#D0CFCA";
            ctx.strokeStyle = "#888888";
            ctx.translate(-23.5,-23.5);
            ctx.beginPath();
            ctx.moveTo(23.5,0);
            ctx.lineTo(43.852,11.75);
            ctx.lineTo(43.852,35.25);
            ctx.lineTo(23.5,47);
            ctx.lineTo(3.148,35.25);
            ctx.lineTo(3.148,11.75);
            ctx.lineTo(23.5,0);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = "#CACACA";
            ctx.ellipse(23.5, 23.5, 11.5, 11.5, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.restore();

        }

        function d_spanner()
        {
            ctx.translate(width * 0.5, height * 0.77 - 20);

            var s = width * 1.2 /550;

            ctx.scale(s, s);

            ctx.font = "500 " + (font_size/s) + "px IBM Plex Sans";

            ctx.lineWidth = 1.5/s;

            draw_spanner();


            ctx.fillStyle = "#E03232";
            ctx.strokeStyle = "#BE2A2A";
            ctx.lineJoin = "round";

            var x = -200 + 90 + 240 * progress;
            var y = 44 * 330 / (90 + 240 * progress);

            ctx.save();
            ctx.beginPath();
            for (var i = 0; i < 30; i++)
            {
                var t = i / 29.0;
                var px = -200 + 90 + 240 * t;
                var py = 44 * 330 / (90 + 240 * t);
                ctx.lineTo(px,-py - 5);
            }
            // ctx.lineWidth = 1.0;
            ctx.globalAlpha = 0.25;
            ctx.setLineDash([2, 2]);

            ctx.stroke();

            ctx.restore();

            var t = 1 - progress;
            ctx.arrow(x,-y - 5, x,-5, 3 + t * 2, 10 + 6*t, 12 + 8*t);
            ctx.fill();
            ctx.stroke();

            ctx.translate(-200,4.5);
            ctx.rotate(Math.PI/12);

            draw_nut();

            ctx.rotate(-Math.PI/12);

            ctx.lineWidth = 1/s;
            ctx.strokeStyle = "rgba(0,0,0,0.5)";
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(0,65);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0,60);

            ctx.translate(200 + x,0);

            ctx.lineTo(0,60);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0,-9);
            ctx.lineTo(0,65);
            ctx.stroke();


            ctx.fillStyle = "#333";
            ctx.fillText("r", -(200+x)*0.5,56);

            ctx.fillText("F", 12, -5 - y/2);

        }

        function d_tangent()
        {
            ctx.translate(width * 0.5, height * 0.41);

            var s = width * 1.2 /550;

            ctx.font = "500 " + (font_size/s) + "px IBM Plex Sans";

            ctx.scale(s, s);
            ctx.translate(0, -4.5);

            ctx.lineWidth = 1.5/s;

            ctx.save();
            ctx.rotate(Math.PI);
            draw_spanner();

            ctx.restore();

            var a = Math.PI * 2 * progress + Math.PI;

            var x = 0;
            var y = 110;

            var lr = 110 * Math.sin(a);
            var lt = 110 * Math.cos(a);

            ctx.save();

            ctx.translate(-191.25,4.5);

            draw_nut();


            ctx.lineWidth = 1/s;
            ctx.strokeStyle = "rgba(0,0,0,0.5)";
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(0,65);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0,60);

            ctx.translate(191.25 + x,0);

            ctx.lineTo(0,60);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(0,65);
            ctx.stroke();



            ctx.fillStyle = "#333";

            ctx.fillText("r", -(191.25+x)*0.5,56);

            ctx.restore();

            ctx.save();
            ctx.translate(0,4.5);

            ctx.fillStyle = "#569C44";

            ctx.lineWidth = 1/s;

            ctx.fillStyle = "#E03232";
            ctx.strokeStyle = "#BE2A2A";
            ctx.lineJoin = "round";


            var t = Math.abs(Math.cos(a));
            ctx.fillStyle = "#E03232";
            ctx.arrow(0,-lt, 0, 0, 2 + 3 * t, Math.min( Math.abs(lt/2), 6 + 6 * t), Math.min(8 + 10 * t, Math.abs(lt)));
            ctx.fill();
            ctx.stroke();

            ctx.strokeStyle = "#555";

            ctx.save();
            ctx.setLineDash([1.5, 1.5]);

            ctx.beginPath();
            ctx.moveTo(0, -lt);
            ctx.lineTo(lr, -lt);
            ctx.stroke();

            ctx.restore();

            ctx.rotate(a);

            ctx.fillStyle = "#BCC4C8";
            ctx.strokeStyle = "#888";

            ctx.arrow(x,-y , x, 0, 5, 12, 18);
            ctx.fill();
            ctx.stroke();

            ctx.restore();

            ctx.save();
            ctx.translate(-17,-lt/2 + 6);
            ctx.fillStyle = "rgba(248,248,248,0.9)";

            ctx.roundRect(-9,-17,21,26,5);
            ctx.fill();

            ctx.fillStyle = "#333";

            ctx.fillText("F", 0, 0);

            ctx.font = "500 "+ (12/s)  + "px IBM Plex Sans";
            ctx.fillText("t", 5,5);

            ctx.restore();



            ctx.translate(0,height*0.41/s);




            ctx.fillStyle = "#F8F8F8";

            ctx.globalAlpha = 0.8;
            ctx.fillRect(-width/s*0.22,-width/2*0.01,width/s*0.44,width/s);
            ctx.globalAlpha = 1.0;

            var d = Math.cos(a);
            ctx.fillStyle = "#E6BD53";

            ctx.fillRect(d < 0 ? (d)*width/s*0.2 :0,0,width/s*0.2*Math.abs(d),width/s*0.03);

            ctx.globalAlpha = 0.2;
            ctx.beginPath();
            ctx.rect(-width/s*0.2,0,width/s*0.4,width/s*0.03);
            ctx.globalAlpha = 1.0;

            ctx.lineWidth = 1/s;
            ctx.strokeStyle = "rgba(0,0,0,0.4)"
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(0,width/s*0.03);
            ctx.stroke();

            ctx.fillStyle = "#333";
            ctx.translate(0,width/s*0.03 + font_size*1.1/s);

            ctx.font = (font_size/s) + "px IBM Plex Sans";
            ctx.fillText("moment", 0,0);
        }

        function d_tangent_circle()
        {
            ctx.translate(width * 0.63, height * 0.44);

            var s = 0.87 * width * 1.2 /650;

            ctx.scale(s, s);
            ctx.lineWidth = 1.5/s;

            ctx.save();
            ctx.rotate(Math.PI);
            draw_spanner();

            ctx.restore();

            var a = Math.PI * 2 * progress + Math.PI;


            ctx.save();

            ctx.translate(-191.25,4.5);

            draw_nut();

            var r = Math.abs((0 + 191.25) * Math.cos(a));
            ctx.strokeEllipse(0,0,r,r);

            ctx.fillStyle = "#333";
            ctx.fillEllipse(0,0,1,1);

            ctx.rotate(a);

            ctx.lineWidth = 1/s;

            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(r,0);
            ctx.stroke();


            ctx.beginPath();
            ctx.moveTo(0,-4);
            ctx.lineTo(0,4);
            ctx.stroke();

            ctx.lineWidth = 2/s;
            ctx.beginPath();
            ctx.moveTo(r,-4);
            ctx.lineTo(r,4);
            ctx.stroke();

            ctx.translate(r/2, -12 * (Math.cos(a) > 0 ? 1 : -1));
            ctx.rotate(-a);

            var al =  Math.abs(Math.cos(a));

            var fs = (al > 0.2 ? 1.0 : al/0.2);
            ctx.fillStyle = "rgba(248,248,248,0.9)";
            // ctx.fillStyle = "red"
            ctx.roundRect(-9*fs,-17*fs,21*fs,26*fs,5*fs);
            ctx.fill();

            ctx.fillStyle = "#333";


            ctx.font = "500 "+ ((font_size/s) * fs)  + "px IBM Plex Sans";
            ctx.fillText("r", 0, 0);

            ctx.font = "500 "+ (((font_size*12/19)/s) * fs)  + "px IBM Plex Sans";
            ctx.fillText("t", 5*fs,5*fs);

            ctx.restore();

            ctx.save();
            ctx.translate(0,4.5);
            var x = 0;
            var y = 110;


            ctx.strokeStyle = "rgba(0,0,0,0.3)"


            ctx.rotate(a);

            ctx.beginPath();
            ctx.moveTo(x,-3000*s);
            ctx.lineTo(x,3000*s);
            ctx.stroke();


            ctx.fillStyle = "#E03232";
            ctx.strokeStyle = "#BE2A2A";
            ctx.lineJoin = "round";

            ctx.save();

            ctx.font ="500 "+  (font_size/s)  + "px IBM Plex Sans";

            ctx.translate(-20, -y/2 );
            ctx.rotate(-a);

            ctx.fillStyle = "rgba(248,248,248,0.9)";
            ctx.roundRect(-10,-14,20,25,5);
            ctx.fill();

            ctx.fillStyle = "#333";

            ctx.fillText("F", 0,6);

            ctx.restore();

            ctx.arrow(x,-y , x, 0, 5, 16, 20);
            ctx.fill();
            ctx.stroke();


            ctx.restore();



            ctx.translate(-width * 0.13/s,height*0.43/s);

            ctx.fillStyle = "#F8F8F8";

            ctx.globalAlpha = 0.8;
            ctx.fillRect(-width/s*0.22,-width/2*0.01,width/s*0.44,width/s);
            ctx.globalAlpha = 1.0;

            var d = Math.cos(a);
            ctx.fillStyle = "#E6BD53";

            ctx.fillRect(d < 0 ? (d)*width/s*0.2 :0,0,width/s*0.2*Math.abs(d),width/s*0.03);

            ctx.globalAlpha = 0.2;
            ctx.beginPath();
            ctx.rect(-width/s*0.2,0,width/s*0.4,width/s*0.03);
            ctx.globalAlpha = 1.0;

            ctx.lineWidth = 1/s;
            ctx.strokeStyle = "rgba(0,0,0,0.4)"
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(0,width/s*0.03);
            ctx.stroke();

            ctx.fillStyle = "#333";
            ctx.translate(0,width/s*0.03 + font_size*1.1/s);

            ctx.font = (font_size/s) + "px IBM Plex Sans";
            ctx.fillText("moment", 0,0);
        }


        function d_dp()
        {
            ctx.translate(width * 0.5, height * 0.5 - 15);

            var size = height * 0.68 - 15;

            var r = size * 0.3;
            var r2 = 2 * r;

            // var dp = 0.12 + progress * 0.26;
            var n = Math.round(10 + progress * 20);



            ctx.save();

            ctx.translate(-r * 2, 0);


            // ctx.lineWidth = 4;
            ctx.lineCap = "round";



            var w = t * 1.5;
            ctx.rotate (-w - Math.PI/2);

            draw_gear(r,n, fill0,undefined,undefined,true);
            draw_driver();

            ctx.restore();


            ctx.save();

            ctx.translate(r, 0);

            ctx.rotate (w*0.5 -  Math.PI/2 + Math.PI / (2*n) );

            draw_gear(r2,n * 2, fill1);

            ctx.restore();

            ctx.translate(0, height * 0.51);
            ctx.fillText("N = " + n.toString(),-r*2,-r);
            ctx.fillText("N = " + (n*2).toString(),r,0);
        }

        function d_slip() {
            ctx.translate(width * 0.5, height * 0.35);

            var size = height * 0.65;

            var r = size * 0.5;


            function draw(s) {

                ctx.save();
            ctx.scale(s, s);
            ctx.translate(-r, 0);


            ctx.lineJoin = "round";
            ctx.strokeStyle = stroke0;
            ctx.lineWidth = 1.5/s;
            ctx.fillStyle = fill0;


            ctx.save();

            ctx.translate(-0.5*(Math.sin(a*2) + 1.0)+0.2, 0);
            ctx.rotate(-a + Math.PI/2);

            ctx.fillStyle = fill0;
            ctx.strokeStyle = stroke0;
            ctx.beginPath();
            ctx.ellipse(0, 0, r - 2, r, 0, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            draw_notch(r-5);
            draw_shaft();
            draw_driver();

            ctx.restore();

            ctx.translate(r *2, 0);


            ctx.save();

            ctx.rotate(a2 - Math.PI/2);

            draw_disc(r,fill1);

            ctx.restore();
            ctx.restore();

            var w2 = omega_max * 0.5 * (0.3 + 0.7*0.5*(Math.sin(a*2) + 1));

            ctx.fillText(rpm_string(omega_max * 0.5),-r,r + 40);
            ctx.fillText(rpm_string(w2),r,r + 40);
        }


            ///

            draw (1);

            var zoom = 4;

            ctx.save();
            ctx.translate(0, size * 0.7);

            ctx.beginPath();
            ctx.ellipse(0, 0, r * 0.5, r * 0.5, 0, 0, Math.PI * 2);
            ctx.closePath();

            ctx.clip();

            draw (zoom);

            ctx.restore();


            draw_zoom(r * 0.5 / zoom,r * 0.5,size*0.7);
        }

        function d_gears() {
            ctx.translate(Math.round(width * 0.5), Math.round(height * 0.24));

            var size = height * 0.6;

            var r = size * 0.32;
            var rr = 0.4 * size;
            var zoom = 3;

            function draw(s) {

                ctx.save();
            ctx.scale(s, s);
            ctx.translate(-r, 0);

            ctx.lineJoin = "round";
            ctx.strokeStyle = stroke0;
            ctx.lineWidth = 1.5/s;

            ctx.save();
            var n = 22;

            ctx.rotate(-a + Math.PI/2);

            draw_gear(r,n, fill0,undefined,s == 1 ? 3 : 6);

            if (s == 1)
                draw_driver();


            ctx.fillStyle = "#333";


            ctx.restore();

            ctx.translate(r *2, 0);


            ctx.save();

            ctx.rotate(a - Math.PI/2 + Math.PI*(1/n));

            draw_gear(r,n, fill1,undefined,s == 1 ? 3 : 6);

            ctx.restore();

            ctx.restore();
            }

            draw (1);


            ctx.beginPath();
            ctx.ellipse(0, 0, rr / zoom, rr / zoom, 0, 0, Math.PI * 2);
            ctx.closePath();

            ctx.save();
            ctx.translate(0, Math.round(size * 0.8));

            var rrc = Math.ceil(rr);
            ctx.beginPath();
            ctx.rect(-rrc, -rrc, 2*rrc, 2*rrc);


            ctx.clip();

            draw (zoom);
            ctx.globalCompositeOperation = "destination-in";

            ctx.beginPath();
            ctx.ellipse(0, 0, rr, rr, 0, 0, Math.PI * 2);
            ctx.fill();
            // ctx.closePath();
            ctx.restore();

            draw_zoom(rr/zoom,rr,size*0.8);

        }

        function d_pitch() {
            ctx.translate(width * 0.5, height * 0.45);

            var size = height * 0.8;

            var r = size * 0.32;

            ctx.save();

            ctx.translate(-r*1.5, 0);

            ctx.lineJoin = "round";
            ctx.strokeStyle = stroke0;
            ctx.lineWidth = 1.5;

            ctx.save();
            var n = 16;
            var n2 = n*1.5;

            ctx.rotate(-a + Math.PI/2);

            draw_gear(r,n, fill0,undefined,4);
            draw_driver();


            ctx.restore();

            ctx.translate(r *2.5, 0);


            ctx.save();

            ctx.rotate(a/1.5 - Math.PI/2 + Math.PI*(1/n2));

            draw_gear(r*1.5,n2, fill1,undefined,3);

            var colors = ["#3E61C5","#E0C31F","#F74D4D","#39C085"];

            ctx.rotate(0.5*Math.PI/n2)
            ctx.lineWidth = 2.5;
            ctx.lineCap = "butt";

            for (var i = 0; i < n2/2; i++)
            {
                ctx.strokeStyle = colors[0];
                ctx.beginPath();
                ctx.arc(0,0,r*1.5,0,2*Math.PI/n2);
                ctx.stroke();

                ctx.rotate(2*Math.PI/n2)

                ctx.strokeStyle = colors[1];
                ctx.beginPath();
                ctx.arc(0,0,r*1.5,0,2*Math.PI/n2);
                ctx.stroke();

                ctx.rotate(2*Math.PI/n2)
            }


            ctx.restore();

            ctx.save();
            ctx.translate(-r *2.5, 0);

            ctx.rotate(-1.5*Math.PI/n)
            ctx.rotate(-a + Math.PI/2);

            ctx.lineWidth = 2.5;
            for (var i = 0; i < n/2; i++)
            {
                ctx.strokeStyle = colors[2];
                ctx.beginPath();
                ctx.arc(0,0,r,0,2*Math.PI/n);
                ctx.stroke();

                ctx.rotate(2*Math.PI/n)

                ctx.strokeStyle = colors[3];
                ctx.beginPath();
                ctx.arc(0,0,r,0,2*Math.PI/n);
                ctx.stroke();

                ctx.rotate(2*Math.PI/n)
            }
            ctx.restore();



            ctx.translate(-r *1.5, 0);

            var o = width < 500 ? 30 : 40
            ctx.fillText(rpm_string(omega_max * progress),-r,r + o);
            ctx.fillText(rpm_string(omega_max * progress/1.5),r*1.5,r*1.5 + o);


            ctx.translate (0, height * 0.4);

            var l = r *2* Math.PI/n;

            ctx.lineWidth = 3;
            for (var i = 0; i < 4; i++)
            {
                ctx.strokeStyle = colors[i];
                ctx.beginPath();
                ctx.moveTo(-l/2, 0);
                ctx.lineTo(l/2, 0);
                ctx.stroke();

                ctx.translate (0,10);
            }


        }

        function d_normal()
        {
            ctx.translate(width * 0.5, Math.round(height * 0.13));

            var size = height * 0.6;

            var r = size * 0.12;
            var rr = 0.55 * size;
            var zoom = 30;

            var a = progress * 0.235 - 0.21;
            var n = 20;

            function draw(s) {

                ctx.save();
            ctx.scale(s, s);
            ctx.translate(-r, 0);

            ctx.lineJoin = "round";
            ctx.strokeStyle = stroke0;
            ctx.lineWidth = 1.5/s;

            ctx.save();

            ctx.rotate(-a + Math.PI/2);

            draw_gear(r,n, fill0,undefined,s == 1 ? 4 : 12,undefined,true,s!=1);
            draw_driver();

            ctx.fillStyle = "#333";

            ctx.restore();

            ctx.translate(r *2.5, 0);

            ctx.save();

            ctx.rotate(a/1.5 - Math.PI/2 + Math.PI*(1/(n*1.5)));

            draw_gear(r*1.5,n*1.5, fill1,undefined,s == 1 ? 4 : 12,undefined,true,s!=1);

            ctx.restore();

            ctx.strokeStyle = "rgba(0,0,0,0.3)";

            ctx.beginPath();
            ctx.arc(0,0,r*1.5,s == 1 ? 0 : Math.PI*0.5, s == 1 ? Math.PI*2 : Math.PI*2.5);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(-2.5*r,0,r,s == 1 ? 0 : Math.PI*0.5, s == 1 ? Math.PI*2 : Math.PI*2.5);
            ctx.stroke();

            ctx.restore();
            }

            draw (1);


            ctx.beginPath();
            ctx.ellipse(0, 0, rr / zoom, rr / zoom, 0, 0, Math.PI * 2);
            ctx.closePath();

            ctx.save();
            ctx.translate(0, Math.round(size * 0.81));

            ctx.beginPath();
            ctx.ellipse(0, 0, rr, rr, 0, 0, Math.PI * 2);
            ctx.closePath();

            var rrc = Math.ceil(rr);
            ctx.beginPath();
            ctx.rect(-rrc, -rrc, 2*rrc, 2*rrc);


            ctx.clip();

            draw (zoom);


            draw (zoom);
            ctx.globalCompositeOperation = "destination-in";
            ctx.beginPath();
            ctx.ellipse(0, 0, rr, rr, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            draw_zoom(rr/zoom,rr,size*0.81);

            ctx.translate(0,size*0.81);


            var cs = Math.cos(action_angle*Math.PI/180);
            var sn = Math.sin(action_angle*Math.PI/180);

            var rb = r * Math.cos(action_angle*Math.PI/180) * zoom;

            a += Math.PI / (2*n);
            var x = +a*rb*sn;
            var y = -a*rb*cs;

            ctx.lineWidth = 2;

            ctx.strokeStyle = "#333";

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x + cs * 90, y + sn * 90);
            ctx.lineTo(x - cs * 90, y - sn * 90);
            ctx.stroke();

            ctx.setLineDash([2,2]);

            ctx.beginPath();
            ctx.moveTo(sn * rr, -cs * rr);
            ctx.lineTo(-sn * rr, cs * rr);
            ctx.stroke();

            ctx.setLineDash([]);

            ctx.fillStyle = "#111";

            ctx.beginPath();
            ctx.ellipse(0,0, 4, 4, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "#222";

            ctx.arrow(x,y,x + sn * 55, y - cs * 55,4,12,20);
            ctx.fill();

            ctx.fillStyle = "#EB2D2D";

            ctx.beginPath();
            ctx.ellipse(x,y, 4, 4, 0, 0, Math.PI * 2);
            ctx.fill();



            ctx.restore();

        }


        function d_force_angle()
        {
            ctx.translate(width * 0.5, height * 0.5);

            var line = 4;
            var size = height;
            var r = size * 0.46;

            ctx.translate(-r/3, 0);

            var al = - progress * Math.PI / 3;

            var r2 =r * Math.cos(al);

            ctx.save();

            ctx.translate(-r/1.5, 0);

            ctx.lineCap = "round";

            ctx.rotate (-a + Math.PI/2);

            ctx.globalAlpha = 0.2;
            draw_notch(r/1.5 - 6);
                     ctx.beginPath();
            ctx.ellipse(0, 0, r/1.5, r/1.5, 0, 0, Math.PI * 2);
            ctx.stroke();
            draw_shaft();
            draw_driver();
            ctx.globalAlpha = 1.0;

            ctx.restore();


            ctx.save();

            ctx.translate(r, 0);


            ctx.rotate (a/1.5 + Math.PI*(-0.5));

            ctx.globalAlpha = 0.2;
            ctx.beginPath();
            ctx.ellipse(0, 0, r, r, 0, 0, Math.PI * 2);
            ctx.stroke();
            draw_notch(r - 6);
            draw_shaft();
            ctx.globalAlpha = 1.0;

            ctx.restore();

            ctx.lineWidth = 3;
            ctx.strokeStyle = fill0;

            ctx.beginPath();
            ctx.ellipse(-r/1.5, 0, r2/1.5, r2/1.5, 0, 0, Math.PI * 2);
            ctx.stroke();

            ctx.strokeStyle = fill1;

            ctx.beginPath();
            ctx.ellipse(r, 0, r2, r2, 0, 0, Math.PI * 2);
            ctx.stroke();

            ctx.lineWidth = 1.5;

            ctx.strokeStyle = stroke0;

            var l = height * 0.4;

            ctx.beginPath();
            ctx.moveTo(0,l);
            ctx.lineTo(0, -l);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(l * Math.sin(al), l * Math.cos(al));
            ctx.lineTo(-l * Math.sin(al), -l * Math.cos(al));
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(0,0,l - 4,-Math.PI/2,-Math.PI/2-al, false);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(0,0,l - 4,+Math.PI/2,+Math.PI/2-al, false);
            ctx.stroke();

            var arl = l * 0.4;

            ctx.arrow(arl * Math.sin(al), arl * Math.cos(al),
                     -arl * Math.sin(al), -arl * Math.cos(al),
                     4,12,16);
            ctx.fill();

            ctx.fillStyle = "#333";

            ctx.save();

            ctx.rotate(-al/2);
            ctx.fillText((-al * 180/Math.PI).toFixed(1) + "°",4, -(l + 5));

            ctx.restore();
            ctx.fillStyle = "#111";

            ctx.beginPath();
            ctx.ellipse(0,0, 4, 4, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        function d_force_offset()
        {
            ctx.translate(width * 0.5, height * 0.5);

            var size = height;
            var r = width * 0.24;

            var al = Math.PI / 4;
            var s1 = (progress - 0.5)*(Math.sqrt(2) - 1)*2  + 1.0;
            var s2 = 2 - s1;
            var r1 =r * s1 * Math.cos(al);
            var r2 =r * s2 * Math.cos(al);


            ctx.save();

            ctx.translate(-r, 0);

            ctx.lineCap = "round";

            ctx.rotate (-a + Math.PI/2);

            ctx.globalAlpha = 0.2;
            draw_notch(r1 - 6);

            ctx.beginPath();
            ctx.ellipse(0, 0, r, r, 0, 0, Math.PI * 2);
            ctx.stroke();
            draw_shaft();
            draw_driver();
            ctx.globalAlpha = 1.0;

            ctx.restore();


            ctx.save();

            ctx.translate(r, 0);


            ctx.rotate (a2 + Math.PI*(-0.5));

            ctx.globalAlpha = 0.2;
            ctx.beginPath();
            ctx.ellipse(0, 0, r, r, 0, 0, Math.PI * 2);
            ctx.stroke();
            draw_notch(r2 - 6);
            draw_shaft();
            ctx.globalAlpha = 1.0;

            ctx.restore();

            ctx.lineWidth = 3;
            ctx.strokeStyle = fill0;

            ctx.beginPath();
            ctx.ellipse(-r, 0, r1,r1, 0, 0, Math.PI * 2);
            ctx.stroke();

            ctx.strokeStyle = fill1;

            ctx.beginPath();
            ctx.ellipse(r, 0, r2, r2, 0, 0, Math.PI * 2);
            ctx.stroke();

            // ctx.lineWidth = 1.5;

            ctx.save();
            ctx.translate(r*(s1 - 1.0), 0);

            var l = height * 0.6;

            ctx.lineWidth = 1.5;

            ctx.strokeStyle = stroke0;

            ctx.beginPath();
            ctx.moveTo(l * Math.sin(-al), l * Math.cos(-al));
            ctx.lineTo(-l * Math.sin(-al), -l * Math.cos(-al));
            ctx.stroke();

            var arl = l/3;

            ctx.arrow(arl * Math.sin(-al), arl * Math.cos(-al),
                     -arl * Math.sin(-al), -arl * Math.cos(-al),
                     4,12,16);
            ctx.fill();
            ctx.restore();

            ctx.fillStyle = "#111";

            ctx.beginPath();
            ctx.ellipse(0,0, 4, 4, 0, 0, Math.PI * 2);
            ctx.fill();

        }

        function d_involute()
        {
            ctx.translate(width * 0.5, height * 0.5);

            var line = 4;
            var size = height;
            var r = size * 0.42;

            ctx.translate(-r/3, 0);


            var al = Math.PI / 6;
            var a = (progress - 0.5)*2*al;

            var r2 =r * Math.cos(al);

            var pitch_point_to_base = Math.sin(al)*r/1.5;
            var base_angle = pitch_point_to_base*1.5/r2  -al;

            ctx.save();

            ctx.translate(-r/1.5, 0);

            ctx.lineCap = "round";

            ctx.rotate (-a + Math.PI/2);

            ctx.save();
            ctx.rotate(-Math.PI / 6);
            var l = r*0.75;
            ctx.fillStyle = "#fff";
            ctx.beginPath();
            ctx.moveTo(-l,-l);
            ctx.lineTo(l,-l);
            ctx.lineTo(l,l);
            ctx.lineTo(-l*0.8,l);
            ctx.lineTo(-l,l*0.8);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = "#bbb";
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(-l*0.8,l);
            ctx.lineTo(-l*0.8,l*0.8);
            ctx.lineTo(-l,l*0.8);
            ctx.stroke();

            ctx.restore();

            ctx.globalAlpha = 0.5;

            ctx.fillStyle = fill0;

            ctx.beginPath();
            ctx.ellipse(0, 0, r2/1.5 - line/2, r2/1.5 - line/2, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.globalAlpha = 0.2;


            ctx.rotate(Math.PI/2);
            draw_notch(r/1.5 - 20);

            ctx.setLineDash([3,4]);
            ctx.rotate(-Math.PI/2);
            ctx.beginPath();
            ctx.ellipse(0, 0, r/1.5, r/1.5, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            draw_shaft();
            draw_driver();
            ctx.globalAlpha = 1.0;


            var p = involute_points(r2/1.5,progress * al * 2 + base_angle, 50, false);

            ctx.lineWidth = 3;
            ctx.lineCap = "round";
            ctx.strokeStyle = "#ff5555";

            ctx.rotate(-base_angle);

            ctx.beginPath();
            ctx.moveTo(-p[0][0], -p[0][1]);
            for (var i = 1; i < p.length; i++)
                ctx.lineTo(-p[i][0], -p[i][1]);
            ctx.stroke();


            ctx.restore();


            ctx.save();

            ctx.translate(r, 0);


            ctx.rotate (a/1.5 + Math.PI*(-0.5));


            ctx.globalAlpha = 0.5;

            ctx.fillStyle = fill1;

            ctx.beginPath();
            ctx.ellipse(0, 0, r2 - line/2, r2 - line/2, 0, 0, Math.PI * 2);
            ctx.fill();


            ctx.globalAlpha = 0.2;

            ctx.setLineDash([3,4]);

            ctx.beginPath();
            ctx.ellipse(0, 0, r, r, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.rotate(-Math.PI/2);
            draw_notch(r - 30);
            ctx.rotate(Math.PI/2);
            draw_shaft();
            ctx.globalAlpha = 1.0;

            ctx.restore();

            ctx.lineWidth = 3;
            ctx.strokeStyle = fill0;


            ctx.beginPath();
            ctx.ellipse(-r/1.5, 0, r2/1.5 - line/2, r2/1.5 - line/2, 0, 0, Math.PI * 2);
            ctx.stroke();

            ctx.strokeStyle = fill1;

            ctx.beginPath();
            ctx.ellipse(r, 0, r2 - line/2, r2 - line/2, 0, 0, Math.PI * 2);
            ctx.stroke();

            ctx.lineWidth = 1.5;


            var s = (progress)*2*al

            ctx.lineWidth = line;
            ctx.beginPath();
            ctx.arc(r,0,r2, -Math.PI*0.5 + s/1.5, Math.PI + al, true);
            ctx.arc(-r/1.5,0,r2/1.5, al, Math.PI*1.5 - s, false);

            ctx.lineWidth = line + 2;
            ctx.strokeStyle = "#9F6939";
            ctx.stroke();

            ctx.strokeStyle = "#E0AB5F";

            ctx.lineWidth = line;
            ctx.stroke();

            ctx.save();

            ctx.strokeStyle = "#C27B3D";

            ctx.setLineDash([10, 10]);
            ctx.stroke();
            ctx.restore()

            ctx.fillStyle = "#444";

            ctx.save();

            ctx.translate(-r/1.5, 0);
            ctx.rotate (Math.PI*0.5 - s - 0.06);
            ctx.translate(-r2/1.5, 0);
            ctx.fillRect(-4,-1,8,2);

            ctx.restore();


            ctx.save();

            ctx.translate(r, 0);
            ctx.rotate (Math.PI*0.5 + s/1.5 - 0.035);
            ctx.translate(-r2, 0);
            ctx.fillRect(-4,-1,8,2);

            ctx.restore();


            ctx.translate(-r/1.5,0);
            ctx.rotate (-a + Math.PI/2 -base_angle);


            ctx.fillStyle = "#ff0000";
            ctx.strokeStyle = "#dd0000";
            ctx.lineWidth = 1;
            ctx.translate(-p[p.length - 1][0], -p[p.length - 1][1]);

            ctx.rotate (+a - Math.PI/2 +base_angle + al);
            ctx.fillRect(-4,-1,8,2);
            ctx.strokeRect(-4,-1,8,2);

            ctx.restore();

        }


        function d_involute_string()
        {
            ctx.translate(width * 0.5, height * 0.3);

            var line = 4;
            var r = height * 0.2;

            ctx.lineWidth = 2;

            ctx.fillStyle = fill0;
            ctx.rotate(Math.PI*0.5);
            ctx.beginPath();
            ctx.ellipse(0, 0, r - line/2 - 1, r - line/2 - 1, 0, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#555";
            ctx.fillEllipse(0,0,2,2);

            draw_notch(r - line/2 - 6);

            var a = progress * Math.PI *1.25;

            var p = involute_points(r,a, 50, false);

            ctx.lineWidth = 4;
            ctx.lineCap = "round";
            ctx.strokeStyle = "#ff5555";

            ctx.beginPath();
            ctx.moveTo(-p[0][0], -p[0][1]);
            for (var i = 1; i < p.length; i++)
                ctx.lineTo(-p[i][0], -p[i][1]);
            ctx.stroke();

            ctx.lineWidth = line;
            ctx.lineCap = "butt";


            ctx.beginPath();
            ctx.moveTo(-p[p.length - 1][0], -p[p.length - 1][1]);
            ctx.arc(0, 0,r,-Math.PI/2 + a,Math.PI*1.4);
            ctx.lineWidth = line + 2;
            ctx.strokeStyle = "#9F6939";
            ctx.stroke();

            ctx.lineWidth = line;
            ctx.strokeStyle = "#E0AB5F";

            ctx.stroke();

            ctx.save();

            ctx.strokeStyle = "#C27B3D";

            ctx.setLineDash([10, 10]);
            ctx.stroke();
            ctx.restore()

            ctx.save();

            ctx.fillStyle = "#444";

            ctx.translate(0, 0);
            ctx.rotate (Math.PI*0.5- 0.38);
            ctx.translate(-r, 0);
            ctx.fillRect(-4,-1,8,2);

            ctx.restore();

            ctx.beginPath();
            ctx.ellipse(-p[p.length - 1][0], -p[p.length - 1][1], 2.5, 2.5, 0, 0, Math.PI * 2);

            ctx.fillStyle = "#ff0000";
            ctx.strokeStyle = "#dd0000";
            ctx.lineWidth = 1;
            ctx.fill();
            ctx.stroke();
        }

        function d_involute_petals()
        {
            ctx.translate(width * 0.32, height * 0.5);

            var o = window.innerWidth < 540 ? 10 : 0;

            ctx.lineWidth = 2;
            var r = (width - 180 - o) * 0.40;

            var invp = 10;
            var n = 16;

            var angle = action_angle * Math.PI/180;
            var d = 2*r;
            var P = n/d;
            var a = 1/P;
            var b = 1.25/P;
            var p = Math.PI/P;
            var rb = r * Math.cos(angle);

            var r_add = r + a;
            var r_ded = r - b;

            var inv_p = Math.max(0, Math.min (1, ((progress - 1/4)*2)));
            var lin_p = Math.min(1, (progress)*4);

            var inv_limit = inv_p * Math.sqrt(r_add*r_add - rb*rb)/rb;


            function prog(x, center) {
                x = 1.3 - Math.abs((x-center)*10);
                return 0.08 + 0.92* Math.min(1, Math.max(0, x));
            }

            var tx = r + 40 - o;



            ctx.textAlign = "left";
            ctx.globalAlpha = prog(progress, 0.0);
            ctx.strokeEllipse(0,0,r_ded,r_ded);
            ctx.fillText("dedendum circle", tx, -60);

            ctx.globalAlpha = prog(progress, 1/4);
            ctx.strokeEllipse(0,0,rb,rb);

            ctx.fillText("base circle", tx, -20);

            ctx.globalAlpha = prog(progress, 2/4);
            ctx.strokeEllipse(0,0,r,r);

            ctx.fillText("pitch circle", tx, 20);

            ctx.globalAlpha = prog(progress, 3/4);
            ctx.strokeEllipse(0,0,r_add,r_add);

            ctx.fillText("addendum circle", tx, 60);


            ctx.lineWidth = window.innerWidth < 500 ? 2 : 3;

            ctx.globalAlpha = progress < 0.75 ? 1 : (1.0 - progress)*4;


            ctx.lineCap = "round";


            var pitch_point_to_base = Math.sin(angle)*r;
            var base_angle = pitch_point_to_base/rb + Math.PI*0.5/n -angle;
            // var base_angle = Math.PI*0.5/n;

            var pr = involute_points(rb,inv_limit, invp, false, r_ded);
            var pl = involute_points(rb,inv_limit, invp, true, r_ded);

            var straight_style = "#1F6AEA";
            var inv_style = "#EB2D2D";

            for (var i = 0; i < n; i++)
            {
                ctx.rotate(-base_angle);

                ctx.strokeStyle = straight_style;
                ctx.beginPath();
                ctx.lineTo(0, r_ded);
                ctx.lineTo(0, r_ded + lin_p * (rb-r_ded));
                ctx.stroke();

                ctx.strokeStyle = inv_style;
                ctx.beginPath();

                //  ctx.moveTo(pr[0],pr[1]);

                for (var j = 0; j < pr.length; j++)
                {
                    ctx.lineTo(pr[j][0], pr[j][1]);
                }
                ctx.stroke();

                ctx.rotate(2 * base_angle);

                ctx.strokeStyle = straight_style;

                ctx.beginPath();
                ctx.lineTo(0, r_ded);
                ctx.lineTo(0, r_ded + lin_p * (rb-r_ded));
                ctx.stroke();

                ctx.strokeStyle = inv_style;


                ctx.beginPath();

                // ctx.moveTo(pl[0],pl[1]);

                for (var j = 0; j < pl.length; j++)
                {
                    ctx.lineTo(pl[pl.length - j - 1][0], pl[pl.length - j - 1][1]);
                }
                ctx.stroke();


                ctx.rotate(-base_angle);

                ctx.rotate(2 * Math.PI/n);
            }

            ctx.lineWidth = 2;


            if (progress > 0.75)
            {
                ctx.globalAlpha = 4*(progress - 0.75);
                draw_gear(r,n,fill0,undefined,undefined,undefined,true);
            }
        }

        function d_radius_shape()
        {
            ctx.save();
            ctx.translate(width * 0.5, height * 0.11);

            var t = progress * progress;
            var n = (10 + t * 300);

            var r = n * width * 0.043;

            var invp = Math.ceil(8 + t * 80);
            ctx.translate(0, r);
            ctx.rotate(Math.PI);

            // var n = 16;


             draw_gear(r,n,fill0,1,invp,undefined,true);

             ctx.strokeStyle = "#39C085";
             ctx.lineWidth = 2;

             ctx.beginPath();
             ctx.arc(0,0,r,-Math.PI * 1.5, Math.PI *2.5);
             ctx.stroke();

             var angle = action_angle * Math.PI/180;

             var rb = r * Math.cos(angle);

            //  ["#3E61C5","#E0C31F","#F74D4D","#39C085"];
            ctx.strokeStyle = "#F74D4D";
             ctx.beginPath();
             ctx.arc(0,0,rb,-Math.PI * 1.5, Math.PI *2.5);
             ctx.stroke();

             ctx.restore();

             ctx.save();

             ctx.globalCompositeOperation = "destination-out";

             var w = 20;

             function add_stops(grd)
             {
                grd.addColorStop(0, "#000");
                grd.addColorStop(0.25, "rgba(0,0,0,0.666)");
                grd.addColorStop(0.55, "rgba(0,0,0,0.333)");
                grd.addColorStop(1, "rgba(0,0,0,0)");
                return grd;
             }

             var grd = add_stops(ctx.createLinearGradient(0, 0, w, 0));

            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, w, height);

            grd = add_stops(ctx.createLinearGradient(width, 0, width - w, 0));

           ctx.fillStyle = grd;
           ctx.fillRect(width - w, 0, w, height);

            var grd = add_stops(ctx.createLinearGradient(0, height, 0, height - w));

           ctx.fillStyle = grd;
           ctx.fillRect(0, height - w, width, w);

            ctx.restore();
        }


        function d_curve()
        {
            ctx.translate(width * 0.5, height * 0.5);

            var size = width * 0.5;

            var ps = [[-0.85, 0.2],
            [-0.3, -0.8],
            [0.4, 0.4],
            [0.9, -0.3]];

            function bezier(t)
            {
                var nt = 1-t;
                var p = vec_scale (ps[0], nt*nt*nt * size);
                p = vec_add (p, vec_scale (ps[1], 3*nt*nt*t * size));
                p = vec_add (p, vec_scale (ps[2], 3*nt*t*t * size));
                p = vec_add (p, vec_scale (ps[3], t*t*t * size));

                return p;
            }

            var n = 50;
            ctx.strokeStyle="#bbb";
            ctx.lineWidth = 3;
            ctx.beginPath();
            for (var i = 0; i < n; i++)
            {
                var t = (i / (n - 1))*1.1- 0.05;
                var p = bezier(t);

                ctx.lineTo(p[0], p[1]);
            }
            ctx.stroke();


            var t = progress * 0.7 + 0.15;
            var p = bezier(t);



            var p0 = bezier(t - 0.002 - 0.14 * (1 - progress2));
            var p1 = bezier(t + 0.002 + 0.14 * (1 - progress2));


            var l = size *0.75;
            var dl = vec_len(vec_sub(p1, p0));
            var dir = vec_norm(vec_sub(p1, p0));

            var l0 = vec_sub(p0, vec_scale(dir, 0.5*(l - dl)));
            var l1 = vec_add(p1, vec_scale(dir, 0.5*(l - dl)));

            ctx.strokeStyle = "#333";
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(l0[0], l0[1]);
            ctx.lineTo(l1[0], l1[1]);
            ctx.stroke();


            ctx.fillStyle = "#3178E0";
            ctx.beginPath();
            ctx.ellipse(p0[0], p0[1], 4, 4 , 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.ellipse(p1[0], p1[1], 4, 4 , 0, 0, Math.PI * 2);
            ctx.fill();


            ctx.fillStyle = "#FF4343";


            ctx.beginPath();
            ctx.ellipse(p[0], p[1], 4, 4 , 0, 0, Math.PI * 2);
            ctx.fill();
        }

        function d_curve_normal()
        {
            ctx.translate(width * 0.5, height * 0.42);

            var size = width * 0.42;

            var ps0 = [[-0.88, 0.25],
            [-0.3, -0.6],
            [0.3, 0.4],
            [0.85, 0.5]];

            function bezier(t, ps)
            {
                var nt = 1-t;
                var p = vec_scale (ps[0], nt*nt*nt * size);
                p = vec_add (p, vec_scale (ps[1], 3*nt*nt*t * size));
                p = vec_add (p, vec_scale (ps[2], 3*nt*t*t * size));
                p = vec_add (p, vec_scale (ps[3], t*t*t * size));

                return p;
            }

            function norm(t, ps)
            {
                var nt = 1.0 - t;

                var scalars = [-3.0*nt*nt, 3.0*(1.0 - 4.0*t + 3.0*t*t), 3.0*(2.0*t - 3.0*t*t), 3.0*t*t];

                var p = vec_scale (ps[0], scalars[0]);
                p = vec_add (p, vec_scale (ps[1], scalars[1]));
                p = vec_add (p, vec_scale (ps[2], scalars[2]));
                p = vec_add (p, vec_scale (ps[3], scalars[3]));

                return vec_norm(p);
            }

            var crosst = 0.33;

            var ps1 = [vec_scale(bezier(crosst,ps0), 1/size),
                       vec_add(vec_scale(bezier(crosst,ps0), 1/size), vec_scale(norm(crosst, ps0), 0.5)),
            [0.5, -0.4],
            [1.6, -0.2]];


            for (var c = 0; c < 2; c++)
            {

                var ps = c == 0 ? ps0 : ps1;

            var n = 50;
            ctx.strokeStyle="#bbb";
            ctx.lineWidth = 3;
            ctx.beginPath();
            for (var i = 0; i <= n; i++)
            {
                var t = (i / n)*1.2- 0.08;
                if (c == 1)
                    t -= crosst;

                var p = bezier(t, ps);

                ctx.lineTo(p[0], p[1]);
            }
            ctx.stroke();
        }

        for (var c = 0; c < 2; c++)
            {
                var ps = c == 0 ? ps0 : ps1;


            var t = progress;
            if (c == 1)
                t -= crosst;
            var p = bezier(t, ps);


            var l = size *0.5 + 2;
            var dir = norm(t, ps);

            var l0 = vec_sub(p, vec_scale(dir, 0.5*l));
            var l1 = vec_add(p, vec_scale(dir, 0.5*l));

            ctx.strokeStyle = "#333";
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(l0[0], l0[1]);
            ctx.lineTo(l1[0], l1[1]);
            ctx.stroke();

            var tmp = dir[0];
            dir[0] = -dir[1];
            dir[1] = tmp;

            ctx.strokeStyle = "#333";

            ctx.setLineDash([2, 2]);

            l0 = vec_sub(p, vec_scale(dir, 0.5*l));
            l1 = vec_add(p, vec_scale(dir, 0.5*l));

            ctx.beginPath();
            ctx.moveTo(l0[0], l0[1]);
            ctx.lineTo(l1[0], l1[1]);
            ctx.stroke();

            ctx.setLineDash([]);

            ctx.strokeStyle = stroke0;

        }

        ctx.fillStyle = "#FF4343";


        for (var c = 0; c < 2; c++)
        {
            var ps = c == 0 ? ps0 : ps1;


        var t = progress;
        if (c == 1)
            t -= crosst;
        var p = bezier(t, ps);
            ctx.beginPath();
            ctx.ellipse(p[0], p[1], 4, 4 , 0, 0, Math.PI * 2);
            ctx.fill();
            }
        }

        function d_three() {
            ctx.translate(width * 0.5, height * 0.32);

            var size = height * 0.55;

            var n1 = 16;
            var n2 = 32;
            var n3 = 24;

            var r1 = size * 0.25;
            var r2 = r1 * 2;
            var r3 = r1 * 1.5;

                    ctx.save();

            ctx.rotate(a/2 + Math.PI/2);

            draw_gear(r2,n2, fill2);


            ctx.restore();

            ctx.save();
            ctx.rotate(-Math.PI*(0.25));

            ctx.translate(-r2 - r1, 0);

            ctx.rotate(-a + Math.PI*(0.5 + 1/n1 + 0.25/2));

            draw_gear(r1,n1, fill0);
            draw_driver();

            ctx.restore();

            ctx.save();
            ctx.rotate(Math.PI*(0.25));

            ctx.translate(+r2 + r3, 0);

            ctx.rotate(-a/1.5 + Math.PI*(0.5 + 1/n3));

            draw_gear(r3,n3, fill1);

            ctx.restore();

            var o = width < 550 ? 30 : 40
            ctx.fillText(rpm_string(omega_max * progress),(-r1 - r2)*0.7071067812,(r2 + r1)*0.7071067812 + r1 + o);

            ctx.fillText(rpm_string(omega_max * progress/2),0,r2 + o);

            ctx.fillText(rpm_string(omega_max * progress/1.5),(r2 + r3)*0.7071067812,(r2 + r3)*0.7071067812 + r3 + o);

        }

        function d_four() {
            ctx.translate(width * 0.5, height * 0.43);

            var size = width * 0.4;

            var n1 = 14;
            var n2 = 28;
            var n3 = 14;
            var n4 = 28;

            var r1 = size * 0.26;
            var r2 = r1 * n2/n1;
            var r3 = r1 * n3/n1;
            var r4 = r1 * n4/n1;

            ctx.translate((r1+r1+r2-r3-r4-r4)/2, 0);

            ctx.save();

            ctx.rotate(a*n1/n2 + Math.PI/2);

            draw_gear(r2,n2, fill2);
            draw_gear(r3,n3, fill3);

            ctx.fillStyle = "#999";

            var arm = r3*0.4;
            ctx.fillEllipse(arm,0,3,3);
            ctx.strokeEllipse(arm,0,3,3);
            ctx.fillEllipse(-arm,0,3,3);
            ctx.strokeEllipse(-arm,0,3,3);

            ctx.beginPath();
            ctx.moveTo(arm -2,-2);
            ctx.lineTo(arm +2,2);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(-arm -2,-2);
            ctx.lineTo(-arm +2,2);
            ctx.stroke();

            ctx.restore();


            ctx.save();

            ctx.translate(-r2 - r1, 0);

            ctx.rotate(-a + Math.PI*(0.5 + 1/n1));

            draw_gear(r1,n1, fill0);
            draw_driver();

            ctx.restore();

            ctx.save();

            ctx.translate(+r3 + r4, 0);

            ctx.rotate(-a*(n1/n2)*(n3/n4) + Math.PI*(0.5 + 1/n4));

            // ctx.globalAlpha = 0.2;
            draw_gear(r4,n4, fill1);

            ctx.restore();


            var o = width < 550 ? 30 : 40

            ctx.fillText(rpm_string(omega_max * progress*n1/n2),0,r2 + o);
            ctx.fillText(rpm_string(omega_max * progress),-r1 - r2,r1 + o);
            ctx.fillText(rpm_string(omega_max * progress*(n1/n2)*(n3/n4)),r3 + r4,r4 + o);



        }


        function d_jam() {
            ctx.translate(width * 0.5, height * 0.5 - height*0.21);

            var size = width * 0.85;

            var n = 21;
            var r = size * 0.26;

            ctx.save();

            ctx.translate(-r,0);
            var add = selection == 1 ? 0.007*Math.sin(t*10) : 0;
            var rot = selection == 1 ? (-(a -  (a % (Math.PI*(2/n))))) : -a;
            ctx.rotate(rot + add + Math.PI/2);

            draw_gear(r,n, fill0);
            draw_driver();

            ctx.restore();


            ctx.save();

            ctx.translate(r, 0);

            ctx.rotate(-rot - add - Math.PI*(0.5 - 1/n));

            draw_gear(r,n, fill1);


            ctx.restore();


            ctx.save();

            if (selection == 1)
            {
                ctx.translate(0, r*Math.sqrt(3));
                ctx.rotate(rot + Math.PI*(0.5/n) + 0.003*Math.cos(t*8));
                draw_gear(r,n, fill2);
            }
            else if (selection == 0)
            {
            ctx.translate(-r, 0);
            ctx.rotate(Math.PI/3 + Math.PI*(1/n));
            ctx.translate(2*r, 0);
            ctx.rotate(-rot - Math.PI/3 - Math.PI*(-10/n) - Math.PI/2);
            draw_gear(r,n, fill2);
            }
            else if (selection == 2)
            {
            ctx.translate(r, 0);
            ctx.rotate(-Math.PI/3 - Math.PI*(1/n) + Math.PI);
            ctx.translate(2*r, 0);
            ctx.rotate(rot - Math.PI/3 - Math.PI*(-5.0/n) - Math.PI/2);
            draw_gear(r,n, fill2);
            }

            ctx.restore();

        }





        function involute_points(r, angle, n, left, r_ded)
        {
            if (r_ded === undefined)
                r_ded = 0;

            var points=[];
            var prev = undefined;
            for (var i = 0; i <= n; i++) {
                var a = angle * i/n;

                var l = Math.abs(a * r);

                var p0 = [-r * Math.sin(a), r * Math.cos(a)];
                var p1 = vec_norm(p0);
                p1 = [p1[1], -p1[0]];
                p1 = vec_scale(p1, l);

                p1 = vec_add(p0, p1);

                if (left)
                    p1[0] *= -1;


                if (vec_len(p1) > r_ded)
                {
                    if (i != 0  && points.length == 0)
                    {
                        var prevdir = vec_norm(prev);
                        var p1_d = vec_scale(prevdir, vec_dot(prevdir, p1));

                        var r0 = vec_len(prev);
                        var r1 = vec_len(p1_d);
                        var t = (r_ded - r0) / (r1 - r0);

                        points.push(vec_add(prev, vec_scale(vec_norm(vec_sub(p1, prev)), t * (r1 - r0))))
                    }
                    points.push(p1);
                }

                prev = p1;
            }

            return points;
        }



        function draw_zoom(r0, r1, y1)
        {
            ctx.save();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "rgba(50,50,50,0.6)";

            ctx.beginPath();
            ctx.ellipse(0, 0, r0, r0, 0, 0, 2 * Math.PI);
            ctx.stroke();


                        ctx.setLineDash([2, 2]);

            var d = y1;
            var cos = (r1 - r0) / d;
            var sin = Math.sqrt(1 - cos * cos);



            ctx.beginPath();
            ctx.moveTo(- sin * r1, y1 - r1 * cos);
            ctx.lineTo(- sin * r0,  - r0 * cos);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(sin * r1, y1 - r1 * cos);
            ctx.lineTo(sin * r0, - r0 * cos);
            ctx.stroke();


            ctx.setLineDash([]);
            ctx.lineWidth = 1.5;

            ctx.beginPath();
            ctx.ellipse(0,y1, r1, r1, 0, 0, 2 * Math.PI);
            ctx.stroke();

            ctx.restore();
        }

        function draw_gear(r, n, fill, n_stop, invp, flip_notch,skip_notch, high)
        {
            ctx.save();

            ctx.lineJoin = "round";
            ctx.strokeStyle = stroke0;
            ctx.fillStyle = fill;


            if (n_stop === undefined)
                n_stop = n;

            if (invp === undefined)
                invp = 6;

            var angle = action_angle * Math.PI/180;
            var d = 2*r;
            var P = n/d;
            var a = 1/P;
            var b = 1.25/P;
            var p = Math.PI/P;
            var rb = r * Math.cos(angle);

            var r_add = r + a;
            var r_ded = r - b;

            var inv_limit = Math.sqrt(r_add*r_add - rb*rb)/rb;


            var pitch_point_to_base = Math.sin(angle)*r;
            var base_angle = pitch_point_to_base/rb + Math.PI*0.5/n -angle;
            // var base_angle = Math.PI*0.5/n;

            var inv_limit_angle =base_angle - (inv_limit - Math.acos(rb/r_add));

            var ded_limit_angle= r_ded < rb ? (Math.PI  / n - base_angle) : 0;


            ctx.beginPath();
            ctx.ellipse(0,0,r_ded,r_ded,0,0, Math.PI * 2);
            ctx.fill();

            if (r < 650 && !high)
            {
                ctx.stroke();
            }
            else
            {
                if (r >= 650)
                {
                ctx.save();
                ctx.globalCompositeOperation = "destination-out";
                ctx.lineWidth = 6;
                ctx.strokeStyle = "white";
                ctx.beginPath();
                ctx.arc(0,0,r_ded +3,-Math.PI * 1.5, Math.PI *2.5);
                ctx.stroke();
                ctx.restore();
            }

             ctx.beginPath();
             ctx.arc(0,0,r_ded,-Math.PI * 1.5, Math.PI *2.5);
             ctx.stroke();
            }


            var pr = involute_points(rb,inv_limit, invp, false, r_ded);
            var pl = involute_points(rb,inv_limit, invp, true, r_ded);

            ctx.save();

            var ang = 0;

            for (var i = 0; i < n_stop; i++)
            {
                ctx.beginPath();

                var a0 = -ang + -Math.PI/n +ded_limit_angle + Math.PI/2;

                ctx.moveTo ((r_ded - 2)*Math.cos(a0),(r_ded - 2)*Math.sin(a0));

                var cba = Math.cos(ang + base_angle);
                var sba = Math.sin(ang + base_angle);

                for (var j = 0; j < pr.length; j++)
                {
                    ctx.lineTo(cba*pr[j][0] + sba *pr[j][1],
                               -sba*pr[j][0] + cba *pr[j][1]);
                }


                ctx.arc(0,0,r_add,-ang -inv_limit_angle + Math.PI/2,-ang + inv_limit_angle + Math.PI/2);

                var cba = Math.cos(ang - base_angle);
                var sba = Math.sin(ang - base_angle);

                for (var j = 0; j < pl.length; j++)
                {
                    ctx.lineTo(cba*pl[pl.length - j - 1][0] + sba*pl[pl.length - j - 1][1],
                              -sba*pl[pl.length - j - 1][0] + cba*pl[pl.length - j - 1][1],
                        );
                }

                var a0 = Math.PI/n - ded_limit_angle + Math.PI/2 - ang;

                ctx.lineTo ((r_ded - 2)*Math.cos(a0),(r_ded - 2)*Math.sin(a0));

                ctx.fill();

                ang += 2*Math.PI/n;

            }

            ctx.restore();

            ctx.save();
            ang = 0;
            ctx.lineCap = "round";

            for (var i = 0; i < n_stop; i++)
            {
                ctx.beginPath();

                var a0 = -ang + -Math.PI/n +ded_limit_angle + Math.PI/2;

                ctx.moveTo ((r_ded)*Math.cos(a0),(r_ded)*Math.sin(a0));

                var cba = Math.cos(ang + base_angle);
                var sba = Math.sin(ang + base_angle);

                for (var j = 0; j < pr.length; j++)
                {
                    ctx.lineTo(cba*pr[j][0] + sba *pr[j][1],
                               -sba*pr[j][0] + cba *pr[j][1]);
                }

                // ctx.stroke();

                // ctx.beginPath();
                ctx.arc(0,0,r_add,-ang -inv_limit_angle + Math.PI/2,-ang + inv_limit_angle + Math.PI/2);
                // ctx.stroke();

                // ctx.beginPath();
                var cba = Math.cos(ang - base_angle);
                var sba = Math.sin(ang - base_angle);

                for (var j = 0; j < pl.length; j++)
                {
                    ctx.lineTo(cba*pl[pl.length - j - 1][0] + sba*pl[pl.length - j - 1][1],
                              -sba*pl[pl.length - j - 1][0] + cba*pl[pl.length - j - 1][1],
                        );
                }

                var a0 = Math.PI/n - ded_limit_angle + Math.PI/2 - ang;

                ctx.lineTo ((r_ded )*Math.cos(a0),(r_ded)*Math.sin(a0));

                ctx.stroke();

                ang += 2*Math.PI/n;

            }

            ctx.restore();

            draw_shaft();

            if (fill == fill1)
                ctx.rotate(-Math.PI/n);

            if (flip_notch)
                ctx.rotate(Math.PI);

            if (!skip_notch)
                draw_notch(r_ded - 5)

            ctx.restore();
        }

        function draw_shaft()
        {
            ctx.save();

            ctx.fillStyle = "#888";
            ctx.lineWidth = 1.5;

            var r= 10;
            var d = 5;

            if (window.innerWidth < 500)
            {
                r = 7;
                d = 3;
            }

            ctx.beginPath();
            ctx.ellipse(0, 0, r, r, 0, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#555";

            ctx.fillRect(-1,-r,2,d);
            ctx.fillRect(-1,r-d,2,d);

            ctx.beginPath();
            ctx.ellipse(0, 0, 2, 2, 0, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();

            ctx.restore();
        }

        function draw_notch(r)
        {
            ctx.save();

            var d = 3;
            ctx.lineWidth = 4;

            if (window.innerWidth < 500)
            {
                d = 2;
                ctx.lineWidth = 3;
            }
            ctx.strokeStyle = stroke0;
            ctx.fillStyle = stroke0;
            ctx.lineJoin = "round";

            ctx.beginPath();
            ctx.moveTo(0,-r);
            ctx.lineTo(-d,-r+2*d);
            ctx.lineTo(+d,-r+2*d);
            ctx.closePath();
            ctx.stroke();
            // ctx.fill();

            ctx.restore ();
        }

        function draw_disc(r, fill)
        {
            ctx.save();

            ctx.lineJoin = "round";
            ctx.strokeStyle = stroke0;
            ctx.fillStyle = fill;

            ctx.beginPath();
            ctx.ellipse(0, 0, r, r, 0, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.restore();

            draw_notch (r - 5);
            draw_shaft();

        }

        function draw_driver()
        {
            var r = 18;
            var w = 4;

            if (window.innerWidth < 500)
            {
                r = 14;
                w = 3;
            }


            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.beginPath();
            ctx.arc(0,0,r + w/2,Math.PI*2,Math.PI * 0.5,true);
            ctx.lineTo(0,r + 6);
            ctx.lineTo(8,r);
            ctx.lineTo(0,r - 6);
            ctx.arc(0,0,r - w/2,Math.PI*0.5,Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }

        function draw_fan(a, s, dot)
        {
            ctx.save();
            ctx.fillStyle = "#EB6260";
            ctx.strokeStyle = stroke0;

            ctx.beginPath();
            ctx.moveTo(-8,0);
            ctx.lineTo(-19,153);
            ctx.lineTo(19,153);
            ctx.lineTo(8,0);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(-70,180);
            ctx.lineTo(70,180);
            ctx.arcTo(70,150,50,150,15);
            ctx.arcTo(-70,150,-70,180,15);

            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#eee";
            ctx.beginPath();
            ctx.ellipse(0, 165, 8, 8, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.strokeStyle = "rgba(0,0,0,0.4)";

            ctx.beginPath();
            ctx.arc(0, 165,11,Math.PI, 0);
            ctx.stroke();

            ctx.save();
            ctx.translate(0,165);
            ctx.rotate(s * Math.PI);
            ctx.fillStyle = "#444";

            ctx.fillEllipse(-5,0,1.5,1.5);

            ctx.restore();

            ctx.beginPath();


            ctx.rotate(a);


            ctx.fillStyle = "#ddd";
            ctx.rotate(0.15);

            for (var i = 0; i < 4; i++)
            {
                ctx.translate(0,-100);
                ctx.beginPath();
                ctx.moveTo(14.4826665,92.2955468);
                ctx.bezierCurveTo(25.8666009,90.2616161,36.891852,83.6544378,55.3383375,69.597992);
                ctx.bezierCurveTo(56.4841302,68.7248841,57.1243454,68.2391854,59.5912106,66.3697856);
                ctx.bezierCurveTo(59.9113394,66.1271844,59.9113394,66.1271844,60.2313917,65.884592);
                ctx.bezierCurveTo(76.6490934,53.4394051,83.3558789,47.6352838,86.452182,42.1448381);
                ctx.bezierCurveTo(90.5717199,34.8399652,92.7133787,26.0033411,92.5323982,17.6800334);
                ctx.bezierCurveTo(92.3490076,9.24588488,86.6375243,-1.65048642,80.2707242,-4.83558592);
                ctx.bezierCurveTo(73.4836291,-8.23094508,68.887207,-5.05231024,51.6905797,15.9770102);
                ctx.bezierCurveTo(37.373362,33.4851735,28.5386277,46.9625947,15.4381837,69.0767946);
                ctx.bezierCurveTo(11.3951683,75.9016052,8.66688112,81.6764628,7.81945261,85.9497025);
                ctx.bezierCurveTo(6.78324839,91.1748619,8.62829991,93.3415275,14.4826665,92.2955468);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.translate(0,+100);

                ctx.rotate(Math.PI/2);
            }
            ctx.fillStyle = "#333";

            ctx.rotate(-0.15 + Math.PI/4);
            if (dot)
                ctx.fillEllipse(134,0,4,4);
            ctx.rotate(-Math.PI/4);


            ctx.fillStyle = "#EB6260";

            ctx.beginPath();
            ctx.ellipse(0, 0, 20, 20, 0, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#555";

            ctx.beginPath();
            ctx.ellipse(0, 0, 2, 2, 0, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();

            ctx.restore();
        }

    }

    this.on_resize = function () {
        width = wrapper.clientWidth;
        height = wrapper.clientHeight;

        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        canvas.width = width * scale;
        canvas.height = height * scale;

        self.repaint();
    }


    this.on_resize();

    window.addEventListener("resize", this.on_resize, true);
}


function gears_curve_touch()
{

    curve_normal.set_progress(0.33);
    curve_normal_slider.set_value(0.33);
}

function gears_dedendum()
{
    petals.set_progress(0.0);
    petals_slider.set_value(0.0);
}

function gears_base()
{
    petals.set_progress(0.25);
    petals_slider.set_value(0.25);
}

function gears_pitch()
{
    petals.set_progress(0.5);
    petals_slider.set_value(0.5);
}



function gears_addendum()
{
    petals.set_progress(0.75);
    petals_slider.set_value(0.75);
}




function global_animate(animate) {
    for (var i = 0; i < drawers.length; i++){
        drawers[i].set_paused(!animate);
    }

    if (animate)
    {
        document.getElementById("global_animate_on").classList.remove("hidden");
        document.getElementById("global_animate_off").classList.add("hidden");
    }
    else
    {
        document.getElementById("global_animate_on").classList.add("hidden");
        document.getElementById("global_animate_off").classList.remove("hidden");
    }
}

module.exports ={
    Drawer,
    scale
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

const {
    Drawer,
    scale,
} = __webpack_require__(52)

const injectorFrame = document.querySelector('#root')

const injectAnimation = (nexFrame) => {
    class Frame {
        constructor(type) {
            this.element = document.createElement(type)
            injectorFrame.appendChild(this.element)
        }
        set addClassName(className) {
            this.element.classList.add(className)
        }
        set id(id) {
            this.element.id =  id
        }
    }
    nexFrame((config=undefined, type='div') => {
        const frame = new Frame(type)
        if (typeof config === 'function') {
            config(frame)
        }
        return frame.element
    })
}

const getTitle = (title) => {
    const element = document.createElement('h1')
    element.innerText = title
    return element
}

const first_group = (getElement) => {
    getElement(f => {
        f.element.appendChild(getTitle('Group 1'))
        f.id = 'title'
    })
    new Drawer(scale, getElement(f => f.id = 'gears_demo'), "demo") // 1

    const gears = new Drawer(scale, getElement(f => f.id = 'gears_gears'), "gears") // 16
    new Slider(getElement(f => f.id = 'gears_gears_slider_container'), x => {
        gears.set_progress(x)
    }, undefined)

    const dp = new Drawer(scale, getElement(f => f.id = 'gears_dp'), "dp") // 18
    new Slider(getElement(f => f.id = 'gears_dp_slider_container'), x => {
        dp.set_progress(x)
    }, undefined, 0)

    const three = new Drawer(scale, getElement(f => f.id = 'gears_three'), "three") // 28
    new Slider(getElement(f => f.id = 'gears_three_slider_container'), x => {
        three.set_progress(x)
    }, undefined)

    const four = new Drawer(scale, getElement(f => f.id = 'gears_four'), "four")  // 29
    new Slider(getElement(f => f.id = 'gears_four_slider_container'), x => {
        four.set_progress(x)
    }, undefined)
}

const second_group = (getElement) => {
    getElement(f => {
        f.element.appendChild(getTitle('Group 2'))
        f.id = 'title'
    })
    const ang = new Drawer(scale, getElement(f => f.id = 'gears_angular_velocity'), "angular_velocity") // 2
    new Slider(getElement(f => f.id = 'gears_angular_velocity_slider_container'), x => {
        ang.set_progress(x)
    })

    new Drawer(scale, getElement(f => f.id = 'gears_deg'), "deg") // 3

    const rpm = new Drawer(scale, getElement(f => f.id = 'gears_rpm'), "rpm") // 4
    new Slider(getElement(f => f.id = 'gears_rpm_slider_container'), x => {
        rpm.set_progress(x)
    })

    const arc = new Drawer(scale, getElement(f => f.id = 'gears_arc_distance'), "arc_distance") // 5
    new Slider(getElement(f => f.id = 'gears_arc_distance_slider_container'), x => {
        arc.set_progress(x)
    }, undefined, 0)

    const vel = new Drawer(scale, getElement(f => f.id = 'gears_linear_velocity'), "linear_velocity") // 6
    new Slider(getElement(f => f.id = 'gears_linear_velocity_slider_container'), x => {
        vel.set_progress(x)
    })
}

const third_group = (getElement) => {
    getElement(f => {
        f.element.appendChild(getTitle('Group 3'))
        f.id = 'title'
    })
    const spanner = new Drawer(scale, getElement(f => f.id = 'gears_spanner'), "spanner") // 10
    new Slider(getElement(f => f.id = 'gears_spanner_slider_container'), x => {
        spanner.set_progress(x)
    }, undefined, 0)

    const tangent = new Drawer(scale, getElement(f => f.id = 'gears_tangent'), "tangent"); // 11
    new Slider(getElement(f => f.id = 'gears_tangent_slider_container'), x => {
        tangent.set_progress(x)
    }, undefined, 0.65)

    const tangent_circle = new Drawer(scale, getElement(f => f.id = 'gears_tangent_circle'), "tangent_circle"); // 12
    new Slider(getElement(f => f.id = 'gears_tangent_circle_slider_container'), x => {
        tangent_circle.set_progress(x)
    }, undefined, 0.6)
}

const fourth_group = (getElement) => {
    getElement(f => {
        f.element.appendChild(getTitle('Group 4'))
        f.id = 'title'
    })
    new Drawer(scale, getElement(f => f.id = 'gears_contact'), "contact"); // 7

    const contact_small = new Drawer(scale, getElement(f => f.id = 'gears_contact_small'), "contact_small") // 8
    new Slider(getElement(f => f.id = 'gears_contact_small_slider_container'), x =>  {
        contact_small.set_progress(x);
    }, undefined, 0);

    const resize = new Drawer(scale, getElement(f => f.id = 'gears_resize'), "resize"); // 9
    new Slider(getElement(f => f.id = 'gears_resize_slider_container'), x =>  {
        resize.set_progress(x);
    }, undefined, 0);

    const torque_rope0 = new Drawer(scale, getElement(f => f.id = 'gears_torque_rope0'), "torque_rope0"); // 13
    new Slider(getElement(f => f.id = 'gears_torque_rope0_slider_container'), x =>  {
        torque_rope0.set_progress(x);
    }, undefined, 0.5);

    const torque_rope = new Drawer(scale, getElement(f => f.id = 'gears_torque_rope'), "torque_rope"); // 14
    new Slider(getElement(f => f.id = 'gears_torque_rope_slider_container'), x =>  {
        torque_rope.set_progress(x);
    }, undefined, 0.5);

    const slip = new Drawer(scale, getElement(f => f.id = 'gears_slip'), "slip") // 15



    const pitch = new Drawer(scale, getElement(f => f.id = 'gears_pitch'), "pitch"); // 17
    new Slider(getElement(f => f.id = 'gears_pitch_slider_container'), x =>  {
        pitch.set_progress(x);
    }, undefined, 0.25);



    const curve = new Drawer(scale, getElement(f => f.id = 'gears_curve'), "curve"); // 19
    new Slider(getElement(f => f.id = 'gears_curve0_slider_container'), x =>  {
        curve.set_progress(x);
    }, "gears_bead0_", 0);
    new Slider(getElement(f => f.id = 'gears_curve1_slider_container'), x =>  {
        curve.set_progress2(x);
    }, "gears_bead1_", 0);

    const curve_normal = new Drawer(scale, getElement(f => f.id = 'gears_curve_normal'), "curve_normal"); // 20
    new Slider(getElement(f => f.id = 'gears_curve_normal_slider_container'), x =>  {
        curve_normal.set_progress(x);
    }, "gears_bead0_", 0);


    const normal = new Drawer(scale, getElement(f => f.id = 'gears_curve_normal'), "normal"); // 21
    new Slider(getElement(f => f.id = 'gears_curve_normal_slider_container'), x =>  {
        normal.set_progress(x);
    }, undefined, 0);

    const force_angle = new Drawer(scale, getElement(f => f.id = 'gears_force_angle'), "force_angle"); // 22
    new Slider(getElement(f => f.id = 'gears_force_angle_slider_container'), x =>  {
        force_angle.set_progress(x);
    }, undefined, 0);

    const force_offset = new Drawer(scale, getElement(f => f.id = 'gears_force_offset'), "force_offset");  // 23
    new Slider(getElement(f => f.id = 'gears_force_offset_slider_container'), x =>  {
        force_offset.set_progress(x);
    }, undefined);

    const involute = new Drawer(scale, getElement(f => f.id = 'gears_involute'), "involute"); // 24
    new Slider(getElement(f => f.id = ''), x =>  {
        involute.set_progress(x);
    }, undefined, 0);

    const involute_string = new Drawer(scale, getElement(f => f.id = ''), "involute_string"); // 25
    new Slider(getElement(f => f.id = 'gears_involute_slider_container'), x =>  {
        involute_string.set_progress(x);
    }, undefined, 0);

    const petals = new Drawer(scale, getElement(f => f.id = 'gears_involute_petals'), "involute_petals");  // 26
    new Slider(getElement(f => f.id = 'gears_involute_petals_slider_container'), x =>  {
        petals.set_progress(x);
    }, undefined, 0);

    const shape = new Drawer(scale, getElement(f => f.id = 'gears_radius_shape'), "radius_shape"); // 27
    new Slider(getElement(f => f.id = 'gears_radius_shape_slider_container'), x =>  {
        shape.set_progress(x);
    }, undefined, 0);

    const jam = new Drawer(scale, getElement(f => f.id = 'gears_jam'), "jam"); // 30

    const jam_seg = new SegmentedControl(getElement(f => f.id = 'gears_jam_segmented_container'), x =>  {
            jam.set_selection(x);
        },
        ["left", "jam", "right"]
    );

    jam_seg.set_selection(1);
    jam.set_selection(1);
}

const getGroup = () => {
    const query = window.location.search
    const urlParams = new URLSearchParams(query)
    return  parseInt(urlParams.get('group'))
}

const loadAnimations = () => {
    injectAnimation(getElement => {
        switch (getGroup()) {
            case 1:
                first_group(getElement)
                break
            case 2:
                second_group(getElement)
                break
            case 3:
                third_group(getElement)
                break
            case 4:
                fourth_group(getElement)
                break
            default:
                first_group(getElement)
                second_group(getElement)
                third_group(getElement)
                fourth_group(getElement)
                break
        }
    })

}

document.addEventListener("DOMContentLoaded", loadAnimations)


})();

/******/ })()
;