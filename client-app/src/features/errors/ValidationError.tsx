import { Message, MessageList } from "semantic-ui-react"

interface Props {
    errors: string[]
}

export default function ValidationError({errors} : Props){

    return(
        <Message error>
            {errors && (
                <MessageList>
                    {errors.map((err: string, i) =>(
                        <Message.List key={i}>{err}</Message.List>
                    ))}
                </MessageList>
            )}
        </Message>
    )

}