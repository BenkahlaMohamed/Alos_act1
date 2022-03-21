{
    participants:[
    '{{repeat(100)}}',
      {

      id: '{{index()}}',
      nom: '{{firstName()}} ',
      prenom: ' {{surname()}}',
      niveau: '{{random(1500,1700,1800,3000)}}'
    }
   ]
   }