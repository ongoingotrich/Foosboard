let show = 0;

function on()
{
    var Box = document.getElementById('onoff');
    if (Box.checked) {
        show = 1;
        
    } 

    if(!Box.checked){
        show = show-1;
        
    }

    localStorage.setItem("toggel", show);
}

function color()
{
    var tc = document.getElementById('color');
    if (tc.checked) {
        
        textcolor = "rgba(0, 0, 0, 1)"
    } 

    if(!tc.checked){
        textcolor = "rgba(255, 255, 255, 1)";
        
        
    }

    localStorage.setItem("tc", textcolor);
}
function passvalues(){
    
    var team = document.getElementById("text").value;
    localStorage.setItem("T",team);
}


// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'
    default: 'rgba(255, 17, 0, 1)',

    swatches: [
        'rgba(255, 17, 0, 1)',
        'rgba(0, 81, 255, 1)',
        'rgba(111, 0, 255, 1)',
        'rgba(255, 186, 0, 1)',
        'rgba(70, 87, 176, 1)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: false,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
           
        }
    }
});

pickr.on('change', (color, source, instance) => {
    
    const rgbaColor = color.toRGBA().toString();
    console.log(rgbaColor)
    localStorage.setItem("C1",rgbaColor);
    
    

    
   
})