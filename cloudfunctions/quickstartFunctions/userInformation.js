const cloud = require("wx-server-sdk");

cloud.init({
    env:cloud.DYNAMIC_CURRENT_ENV,
});

const db = cloud.database();

module.exports = async (event) => {
    let u = event.data;
    let wxContext = cloud.getWXContext();
    let openID = wxContext.openID;

    await db.collection("test-group").add({
        data:{
            leader:u.nickname,
            region:u.region,
            code:u.code,
            age:u.age,
            info:u.info,
            height:u.height,
            weight:u.weight,
            member:1,
            openID,
        },
    });
    await db.collection("test-form").add({
        data:{
            nickname:u.nickname,
            gender:u.gender === "nv",
            region:u.region,
            code:u.code,
            age:u.age,
            info:u.info,
            height:u.height,
            weight:u.weight,
            isLeader:true,
            openID,
        },
    });
    return{
        success:true,
    };
};