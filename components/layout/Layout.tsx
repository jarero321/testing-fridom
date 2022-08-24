import { FC, useState } from "react";
import { validContinueForm, validField } from "../../utils";
import Button from "../button";
import Input from "../input";
import Comment from './../comment/Comment';

interface Comments {
        author: string,
        date: string,
        message:string
}
const Layout: FC = () => {
    const [body, setBody] = useState({
        author: '',
        message: ''
    })
    const [bodyValid, setBodyValid] = useState({
        authorValid:true,
        messageValid:true
    })
    const [disabled, setDisabled] = useState(true);
    const { author, message } = body;
    const { authorValid, messageValid } = bodyValid;
    const [comments, setComments] = useState<Comments[]>([]);
    const handleValid = () => {
        const bodyValidTmp = {...bodyValid};
        bodyValidTmp.authorValid = validField(author);
        bodyValidTmp.messageValid = validField(message);
        setBodyValid(bodyValidTmp);
        if(validContinueForm(bodyValidTmp)){
            setDisabled(false);
        } 
    }
    const resetForm = () => {
        setDisabled(true);
        setBody({
            author:'',
            message:''
        })
    }
    const handleComment = () => {
        const bodyComment = { author: body.author, message: body.message, date:String(new Date())}
        resetForm();
        const commentsTmp = [...comments];
        commentsTmp.push(bodyComment);
        setComments(commentsTmp);
    }
    return (<div className="w-full h-full flex flex-col xl:px-[250px] items-center xl:py-[50px] bg-white">
        <div className="w-full py-[40px] px-[20px] xl:py-[100px] lg:px-[100px] 2xl:px-[400px] borde rounded-2xl flex justify-center gap-[30px] ">
            <div className=" w-[50px] h-[45px] bg-[#008F8C] rounded-full mt-[20px] ">
            </div>
            <div className=" w-full flex flex-col gap-[20px]" > 
                <Input onBlur={()  => handleValid() } handleChange={(value) => { setBody({...body, author: value}); handleValid() } } type="text" required textLabel="Como te llamas?" value={author} requiredValid={authorValid}  />
                <Input onBlur={()  => handleValid() } handleChange={(value) => { setBody({...body, message: value}); handleValid() } } type="textarea" required textLabel="En que estas pensando?" value={message} requiredValid={messageValid} />
                <div className="w-full flex items-end justify-end" >
                    <Button className="w-[150px]" disabled={disabled} text="Publicar" handleClick={() => handleComment() } />
                </div>
             </div>
        </div>
        <div className="w-full" >
            {
                comments.length > 0 ? <div>
                    {
                        comments.map((item) => (
                            <div className="w-full px-[20px] xl:px-[400px] " key={item.date}>
                                <Comment author={item.author} date={item.date} message={item.message} />
                            </div>
                        ))
                    }
                </div> : <p className=" w-full text-center" >Aun no ahi comentarios se el primero</p>
            }
        </div>
    </div>)
}
export default Layout; 