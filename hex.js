        
    const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    const btn= document.getElementById("btn");
    const color=document.querySelector(".color")
    
    btn.addEventListener("click",function()
    {
        let hexcolor ="#"
        for(i=0;i<6;i++)
        {
            hexcolor += hex[getRandomnumber()];//invoking the function
        }
        color.textContent = hexcolor;
        document.body.style.background = hexcolor;
    });
    function getRandomnumber()
    {
        return Math.floor(math.random () * hex.length);
    }
    