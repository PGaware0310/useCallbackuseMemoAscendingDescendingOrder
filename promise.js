const posts=[
    {title:'Post One',body:'This is post one'},
    {title:'Post Two',body:'This is post two'}
];
 
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000); 

}
function createPost(post){
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            posts.push(post);
        const error=true;
        if(!error){
            resolve();
        }else{
            reject('Error:Something went wrong');
        }
            },2000);
    });
    }

    const user={
        userName:'John',
        lastActivityTime:'25 of May'
    }
function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    user.lastActivityTime=new Date().getTime();
        resolve(user.lastActivityTime);
    
},1000);
    })
}
// createPost({title:'Post Three',body:'This is post three'}).then(getPosts).catch(err=>console.log(err));
// Promise.all
// const promise1=Promise.resolve('Hello World');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>
// setTimeout(resolve,2000,'GoodBye')
// );
// Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));
let userUpdateAPost=
    Promise.all([createPost,updateLastUserActivityTime])
    userUpdateAPost.then(([createpostres,updateActivityTimeres])=>{
   
    console.log(updateActivityTimeres)
}).catch(err=>console.log(err))

