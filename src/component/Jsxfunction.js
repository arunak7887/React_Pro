export default function Jsxfunction(){
    function formatName(user){
        return user.firstName+' '+user.lastName;
    }
    const user={
        firstName:'Arun',
        lastName:'kinwad'
    };
    return <h>Hello {formatName(user)}</h>;
}