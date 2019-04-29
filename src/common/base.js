
//openApi转换筛选参数
export const transformFilters = function (param) {
    var para='';
    var index = 1;
    for(var k in param){
        var paramValue = param[k];
        if(typeof (paramValue) == 'object' && Object.prototype.toString.call(paramValue) == '[object Array]' && paramValue.length > 0){
            para +="&filters."+index+".name="+k;
            for(var i = 0;i < paramValue.length;i++){
                para +="&filters."+index+".values."+(i + 1)+"="+paramValue[i];
            }
        }
        else if(typeof (paramValue) == 'string'){
            para +="&filters."+index+".name="+k+"&filters."+index+".values.1="+paramValue;
        }
        index ++;
    }
    return para;
};