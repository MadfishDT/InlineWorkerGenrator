class StringSource {
    constructor(){

    }

    static getSourceString(srcfile: string) : string {
        
        return '';
    }

    static convIt(scriptCode: string, isSingleQ: boolean = true, variableName?: string, ): string {

        if(variableName) {
            if( variableName.replace(/\W/,'') != variableName || !variableName ) {
                console.log("variable should usgin Aa-Zz, 0~9, _");
                return ''; 
            }
        }
        let tempVal = scriptCode, tempNm = variableName;
        let fromAr = new Array(/\\/g,/'/g,/"/g,/\r\n/g,/[\r\n]/g,/\t/g,new RegExp('--'+'>','g'),new RegExp('<!'+'--','g'),/\//g), toAr = new Array('\\\\','\\\'','\\\"','\\n','\\n','\\t','--\'+\'>','<!\'+\'--','\\\/');
        for( var x = 0; x < fromAr.length; x++ ) {
            tempVal = tempVal.replace(fromAr[x],toAr[x]);
        }

        let quoteStyle = ( isSingleQ ? '\'' : '\"' );
        let resultTextCode = quoteStyle+tempVal+quoteStyle;
        if(variableName) {
            tempVal = 'var '+tempNm+' = '+resultTextCode+';';
        }
        return tempVal;
    }
}