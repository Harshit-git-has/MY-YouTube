import React from 'react'

const commentsData = [
    {
        name:"Harshit katiyar",
        text:"Trust me! this show is very dumb 🤮 ",
        replies: [],
    },
    {
        name:"Harshit katiyar",
        text:"Trust me! this show is very dumb 🤮 ",
        replies: [],
    },
    {
        name:"Harshit katiyar",
        text:"Trust me! this show is very dumb 🤮 ",
        replies: [],
    },
    {
        name:"Harshit katiyar",
        text:"Trust me! this show is very dumb 🤮 ",
        replies: [],
    },
    {
        name:"Harshit katiyar",
        text:"Trust me! this show is very dumb 🤮 ",
        replies: [
            {
                name:"Harshit katiyar",
                text:"Trust me! this show is very dumb 🤮 ",
                replies: [],
            },
            {
                name:"Harshit katiyar",
                text:"Trust me! this show is very dumb 🤮 ",
                replies: [
                    {
                        name:"Harshit katiyar",
                        text:"Trust me! this show is very dumb 🤮 ",
                        replies: [
                            {
                                name:"Harshit katiyar",
                                text:"Trust me! this show is very dumb 🤮 ",
                                replies: [
                                    {
                                        name:"Harshit katiyar",
                                        text:"Trust me! this show is very dumb 🤮 ",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

        ],
    },

    {
        name:"Harshit katiyar",
        text:"Trust me! this show is very dumb 🤮 ",
        replies: [],
    },
    {
        name:"Harshit katiyar",
        text:"Trust me! this show is very dumb 🤮 ",
        replies: [],
    },
    {
        name:"Harshit katiyar",
        text:"Trust me! this show is very dumb 🤮 ",
        replies: [],
    },
   

];

const Comment = ({ data }) => {
    const { name, text, replies } = data;
   return(
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img
           className='w-12 h-12' 
           alt='user'
           src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
        /> 
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div> 
    </div>
   );
};

const CommentsList = ({comments}) => {
   return comments.map((comment, index) =>(
    <div key ={ index }>
     <Comment  data ={comment}/>
       <div className='p-5 border border-l-black ml-5'>
         <CommentsList comments = {comment.replies}/>
     </div>
   </div>
));
};
  


const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold text-2xl'>Comments: </h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer;