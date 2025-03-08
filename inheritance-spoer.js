// ইনহেরিতাঞ্চে

 class parent {
    grin_assets(){
        console.log("My grande father assets")
    }
    father(){
        console.log("My fathet assets")
    }
 }

 let onner2 = new parent()
 onner2.father()
 let onner = new parent();
 onner.grin_assets()

 class mystole {
    mystole1(){
        console.log("my stole and house")
    }
    mystole2(){
        console.log("this is a astole")
    }
 }
class me extends mystole{
     is_mystil(){
        super.mystole1();
        super.mystole2();
     }
}
let mystoleOll = new me();
mystoleOll.is_mystil();
