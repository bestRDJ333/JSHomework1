function checkIEIDv2(gender){
    
    let randgender; //判斷使用者輸入為男性,女性 或 預設隨機
    


    

    if (gender == '女性'){
        randgender = 2;
        
    }else if(gender == '男性'){
        randgender = 1; 
    }else{
        randgender = parseInt((Math.random()*2)+1);
    }
    
    return ;
    
}
































////////////////////////////////////////////////////////////////////////////////////////




function checkIEIDv3(area){
    
    let randarea = false;  //英文字母 對應之地區的樹值;使用者輸入地區 對應之樹值
    //計算n1 ,n2 用   
    let English;  //輸出的 第一個英文字母
    //輸出用
    let letter = 'ABCDEFGHJKLMNPQRSTUVWXYZIO'
    let nowNumber;

    if (area != '隨機'){
        
        switch(area){
        case '臺北市':
            randarea = 10;
            break;
        case '臺中市':
            randarea = 11;
            break;
        case '基隆市':
            randarea = 12;
        
            break;
        case '臺南市':
            randarea = 13;
          
            break;
        case '高雄市':
            randarea = 14;
       
            break;
        case '新北市':
            randarea = 15;
       
            break;
        case '宜蘭縣':
            randarea = 16;

            break;
        case '桃園市':
            randarea = 17;
 
            break;
        case '新竹縣':
            randarea = 18;
           
            break;
        case '苗栗縣':
            randarea = 19;
          
            break;
        case '臺中縣':
            randarea = 20;
            break;
        case '南投縣':
            randarea = 21;
            break;
        case '彰化縣':
            randarea = 22;
            break;
        case '雲林縣':
            randarea = 23;
            break;
        case '嘉義縣':
            randarea = 24;
            break;
        case '臺南縣':
            randarea = 25;
            break;
        case '高雄縣':
            randarea = 26;
            break;
        case '屏東縣':
            randarea = 27;
            break;
        case '花蓮縣':
            randarea = 28;
            break;
        case '臺東縣':
            randarea = 29;
            break;
        case '澎湖縣':
            randarea = 30;
            break;
        case '陽明山管理局':
            randarea = 31;
            break;
        case '金門縣':
            randarea = 32;
            break;
        case '連江縣':
            randarea = 33;
            break;
        case '嘉義市':
            randarea = 34;
            break;
        case '新竹市':
            randarea = 35;
            break;
        }
        //有數值 break randarea改變
        //          如果輸入但 輸入錯誤 randarea=false
        
    }else {
        
        let rand = parseInt(Math.random()*26);
        English = letter.charAt(rand) //隨機亂數取 第一個英文字
    
        randarea = (rand + 10);//計算n1 ,n2 用    
        
    }


    if (randarea == false){
        let rand = parseInt(Math.random()*26);
        English = letter.charAt(rand) //隨機亂數取 第一個英文字
    
        randarea = (rand + 10);//計算n1 ,n2 用    
        
    }


   


     
    return randarea;
    
}
