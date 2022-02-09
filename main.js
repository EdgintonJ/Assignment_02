// Jordan Edginton
// CS-385-02 Sp '22
// Assignment 2

function init(){
    const canvas = document.getElementById("webgl-canvas");
    const gl = canvas.getContext("webgl2");
    if (gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }
    gl.clearColor(0, 0, 0xff, 1);
    let cone = new Cone(gl, 20);
    render(gl, cone);
}

function render(gl, obj){
    gl.clear(gl.COLOR_BUFFER_BIT);
    obj.render();
}

window.onload = init;