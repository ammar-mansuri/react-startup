import react from "react";


const Link=({href,className,children})=>{

    const changeUrl=(e)=>{
        if(e.metaKey || e.ctrlKey){
            return;
        }

        e.preventDefault();
        window.history.pushState({},"",href)

        const navEvent=new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return(
            <a onClick={(e) => changeUrl(e)} className={className} href={href}>{children}</a>
        )
}
export default Link;
