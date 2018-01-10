function stringbuilder(){
    this.str = "You like";


stringbuilder.prototype.string = function(str){
    return this.str;
}

stringbuilder.prototype.put = function(arr){
    return this.str + arr;
}

stringbuilder.prototype.insert= function(){
    let strlen = this.str.length;
    let n = Math.floor(strlen / 3);

    if (strlen > n){
        return this.str + "ed";
    }
    else {
        throw new Error ("Impossible index");
    }
}

stringbuilder.prototype.isEmpty = function(){
    if(this.str == " "){
        throw new Error ('The string to be built is empty');
    }
}

stringbuilder.prototype.empty = function(){
    strlen = 0;
}

stringbuilder.prototype.build = function(){
    return this.str;
}
}
module.exports = stringbuilder;
