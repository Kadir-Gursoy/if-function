/**adı ve tckn
 * adı boş geçmez
 * tckn 11 karekterden oluşacak
 */


let names = prompt("İsminizi Giriniz");

let tckn = prompt("T.C. giriniz");

check(names, tckn);

function check (name, tckn) {

    
    if (names == "")
    
    console.log("lütfen isminizi giriniz");
    
}
    
    if(tckn.length != 11 ){
        console.log("lütfen tkcn giriniz");
        



    }   
    
    console.log("isminiz ve tckniz problemsiz girildi");
 
