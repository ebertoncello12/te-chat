import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
  
    return (<div style={{ height: '100vh' }}>
        <PrettyChatWindow
        projectId='5d635ec1-0768-424f-991e-2727638048c2'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%'}}
        />
    </div>)
}   

export default ChatsPage