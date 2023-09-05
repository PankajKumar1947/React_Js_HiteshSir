function customRender(reactElement,container){
    //first argumnet: kisko inject karu and second argument: kaha par inject karu
 /*
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);//first arg:-name of attribute and second arg:- value of attribute  are passed in attribute function.
    domElement.setAttribute('target',reactElement.props.target);

    container.appendChild(domElement);
    */

   //modularzing the code: use loop for setting attribute
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for(const prop in reactElement.props){
        if(prop==='children')//this line may be ignored.
            continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

//creating own library
const reactElement={
    type:'a',//type determin the type of tag used
    props:{//props determine properties return object
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer=document.querySelector("#root");

customRender(reactElement,mainContainer)//first argumnet: kisko inject karu and second argument: kaha par inject karu