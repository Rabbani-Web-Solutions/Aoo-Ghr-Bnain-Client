import {    mouse ,
            myArr ,
            setMyArr , 
            elements , 
            setElements ,
            getElementAtPosition , 
            setAction , 
            selectedElement,
            setSelectedElement, 
            tool } 
        
            from "../sketch";


import {createElement} from "./createElement";

export const handleMouseDown = (event) => {
    // const { clientX , clientY} = event;
    if (tool === "selection") {
        const element = getElementAtPosition(mouse.x, mouse.y, elements);
        if(element)
        {
             const posX = mouse.x || (event.touches[0].clientX - 8 )
            const posY = mouse.y || (event.touches[0].clientY - 385)
            const offsetX = posX - element.x1 ;
            const offsetY = posY - element.y1 ;

            setSelectedElement({...element,offsetX,offsetY});
            setAction("moving");
        }

    }
    else if(tool === "eraser")
    {
        const element = getElementAtPosition(mouse.x, mouse.y, elements);
        if(element)
        {
            const offsetX = mouse.x - element.x1 ;
            const offsetY = mouse.y - element.y1 ;
            setSelectedElement({...element,offsetX,offsetY});
            setAction("eraser");
        }
    }

    else if(tool === "text")
    {
        const element = getElementAtPosition(mouse.x, mouse.y, elements);
        if(element)
        {
            const offsetX = mouse.x - element.x1 ;
            const offsetY = mouse.y - element.y1 ;
            setSelectedElement({...element,offsetX,offsetY});
            setAction("text");
        }
    }
    else if(tool === "resize")
    {
        const element = getElementAtPosition(mouse.x, mouse.y, elements);
        if(element)
        {
            const offsetX = mouse.x - element.x1 ;
            const offsetY = mouse.y - element.y1 ;
            setSelectedElement({...element,offsetX,offsetY});
            setAction("resize");
        }
    }

    else if(tool === "sizes")
    {
        const element = getElementAtPosition(mouse.x, mouse.y, elements);
        if(element)
        {
            const offsetX = mouse.x - element.x1 ;
            const offsetY = mouse.y - element.y1 ;
            setSelectedElement({...element,offsetX,offsetY});

            setAction("sizes")
        }
    }

    else {
       setAction("drawing");
        // const {clientX, clientY} = event;
        const id = elements.length;

        console.log(event.target);

        if(event.type === "mousedown")
        {
        const clientX = mouse.x; 
        const clientY = mouse.y; 

        console.log(clientX, clientY);

        const { offsetLeft, offsetTop } = event.target;
        const canvasX = clientX - offsetLeft;
        const canvasY = clientY - offsetTop;

        const element =  createElement(id, clientX , clientY, clientX, clientY, tool);

        setElements(prevState => [...prevState, element]);
        }
        else{
        let clientX = event.touches[0].clientX; 
        let clientY = event.touches[0].clientY; 

            clientX = clientX - 8 ;
            clientY = clientY - 385 ;

        console.log(clientX, clientY)

        const { offsetLeft, offsetTop } = event.target;
        const canvasX = clientX - offsetLeft;
        const canvasY = clientY - offsetTop;

        const element =  createElement(id, clientX , clientY, clientX, clientY, tool);

        setElements(prevState => [...prevState, element]);
        }


    }
};
