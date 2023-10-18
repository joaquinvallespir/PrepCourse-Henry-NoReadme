function continueStatement(num) 
{
   let contador = 0 ;
   let nuevoNum = num;
   let array = [];
   while(contador<10)
      {
         if(contador===5)
         {
            contador++;
            continue;
         }
         nuevoNum += 2;
         array.push(nuevoNum);
         contador++;
      }
   return array;
}
 console.log(continueStatement(50));