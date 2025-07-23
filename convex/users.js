import { mutation } from "./_generated/server";

export const CreateUser=mutation({
    args:{
        name:v.string(),
        email:v.string()
    },
    handler:async(convexToJson,args)=>{
        //If user already exists
        const userData=await convexToJson.db.query('users')
        .filter(q=>q.eq(q.field('email'),args.email))
        .collect();

        //If not Then add user
        if(userData?.length==0)
        {
            const data={
                name:args.name,
                email:args.email,
                credits:50000
            }
            const result=await convexToJson.db.insert('users',{
                ...data
            });
            return data;
        }
        return userData[0]
    }
})