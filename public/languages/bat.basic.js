(()=>{var m=Object.create,s=Object.defineProperty,f=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,k=Object.getOwnPropertyNames,b=Object.getOwnPropertyDescriptor,i=e=>s(e,"__esModule",{value:!0}),l=(e,o)=>()=>(o||(o={exports:{}},e(o.exports,o)),o.exports),w=(e,o)=>{i(e);for(var t in o)s(e,t,{get:o[t],enumerable:!0})},n=(e,o,t)=>{if(i(e),o&&typeof o=="object"||typeof o=="function")for(let r of k(o))!u.call(e,r)&&r!=="default"&&s(e,r,{get:()=>o[r],enumerable:!(t=b(o,r))||t.enumerable});return e},a=e=>e&&e.__esModule?e:n(s(e!=null?m(f(e)):{},"default",{value:e,enumerable:!0}),e),c=l(x=>{n(x,a(require("monaco-editor-core")))}),d=l(v=>{w(v,{conf:()=>y,language:()=>h});var y={comments:{lineComment:"REM"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],surroundingPairs:[{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],folding:{markers:{start:new RegExp("^\\s*(::\\s*|REM\\s+)#region"),end:new RegExp("^\\s*(::\\s*|REM\\s+)#endregion")}}},h={defaultToken:"",ignoreCase:!0,tokenPostfix:".bat",brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"}],keywords:/call|defined|echo|errorlevel|exist|for|goto|if|pause|set|shift|start|title|not|pushd|popd/,symbols:/[=><!~?&|+\-*\/\^;\.,]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/^(\s*)(rem(?:\s.*|))$/,["","comment"]],[/(\@?)(@keywords)(?!\w)/,[{token:"keyword"},{token:"keyword.$2"}]],[/[ \t\r\n]+/,""],[/setlocal(?!\w)/,"keyword.tag-setlocal"],[/endlocal(?!\w)/,"keyword.tag-setlocal"],[/[a-zA-Z_]\w*/,""],[/:\w*/,"metatag"],[/%[^%]+%/,"variable"],[/%%[\w]+(?!\w)/,"variable"],[/[{}()\[\]]/,"@brackets"],[/@symbols/,"delimiter"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/"/,"string",'@string."'],[/'/,"string","@string.'"]],string:[[/[^\\"'%]+/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/%[\w ]+%/,"variable"],[/%%[\w]+(?!\w)/,"variable"],[/["']/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":"string"}}],[/$/,"string","@popall"]]}}}),g=a(c());function p(e){g.languages.register(e)}p({id:"bat",extensions:[".bat",".cmd"],aliases:["Batch","bat"],loader:function(){return Promise.resolve().then(()=>a(d()))}});})();