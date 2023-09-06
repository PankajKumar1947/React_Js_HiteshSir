import React from "react";

function Card(props){
    
    console.log(props.userName);
    console.log(props.btnText);

    return(
        <div class="relative h-[400px] w-[300px] rounded-md mt-4">
        <img
            src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="AirMax Pro"
            class="z-0 h-full w-full rounded-md object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
            <h1 class="text-lg font-semibold text-white">{props.userName}</h1>
            <p class="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
            </p>
            <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold">
            {props.btnText || "Visit Me"} →
            {/* || "Visit Me"  --> it is written to set default value if someone not pass the props.btn.Text then it will take Visit Me value  or you can set default value to btn.Text instead of doing it. as set up in line*/}
            </button>
        </div>
        </div>
    )
}

export default Card;