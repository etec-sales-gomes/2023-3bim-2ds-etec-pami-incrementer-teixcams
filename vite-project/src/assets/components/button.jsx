export default function Button(props){
    return
        <>
            <button onClick={props.mensagem}>
                {props.texto}
            </button>
        </>
    }
