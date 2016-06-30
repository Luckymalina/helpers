//Обрезка длинных названий 
function truncate(str, maxlength){
    if (str.length > maxlength){
        return str.slice(0, maxlength-3) + '...';
    }
    return str;
}
