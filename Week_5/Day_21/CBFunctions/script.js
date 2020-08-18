

setTimeout(function() {
   document.getElementById('counter').innerText="10 !";

    setTimeout(function() {
        
        document.getElementById('counter').innerText="9 !";
        
        setTimeout(function() {
            
            document.getElementById('counter').innerText="8 !";
            
            setTimeout(function() {
                
             document.getElementById('counter').innerText="7 !";
             
                setTimeout(function() {
                    
                    document.getElementById('counter').innerText="6 !";

                    setTimeout(function() {
                        
                        document.getElementById('counter').innerText="5 !";
                            
                        setTimeout(function() {
                            
                            document.getElementById('counter').innerText="4 !";

                            setTimeout(function() {
                                
                                document.getElementById('counter').innerText="3 !";

                                setTimeout(function() {
                                    
                                    document.getElementById('counter').innerText="2 !"
           
                                    setTimeout(function() {
                                        
                                            //document.getElementById('counter').innerText="1 !";
                                            document.getElementById('counter').style.display='none';
                                            document.getElementById('message').innerText="Happy Birthday !";
                                                                                         
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
            