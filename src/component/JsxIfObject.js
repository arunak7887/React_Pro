export default function JsxIfObject(){
    const user={
        firstName:"Arun",
        lastName:"Kinwad"
    };
    function formatName(user){
        return user.firstName+' '+user.lastName;
    }
    function getGreeting(user){
        if(user){
            return <h2>Hello {formatName(user)}</h2>
        }
        return <h2>Hello Stranger</h2>
    }
    return <h1>Hello {getGreeting(user)}</h1>
}