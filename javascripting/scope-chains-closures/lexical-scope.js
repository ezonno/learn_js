function foo(){
   var bar;
   quux = 456;

   function zip() {
       bar = true;
       var quux = 345;
   }

   return zip;
}
