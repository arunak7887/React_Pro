const element =(<div>
    <h1>Hello!</h1>
    <h2>Good see you</h2>
</div>);
export default function JsxIf(){
    const age=18;
    if(age>=18){
        return <h2>you can vote</h2>
    }
    else{
        return <h2>you can not vote</h2>
    }
}