const posts=[
    {title:'Post One',body:'This is post one'},
    {title:'Post Two',body:'This is post two'},
    {title:'Post Three',body:'This is post three'},
    {title:'Post Four',body:'This is post four'}
];
 
// function getPosts(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach((post)=>{
//             output+=`<li>${post.title}</li>`;
//         });
//         document.body.innerHTML=output;
//     },1000); 

// }
//Function to create post
function createPost(post){
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            posts.push(post);
            resolve();
            },2000);
    });
    }

   
    let lastActivityTime=null;
    //Function to Update user's last activity Time
    
function updateLastUserActivityTime(){
    return new Promise((resolve)=>{
   setTimeout(()=>{
    lastActivityTime=new Date().toUTCString();
        resolve();
    
},1000);
    });
}
// createPost({title:'Post Three',body:'This is post three'}).then(getPosts).catch(err=>console.log(err));
// Promise.all
// const promise1=Promise.resolve('Hello World');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>
// setTimeout(resolve,2000,'GoodBye')
// );

//Function to Delete the last activity
function deleteLastPost(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            if(posts.length>0){
            const delpost=posts.pop();
            resolve(delpost);
            }else{
                reject("ERROR:NO POST FOUND TO DELETE")
            }
        },1000);
    });
}
// Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));
Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
.then(()=>{
     console.log('Posts are:',posts)
     console.log('Last user activity Time:',lastActivityTime)
     return deleteLastPost()
})
.then(()=>{
    console.log('After deletion of posts:',posts)
})
.catch((err)=>console.log(err))


// function userUpdateAPost(post){
//     createPost(post).then(()=>updateLastUserActivityTime())
//     .then(()=>{
//         console.log('Posts:',posts);
//         console.log('Last Activity Time:',lastActivityTime);
//         return deleteLastPost();

//     }).then(()=>{
        
//         console.log('Posts after deletion:',posts);
//     })
//     .catch((err)=>console.log(err))
// }
// const newPost={title:'New Post'};
// userUpdateAPost(newPost);

   



